import React, { useState } from "react";
import {
  EXPERT_ADVICE_SPECIALISTS,
  filterSpecialistProfiles,
  getSpecialistById,
  SPECIALIST_DIRECTORY_FILTERS,
  SUPPORT_NAVIGATION_CARDS,
  URGENT_CHECKIN_SIGNS,
} from "../utils/supportGuide";

export default function SupportSection({ onInteract, onNavigate }) {
  const [activeSpecialistId, setActiveSpecialistId] = useState(
    EXPERT_ADVICE_SPECIALISTS[0].id
  );
  const [directoryFilter, setDirectoryFilter] = useState("all");
  const [directoryQuery, setDirectoryQuery] = useState("");
  const activeSpecialist = getSpecialistById(activeSpecialistId);
  const visibleProfiles = filterSpecialistProfiles(
    directoryFilter,
    directoryQuery
  );

  const handleSelectSpecialist = (id) => {
    setActiveSpecialistId(id);
    if (onInteract) onInteract();
  };

  const handleSelectDirectoryFilter = (filterId) => {
    setDirectoryFilter(filterId);
    if (onInteract) onInteract();
  };

  const go = (to) => {
    if (onNavigate) {
      onNavigate(to);
    }
  };

  return (
    <div className="support-hub">
      <div className="support-nav-grid" aria-label="Support tools and pathways">
        {SUPPORT_NAVIGATION_CARDS.map((card, idx) => (
          <a
            key={card.to}
            href={card.to}
            className="topic-card support-nav-card"
            onClick={(e) => {
              if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
              e.preventDefault();
              go(card.to);
            }}
          >
            <span className="card-no">0{idx + 1} · {card.eyebrow}</span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <span className="arrow">↗</span>
          </a>
        ))}
      </div>

      <section
        className="expert-advice-card"
        data-testid="expert-advice-section"
        aria-labelledby="expert-advice-heading"
      >
        <div className="expert-advice-head">
          <div>
            <p className="eyebrow">EXPERT ADVICE · MULTIDISCIPLINARY CARE</p>
            <h2 id="expert-advice-heading">
              Who to consult &amp; what PCOS specialists emphasize
            </h2>
            <p className="expert-advice-sub">
              PCOS touches hormones, metabolism, skin, nutrition, and emotional wellbeing. Select a specialist below to see what evidence-informed clinicians focus on—and the exact questions worth bringing to an appointment.
            </p>
          </div>
        </div>

        <div
          className="expert-tabs"
          role="tablist"
          aria-label="PCOS healthcare specialists"
        >
          {EXPERT_ADVICE_SPECIALISTS.map((spec) => {
            const selected = activeSpecialist.id === spec.id;
            return (
              <button
                key={spec.id}
                type="button"
                role="tab"
                aria-selected={selected}
                className={selected ? "progress-tab active" : "progress-tab"}
                onClick={() => handleSelectSpecialist(spec.id)}
              >
                {spec.shortLabel}
              </button>
            );
          })}
        </div>

        <div
          className="expert-panel"
          role="tabpanel"
          aria-label={activeSpecialist.title}
          data-testid={`expert-panel-${activeSpecialist.id}`}
        >
          <div className="expert-panel-header">
            <div>
              <p className="eyebrow">SPECIALIST PERSPECTIVE</p>
              <h3>{activeSpecialist.title}</h3>
              <p className="expert-focus">{activeSpecialist.focus}</p>
            </div>
            <div className="expert-when-box">
              <strong>When to book a visit</strong>
              <p>{activeSpecialist.whenToConsult}</p>
            </div>
          </div>

          <div className="expert-columns">
            <div className="expert-box">
              <h4>Key clinical advice</h4>
              <ul className="pcos-steps-list">
                {activeSpecialist.clinicalAdvice.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>

            <div className="expert-box questions">
              <h4>Questions to ask at your visit</h4>
              <ul className="pcos-steps-list">
                {activeSpecialist.questionsToAsk.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pcos-audience-card male-ally expert-ally-note">
            <p className="pcos-audience-kicker">How male allies &amp; family can support</p>
            <p className="pcos-audience-text">{activeSpecialist.allyTip}</p>
          </div>

          <div className="pcos-tabular-links">
            <a
              href="/support/appointment"
              className="btn primary"
              onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                e.preventDefault();
                go("/support/appointment");
              }}
            >
              Open Printable Appointment Checklist →
            </a>
            <a
              href="/tracker"
              className="btn secondary"
              onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                e.preventDefault();
                go("/tracker");
              }}
            >
              Review Weekly Symptom Log Before Visiting
            </a>
          </div>
        </div>

        <div className="expert-urgent-box">
          <div>
            <p className="eyebrow">DON&apos;T WAIT FOR A ROUTINE CHECK-UP</p>
            <h3>Signs that need prompt medical evaluation</h3>
            <p className="expert-urgent-note">
              While educational guides build body literacy, certain symptoms should be evaluated promptly by a qualified physician or clinic:
            </p>
          </div>
          <ul className="expert-urgent-list">
            {URGENT_CHECKIN_SIGNS.map((sign) => (
              <li key={sign}>{sign}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="specialist-directory-card"
        id="specialist-directory"
        data-testid="specialist-profiles-section"
        aria-labelledby="specialist-directory-heading"
      >
        <div className="expert-advice-head">
          <p className="eyebrow">NUTRITIONISTS &amp; SPECIALIST DIRECTORY · HOW TO REACH</p>
          <h2 id="specialist-directory-heading">
            Profiles of PCOS nutritionists &amp; specialist networks
          </h2>
          <p className="expert-advice-sub">
            Browse verified dietetic registries, public tele-gynecology portals, hormone societies, dermatology directories, and confidential 24/7 counseling lines focused on PCOS care.
          </p>
        </div>

        <div className="specialist-controls">
          <div
            className="myth-categories specialist-filter-row"
            role="group"
            aria-label="Filter specialists by discipline"
          >
            {SPECIALIST_DIRECTORY_FILTERS.map((filter) => {
              const active = directoryFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={active}
                  className={active ? "myth-cat-btn active" : "myth-cat-btn"}
                  onClick={() => handleSelectDirectoryFilter(filter.id)}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <label className="specialist-search">
            <span className="sr-only">
              Search nutritionists and specialists by expertise
            </span>
            <input
              type="search"
              value={directoryQuery}
              onChange={(e) => {
                setDirectoryQuery(e.target.value);
                if (onInteract) onInteract();
              }}
              placeholder="Search expertise (e.g. dietitian, insulin, 14416)"
            />
          </label>
        </div>

        {visibleProfiles.length === 0 ? (
          <div className="tracker-empty-note specialist-empty">
            <p>
              No specialist profiles match &ldquo;{directoryQuery}&rdquo; in this category.
            </p>
            <button
              type="button"
              className="btn secondary tracker-small-btn"
              onClick={() => {
                setDirectoryFilter("all");
                setDirectoryQuery("");
              }}
            >
              Show all specialists
            </button>
          </div>
        ) : (
          <div className="specialist-profiles-grid">
            {visibleProfiles.map((profile) => (
              <article
                key={profile.id}
                className="specialist-profile-card"
                data-testid={`specialist-profile-${profile.id}`}
              >
                <div className="specialist-profile-top">
                  <p className="specialist-meta">
                    {profile.roleLabel} · {profile.consultationMode}
                  </p>
                  <h3>{profile.title}</h3>
                  <p className="specialist-credential">{profile.credential}</p>
                </div>

                <p className="specialist-summary">{profile.summary}</p>

                <div className="specialist-expertise-block">
                  <h4>Areas of expertise</h4>
                  <ul className="pcos-steps-list">
                    {profile.expertise.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </ul>
                </div>

                <div className="specialist-reach-box">
                  <h4>How to reach</h4>
                  {profile.helpline && (
                    <p className="specialist-helpline">
                      <strong>Helpline:</strong> {profile.helpline}
                    </p>
                  )}
                  <p className="specialist-reach-note">{profile.reachNote}</p>
                  <a
                    href={profile.portalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn secondary tracker-small-btn specialist-portal-btn"
                  >
                    {profile.portalLabel} <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
