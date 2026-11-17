import React, { useEffect, useRef, useState } from "react";
import { base64PcmToFloat32, float32ToInt16Base64 } from "../utils/audio";

const VOICE_OPTIONS = [
  { id: "Kore", label: "Kore (Warm & steady)" },
  { id: "Zephyr", label: "Zephyr (Bright & clear)" },
  { id: "Puck", label: "Puck (Conversational)" },
  { id: "Charon", label: "Charon (Calm & deep)" },
  { id: "Fenrir", label: "Fenrir (Grounded)" },
];

export default function VoiceCompanion({ onInteract }) {
  const [status, setStatus] = useState("idle"); // idle | connecting | live | error
  const [voice, setVoice] = useState("Kore");
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState("");
  const [textInput, setTextInput] = useState("");
  const [transcripts, setTranscripts] = useState([]);

  const wsRef = useRef(null);
  const isMutedRef = useRef(false);
  const inputAudioCtxRef = useRef(null);
  const outputAudioCtxRef = useRef(null);
  const streamRef = useRef(null);
  const processorRef = useRef(null);
  const sourceNodeRef = useRef(null);
  const nextStartTimeRef = useRef(0);
  const activeSourcesRef = useRef([]);

  const stopPlaybackQueue = () => {
    for (const src of activeSourcesRef.current) {
      try {
        src.stop();
      } catch {
        // Ignore already stopped sources
      }
    }
    activeSourcesRef.current = [];
    if (outputAudioCtxRef.current) {
      nextStartTimeRef.current = outputAudioCtxRef.current.currentTime;
    } else {
      nextStartTimeRef.current = 0;
    }
    setIsSpeaking(false);
  };

  const cleanupSession = () => {
    stopPlaybackQueue();

    if (processorRef.current) {
      try {
        processorRef.current.disconnect();
      } catch {
        // Ignore disconnect errors
      }
      processorRef.current.onaudioprocess = null;
      processorRef.current = null;
    }
    if (sourceNodeRef.current) {
      try {
        sourceNodeRef.current.disconnect();
      } catch {
        // Ignore disconnect errors
      }
      sourceNodeRef.current = null;
    }
    if (streamRef.current) {
      for (const track of streamRef.current.getTracks()) {
        track.stop();
      }
      streamRef.current = null;
    }
    if (inputAudioCtxRef.current) {
      inputAudioCtxRef.current.close().catch(() => {});
      inputAudioCtxRef.current = null;
    }
    if (outputAudioCtxRef.current) {
      outputAudioCtxRef.current.close().catch(() => {});
      outputAudioCtxRef.current = null;
    }
    if (wsRef.current) {
      try {
        wsRef.current.close();
      } catch {
        // Ignore WebSocket close errors
      }
      wsRef.current = null;
    }
    setIsSpeaking(false);
  };

  useEffect(() => {
    return () => {
      cleanupSession();
    };
  }, []);

  const appendTranscript = (role, text) => {
    const clean = String(text || "").trim();
    if (!clean) return;
    setTranscripts((prev) => {
      const last = prev[prev.length - 1];
      if (last && last.role === role) {
        const updated = [...prev];
        updated[updated.length - 1] = {
          ...last,
          text: `${last.text} ${clean}`.trim(),
        };
        return updated;
      }
      return [...prev, { id: `${Date.now()}-${prev.length}`, role, text: clean }];
    });
  };

  const playPcmChunk = (base64Audio) => {
    const ctx = outputAudioCtxRef.current;
    if (!ctx) return;
    const float32 = base64PcmToFloat32(base64Audio);
    if (float32.length === 0) return;

    const buffer = ctx.createBuffer(1, float32.length, 24000);
    buffer.getChannelData(0).set(float32);

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);

    const now = ctx.currentTime;
    const startAt = Math.max(now, nextStartTimeRef.current);
    nextStartTimeRef.current = startAt + buffer.duration;

    activeSourcesRef.current.push(source);
    setIsSpeaking(true);

    source.onended = () => {
      activeSourcesRef.current = activeSourcesRef.current.filter((s) => s !== source);
      if (activeSourcesRef.current.length === 0) {
        setIsSpeaking(false);
      }
    };

    source.start(startAt);
  };

  const startSession = async () => {
    if (status === "connecting" || status === "live") return;
    if (onInteract) onInteract();

    setError("");
    setStatus("connecting");
    setIsMuted(false);
    isMutedRef.current = false;

    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error(
          "Microphone access is not supported in this browser environment."
        );
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const inputCtx = new AudioCtx({ sampleRate: 16000 });
      const outputCtx = new AudioCtx({ sampleRate: 24000 });
      if (inputCtx.state === "suspended") await inputCtx.resume();
      if (outputCtx.state === "suspended") await outputCtx.resume();

      inputAudioCtxRef.current = inputCtx;
      outputAudioCtxRef.current = outputCtx;
      nextStartTimeRef.current = outputCtx.currentTime;

      const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
      const ws = new WebSocket(
        `${protocol}//${window.location.host}/api/live?voice=${encodeURIComponent(voice)}`
      );
      wsRef.current = ws;

      ws.onopen = () => {
        const source = inputCtx.createMediaStreamSource(stream);
        const processor = inputCtx.createScriptProcessor(4096, 1, 1);
        sourceNodeRef.current = source;
        processorRef.current = processor;

        processor.onaudioprocess = (event) => {
          if (isMutedRef.current) return;
          if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;
          const samples = event.inputBuffer.getChannelData(0);
          const base64 = float32ToInt16Base64(samples);
          if (base64) {
            wsRef.current.send(JSON.stringify({ audio: base64 }));
          }
        };

        source.connect(processor);
        processor.connect(inputCtx.destination);
      };

      ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          if (msg.ready) {
            setStatus("live");
          }
          if (msg.error) {
            setError(msg.error);
            setStatus("error");
            cleanupSession();
            return;
          }
          if (msg.inputTranscript) {
            appendTranscript("user", msg.inputTranscript);
          }
          if (msg.outputTranscript) {
            appendTranscript("assistant", msg.outputTranscript);
          }
          if (msg.audio) {
            playPcmChunk(msg.audio);
          }
          if (msg.interrupted) {
            stopPlaybackQueue();
          }
        } catch {
          // Ignore malformed frame
        }
      };

      ws.onerror = () => {
        setError("Voice connection encountered an error. Please try again.");
        setStatus("error");
        cleanupSession();
      };

      ws.onclose = () => {
        setStatus((prev) => (prev === "error" ? "error" : "idle"));
        cleanupSession();
      };
    } catch (err) {
      let message = "Could not start the voice session. Check microphone permissions.";
      if (err instanceof Error) {
        if (err.name === "NotFoundError" || /device not found/i.test(err.message)) {
          message =
            "No microphone was found on this device. Connect a microphone or switch to text search above.";
        } else if (err.name === "NotAllowedError" || err.name === "PermissionDeniedError") {
          message =
            "Microphone access was blocked. Please allow microphone permissions in your browser and try again.";
        } else if (err.message) {
          message = err.message;
        }
      }
      setError(message);
      setStatus("error");
      cleanupSession();
    }
  };

  const endSession = () => {
    cleanupSession();
    setStatus("idle");
  };

  const toggleMute = () => {
    const next = !isMutedRef.current;
    isMutedRef.current = next;
    setIsMuted(next);
  };

  const sendTextToLive = (e) => {
    e.preventDefault();
    const trimmed = textInput.trim();
    if (!trimmed || !wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
      return;
    }
    if (onInteract) onInteract();
    appendTranscript("user", trimmed);
    wsRef.current.send(JSON.stringify({ text: trimmed }));
    setTextInput("");
  };

  const statusLabel =
    status === "connecting"
      ? "Connecting..."
      : status === "live"
      ? isSpeaking
        ? "Speaking"
        : isMuted
        ? "Muted"
        : "Listening"
      : status === "error"
      ? "Connection issue"
      : "Ready";

  return (
    <section
      className="ai-panel voice-panel"
      aria-label="Real-time voice conversation companion"
      data-testid="voice-companion"
    >
      <div className="ai-panel-head">
        <div>
          <p className="eyebrow">GEMINI LIVE API · REAL-TIME VOICE</p>
          <h2>Talk through PCOS questions</h2>
          <p className="ai-panel-lead">
            Have a natural, low-latency spoken conversation about body literacy, PCOS
            myths, or preparing questions for a clinician.
          </p>
        </div>
        <span
          className={`voice-status ${status}${isSpeaking ? " speaking" : ""}`}
          data-testid="voice-status"
        >
          {statusLabel}
        </span>
      </div>

      <div className="voice-controls">
        <label className="voice-select-wrap">
          <span>Assistant voice</span>
          <select
            value={voice}
            onChange={(e) => setVoice(e.target.value)}
            disabled={status === "connecting" || status === "live"}
          >
            {VOICE_OPTIONS.map((v) => (
              <option key={v.id} value={v.id}>
                {v.label}
              </option>
            ))}
          </select>
        </label>

        <div className="voice-btn-group">
          {status !== "live" && status !== "connecting" ? (
            <button
              type="button"
              className="btn primary"
              onClick={startSession}
            >
              Start voice conversation
            </button>
          ) : (
            <>
              <button
                type="button"
                className="btn secondary"
                onClick={toggleMute}
                disabled={status !== "live"}
              >
                {isMuted ? "Unmute mic" : "Mute mic"}
              </button>
              <button
                type="button"
                className="btn primary"
                onClick={endSession}
              >
                End session
              </button>
            </>
          )}
        </div>
      </div>

      {error && (
        <div className="ai-error" role="alert">
          {error}
        </div>
      )}

      {status === "live" && (
        <form className="ai-search-form voice-text-form" onSubmit={sendTextToLive}>
          <label htmlFor="voice-text-prompt" className="sr-only">
            Type a question during the voice session
          </label>
          <input
            id="voice-text-prompt"
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Prefer typing? Send a prompt to hear a spoken reply..."
          />
          <button type="submit" className="btn secondary">
            Send
          </button>
        </form>
      )}

      {transcripts.length > 0 && (
        <div className="voice-transcripts" aria-live="polite">
          <h3>Live transcript</h3>
          <ul>
            {transcripts.map((item) => (
              <li key={item.id} className={`transcript-item ${item.role}`}>
                <strong>{item.role === "user" ? "You" : "PCOS Unlocked Voice"}</strong>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
