export function extractGroundingSources(groundingMetadata) {
  const chunks = Array.isArray(groundingMetadata?.groundingChunks)
    ? groundingMetadata.groundingChunks
    : [];

  const seen = new Set();
  const sources = [];

  for (const chunk of chunks) {
    const uri = chunk?.web?.uri;
    if (typeof uri !== "string" || !/^https?:\/\//i.test(uri)) {
      continue;
    }
    if (seen.has(uri)) {
      continue;
    }
    seen.add(uri);
    const title =
      typeof chunk?.web?.title === "string" && chunk.web.title.trim()
        ? chunk.web.title.trim()
        : uri;
    sources.push({ title, uri });
  }

  const queries = Array.isArray(groundingMetadata?.webSearchQueries)
    ? groundingMetadata.webSearchQueries.filter(
        (q) => typeof q === "string" && q.trim().length > 0
      )
    : [];

  return { sources, queries };
}
