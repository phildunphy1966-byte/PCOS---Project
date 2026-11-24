import React, { useEffect, useMemo, useState } from "react";
import {
  countRevealedMaleMyths,
  filterMaleMyths,
  getMaleMythCategories,
  MALE_ALLY_MYTHS,
  MALE_ALLY_SECTIONS,
  MALE_SUPPORT_ROLES,
  MALE_UNDERSTANDING_CONCEPTS,
  MALE_UNDERSTANDING_TAKEAWAY,
} from "../utils/maleAlly";

function MalePerspectiveDiagram() {
  return (
    <svg
      viewBox="0 0 640 400"
      className="pcos-svg"
      role="img"
      aria-labelledby="ally-perspective-title ally-perspective-desc"
    >
      <title id="ally-perspective-title">
        Understanding PCOS from a male perspective: invisible hormone signals and everyday impact
      </title>
      <desc id="ally-perspective-desc">
        Diagram showing how brain LH and FSH signals, ovarian androgen balance, and insulin resistance interact inside the body to produce everyday visible experiences like irregular cycles, fatigue, cravings, skin changes, and emotional strain.
      </desc>
      <rect width="640" height="400" rx="22" fill="#FAF7F2" />

      <text
        x="320"
        y="36"
        textAnchor="middle"
        fontFamily="Manrope, Arial, sans-serif"
        fontWeight="800"
        fontSize="17.5"
        fill="#39243F"
      >
        Inside Biology vs. What You See Day-to-Day
      </text>
      <text
        x="320"
        y="56"
        textAnchor="middle"
        fontFamily="DM Sans, Arial, sans-serif"
        fontSize="11.5"
        fontWeight="700"
        letterSpacing="1.2"
        fill="#A15E67"
      >
        INVISIBLE HORMONE &amp; METABOLIC SIGNALS
      </text>

      {/* Top row: 3 biological drivers */}
      <rect x="24" y="70" width="180" height="106" rx="16" fill="#EAE3F0" stroke="#39243F" strokeWidth="2.2" />
      <text x="114" y="102" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="14.5" fill="#39243F">
        Brain Messengers
      </text>
      <text x="114" y="126" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
        LH &amp; FSH timing cues
      </text>
      <text x="114" y="144" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
        can pause ovulation
      </text>

      <path d="M 208 123 H 226 M 219 116 L 226 123 L 219 130" fill="none" stroke="#39243F" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="230" y="70" width="180" height="106" rx="16" fill="#FAE8E4" stroke="#C66E62" strokeWidth="2.2" />
      <text x="320" y="102" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="14.5" fill="#8C3329">
        Ovaries &amp; Androgens
      </text>
      <text x="320" y="126" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
        Follicles stall mid-way;
      </text>
      <text x="320" y="144" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
        androgen levels rise
      </text>

      <path d="M 432 123 H 414 M 421 116 L 414 123 L 421 130" fill="none" stroke="#8C3329" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="436" y="70" width="180" height="106" rx="16" fill="#EDF2EB" stroke="#7A9475" strokeWidth="2.2" />
      <text x="526" y="102" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="14.5" fill="#355238">
        Insulin Resistance
      </text>
      <text x="526" y="126" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
        Cells absorb fuel slowly,
      </text>
      <text x="526" y="144" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
        nudging ovarian signals
      </text>

      {/* Downward bridge arrows */}
      <path d="M 114 178 V 206 M 320 178 V 206 M 526 178 V 206" stroke="#39243F" strokeWidth="2.5" strokeLinecap="round" />
      <polygon points="114,210 108,200 120,200" fill="#39243F" />
      <polygon points="320,210 314,200 326,200" fill="#39243F" />
      <polygon points="526,210 520,200 532,200" fill="#39243F" />

      <text
        x="320"
        y="224"
        textAnchor="middle"
        fontFamily="DM Sans, Arial, sans-serif"
        fontSize="11.5"
        fontWeight="700"
        letterSpacing="1.2"
        fill="#39243F"
      >
        EVERYDAY EXPERIENCES SHE MAY NAVIGATE
      </text>

      {/* Middle row: visible daily reality */}
      <rect x="24" y="236" width="180" height="84" rx="14" fill="#FFFFFF" stroke="#D5CAD7" strokeWidth="1.8" />
      <text x="114" y="264" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="13.5" fill="#39243F">
        Unpredictable Cycles
      </text>
      <text x="114" y="286" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
        Delayed or missed periods,
      </text>
      <text x="114" y="302" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
        cramps &amp; heavy flow days
      </text>

      <rect x="230" y="236" width="180" height="84" rx="14" fill="#FFFFFF" stroke="#D5CAD7" strokeWidth="1.8" />
      <text x="320" y="264" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="13.5" fill="#8C3329">
        Energy &amp; Cravings
      </text>
      <text x="320" y="286" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
        Sudden afternoon fatigue
      </text>
      <text x="320" y="302" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
        &amp; hunger dips—not laziness
      </text>

      <rect x="436" y="236" width="180" height="84" rx="14" fill="#FFFFFF" stroke="#D5CAD7" strokeWidth="1.8" />
      <text x="526" y="264" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="13.5" fill="#355238">
        Skin, Hair &amp; Mood
      </text>
      <text x="526" y="286" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
        Acne, hair changes &amp; real
      </text>
      <text x="526" y="302" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
        hormone-linked stress
      </text>

      {/* Bottom takeaway */}
      <rect x="24" y="334" width="592" height="48" rx="14" fill="#39243F" />
      <text x="320" y="363" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="13.5" fill="#FAF7F2">
        Empathy + shared daily habits help far more than unsolicited advice
      </text>
    </svg>
  );
}

