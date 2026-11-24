import React, { useEffect, useRef } from "react";

export const LANDING_AUTO_REDIRECT_MS = 2600;

export default function LandingPage({
  onAutoEnter,
  onEnter,
  onNavigate,
  theme = "light",
  onToggleTheme,
  autoRedirectMs = LANDING_AUTO_REDIRECT_MS,
}) {
  const cancelledRef = useRef(false);
  const onAutoEnterRef = useRef(onAutoEnter);
  onAutoEnterRef.current = onAutoEnter;

  useEffect(() => {
    cancelledRef.current = false;
    const timer = window.setTimeout(() => {
      if (!cancelledRef.current && onAutoEnterRef.current) {
        onAutoEnterRef.current();
      }
    }, autoRedirectMs);

    return () => {
      cancelledRef.current = true;
      window.clearTimeout(timer);
    };
  }, [autoRedirectMs]);

  const handleManualEnter = () => {
    cancelledRef.current = true;
    if (onEnter) onEnter();
  };

  const go = (to) => (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    cancelledRef.current = true;
    if (onNavigate) onNavigate(to);
  };

  return (
    <div className="landing-shell" data-testid="landing-page">
      <header className="landing-header">
        <a href="/home" className="brand" onClick={go("/home")}>
          <span className="brand-mark">P</span>
          <span>
            PCOS <b>Unlocked</b>
          </span>
        </a>
        <div className="header-actions">
          {onToggleTheme && (
            <button
              type="button"
              className="theme-toggle"
              data-testid="theme-toggle"
              onClick={onToggleTheme}
              aria-pressed={theme === "dark"}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              <span className="theme-toggle-icon" aria-hidden="true">
                {theme === "dark" ? "☀" : "☾"}
              </span>
              <span className="theme-toggle-text">
                {theme === "dark" ? "Light" : "Dark"}
              </span>
            </button>
          )}
          <a href="/home" className="landing-skip" onClick={go("/home")}>
            Skip intro →
          </a>
        </div>
      </header>

      <main className="landing-main">
        <div className="landing-card">
          <p className="eyebrow">EDUCATIONAL BODY-LITERACY &amp; PCOS AWARENESS WEBSITE</p>

          <h1 className="landing-title">
            PCOS <em>UNLOCKED</em>
          </h1>

          <p className="landing-one-line" data-testid="landing-one-line">
            Visual PCOS guides, lifestyle management, myth-busting, daily symptom tracking, and ally support.
          </p>

          <div className="landing-progress-wrap" aria-live="polite">
            <div className="landing-progress-track" aria-hidden="true">
              <div
                className="landing-progress-fill"
                style={{ animationDuration: `${autoRedirectMs}ms` }}
              />
            </div>
            <p className="landing-auto-note" role="status">
              Opening main page automatically…
            </p>
          </div>

          <div className="landing-actions">
            <button
              type="button"
              className="btn primary landing-cta"
              onClick={handleManualEnter}
            >
              Enter Website <span>→</span>
            </button>
          </div>

          <nav className="landing-quick-links" aria-label="Direct section links">
            <a href="/home" onClick={go("/home")}>
              Main Overview
            </a>
            <span aria-hidden="true">·</span>
            <a href="/pcos/management" onClick={go("/pcos/management")}>
              Managing PCOS
            </a>
            <span aria-hidden="true">·</span>
            <a href="/myths-and-facts" onClick={go("/myths-and-facts")}>
              Myths &amp; Facts
            </a>
            <span aria-hidden="true">·</span>
            <a href="/tracker" onClick={go("/tracker")}>
              Symptom Tracker
            </a>
            <span aria-hidden="true">·</span>
            <a href="/pathways/allies" onClick={go("/pathways/allies")}>
              Male Ally Guide
            </a>
          </nav>
        </div>
      </main>

      <footer className="landing-footer">
        <p>Educational resource · No judgement · No diagnosis · Built for women &amp; supportive allies</p>
      </footer>
    </div>
  );
}
