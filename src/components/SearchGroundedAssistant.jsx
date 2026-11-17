import React, { useState } from "react";

const SAMPLE_PROMPTS = [
  "What do recent international PCOS guidelines recommend for diagnosis?",
  "Does inositol or spearmint tea have clinical evidence for PCOS?",
  "What questions and tests are commonly discussed at a first PCOS visit?",
];

function renderAnswerParagraphs(text) {
  return String(text || "")
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);
}

export default function SearchGroundedAssistant({ ageRange = "", onInteract }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const runSearch = async (promptText) => {
    const trimmed = promptText.trim();
    if (!trimmed) {
      setError("Please enter a PCOS question or claim to look up.");
      return;
    }

    if (onInteract) onInteract();
    setQuery(trimmed);
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/pcos-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: trimmed, ageRange }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Unable to fetch search-grounded guidance.");
      }
      setResult(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while searching. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runSearch(query);
  };

  const paragraphs = result?.answer ? renderAnswerParagraphs(result.answer) : [];

  return (
    <section
      className="ai-panel"
      aria-label="Search-grounded PCOS research assistant"
      data-testid="search-grounded-assistant"
    >
      <div className="ai-panel-head">
        <div>
          <p className="eyebrow">GOOGLE SEARCH GROUNDED · EVIDENCE LOOKUP</p>
          <h2>Ask with Google Search data</h2>
          <p className="ai-panel-lead">
            Ask a question or verify a PCOS claim using live web search grounding for
            up-to-date, cited educational context.
          </p>
        </div>
      </div>

      <form className="ai-search-form" onSubmit={handleSubmit}>
        <label htmlFor="pcos-search-input" className="sr-only">
          Ask a PCOS question or claim to verify
        </label>
        <input
          id="pcos-search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., What are the Rotterdam criteria for PCOS?"
          maxLength={600}
          disabled={loading}
        />
        <button type="submit" className="btn primary" disabled={loading}>
          {loading ? "Searching..." : "Search & explain"}
        </button>
      </form>

      <div className="ai-chips" aria-label="Example PCOS questions">
        {SAMPLE_PROMPTS.map((sample) => (
          <button
            key={sample}
            type="button"
            className="myth-cat-btn"
            disabled={loading}
            onClick={() => runSearch(sample)}
          >
            {sample}
          </button>
        ))}
      </div>

      {error && (
        <div className="ai-error" role="alert">
          {error}
        </div>
      )}

      {loading && (
        <div className="ai-loading" aria-live="polite">
          Looking up current clinical and educational sources...
        </div>
      )}

      {!loading && result && (
        <div className="ai-result" data-testid="search-grounded-result">
          <div className="ai-answer">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {Array.isArray(result.sources) && result.sources.length > 0 && (
            <div className="ai-sources">
              <h3>Grounded web sources</h3>
              <ul>
                {result.sources.map((src) => (
                  <li key={src.uri}>
                    <a href={src.uri} target="_blank" rel="noreferrer">
                      {src.title} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {Array.isArray(result.searchQueries) && result.searchQueries.length > 0 && (
            <p className="ai-queries">
              Search queries used: {result.searchQueries.join(" · ")}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