function SupportRoleIllustration({ roleId }) {
  if (roleId === "family") {
    return (
      <svg
        viewBox="0 0 600 320"
        className="pcos-svg"
        role="img"
        aria-labelledby="ally-family-title ally-family-desc"
      >
        <title id="ally-family-title">Family support illustration for brothers, fathers, and relatives</title>
        <desc id="ally-family-desc">
          Three household ally scenes: shared balanced family meals without singling someone out, driving or organizing doctor visits respectfully, and protecting boundaries against relative stigma.
        </desc>
        <rect width="600" height="320" rx="20" fill="#FAF7F2" />
        <text x="300" y="36" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="16.5" fill="#39243F">
          Family Allyship: Everyday Support at Home
        </text>

        {/* Card 1: Shared Plate */}
        <rect x="22" y="56" width="174" height="176" rx="16" fill="#EDF2EB" stroke="#7A9475" strokeWidth="2" />
        <circle cx="109" cy="116" r="32" fill="#FFFFFF" stroke="#355238" strokeWidth="2.5" />
        <path d="M 109 88 A 28 28 0 0 0 109 144 Z" fill="#A9BBA5" />
        <path d="M 109 116 L 109 88 A 28 28 0 0 1 137 116 Z" fill="#E98978" />
        <text x="109" y="172" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="13.5" fill="#355238">
          Shared Family Plates
        </text>
        <text x="109" y="193" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
          Cook balanced meals
        </text>
        <text x="109" y="210" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
          for the whole table
        </text>

        {/* Card 2: Clinic Support */}
        <rect x="213" y="56" width="174" height="176" rx="16" fill="#EAE3F0" stroke="#39243F" strokeWidth="2" />
        <rect x="75" y="0" width="0" height="0" />
        <rect x="266" y="88" width="68" height="54" rx="10" fill="#FFFFFF" stroke="#39243F" strokeWidth="2.2" />
        <path d="M 294 115 H 306 M 300 109 V 121" stroke="#C66E62" strokeWidth="3.5" strokeLinecap="round" />
        <text x="300" y="172" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="13.5" fill="#39243F">
          Normalise Visits
        </text>
        <text x="300" y="193" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
          Offer transport &amp; quiet
        </text>
        <text x="300" y="210" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
          respect for privacy
        </text>

        {/* Card 3: Shield against stigma */}
        <rect x="404" y="56" width="174" height="176" rx="16" fill="#FAE8E4" stroke="#C66E62" strokeWidth="2" />
        <path d="M 491 86 L 520 98 V 120 C 520 136 507 146 491 151 C 475 146 462 136 462 120 V 98 Z" fill="#FFFFFF" stroke="#8C3329" strokeWidth="2.4" />
        <path d="M 480 118 L 488 126 L 504 109" fill="none" stroke="#355238" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <text x="491" y="172" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="13.5" fill="#8C3329">
          Block Stigma
        </text>
        <text x="491" y="193" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
          Shut down weight or
        </text>
        <text x="491" y="210" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
          marriage gossip early
        </text>

        <rect x="22" y="248" width="556" height="50" rx="14" fill="#39243F" />
        <text x="300" y="278" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="13.5" fill="#FAF7F2">
          A calm, judgement-free home lowers daily stress for sisters &amp; daughters
        </text>
      </svg>
    );
  }

  if (roleId === "partner") {
    return (
      <svg
        viewBox="0 0 600 320"
        className="pcos-svg"
        role="img"
        aria-labelledby="ally-partner-title ally-partner-desc"
      >
        <title id="ally-partner-title">Partner support illustration for husbands and boyfriends</title>
        <desc id="ally-partner-desc">
          Three partner ally habits: listening first without rushing into unsolicited fixes, joining evening walks or healthy groceries together, and protecting rest on pain or fatigue days.
        </desc>
        <rect width="600" height="320" rx="20" fill="#FAF7F2" />
        <text x="300" y="36" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="16.5" fill="#39243F">
          Partner Support: Teammate Mindset
        </text>

        {/* Card 1: Listen First */}
        <rect x="22" y="56" width="174" height="176" rx="16" fill="#EAE3F0" stroke="#39243F" strokeWidth="2" />
        <rect x="54" y="88" width="74" height="40" rx="12" fill="#FFFFFF" stroke="#39243F" strokeWidth="2" />
        <line x1="68" y1="104" x2="112" y2="104" stroke="#39243F" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="68" y1="115" x2="98" y2="115" stroke="#A15E67" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="96" y="114" width="66" height="32" rx="10" fill="#39243F" />
        <text x="129" y="134" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11" fontWeight="700" fill="#FAF7F2">
          I hear you
        </text>
        <text x="109" y="172" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="13.5" fill="#39243F">
          Listen Before Fixing
        </text>
        <text x="109" y="193" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
          Ask if she wants venting
        </text>
        <text x="109" y="210" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
          or problem-solving
        </text>

        {/* Card 2: Shared Walks */}
        <rect x="213" y="56" width="174" height="176" rx="16" fill="#EDF2EB" stroke="#7A9475" strokeWidth="2" />
        <circle cx="284" cy="108" r="14" fill="#FFFFFF" stroke="#355238" strokeWidth="2.2" />
        <circle cx="318" cy="108" r="14" fill="#A9BBA5" stroke="#355238" strokeWidth="2.2" />
        <path d="M 264 142 Q 300 124 338 142" fill="none" stroke="#355238" strokeWidth="3" strokeLinecap="round" />
        <text x="300" y="172" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="13.5" fill="#355238">
          Walk &amp; Wind Down
        </text>
        <text x="300" y="193" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
          Make evening strolls &amp;
        </text>
        <text x="300" y="210" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
          sleep routines shared
        </text>

        {/* Card 3: Care on Flare Days */}
        <rect x="404" y="56" width="174" height="176" rx="16" fill="#FAE8E4" stroke="#C66E62" strokeWidth="2" />
        <circle cx="491" cy="116" r="28" fill="#FFFFFF" stroke="#8C3329" strokeWidth="2.2" />
        <path d="M 491 102 C 483 102 477 109 477 117 C 477 125 485 131 491 131 C 497 131 505 125 505 117 C 505 109 499 102 491 102 Z" fill="#E98978" />
        <text x="491" y="172" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="13.5" fill="#8C3329">
          Ease Flare Days
        </text>
        <text x="491" y="193" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
          Pick up chores &amp; remove
        </text>
        <text x="491" y="210" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
          fertility pressure
        </text>

        <rect x="22" y="248" width="556" height="50" rx="14" fill="#39243F" />
        <text x="300" y="278" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="13.5" fill="#FAF7F2">
          Support feels best when it lightens her load without policing her body
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 600 320"
      className="pcos-svg"
      role="img"
      aria-labelledby="ally-friends-title ally-friends-desc"
    >
      <title id="ally-friends-title">Friendship support illustration for male friends and colleagues</title>
      <desc id="ally-friends-desc">
        Three ways male friends can be good allies: welcoming flexible plans when fatigue hits, avoiding jokes about skin, hair, or cycles, and choosing inclusive social spots.
      </desc>
      <rect width="600" height="320" rx="20" fill="#FAF7F2" />
      <text x="300" y="36" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="16.5" fill="#39243F">
        Friends &amp; Peers: Zero-Pressure Support
      </text>

      {/* Card 1: Flexible plans */}
      <rect x="22" y="56" width="174" height="176" rx="16" fill="#EDF2EB" stroke="#7A9475" strokeWidth="2" />
      <rect x="74" y="88" width="70" height="52" rx="10" fill="#FFFFFF" stroke="#355238" strokeWidth="2.2" />
      <line x1="74" y1="104" x2="144" y2="104" stroke="#355238" strokeWidth="2" />
      <path d="M 96 122 L 106 131 L 123 113" fill="none" stroke="#355238" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <text x="109" y="172" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="13.5" fill="#355238">
        Flexible Hangouts
      </text>
      <text x="109" y="193" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
        Accept rain checks with
      </text>
      <text x="109" y="210" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
        zero guilt-tripping
      </text>

      {/* Card 2: No Appearance Jokes */}
      <rect x="213" y="56" width="174" height="176" rx="16" fill="#FAE8E4" stroke="#C66E62" strokeWidth="2" />
      <circle cx="300" cy="115" r="28" fill="#FFFFFF" stroke="#8C3329" strokeWidth="2.2" />
      <line x1="282" y1="133" x2="318" y2="97" stroke="#C66E62" strokeWidth="3.2" strokeLinecap="round" />
      <text x="300" y="172" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="13.5" fill="#8C3329">
        Drop Taboo Jokes
      </text>
      <text x="300" y="193" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
        Never tease about acne,
      </text>
      <text x="300" y="210" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
        periods, or weight
      </text>

      {/* Card 3: Inclusive spots */}
      <rect x="404" y="56" width="174" height="176" rx="16" fill="#EAE3F0" stroke="#39243F" strokeWidth="2" />
      <rect x="461" y="96" width="24" height="36" rx="6" fill="#FFFFFF" stroke="#39243F" strokeWidth="2.2" />
      <rect x="497" y="96" width="24" height="36" rx="6" fill="#E98978" stroke="#39243F" strokeWidth="2.2" />
      <text x="491" y="172" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="13.5" fill="#39243F">
        Chill, Inclusive Plans
      </text>
      <text x="491" y="193" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
        No food spotlighting or
      </text>
      <text x="491" y="210" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#514B53">
        high-pressure late nights
      </text>

      <rect x="22" y="248" width="556" height="50" rx="14" fill="#39243F" />
      <text x="300" y="278" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="13.5" fill="#FAF7F2">
        Respectful friendships make college, work &amp; social life far easier
      </text>
    </svg>
  );
}

export default function MaleAllySection({
  defaultFocus = "",
  onInteract,
  onNavigate,
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedVerdict, setSelectedVerdict] = useState("All");
  const [revealed, setRevealed] = useState({});
  const [selectedRole, setSelectedRole] = useState("all");

  useEffect(() => {
    const hashId =
      typeof window !== "undefined" ? window.location.hash.replace(/^#/, "") : "";
    const targetId =
      hashId ||
      (defaultFocus === "support-communication" ? "ally-support-communication" : "");
    if (!targetId) return;
    const timer = window.setTimeout(() => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 40);
    return () => window.clearTimeout(timer);
  }, [defaultFocus]);

  const categories = useMemo(
    () => getMaleMythCategories(MALE_ALLY_MYTHS),
    []
  );

  const filteredMyths = useMemo(
    () =>
      filterMaleMyths(MALE_ALLY_MYTHS, {
        category: selectedCategory,
        verdict: selectedVerdict,
      }),
    [selectedCategory, selectedVerdict]
  );

  const revealedCount = useMemo(
    () => countRevealedMaleMyths(revealed, MALE_ALLY_MYTHS),
    [revealed]
  );

  const allVisibleRevealed =
    filteredMyths.length > 0 &&
    filteredMyths.every((item) => Boolean(revealed[item.id]));

  const visibleRoles = useMemo(
    () =>
      selectedRole === "all"
        ? MALE_SUPPORT_ROLES
        : MALE_SUPPORT_ROLES.filter((role) => role.id === selectedRole),
    [selectedRole]
  );

  const toggleMyth = (id) => {
    if (onInteract) onInteract();
    setRevealed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleToggleAllVisible = () => {
    if (onInteract) onInteract();
    setRevealed((prev) => {
      const next = { ...prev };
      for (const item of filteredMyths) {
        next[item.id] = !allVisibleRevealed;
      }
      return next;
    });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(`ally-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (onInteract) onInteract();
  };

  const go = (to) => {
    if (onNavigate) onNavigate(to);
  };

  return (
    <div className="ally-hub" data-testid="male-ally-hub">
      <div className="kyb-controls-card ally-intro-bar">
        <div className="kyb-controls-top ally-controls-top">
          <div>
            <p className="eyebrow">MALE ALLY LEARNING PATH · THREE SECTIONS</p>
            <h2>Understand clearly, unlearn myths, and show up well</h2>
            <p className="pcos-tabular-sub">
              Whether you are a brother, father, husband, boyfriend, or friend, start with the biology, check common misconceptions, and practice supportive everyday communication.
            </p>
          </div>
          <div className="kyb-jump-links" aria-label="Jump to Male Ally section">
            {MALE_ALLY_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                type="button"
                className="myth-cat-btn"
                onClick={() => scrollToSection(sec.id)}
              >
                {sec.number}. {sec.shortLabel}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 01: UNDERSTANDING PCOS FROM A MALE PERSPECTIVE */}
      <section
        id="ally-understanding-pcos"
        className="ally-section-card"
        data-testid="ally-section-understanding"
        aria-labelledby="ally-title-understanding"
      >
        <div className="kyb-section-head">
          <div>
            <p className="eyebrow">{MALE_ALLY_SECTIONS[0].eyebrow}</p>
            <h2 id="ally-title-understanding">{MALE_ALLY_SECTIONS[0].title}</h2>
            <p className="pcos-copy-summary">{MALE_ALLY_SECTIONS[0].lead}</p>
          </div>
        </div>

        <div className="pcos-stage-grid ally-understanding-grid">
          <div className="pcos-visual-box">
            <MalePerspectiveDiagram />
          </div>

          <div className="pcos-copy-box">
            <p className="eyebrow">HOW TO CONNECT THE DOTS</p>
            <h3>What happens inside vs. what you notice</h3>
            <div className="ally-concept-list">
              {MALE_UNDERSTANDING_CONCEPTS.map((concept) => (
                <div className="ally-concept-item" key={concept.id}>
                  <h4>{concept.heading}</h4>
                  <p>{concept.detail}</p>
                </div>
              ))}
            </div>
            <div className="pcos-gentle-note">
              <strong>Key perspective shift:</strong> {MALE_UNDERSTANDING_TAKEAWAY}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: MYTHS & MISCONCEPTIONS FOR MEN */}
      <section
        id="ally-myths-misconceptions"
        className="ally-section-card"
        data-testid="ally-section-myths"
        aria-labelledby="ally-title-myths"
      >
        <div className="myths-toolbar ally-myths-toolbar">
          <div className="myths-toolbar-info">
            <p className="eyebrow">{MALE_ALLY_SECTIONS[1].eyebrow}</p>
            <h2 id="ally-title-myths">{MALE_ALLY_SECTIONS[1].title}</h2>
            <p className="pcos-copy-summary">{MALE_ALLY_SECTIONS[1].lead}</p>
            <p className="myths-count" data-testid="ally-myths-count">
              {revealedCount} of {MALE_ALLY_MYTHS.length} cards revealed · Showing{" "}
              {filteredMyths.length}
            </p>
          </div>
          <div className="myths-toolbar-actions">
            <div className="progress-tabs" role="group" aria-label="Filter male myths by verdict">
              {["All", "Myth", "Fact"].map((verdict) => (
                <button
                  key={verdict}
                  type="button"
                  className={
                    selectedVerdict === verdict ? "progress-tab active" : "progress-tab"
                  }
                  aria-pressed={selectedVerdict === verdict}
                  onClick={() => {
                    setSelectedVerdict(verdict);
                    if (onInteract) onInteract();
                  }}
                >
                  {verdict}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="progress-reset"
              onClick={handleToggleAllVisible}
            >
              {allVisibleRevealed ? "Hide visible answers" : "Reveal visible answers"}
            </button>
          </div>
        </div>

        <div className="myth-categories" role="group" aria-label="Filter male myths by topic">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                selectedCategory === category ? "myth-cat-btn active" : "myth-cat-btn"
              }
              aria-pressed={selectedCategory === category}
              onClick={() => {
                setSelectedCategory(category);
                if (onInteract) onInteract();
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="myths">
          {filteredMyths.map((item) => {
            const isOpen = Boolean(revealed[item.id]);
            const verdictClass =
              item.verdict === "Fact" ? "myth-badge fact" : "myth-badge myth-tag";
            return (
              <button
                type="button"
                key={item.id}
                className={isOpen ? "myth revealed ally-myth-card" : "myth ally-myth-card"}
                aria-expanded={isOpen}
                onClick={() => toggleMyth(item.id)}
              >
                <div className="myth-card-top">
                  <span className={isOpen ? verdictClass : "myth-badge"}>
                    {isOpen ? item.verdict.toUpperCase() : "MYTH OR FACT?"}
                  </span>
                  <small className="myth-cat-label">
                    {item.category} · {item.context}
                  </small>
                </div>
                <strong>{item.claim}</strong>
                {isOpen ? (
                  <>
                    <p>{item.explanation}</p>
                    <p className="ally-myth-takeaway">
                      <b>Ally step:</b> {item.allyTakeaway}
                    </p>
                  </>
                ) : (
                  <p>
                    Select to reveal whether this is a myth or fact and see how allies can respond better.
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* SECTION 03: SUPPORT & COMMUNICATION (FAMILY, PARTNER, FRIENDS) */}
      <section
        id="ally-support-communication"
        className="ally-section-card"
        data-testid="ally-section-support"
        aria-labelledby="ally-title-support"
      >
        <div className="pcos-audience-head ally-support-head">
          <div>
            <p className="eyebrow">{MALE_ALLY_SECTIONS[2].eyebrow}</p>
            <h2 id="ally-title-support">{MALE_ALLY_SECTIONS[2].title}</h2>
            <p className="pcos-copy-summary">{MALE_ALLY_SECTIONS[2].lead}</p>
          </div>
          <div
            className="pcos-audience-tabs"
            role="group"
            aria-label="Filter support by relationship"
            data-testid="ally-role-filter"
          >
            {[
              { id: "all", label: "All Relationships" },
              ...MALE_SUPPORT_ROLES.map((r) => ({ id: r.id, label: r.label })),
            ].map((option) => {
              const active = selectedRole === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={active}
                  className={active ? "myth-cat-btn active" : "myth-cat-btn"}
                  onClick={() => {
                    setSelectedRole(option.id);
                    if (onInteract) onInteract();
                  }}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="ally-support-stack">
          {visibleRoles.map((role) => (
            <article
              key={role.id}
              className="ally-role-card"
              data-testid={`ally-role-${role.id}`}
            >
              <div className="ally-role-grid">
                <div className="pcos-visual-box">
                  <SupportRoleIllustration roleId={role.illustrationId} />
                </div>

                <div className="ally-role-copy">
                  <p className="eyebrow">
                    {role.label.toUpperCase()} SUPPORT · {role.audienceTitle.toUpperCase()}
                  </p>
                  <h3>{role.audienceTitle}</h3>
                  <p className="pcos-copy-summary">{role.coreMindset}</p>

                  <h4 className="pcos-subhead">Helpful everyday actions</h4>
                  <ul className="pcos-steps-list">
                    {role.practicalActions.map((act) => (
                      <li key={act}>{act}</li>
                    ))}
                  </ul>

                  <h4 className="pcos-subhead">What to say instead</h4>
                  <div className="pcos-swaps-list">
                    {role.communicationSwaps.map((swap) => (
                      <div className="pcos-swap-item" key={swap.skip}>
                        <p className="pcos-swap-pair">
                          <span className="pcos-swap-from">Instead of: &ldquo;{swap.skip}&rdquo;</span>
                          <span className="pcos-swap-to">Try saying: &ldquo;{swap.sayInstead}&rdquo;</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="pcos-tabular-links ally-bottom-links">
          <a
            href="/pcos/faqs"
            className="btn primary"
            onClick={(e) => {
              if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
              e.preventDefault();
              go("/pcos/faqs");
            }}
          >
            Read Partner &amp; Patient FAQs →
          </a>
          <a
            href="/support"
            className="btn secondary"
            onClick={(e) => {
              if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
              e.preventDefault();
              go("/support");
            }}
          >
            Find Specialist Support
          </a>
        </div>
      </section>
    </div>
  );
}
