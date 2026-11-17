import React, { useState } from "react";
import {
  AUDIENCE_PERSPECTIVES,
  filterAudienceGuidance,
  getManagementPillar,
  getNutritionCategory,
  getUnderstandingTab,
  MANAGEMENT_PILLARS,
  NUTRITION_TIPS_CATEGORIES,
  UNDERSTANDING_PCOS_TABS,
} from "../utils/pcosGuide";

function ManagementIllustration({ illustrationId }) {
  if (illustrationId === "diet") {
    return (
      <svg
        viewBox="0 0 640 380"
        className="pcos-svg"
        role="img"
        aria-labelledby="diet-svg-title diet-svg-desc"
      >
        <title id="diet-svg-title">Balanced PCOS plate and steady blood sugar illustration</title>
        <desc id="diet-svg-desc">
          A balanced plate split into half vegetables and fiber, one quarter protein, and one quarter whole carbs, paired with a smooth steady energy curve compared to a sharp sugar spike.
        </desc>
        <rect width="640" height="380" rx="22" fill="#FAF7F2" />

        <text x="168" y="42" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="18" fill="#39243F">
          Balanced Plate Model
        </text>

        <circle cx="168" cy="186" r="108" fill="#FFFFFF" stroke="#39243F" strokeWidth="4" />
        {/* Left half: Veggies & Fiber */}
        <path d="M 168 84 A 102 102 0 0 0 168 288 Z" fill="#A9BBA5" stroke="#39243F" strokeWidth="2.5" />
        {/* Top right quarter: Protein */}
        <path d="M 168 186 L 168 84 A 102 102 0 0 1 270 186 Z" fill="#E98978" stroke="#39243F" strokeWidth="2.5" />
        {/* Bottom right quarter: Whole carbs */}
        <path d="M 168 186 L 270 186 A 102 102 0 0 1 168 288 Z" fill="#EAE3F0" stroke="#39243F" strokeWidth="2.5" />

        <text x="115" y="180" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontWeight="700" fontSize="14" fill="#242126">
          1/2 Veggies
        </text>
        <text x="115" y="198" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#242126">
          &amp; Fiber
        </text>

        <text x="220" y="142" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontWeight="700" fontSize="13" fill="#242126">
          1/4 Protein
        </text>
        <text x="220" y="159" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="10.5" fill="#39243F">
          Dal, paneer, eggs
        </text>

        <text x="220" y="226" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontWeight="700" fontSize="13" fill="#242126">
          1/4 Whole
        </text>
        <text x="220" y="243" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="10.5" fill="#39243F">
          Roti, millets
        </text>

        <rect x="60" y="316" width="216" height="36" rx="18" fill="#EDF2EB" stroke="#CBD9C7" strokeWidth="1.5" />
        <text x="168" y="339" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontWeight="600" fontSize="12.5" fill="#355238">
          + Healthy fats (nuts, seeds, ghee)
        </text>

        {/* Right card: Glucose curve */}
        <rect x="336" y="48" width="278" height="292" rx="20" fill="#FFFFFF" stroke="#E2D8E6" strokeWidth="2" />
        <text x="475" y="84" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="17" fill="#39243F">
          Blood Sugar Response
        </text>

        <line x1="364" y1="258" x2="588" y2="258" stroke="#D5CAD7" strokeWidth="2" />
        <line x1="364" y1="120" x2="364" y2="258" stroke="#D5CAD7" strokeWidth="2" />

        {/* Spiky refined sugar curve */}
        <path
          d="M 368 240 Q 405 118 438 142 Q 466 248 502 232 Q 538 164 580 236"
          fill="none"
          stroke="#C66E62"
          strokeWidth="3.5"
          strokeDasharray="7 5"
          strokeLinecap="round"
        />
        {/* Smooth balanced curve */}
        <path
          d="M 368 238 Q 430 186 484 196 Q 536 205 582 214"
          fill="none"
          stroke="#39243F"
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        <circle cx="380" cy="286" r="6" fill="#C66E62" />
        <text x="394" y="290" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#8C3329" fontWeight="600">
          Solo sugar: quick spike &amp; crash
        </text>

        <circle cx="380" cy="314" r="6" fill="#39243F" />
        <text x="394" y="318" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#39243F" fontWeight="700">
          Balanced meal: steady energy
        </text>
      </svg>
    );
  }

  if (illustrationId === "activity") {
    return (
      <svg
        viewBox="0 0 640 380"
        className="pcos-svg"
        role="img"
        aria-labelledby="activity-svg-title activity-svg-desc"
      >
        <title id="activity-svg-title">Physical activity and insulin uptake illustration</title>
        <desc id="activity-svg-desc">
          Three everyday movement pillars—daily walks, strength training, and yoga or stretching—all helping body muscles absorb glucose naturally.
        </desc>
        <rect width="640" height="380" rx="22" fill="#FAF7F2" />

        <rect x="26" y="34" width="180" height="142" rx="18" fill="#EAE3F0" stroke="#39243F" strokeWidth="2.5" />
        <text x="116" y="74" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="16" fill="#39243F">
          Daily Walking
        </text>
        <text x="116" y="102" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fill="#514B53">
          9–10k steps or
        </text>
        <text x="116" y="122" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fill="#514B53">
          15-min post-meal walk
        </text>
        <path d="M 80 152 H 152 M 138 142 L 152 152 L 138 162" fill="none" stroke="#39243F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="230" y="34" width="180" height="142" rx="18" fill="#FAE8E4" stroke="#C66E62" strokeWidth="2.5" />
        <text x="320" y="74" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="16" fill="#39243F">
          Strength Work
        </text>
        <text x="320" y="102" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fill="#514B53">
          2–3 days / week
        </text>
        <text x="320" y="122" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fill="#514B53">
          Bodyweight or weights
        </text>
        <rect x="284" y="146" width="72" height="12" rx="6" fill="#C66E62" />

        <rect x="434" y="34" width="180" height="142" rx="18" fill="#EDF2EB" stroke="#7A9475" strokeWidth="2.5" />
        <text x="524" y="74" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="16" fill="#39243F">
          Yoga &amp; Recovery
        </text>
        <text x="524" y="102" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fill="#514B53">
          Stretching &amp; mobility
        </text>
        <text x="524" y="122" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fill="#514B53">
          on lower-energy days
        </text>
        <circle cx="524" cy="152" r="9" fill="#A9BBA5" stroke="#355238" strokeWidth="2" />

        {/* Converging arrows */}
        <path d="M 116 178 V 214 L 220 242 M 320 178 V 242 M 524 178 V 214 L 420 242" fill="none" stroke="#39243F" strokeWidth="3" strokeLinecap="round" />
        <polygon points="320,248 312,235 328,235" fill="#39243F" />

        {/* Bottom outcome box */}
        <rect x="52" y="250" width="536" height="96" rx="20" fill="#39243F" />
        <text x="320" y="290" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="19" fill="#FAF7F2">
          Active muscles absorb glucose more easily
        </text>
        <text x="320" y="320" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13.5" fill="#E6DCE8">
          Supports insulin sensitivity, steadier mood, and ovulatory health without overtraining
        </text>
      </svg>
    );
  }

  if (illustrationId === "sleep") {
    return (
      <svg
        viewBox="0 0 640 380"
        className="pcos-svg"
        role="img"
        aria-labelledby="sleep-svg-title sleep-svg-desc"
      >
        <title id="sleep-svg-title">Sleep schedule and circadian hormone rhythm illustration</title>
        <desc id="sleep-svg-desc">
          A three-step daily sleep loop from evening wind-down and 7 to 9 hours of steady sleep to morning daylight, supporting calmer cortisol and better insulin sensitivity.
        </desc>
        <rect width="640" height="380" rx="22" fill="#FAF7F2" />

        <text x="320" y="42" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="18" fill="#39243F">
          Circadian Sleep &amp; Hormone Loop
        </text>

        <rect x="26" y="70" width="174" height="122" rx="18" fill="#EAE3F0" stroke="#39243F" strokeWidth="2.5" />
        <text x="113" y="108" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15.5" fill="#39243F">
          1. Wind Down
        </text>
        <text x="113" y="134" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          Dim bright screens
        </text>
        <text x="113" y="154" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          30–45 min before bed
        </text>

        <path d="M 204 131 H 228 M 220 123 L 228 131 L 220 139" fill="none" stroke="#39243F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="233" y="70" width="174" height="122" rx="18" fill="#39243F" />
        <text x="320" y="108" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15.5" fill="#FAF7F2">
          2. 7–9 Hrs Sleep
        </text>
        <text x="320" y="134" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#E9D7DE">
          Consistent sleep &amp;
        </text>
        <text x="320" y="154" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#E9D7DE">
          wake-up window
        </text>

        <path d="M 412 131 H 436 M 428 123 L 436 131 L 428 139" fill="none" stroke="#39243F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="440" y="70" width="174" height="122" rx="18" fill="#EDF2EB" stroke="#7A9475" strokeWidth="2.5" />
        <text x="527" y="108" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15.5" fill="#39243F">
          3. Morning Light
        </text>
        <text x="527" y="134" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#355238">
          10–15 min daylight
        </text>
        <text x="527" y="154" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#355238">
          sets body clock
        </text>

        {/* Bottom outcome boxes */}
        <rect x="26" y="230" width="282" height="114" rx="18" fill="#FFFFFF" stroke="#E2D8E6" strokeWidth="2" />
        <text x="167" y="268" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#39243F">
          Calmer Cortisol &amp; Melatonin
        </text>
        <text x="167" y="295" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fill="#615A63">
          Overnight hormone repair lowers stress
        </text>
        <text x="167" y="315" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fill="#615A63">
          load and daytime irritability
        </text>

        <rect x="332" y="230" width="282" height="114" rx="18" fill="#FAE8E4" stroke="#ECC6BE" strokeWidth="2" />
        <text x="473" y="268" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#8C3329">
          Steadier Appetite &amp; Insulin
        </text>
        <text x="473" y="295" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fill="#514B53">
          Better rest reduces next-day sugar
        </text>
        <text x="473" y="315" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fill="#514B53">
          cravings and mid-afternoon fatigue
        </text>
      </svg>
    );
  }

  if (illustrationId === "hydration") {
    return (
      <svg
        viewBox="0 0 640 380"
        className="pcos-svg"
        role="img"
        aria-labelledby="hydration-svg-title hydration-svg-desc"
      >
        <title id="hydration-svg-title">Hydration rhythm and doctor-guided supplements illustration</title>
        <desc id="hydration-svg-desc">
          Spacing water intake evenly from morning to evening alongside clinician-guided lab checks before starting supplements like vitamin D, B12, iron, or inositol.
        </desc>
        <rect width="640" height="380" rx="22" fill="#FAF7F2" />

        <rect x="26" y="34" width="282" height="312" rx="20" fill="#FFFFFF" stroke="#E2D8E6" strokeWidth="2" />
        <text x="167" y="70" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="17" fill="#39243F">
          Steady Hydration Pace
        </text>

        {/* Four water glasses */}
        {[
          { x: 52, label: "Morning" },
          { x: 112, label: "Midday" },
          { x: 172, label: "Evening" },
          { x: 232, label: "Night" },
        ].map((item) => (
          <g key={item.label}>
            <rect x={item.x} y="106" width="44" height="84" rx="8" fill="#FAF7F2" stroke="#39243F" strokeWidth="2.5" />
            <rect x={item.x + 3} y="128" width="38" height="59" rx="5" fill="#A9BBA5" />
            <text x={item.x + 22} y="214" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fontWeight="600" fill="#514B53">
              {item.label}
            </text>
          </g>
        ))}

        <rect x="46" y="242" width="242" height="78" rx="14" fill="#EDF2EB" />
        <text x="167" y="272" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontWeight="700" fontSize="13" fill="#355238">
          Prefer plain water &amp; chaas
        </text>
        <text x="167" y="296" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
          Limit sugary sodas &amp; sweetened drinks
        </text>

        <rect x="332" y="34" width="282" height="312" rx="20" fill="#EAE3F0" stroke="#39243F" strokeWidth="2.5" />
        <text x="473" y="70" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="17" fill="#39243F">
          Targeted Supplements
        </text>

        <rect x="354" y="96" width="238" height="54" rx="12" fill="#FFFFFF" />
        <text x="473" y="120" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontWeight="700" fontSize="13" fill="#39243F">
          1. Test before supplementing
        </text>
        <text x="473" y="138" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#615A63">
          Check Vitamin D, B12, iron &amp; thyroid
        </text>

        <rect x="354" y="164" width="238" height="54" rx="12" fill="#FFFFFF" />
        <text x="473" y="188" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontWeight="700" fontSize="13" fill="#39243F">
          2. Doctor-guided options
        </text>
        <text x="473" y="206" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#615A63">
          Omega-3 or inositol only when advised
        </text>

        <rect x="354" y="236" width="238" height="84" rx="14" fill="#FAE8E4" stroke="#ECC6BE" strokeWidth="1.5" />
        <text x="473" y="268" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontWeight="700" fontSize="13" fill="#8C3329">
          Skip viral &quot;PCOS cure&quot; teas
        </text>
        <text x="473" y="292" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
          No unregulated powder replaces real care
        </text>
      </svg>
    );
  }

  if (illustrationId === "stress") {
    return (
      <svg
        viewBox="0 0 640 380"
        className="pcos-svg"
        role="img"
        aria-labelledby="stress-svg-title stress-svg-desc"
      >
        <title id="stress-svg-title">Stress load and nervous system calm illustration</title>
        <desc id="stress-svg-desc">
          Comparison between high chronic stress raising cortisol and cravings versus gentle nervous-system resets supporting calmer mood and hormone signalling.
        </desc>
        <rect width="640" height="380" rx="22" fill="#FAF7F2" />

        <rect x="26" y="42" width="266" height="296" rx="20" fill="#FAE8E4" stroke="#C66E62" strokeWidth="2.5" />
        <text x="159" y="82" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="17" fill="#8C3329">
          Chronic Stress Loop
        </text>

        <rect x="52" y="106" width="214" height="52" rx="12" fill="#FFFFFF" />
        <text x="159" y="137" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13.5" fontWeight="600" fill="#39243F">
          Overwork, stigma or shame
        </text>

        <rect x="52" y="176" width="214" height="52" rx="12" fill="#FFFFFF" />
        <text x="159" y="207" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13.5" fontWeight="600" fill="#39243F">
          Cortisol stays elevated
        </text>

        <rect x="52" y="246" width="214" height="58" rx="12" fill="#FFFFFF" />
        <text x="159" y="272" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fontWeight="600" fill="#8C3329">
          More fatigue, mood dips
        </text>
        <text x="159" y="291" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#615A63">
          &amp; disrupted sleep signals
        </text>

        <path d="M 302 190 H 338 M 328 180 L 338 190 L 328 200" fill="none" stroke="#39243F" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="348" y="42" width="266" height="296" rx="20" fill="#EDF2EB" stroke="#7A9475" strokeWidth="2.5" />
        <text x="481" y="82" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="17" fill="#355238">
          Supportive Reset
        </text>

        <rect x="374" y="106" width="214" height="52" rx="12" fill="#FFFFFF" />
        <text x="481" y="137" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13.5" fontWeight="600" fill="#39243F">
          5-min slow breathing / walk
        </text>

        <rect x="374" y="176" width="214" height="52" rx="12" fill="#FFFFFF" />
        <text x="481" y="207" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13.5" fontWeight="600" fill="#39243F">
          Empathetic ally support
        </text>

        <rect x="374" y="246" width="214" height="58" rx="12" fill="#FFFFFF" />
        <text x="481" y="272" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fontWeight="700" fill="#355238">
          Steadier brain–ovary rhythm
        </text>
        <text x="481" y="291" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
          &amp; calmer emotional energy
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 640 380"
      className="pcos-svg"
      role="img"
      aria-labelledby="medical-svg-title medical-svg-desc"
    >
      <title id="medical-svg-title">Tracking patterns and clinician-ally partnership illustration</title>
      <desc id="medical-svg-desc">
        Combining private symptom and routine logs with prepared medical questions for supportive check-ins alongside clinicians and family allies.
      </desc>
      <rect width="640" height="380" rx="22" fill="#FAF7F2" />

      <text x="320" y="42" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="18" fill="#39243F">
        From Daily Notes to Confident Care
      </text>

      <rect x="26" y="70" width="174" height="154" rx="18" fill="#EAE3F0" stroke="#39243F" strokeWidth="2.5" />
      <text x="113" y="110" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15.5" fill="#39243F">
        1. Log Patterns
      </text>
      <text x="113" y="138" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
        Cycle shifts, mood,
      </text>
      <text x="113" y="158" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
        fatigue &amp; daily habits
      </text>
      <text x="113" y="192" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fontWeight="700" fill="#39243F">
        Private in browser
      </text>

      <path d="M 204 147 H 228 M 220 139 L 228 147 L 220 155" fill="none" stroke="#39243F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="233" y="70" width="174" height="154" rx="18" fill="#FAE8E4" stroke="#C66E62" strokeWidth="2.5" />
      <text x="320" y="110" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15.5" fill="#39243F">
        2. Prepare Visit
      </text>
      <text x="320" y="138" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
        Bring weekly summary
      </text>
      <text x="320" y="158" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
        &amp; 3–4 questions
      </text>
      <text x="320" y="192" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fontWeight="700" fill="#8C3329">
        Clearer conversations
      </text>

      <path d="M 412 147 H 436 M 428 139 L 436 147 L 428 155" fill="none" stroke="#39243F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="440" y="70" width="174" height="154" rx="18" fill="#EDF2EB" stroke="#7A9475" strokeWidth="2.5" />
      <text x="527" y="110" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15.5" fill="#39243F">
        3. Shared Care
      </text>
      <text x="527" y="138" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
        Clinician + partner or
      </text>
      <text x="527" y="158" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
        family ally support
      </text>
      <text x="527" y="192" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fontWeight="700" fill="#355238">
        Respectful follow-ups
      </text>

      <rect x="26" y="256" width="588" height="88" rx="18" fill="#39243F" />
      <text x="320" y="294" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="16.5" fill="#FAF7F2">
        See a doctor early if cycles skip 3+ months or pain worsens
      </text>
      <text x="320" y="321" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fill="#E6DCE8">
        PCOS management evolves with your goals—never relies on guesswork or shame
      </text>
    </svg>
  );
}

function NutritionIllustration({ categoryId }) {
  if (categoryId === "everyday-meals") {
    return (
      <svg
        viewBox="0 0 640 380"
        className="pcos-svg"
        role="img"
        aria-labelledby="nutr-meals-title nutr-meals-desc"
      >
        <title id="nutr-meals-title">Daily meal rhythm for steady energy illustration</title>
        <desc id="nutr-meals-desc">
          Three everyday meal habits: protein-rich savory breakfast, diverse whole grains and pulses at lunch, and a lighter dinner 2 to 3 hours before bed.
        </desc>
        <rect width="640" height="380" rx="22" fill="#FAF7F2" />
        <text x="320" y="42" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="18" fill="#39243F">
          PCOS-Friendly Daily Meal Rhythm
        </text>

        <rect x="26" y="70" width="174" height="154" rx="18" fill="#EAE3F0" stroke="#39243F" strokeWidth="2.5" />
        <text x="113" y="108" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15.5" fill="#39243F">
          Morning Fuel
        </text>
        <text x="113" y="136" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          18–25g protein start
        </text>
        <text x="113" y="156" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
          Chilla, eggs, or dahi+oats
        </text>
        <text x="113" y="192" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fontWeight="700" fill="#39243F">
          Cuts 4 p.m. cravings
        </text>

        <path d="M 204 147 H 228 M 220 139 L 228 147 L 220 155" fill="none" stroke="#39243F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="233" y="70" width="174" height="154" rx="18" fill="#EDF2EB" stroke="#7A9475" strokeWidth="2.5" />
        <text x="320" y="108" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15.5" fill="#355238">
          Midday Plate
        </text>
        <text x="320" y="136" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          Dal, sabzi &amp; curd
        </text>
        <text x="320" y="156" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
          + roti or millets
        </text>
        <text x="320" y="192" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fontWeight="700" fill="#355238">
          Sustained focus
        </text>

        <path d="M 412 147 H 436 M 428 139 L 436 147 L 428 155" fill="none" stroke="#39243F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="440" y="70" width="174" height="154" rx="18" fill="#FAE8E4" stroke="#C66E62" strokeWidth="2.5" />
        <text x="527" y="108" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15.5" fill="#8C3329">
          Early Dinner
        </text>
        <text x="527" y="136" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          2–3 hrs before sleep
        </text>
        <text x="527" y="156" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
          + 10-min easy walk
        </text>
        <text x="527" y="192" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fontWeight="700" fill="#8C3329">
          Deeper overnight rest
        </text>

        <rect x="26" y="254" width="588" height="90" rx="18" fill="#39243F" />
        <text x="320" y="292" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="17" fill="#FAF7F2">
          Familiar home meals work—pair carbs with protein every time
        </text>
        <text x="320" y="320" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fill="#E6DCE8">
          Idli-sambar, poha with peanuts, or dal-roti-sabzi all fit smoothly into PCOS nutrition
        </text>
      </svg>
    );
  }

  if (categoryId === "snacks-cravings") {
    return (
      <svg
        viewBox="0 0 640 380"
        className="pcos-svg"
        role="img"
        aria-labelledby="nutr-snacks-title nutr-snacks-desc"
      >
        <title id="nutr-snacks-title">Smart snack swaps for cravings illustration</title>
        <desc id="nutr-snacks-desc">
          Comparison between solo refined sugar snacks that cause energy crashes and paired protein-plus-fibre snacks that satisfy cravings steadily.
        </desc>
        <rect width="640" height="380" rx="22" fill="#FAF7F2" />

        <rect x="26" y="42" width="266" height="296" rx="20" fill="#FAE8E4" stroke="#C66E62" strokeWidth="2.5" />
        <text x="159" y="82" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="17" fill="#8C3329">
          Solo Sugar / Fried
        </text>

        <rect x="52" y="106" width="214" height="52" rx="12" fill="#FFFFFF" />
        <text x="159" y="137" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fontWeight="600" fill="#39243F">
          Biscuits, chips or sweet juice
        </text>

        <rect x="52" y="176" width="214" height="52" rx="12" fill="#FFFFFF" />
        <text x="159" y="207" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fontWeight="600" fill="#39243F">
          Fast glucose &amp; insulin surge
        </text>

        <rect x="52" y="246" width="214" height="58" rx="12" fill="#FFFFFF" />
        <text x="159" y="272" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fontWeight="600" fill="#8C3329">
          Hungrier 90 mins later
        </text>
        <text x="159" y="291" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#615A63">
          &amp; stronger sweet cravings
        </text>

        <path d="M 302 190 H 338 M 328 180 L 338 190 L 328 200" fill="none" stroke="#39243F" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="348" y="42" width="266" height="296" rx="20" fill="#EDF2EB" stroke="#7A9475" strokeWidth="2.5" />
        <text x="481" y="82" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="17" fill="#355238">
          Paired Smart Snacks
        </text>

        <rect x="374" y="106" width="214" height="52" rx="12" fill="#FFFFFF" />
        <text x="481" y="137" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fontWeight="600" fill="#39243F">
          Makhana, chana &amp; peanuts
        </text>

        <rect x="374" y="176" width="214" height="52" rx="12" fill="#FFFFFF" />
        <text x="481" y="207" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fontWeight="600" fill="#39243F">
          Apple + nuts or dark choc
        </text>

        <rect x="374" y="246" width="214" height="58" rx="12" fill="#FFFFFF" />
        <text x="481" y="272" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fontWeight="700" fill="#355238">
          Calm afternoon satiety
        </text>
        <text x="481" y="291" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
          Zero guilt &amp; steady mood
        </text>
      </svg>
    );
  }

  if (categoryId === "micronutrients") {
    return (
      <svg
        viewBox="0 0 640 380"
        className="pcos-svg"
        role="img"
        aria-labelledby="nutr-micro-title nutr-micro-desc"
      >
        <title id="nutr-micro-title">Key PCOS micronutrients and food sources illustration</title>
        <desc id="nutr-micro-desc">
          Four nutrient areas often checked in PCOS care: Vitamin D, Vitamin B12, iron paired with Vitamin C, and omega-3 fatty acids with magnesium.
        </desc>
        <rect width="640" height="380" rx="22" fill="#FAF7F2" />
        <text x="320" y="40" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="18" fill="#39243F">
          Food-First Micronutrients &amp; Lab Checks
        </text>

        <rect x="26" y="64" width="282" height="96" rx="16" fill="#EAE3F0" stroke="#39243F" strokeWidth="2" />
        <text x="46" y="96" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#39243F">
          Vitamin D
        </text>
        <text x="46" y="120" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          Morning sunlight, fortified foods &amp;
        </text>
        <text x="46" y="139" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          clinician-guided dose if low
        </text>

        <rect x="332" y="64" width="282" height="96" rx="16" fill="#FAE8E4" stroke="#C66E62" strokeWidth="2" />
        <text x="352" y="96" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#8C3329">
          Iron + Vitamin C Pair
        </text>
        <text x="352" y="120" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          Palak, rajma or dates paired with
        </text>
        <text x="352" y="139" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          lemon or amla for better uptake
        </text>

        <rect x="26" y="176" width="282" height="96" rx="16" fill="#EDF2EB" stroke="#7A9475" strokeWidth="2" />
        <text x="46" y="208" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#355238">
          Omega-3 &amp; Magnesium
        </text>
        <text x="46" y="232" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          Walnuts, ground flax, chia, pumpkin
        </text>
        <text x="46" y="251" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          seeds, greens &amp; fatty fish
        </text>

        <rect x="332" y="176" width="282" height="96" rx="16" fill="#FFFFFF" stroke="#D5CAD7" strokeWidth="2" />
        <text x="352" y="208" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#39243F">
          Vitamin B12 &amp; Gut Health
        </text>
        <text x="352" y="232" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          Curd, paneer, eggs &amp; fermented foods;
        </text>
        <text x="352" y="251" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          vital to test on vegetarian diets
        </text>

        <rect x="26" y="290" width="588" height="62" rx="16" fill="#39243F" />
        <text x="320" y="326" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15.5" fill="#FAF7F2">
          Test levels with a doctor first—avoid pricey unverified hormone blends
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 640 380"
      className="pcos-svg"
      role="img"
      aria-labelledby="nutr-pair-title nutr-pair-desc"
    >
      <title id="nutr-pair-title">Smart meal order and carb pairing illustration</title>
      <desc id="nutr-pair-desc">
        Eating vegetables and fibre first, protein and healthy fats second, and complex carbohydrates alongside slows glucose spikes and supports steady insulin.
      </desc>
      <rect width="640" height="380" rx="22" fill="#FAF7F2" />

      <text x="320" y="42" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="18" fill="#39243F">
        Smart Meal Order for Steady Insulin
      </text>

      <rect x="26" y="70" width="174" height="154" rx="18" fill="#EDF2EB" stroke="#7A9475" strokeWidth="2.5" />
      <text x="113" y="108" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15.5" fill="#355238">
        1. Fibre First
      </text>
      <text x="113" y="136" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
        Salad, cucumber,
      </text>
      <text x="113" y="156" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
        greens &amp; sabzi
      </text>
      <text x="113" y="192" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fontWeight="700" fill="#355238">
        Coats digestion gently
      </text>

      <path d="M 204 147 H 228 M 220 139 L 228 147 L 220 155" fill="none" stroke="#39243F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="233" y="70" width="174" height="154" rx="18" fill="#FAE8E4" stroke="#C66E62" strokeWidth="2.5" />
      <text x="320" y="108" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15.5" fill="#8C3329">
        2. Protein &amp; Fats
      </text>
      <text x="320" y="136" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
        Dal, paneer, curd,
      </text>
      <text x="320" y="156" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
        eggs, nuts &amp; seeds
      </text>
      <text x="320" y="192" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fontWeight="700" fill="#8C3329">
        Steadies satiety
      </text>

      <path d="M 412 147 H 436 M 428 139 L 436 147 L 428 155" fill="none" stroke="#39243F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="440" y="70" width="174" height="154" rx="18" fill="#EAE3F0" stroke="#39243F" strokeWidth="2.5" />
      <text x="527" y="108" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15.5" fill="#39243F">
        3. Whole Carbs
      </text>
      <text x="527" y="136" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
        Roti, millets, oats,
      </text>
      <text x="527" y="156" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
        rice or whole fruit
      </text>
      <text x="527" y="192" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fontWeight="700" fill="#39243F">
        Smooth energy release
      </text>

      <rect x="26" y="256" width="588" height="88" rx="18" fill="#39243F" />
      <text x="320" y="294" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="16.5" fill="#FAF7F2">
        Add nourishing foods before cutting foods out
      </text>
      <text x="320" y="321" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fill="#E6DCE8">
        Gentle food swaps lower afternoon crashes for everyone at the family table
      </text>
    </svg>
  );
}

export default function UnderstandingPcosTabular({
  defaultTab = "managing",
  onInteract,
  onNavigate,
}) {
  const [activeTabId, setActiveTabId] = useState(defaultTab);
  const [activePillarId, setActivePillarId] = useState("diet");
  const [activeNutritionId, setActiveNutritionId] = useState("plate-pairing");
  const [activeAudienceId, setActiveAudienceId] = useState("all");

  const activeTab = getUnderstandingTab(activeTabId);
  const activePillar = getManagementPillar(activePillarId);
  const activeNutrition = getNutritionCategory(activeNutritionId);
  const visiblePerspectives = filterAudienceGuidance(
    activeTab.id === "nutrition" ? activeNutrition : activePillar,
    activeAudienceId
  );

  const handleSelectTab = (tabId) => {
    setActiveTabId(tabId);
    if (onInteract) onInteract();
  };

  const handleSelectPillar = (pillarId) => {
    setActivePillarId(pillarId);
    if (onInteract) onInteract();
  };

  const handleSelectNutrition = (categoryId) => {
    setActiveNutritionId(categoryId);
    if (onInteract) onInteract();
  };

  const handleSelectAudience = (audienceId) => {
    setActiveAudienceId(audienceId);
    if (onInteract) onInteract();
  };

  const go = (to) => {
    if (onNavigate) {
      onNavigate(to);
    }
  };

  return (
    <div className="pcos-tabular-card" data-testid="understand-pcos-tabular">
      <div className="pcos-tabular-head">
        <div>
          <p className="eyebrow">UNDERSTANDING PCOS · ILLUSTRATIVE GUIDE</p>
          <h2>Understanding &amp; managing PCOS clearly</h2>
          <p className="pcos-tabular-sub">
            Visual basics built for women with PCOS, women without PCOS learning body literacy, and male allies supporting partners or family members.
          </p>
        </div>

        <div
          className="progress-tabs insights-tabs"
          role="tablist"
          aria-label="Understanding PCOS topics"
        >
          {UNDERSTANDING_PCOS_TABS.map((tab) => {
            const selected = activeTab.id === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                className={selected ? "progress-tab active" : "progress-tab"}
                onClick={() => handleSelectTab(tab.id)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {activeTab.id === "managing" ? (
        <div
          className="pcos-managing-panel"
          role="tabpanel"
          aria-label="Managing PCOS"
          data-testid="managing-pcos-panel"
        >
          <div className="pcos-pillar-strip" role="tablist" aria-label="Managing PCOS daily pillars">
            {MANAGEMENT_PILLARS.map((pillar, idx) => {
              const selected = activePillar.id === pillar.id;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={selected ? "pcos-pillar-btn active" : "pcos-pillar-btn"}
                  onClick={() => handleSelectPillar(pillar.id)}
                >
                  <span>0{idx + 1}</span>
                  <span>{pillar.shortLabel}</span>
                </button>
              );
            })}
          </div>

          <div className="pcos-stage-grid" role="tabpanel" aria-label={activePillar.title}>
            <div className="pcos-visual-box">
              <ManagementIllustration illustrationId={activePillar.illustrationId} />
            </div>

            <div className="pcos-copy-box">
              <p className="eyebrow">EVERYDAY MANAGEMENT · {activePillar.shortLabel.toUpperCase()}</p>
              <h3>{activePillar.title}</h3>
              <p className="pcos-copy-summary">{activePillar.summary}</p>

              <h4 className="pcos-subhead">Practical daily steps</h4>
              <ul className="pcos-steps-list">
                {activePillar.dailyFocus.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>

              <div className="pcos-gentle-note">
                <strong>What to skip:</strong> {activePillar.gentleReminder}
              </div>
            </div>
          </div>

          <div className="pcos-audience-section" data-testid="pcos-audience-section">
            <div className="pcos-audience-head">
              <div>
                <h3>How this helps everyone</h3>
                <p>Switch perspective or read side by side—for women with PCOS, women without PCOS, and male allies.</p>
              </div>
              <div className="pcos-audience-tabs" role="group" aria-label="Filter by reader perspective">
                {AUDIENCE_PERSPECTIVES.map((aud) => {
                  const active = activeAudienceId === aud.id;
                  return (
                    <button
                      key={aud.id}
                      type="button"
                      aria-pressed={active}
                      className={active ? "myth-cat-btn active" : "myth-cat-btn"}
                      onClick={() => handleSelectAudience(aud.id)}
                    >
                      {aud.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              className={
                visiblePerspectives.length === 1
                  ? "pcos-audience-grid single"
                  : "pcos-audience-grid"
              }
            >
              {visiblePerspectives.map((item) => (
                <article
                  key={item.audienceId}
                  className={`pcos-audience-card ${item.audienceId}`}
                >
                  <p className="pcos-audience-kicker">{item.audienceLabel}</p>
                  <p className="pcos-audience-text">{item.guidance}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="pcos-tabular-links">
            <a
              href="/tracker"
              className="btn primary"
              onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                e.preventDefault();
                go("/tracker");
              }}
            >
              Track diet, sleep &amp; steps in Symptom Tracker <span>→</span>
            </a>
            <a
              href="/pathways/women"
              className="btn secondary"
              onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                e.preventDefault();
                go("/pathways/women");
              }}
            >
              Female Learning Path
            </a>
            <a
              href="/pathways/allies"
              className="btn secondary"
              onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                e.preventDefault();
                go("/pathways/allies");
              }}
            >
              Male Ally Guide
            </a>
          </div>
        </div>
      ) : activeTab.id === "nutrition" ? (
        <div
          className="pcos-nutrition-panel"
          role="tabpanel"
          aria-label="Nutritional Tips"
          data-testid="understanding-tab-nutrition"
        >
          <div className="pcos-pillar-strip nutrition" role="tablist" aria-label="Nutritional tips topics">
            {NUTRITION_TIPS_CATEGORIES.map((cat, idx) => {
              const selected = activeNutrition.id === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={selected ? "pcos-pillar-btn active" : "pcos-pillar-btn"}
                  onClick={() => handleSelectNutrition(cat.id)}
                >
                  <span>0{idx + 1}</span>
                  <span>{cat.shortLabel}</span>
                </button>
              );
            })}
          </div>

          <div className="pcos-stage-grid" role="tabpanel" aria-label={activeNutrition.title}>
            <div className="pcos-visual-box">
              <NutritionIllustration categoryId={activeNutrition.illustrationId} />
            </div>

            <div className="pcos-copy-box">
              <p className="eyebrow">NUTRITIONAL TIPS · {activeNutrition.shortLabel.toUpperCase()}</p>
              <h3>{activeNutrition.title}</h3>
              <p className="pcos-copy-summary">{activeNutrition.summary}</p>

              <div className="pcos-swaps-list">
                {activeNutrition.swaps.map((swap) => (
                  <div className="pcos-swap-item" key={swap.focus}>
                    <p className="pcos-swap-focus">{swap.focus}</p>
                    <p className="pcos-swap-pair">
                      <span className="pcos-swap-from">Instead of: {swap.insteadOf}</span>
                      <span className="pcos-swap-to">Try: {swap.tryInstead}</span>
                    </p>
                    <p className="pcos-swap-why">{swap.why}</p>
                  </div>
                ))}
              </div>

              <div className="pcos-gentle-note">
                <strong>Keep in mind:</strong> {activeNutrition.gentleReminder}
              </div>
            </div>
          </div>

          <div className="pcos-audience-section" data-testid="pcos-nutrition-audience">
            <div className="pcos-audience-head">
              <div>
                <h3>Everyday nutrition for everyone</h3>
                <p>Filter tailored takeaways for women with PCOS, women without PCOS, and supportive male allies.</p>
              </div>
              <div className="pcos-audience-tabs" role="group" aria-label="Filter nutrition guidance by reader perspective">
                {AUDIENCE_PERSPECTIVES.map((aud) => {
                  const active = activeAudienceId === aud.id;
                  return (
                    <button
                      key={aud.id}
                      type="button"
                      aria-pressed={active}
                      className={active ? "myth-cat-btn active" : "myth-cat-btn"}
                      onClick={() => handleSelectAudience(aud.id)}
                    >
                      {aud.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              className={
                visiblePerspectives.length === 1
                  ? "pcos-audience-grid single"
                  : "pcos-audience-grid"
              }
            >
              {visiblePerspectives.map((item) => (
                <article
                  key={item.audienceId}
                  className={`pcos-audience-card ${item.audienceId}`}
                >
                  <p className="pcos-audience-kicker">{item.audienceLabel}</p>
                  <p className="pcos-audience-text">{item.guidance}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="pcos-tabular-links">
            <a
              href="/tracker"
              className="btn primary"
              onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                e.preventDefault();
                go("/tracker");
              }}
            >
              Log protein, water &amp; supplements in Tracker <span>→</span>
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
              Read Expert Advice in Find Support
            </a>
          </div>
        </div>
      ) : (
        <div
          className="pcos-overview-panel"
          role="tabpanel"
          aria-label={activeTab.label}
          data-testid={`understanding-tab-${activeTab.id}`}
        >
          <div className="pcos-stage-grid">
            <div className="pcos-visual-box">
              <img
                src={activeTab.diagram}
                alt={activeTab.diagramAlt}
                className="pcos-static-diagram"
              />
            </div>

            <div className="pcos-copy-box">
              <p className="eyebrow">{activeTab.eyebrow}</p>
              <h3>{activeTab.title}</h3>
              <p className="pcos-copy-summary">{activeTab.lead}</p>
              <ul className="pcos-steps-list">
                {activeTab.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="pcos-tabular-links">
                <button
                  type="button"
                  className="btn primary"
                  onClick={() => handleSelectTab("managing")}
                >
                  Explore Managing PCOS Guide →
                </button>
              </div>
            </div>
          </div>

          <div className="pcos-audience-grid">
            <article className="pcos-audience-card with-pcos">
              <p className="pcos-audience-kicker">Women with PCOS</p>
              <p className="pcos-audience-text">{activeTab.takeaways["with-pcos"]}</p>
            </article>
            <article className="pcos-audience-card without-pcos">
              <p className="pcos-audience-kicker">Women without PCOS</p>
              <p className="pcos-audience-text">{activeTab.takeaways["without-pcos"]}</p>
            </article>
            <article className="pcos-audience-card male-ally">
              <p className="pcos-audience-kicker">Male Allies &amp; Family</p>
              <p className="pcos-audience-text">{activeTab.takeaways["male-ally"]}</p>
            </article>
          </div>
        </div>
      )}
    </div>
  );
}
