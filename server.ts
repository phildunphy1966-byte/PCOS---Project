import { createServer } from "node:http";
import fs from "node:fs";
import path from "node:path";
import express from "express";
import { WebSocketServer, WebSocket } from "ws";
import { GoogleGenAI, Modality } from "@google/genai";
import type { LiveServerMessage } from "@google/genai";
import { extractGroundingSources } from "./src/utils/grounding.js";

const PORT = Number(process.env.PORT || 3000);
const HOST = "0.0.0.0";
const ALLOWED_VOICES = new Set(["Kore", "Zephyr", "Puck", "Charon", "Fenrir"]);

function getAiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

function formatGeminiError(err: unknown) {
  const message =
    err instanceof Error ? err.message : "An unexpected error occurred with Gemini.";
  if (message.includes("API_KEY_INVALID") || message.includes("PERMISSION_DENIED")) {
    return {
      status: 403,
      message:
        "Gemini API key is missing or invalid. Please check your key in the Settings > Secrets panel.",
    };
  }
  if (message.includes("RESOURCE_EXHAUSTED")) {
    return {
      status: 429,
      message:
        "API quota exceeded. Please try again shortly or check your billing quota in Settings > Secrets.",
    };
  }
  return { status: 500, message };
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: "1mb" }));

  app.get("/api/health", (_req, res) => {
    res.json({ ok: true });
  });

  app.post("/api/pcos-search", async (req, res) => {
    const query = typeof req.body?.query === "string" ? req.body.query.trim() : "";
    const ageRange =
      typeof req.body?.ageRange === "string" ? req.body.ageRange.trim() : "";

    if (!query) {
      res.status(400).json({ error: "Please enter a question or claim to search." });
      return;
    }
    if (query.length > 600) {
      res.status(400).json({ error: "Query is too long. Please keep it under 600 characters." });
      return;
    }

    const ai = getAiClient();
    if (!ai) {
      res.status(503).json({
        error:
          "GEMINI_API_KEY is not configured. Please check the Settings > Secrets panel.",
      });
      return;
    }

    const ageContext = ageRange
      ? `The reader selected an optional age preference of "${ageRange}". Tailor reading tone appropriately without making assumptions.`
      : "";

    try {
      const response = await ai.models.generateContent({
        model: "gemini-4-hydrogen",
        contents: query,
        config: {
          systemInstruction:
            "You are a compassionate, evidence-informed PCOS and body-literacy educator for PCOS Unlocked. " +
            "Use Google Search results to provide clear, up-to-date, accurate educational information. " +
            "Never diagnose the user or replace advice from a qualified healthcare professional. " +
            "Keep explanations accessible, structured in short readable paragraphs or bullet points, and explicitly note when clinical evaluation is needed. " +
            ageContext,
          tools: [{ googleSearch: {} }],
        },
      });

      const answer = response.text?.trim() || "";
      const groundingMetadata = response.candidates?.[0]?.groundingMetadata;
      const { sources, queries } = extractGroundingSources(groundingMetadata);

      res.json({
        answer,
        sources,
        searchQueries: queries,
      });
    } catch (err) {
      const formatted = formatGeminiError(err);
      res.status(formatted.status).json({ error: formatted.message });
    }
  });

  const httpServer = createServer(app);
  const wss = new WebSocketServer({ noServer: true });

  httpServer.on("upgrade", (req, socket, head) => {
    const parsedUrl = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
    if (parsedUrl.pathname !== "/api/live") {
      return;
    }
    wss.handleUpgrade(req, socket, head, (ws) => {
      wss.emit("connection", ws, req);
    });
  });

  wss.on("connection", async (clientWs, req) => {
    const ai = getAiClient();
    if (!ai) {
      clientWs.send(
        JSON.stringify({
          error:
            "GEMINI_API_KEY is not configured. Please check the Settings > Secrets panel.",
        })
      );
      clientWs.close();
      return;
    }

    const parsedUrl = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
    const requestedVoice = parsedUrl.searchParams.get("voice") || "Kore";
    const voiceName = ALLOWED_VOICES.has(requestedVoice) ? requestedVoice : "Kore";

    let session: Awaited<ReturnType<typeof ai.live.connect>> | null = null;
    let isClosed = false;

    const safeSend = (payload: Record<string, unknown>) => {
      if (clientWs.readyState === WebSocket.OPEN) {
        clientWs.send(JSON.stringify(payload));
      }
    };

    try {
      session = await ai.live.connect({
        model: "gemini-3.8-live",
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName },
            },
          },
          inputAudioTranscription: {},
          outputAudioTranscription: {},
          systemInstruction:
            "You are a warm, calm, evidence-informed PCOS and reproductive health educator for PCOS Unlocked. " +
            "Have natural, supportive spoken conversations answering questions about hormones, menstrual cycles, PCOS features, myths vs. facts, and preparing for healthcare appointments. " +
            "Speak concisely in plain language suitable for voice conversation. Never provide a medical diagnosis; gently remind users to consult a qualified clinician for personal medical care.",
        },
        callbacks: {
          onopen: () => {
            safeSend({ ready: true, voiceName });
          },
          onmessage: (message: LiveServerMessage) => {
            const content = message.serverContent;
            if (content?.inputTranscription?.text) {
              safeSend({ inputTranscript: content.inputTranscription.text });
            }
            if (content?.outputTranscription?.text) {
              safeSend({ outputTranscript: content.outputTranscription.text });
            }
            for (const part of content?.modelTurn?.parts ?? []) {
              if (part.inlineData?.data) {
                safeSend({ audio: part.inlineData.data });
              }
            }
            if (content?.interrupted) {
              safeSend({ interrupted: true });
            }
            if (content?.turnComplete) {
              safeSend({ turnComplete: true });
            }
          },
          onerror: (err: unknown) => {
            const formatted = formatGeminiError(err);
            safeSend({ error: formatted.message });
          },
          onclose: () => {
            if (!isClosed && clientWs.readyState === WebSocket.OPEN) {
              clientWs.close();
            }
          },
        },
      });
    } catch (err) {
      const formatted = formatGeminiError(err);
      safeSend({ error: formatted.message });
      clientWs.close();
      return;
    }

    clientWs.on("message", (raw) => {
      if (!session || isClosed) return;
      try {
        const msg = JSON.parse(raw.toString());
        if (typeof msg.audio === "string" && msg.audio.length > 0) {
          session.sendRealtimeInput({
            audio: { data: msg.audio, mimeType: "audio/pcm;rate=16000" },
          });
        } else if (typeof msg.text === "string" && msg.text.trim().length > 0) {
          session.sendRealtimeInput({ text: msg.text.trim() });
        }
      } catch {
        safeSend({ error: "Invalid message format sent to live voice session." });
      }
    });

    clientWs.on("close", () => {
      isClosed = true;
      if (session) {
        try {
          session.close();
        } catch {
          // Ignore close errors
        }
      }
    });
  });

  if (process.env.NODE_ENV === "production") {
    const distDir = path.resolve(process.cwd(), "dist");
    app.use(express.static(distDir));
    app.get("/{*splat}", (_req, res) => {
      res.sendFile(path.join(distDir, "index.html"));
    });
  } else {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
    app.get("/{*splat}", async (req, res, next) => {
      try {
        const templatePath = path.resolve(process.cwd(), "index.html");
        const rawHtml = fs.readFileSync(templatePath, "utf-8");
        const html = await vite.transformIndexHtml(req.originalUrl, rawHtml);
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (err) {
        next(err);
      }
    });
  }

  httpServer.listen(PORT, HOST, () => {
    console.log(`PCOS Unlocked server listening on http://${HOST}:${PORT}`);
  });
}

startServer();
