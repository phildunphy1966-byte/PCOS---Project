import React, { useEffect, useState } from "react";
import {
  getAgeGroupById,
  KNOW_YOUR_BODY_AGE_GROUPS,
  KNOW_YOUR_BODY_SECTIONS,
  KNOW_YOUR_BODY_SUBGUIDES,
  mapAgePreferenceToGroup,
} from "../utils/knowYourBody";

function KnowYourBodyDiagram({ sectionId, ageGroupId }) {
  if (sectionId === "menstrual-reproductive") {
    if (ageGroupId === "teens") {
      return (
        <svg
          viewBox="0 0 640 380"
          className="pcos-svg"
          role="img"
          aria-labelledby="kyb-mrh-teen-title kyb-mrh-teen-desc"
        >
          <title id="kyb-mrh-teen-title">Menstrual cycle basics for ages 10 to 17</title>
          <desc id="kyb-mrh-teen-desc">
            Four friendly stages showing brain signals, lining growth, gentle menstrual flow, and why cycles take 1 to 2 years to settle in teens.
          </desc>
          <rect width="640" height="380" rx="22" fill="#FAF7F2" />
          <text x="320" y="40" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="18" fill="#39243F">
            How Your Monthly Cycle Flows (Ages 10–17)
          </text>

          <rect x="26" y="68" width="136" height="148" rx="16" fill="#EAE3F0" stroke="#39243F" strokeWidth="2" />
          <text x="94" y="102" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="14" fill="#39243F">
            1. Brain Signal
          </text>
          <text x="94" y="130" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
            Sends gentle
          </text>
          <text x="94" y="148" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
            messages to
          </text>
          <text x="94" y="166" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
            your ovaries
          </text>

          <path d="M 166 142 H 180" stroke="#39243F" strokeWidth="3" strokeLinecap="round" />

          <rect x="182" y="68" width="136" height="148" rx="16" fill="#EDF2EB" stroke="#7A9475" strokeWidth="2" />
          <text x="250" y="102" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="14" fill="#355238">
            2. Egg Matures
          </text>
          <text x="250" y="130" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
            Uterus builds
          </text>
          <text x="250" y="148" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
            a soft cushion
          </text>
          <text x="250" y="166" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
            each cycle
          </text>

          <path d="M 322 142 H 336" stroke="#39243F" strokeWidth="3" strokeLinecap="round" />

          <rect x="338" y="68" width="136" height="148" rx="16" fill="#FAE8E4" stroke="#C66E62" strokeWidth="2" />
          <text x="406" y="102" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="14" fill="#8C3329">
            3. Period Flow
          </text>
          <text x="406" y="130" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
            Lining leaves as
          </text>
          <text x="406" y="148" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
            2–7 days of
          </text>
          <text x="406" y="166" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
            normal bleeding
          </text>

          <path d="M 478 142 H 492" stroke="#39243F" strokeWidth="3" strokeLinecap="round" />

          <rect x="494" y="68" width="120" height="148" rx="16" fill="#FFFFFF" stroke="#D5CAD7" strokeWidth="2" />
          <text x="554" y="102" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="14" fill="#39243F">
            4. Reset
          </text>
          <text x="554" y="130" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
            Cycle starts
          </text>
          <text x="554" y="148" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
            fresh on Day 1
          </text>
          <text x="554" y="166" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
            of flow
          </text>

          <rect x="26" y="244" width="588" height="102" rx="18" fill="#39243F" />
          <text x="320" y="282" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="16.5" fill="#FAF7F2">
            First 1–2 Years Are Practice Rounds: 21–45 Days Is Common
          </text>
          <text x="320" y="312" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fill="#E6DCE8">
            Write down Day 1 each month so you always feel prepared at school—never embarrassed
          </text>
        </svg>
      );
    }

    if (ageGroupId === "young-adults") {
      return (
        <svg
          viewBox="0 0 640 380"
          className="pcos-svg"
          role="img"
          aria-labelledby="kyb-mrh-ya-title kyb-mrh-ya-desc"
        >
          <title id="kyb-mrh-ya-title">Ovulation and 21 to 35 day cycle phases for ages 18 to 29</title>
          <desc id="kyb-mrh-ya-desc">
            Menstrual cycle hormone wave showing follicular estrogen rise, mid-cycle ovulation, and luteal progesterone phase over a 21 to 35 day rhythm.
          </desc>
          <rect width="640" height="380" rx="22" fill="#FAF7F2" />
          <text x="320" y="40" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="18" fill="#39243F">
            Adult Cycle Phases &amp; Hormone Wave (Ages 18–29)
          </text>

          <rect x="28" y="66" width="584" height="176" rx="18" fill="#FFFFFF" stroke="#E2D8E6" strokeWidth="2" />
          <line x1="56" y1="212" x2="584" y2="212" stroke="#D5CAD7" strokeWidth="2" />
          <line x1="306" y1="84" x2="306" y2="212" stroke="#C66E62" strokeWidth="2" strokeDasharray="6 4" />

          <path d="M 60 202 Q 180 200 286 108 Q 332 152 440 166 Q 532 178 580 202" fill="none" stroke="#39243F" strokeWidth="4" strokeLinecap="round" />
          <path d="M 60 204 Q 260 202 316 196 Q 430 98 518 136 Q 554 166 580 204" fill="none" stroke="#7A9475" strokeWidth="4" strokeLinecap="round" />

          <text x="160" y="102" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontWeight="700" fontSize="12.5" fill="#39243F">
            Estrogen builds lining
          </text>
          <text x="306" y="78" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontWeight="700" fontSize="12.5" fill="#8C3329">
            Ovulation
          </text>
          <text x="466" y="100" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontWeight="700" fontSize="12.5" fill="#355238">
            Progesterone stabilises
          </text>

          <text x="108" y="230" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#615A63">
            Period (Days 1–5)
          </text>
          <text x="234" y="230" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#615A63">
            Follicular
          </text>
          <text x="444" y="230" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fill="#615A63">
            Luteal (12–14 days)
          </text>

          <rect x="28" y="262" width="282" height="86" rx="16" fill="#EDF2EB" stroke="#CBD9C7" strokeWidth="1.5" />
          <text x="169" y="294" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="14.5" fill="#355238">
            Typical Range: 21–35 Days
          </text>
          <text x="169" y="320" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
            Steady ovulation keeps lining balanced
          </text>

          <rect x="330" y="262" width="282" height="86" rx="16" fill="#FAE8E4" stroke="#ECC6BE" strokeWidth="1.5" />
          <text x="471" y="294" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="14.5" fill="#8C3329">
            Delayed Ovulation Signal
          </text>
          <text x="471" y="320" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#514B53">
            Cycles &gt;35 days? Log &amp; discuss with doctor
          </text>
        </svg>
      );
    }

    return (
      <svg
        viewBox="0 0 640 380"
        className="pcos-svg"
        role="img"
        aria-labelledby="kyb-mrh-adult-title kyb-mrh-adult-desc"
      >
        <title id="kyb-mrh-adult-title">Mid-adult reproductive health and cycle transitions for ages 30 plus</title>
        <desc id="kyb-mrh-adult-desc">
          Three checkpoints for ages 30 plus: cycle protection, metabolic-reproductive health, and recognising natural perimenopause transitions versus signs to evaluate.
        </desc>
        <rect width="640" height="380" rx="22" fill="#FAF7F2" />
        <text x="320" y="40" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="18" fill="#39243F">
          Reproductive Care Across Decades (Ages 30+)
        </text>

        <rect x="26" y="70" width="180" height="156" rx="18" fill="#EAE3F0" stroke="#39243F" strokeWidth="2.5" />
        <text x="116" y="108" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#39243F">
          Ages 30–38
        </text>
        <text x="116" y="138" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          Keep lining healthy
        </text>
        <text x="116" y="158" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          (4+ periods / year)
        </text>
        <text x="116" y="194" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fontWeight="700" fill="#39243F">
          Check thyroid &amp; iron
        </text>

        <rect x="230" y="70" width="180" height="156" rx="18" fill="#EDF2EB" stroke="#7A9475" strokeWidth="2.5" />
        <text x="320" y="108" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#355238">
          Ages 38–45+
        </text>
        <text x="320" y="138" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          Early perimenopause
        </text>
        <text x="320" y="158" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          may shorten/vary cycles
        </text>
        <text x="320" y="194" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fontWeight="700" fill="#355238">
          Track new patterns
        </text>

        <rect x="434" y="70" width="180" height="156" rx="18" fill="#FAE8E4" stroke="#C66E62" strokeWidth="2.5" />
        <text x="524" y="108" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#8C3329">
          When to Review
        </text>
        <text x="524" y="138" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          Spotting between cycles,
        </text>
        <text x="524" y="158" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          heavy clots or 3+ skips
        </text>
        <text x="524" y="194" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fontWeight="700" fill="#8C3329">
          See your OB-GYN
        </text>

        <rect x="26" y="256" width="588" height="88" rx="18" fill="#39243F" />
        <text x="320" y="294" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="16.5" fill="#FAF7F2">
          Preventive gynecology &amp; metabolic check-ins protect every stage
        </text>
        <text x="320" y="321" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fill="#E6DCE8">
          Share 3 months of cycle notes with your clinician rather than waiting through discomfort
        </text>
      </svg>
    );
  }

  if (sectionId === "management-wellbeing") {
    if (ageGroupId === "teens") {
      return (
        <svg
          viewBox="0 0 640 380"
          className="pcos-svg"
          role="img"
          aria-labelledby="kyb-mw-teen-title kyb-mw-teen-desc"
        >
          <title id="kyb-mw-teen-title">Teen wellbeing and period care toolkit for ages 10 to 17</title>
          <desc id="kyb-mw-teen-desc">
            Four building blocks for teen girls: period comfort and hygiene kit, nutritious school meals, 8 to 10 hours of sleep and play, and asking trusted adults.
          </desc>
          <rect width="640" height="380" rx="22" fill="#FAF7F2" />
          <text x="320" y="40" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="18" fill="#39243F">
            Teen Wellbeing &amp; School-Day Care (Ages 10–17)
          </text>

          <rect x="26" y="64" width="282" height="106" rx="16" fill="#FAE8E4" stroke="#C66E62" strokeWidth="2" />
          <text x="48" y="98" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#8C3329">
            1. Period Comfort &amp; Hygiene
          </text>
          <text x="48" y="124" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
            Change pads every 4–6 hrs; use warm
          </text>
          <text x="48" y="144" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
            compresses &amp; keep spare bag at school
          </text>

          <rect x="332" y="64" width="282" height="106" rx="16" fill="#EDF2EB" stroke="#7A9475" strokeWidth="2" />
          <text x="354" y="98" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#355238">
            2. Fuel &amp; Breakfast Habits
          </text>
          <text x="354" y="124" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
            Eat breakfast before school (milk, eggs,
          </text>
          <text x="354" y="144" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
            sprouts, dal-roti, fruit &amp; water)
          </text>

          <rect x="26" y="186" width="282" height="106" rx="16" fill="#EAE3F0" stroke="#39243F" strokeWidth="2" />
          <text x="48" y="220" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#39243F">
            3. Sleep &amp; Joyful Play
          </text>
          <text x="48" y="246" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
            8–10 hrs sleep + sports, cycling or dance
          </text>
          <text x="48" y="266" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
            support growing mood &amp; hormones
          </text>

          <rect x="332" y="186" width="282" height="106" rx="16" fill="#FFFFFF" stroke="#D5CAD7" strokeWidth="2" />
          <text x="354" y="220" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#39243F">
            4. Speak Without Shame
          </text>
          <text x="354" y="246" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
            Ask parents, school nurses, or doctors
          </text>
          <text x="354" y="266" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
            early if severe pain disrupts class
          </text>

          <rect x="26" y="308" width="588" height="48" rx="14" fill="#39243F" />
          <text x="320" y="337" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="14.5" fill="#FAF7F2">
            No crash dieting during teen growth—strong habits beat strict rules
          </text>
        </svg>
      );
    }

    if (ageGroupId === "young-adults") {
      return (
        <svg
          viewBox="0 0 640 380"
          className="pcos-svg"
          role="img"
          aria-labelledby="kyb-mw-ya-title kyb-mw-ya-desc"
        >
          <title id="kyb-mw-ya-title">Daily balance loop for young adults ages 18 to 29</title>
          <desc id="kyb-mw-ya-desc">
            Three supportive lifestyle habits—protein and fibre meals, 9 to 10k steps plus strength, and 7 to 9 hours sleep—leading to steady energy and mood.
          </desc>
          <rect width="640" height="380" rx="22" fill="#FAF7F2" />
          <text x="320" y="40" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="18" fill="#39243F">
            Everyday Balance Loop (Ages 18–29)
          </text>

          <rect x="26" y="68" width="174" height="148" rx="18" fill="#EDF2EB" stroke="#7A9475" strokeWidth="2.5" />
          <text x="113" y="106" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#355238">
            Steady Plates
          </text>
          <text x="113" y="134" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
            1/2 veggies, protein
          </text>
          <text x="113" y="154" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
            &amp; whole grains
          </text>
          <text x="113" y="190" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fontWeight="700" fill="#355238">
            Tiffin &amp; hostel friendly
          </text>

          <rect x="233" y="68" width="174" height="148" rx="18" fill="#FAE8E4" stroke="#C66E62" strokeWidth="2.5" />
          <text x="320" y="106" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#8C3329">
            Steps &amp; Strength
          </text>
          <text x="320" y="134" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
            9–10k steps + 2–3x
          </text>
          <text x="320" y="154" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
            strength / week
          </text>
          <text x="320" y="190" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fontWeight="700" fill="#8C3329">
            Muscles absorb glucose
          </text>

          <rect x="440" y="68" width="174" height="148" rx="18" fill="#EAE3F0" stroke="#39243F" strokeWidth="2.5" />
          <text x="527" y="106" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#39243F">
            Sleep &amp; Calm
          </text>
          <text x="527" y="134" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
            7–9 hrs sleep + screen
          </text>
          <text x="527" y="154" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
            break before bed
          </text>
          <text x="527" y="190" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fontWeight="700" fill="#39243F">
            Lowers stress cortisol
          </text>

          <path d="M 113 218 V 242 L 220 264 M 320 218 V 264 M 527 218 V 242 L 420 264" fill="none" stroke="#39243F" strokeWidth="3" strokeLinecap="round" />

          <rect x="48" y="266" width="544" height="82" rx="18" fill="#39243F" />
          <text x="320" y="302" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="17" fill="#FAF7F2">
            Steadier energy, clearer mood &amp; regular doctor check-ins
          </text>
          <text x="320" y="328" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#E6DCE8">
            Track symptoms weekly so you see progress instead of stressing over perfection
          </text>
        </svg>
      );
    }

    return (
      <svg
        viewBox="0 0 640 380"
        className="pcos-svg"
        role="img"
        aria-labelledby="kyb-mw-adult-title kyb-mw-adult-desc"
      >
        <title id="kyb-mw-adult-title">Long-term wellness matrix for ages 30 plus</title>
        <desc id="kyb-mw-adult-desc">
          Four long-term health pillars for ages 30 plus: strength and bone density, iron and Vitamin D checks, stress boundaries, and preventive screening.
        </desc>
        <rect width="640" height="380" rx="22" fill="#FAF7F2" />
        <text x="320" y="40" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="18" fill="#39243F">
          Strength &amp; Preventive Wellbeing (Ages 30+)
        </text>

        <rect x="26" y="64" width="282" height="106" rx="16" fill="#EDF2EB" stroke="#7A9475" strokeWidth="2" />
        <text x="48" y="98" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#355238">
          Muscle &amp; Bone Protection
        </text>
        <text x="48" y="124" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          Strength training 2–3x/week preserves
        </text>
        <text x="48" y="144" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          lean muscle &amp; long-term insulin response
        </text>

        <rect x="332" y="64" width="282" height="106" rx="16" fill="#FAE8E4" stroke="#C66E62" strokeWidth="2" />
        <text x="354" y="98" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#8C3329">
          Lab-Backed Nutrients
        </text>
        <text x="354" y="124" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          Monitor Vitamin D, B12, iron &amp; calcium
        </text>
        <text x="354" y="144" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          alongside fibre-rich home nutrition
        </text>

        <rect x="26" y="186" width="282" height="106" rx="16" fill="#EAE3F0" stroke="#39243F" strokeWidth="2" />
        <text x="48" y="220" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#39243F">
          Shared Family Support
        </text>
        <text x="48" y="246" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          Share caregiving &amp; home chores so rest
        </text>
        <text x="48" y="266" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          and evening walks stay protected
        </text>

        <rect x="332" y="186" width="282" height="106" rx="16" fill="#FFFFFF" stroke="#D5CAD7" strokeWidth="2" />
        <text x="354" y="220" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#39243F">
          Routine Health Screenings
        </text>
        <text x="354" y="246" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          Regular HbA1c, thyroid, lipid &amp; blood
        </text>
        <text x="354" y="266" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          pressure check-ins support longevity
        </text>

        <rect x="26" y="308" width="588" height="48" rx="14" fill="#39243F" />
        <text x="320" y="337" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="14.5" fill="#FAF7F2">
          Preventive, partner-supported care keeps energy strong across every decade
        </text>
      </svg>
    );
  }

  // Section 03: hormones-metabolism
  if (ageGroupId === "teens") {
    return (
      <svg
        viewBox="0 0 640 380"
        className="pcos-svg"
        role="img"
        aria-labelledby="kyb-hm-teen-title kyb-hm-teen-desc"
      >
        <title id="kyb-hm-teen-title">How hormone messengers and insulin work for ages 10 to 17</title>
        <desc id="kyb-hm-teen-desc">
          Friendly illustration explaining hormones as body messengers and insulin as a key letting food energy enter muscle and brain cells.
        </desc>
        <rect width="640" height="380" rx="22" fill="#FAF7F2" />
        <text x="320" y="40" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="18" fill="#39243F">
          Body Messengers Made Simple (Ages 10–17)
        </text>

        <rect x="26" y="68" width="174" height="156" rx="18" fill="#EAE3F0" stroke="#39243F" strokeWidth="2.5" />
        <text x="113" y="106" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#39243F">
          Brain Mailbox
        </text>
        <text x="113" y="134" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          Sends LH &amp; FSH
        </text>
        <text x="113" y="154" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          hormone notes down
        </text>
        <text x="113" y="192" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fontWeight="700" fill="#39243F">
          Guides growth
        </text>

        <path d="M 204 146 H 228 M 220 138 L 228 146 L 220 154" fill="none" stroke="#39243F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="233" y="68" width="174" height="156" rx="18" fill="#FAE8E4" stroke="#C66E62" strokeWidth="2.5" />
        <text x="320" y="106" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#8C3329">
          Ovaries Reply
        </text>
        <text x="320" y="134" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          Release estrogen &amp;
        </text>
        <text x="320" y="154" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          progesterone signals
        </text>
        <text x="320" y="192" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fontWeight="700" fill="#8C3329">
          Regulates periods
        </text>

        <path d="M 412 146 H 436 M 428 138 L 436 146 L 428 154" fill="none" stroke="#39243F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="440" y="68" width="174" height="156" rx="18" fill="#EDF2EB" stroke="#7A9475" strokeWidth="2.5" />
        <text x="527" y="106" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#355238">
          Insulin Key
        </text>
        <text x="527" y="134" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          Unlocks cells so food
        </text>
        <text x="527" y="154" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          becomes study fuel
        </text>
        <text x="527" y="192" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="11.5" fontWeight="700" fill="#355238">
          Feeds muscles &amp; brain
        </text>

        <rect x="26" y="254" width="588" height="90" rx="18" fill="#39243F" />
        <text x="320" y="292" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="16.5" fill="#FAF7F2">
          Hormones connect your cycle, mood, skin, and daily energy
        </text>
        <text x="320" y="320" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fill="#E6DCE8">
          Balanced meals and sports keep insulin keys working smoothly during puberty
        </text>
      </svg>
    );
  }

  if (ageGroupId === "young-adults") {
    return (
      <svg
        viewBox="0 0 640 380"
        className="pcos-svg"
        role="img"
        aria-labelledby="kyb-hm-ya-title kyb-hm-ya-desc"
      >
        <title id="kyb-hm-ya-title">Brain, ovary, and insulin hormone loop for ages 18 to 29</title>
        <desc id="kyb-hm-ya-desc">
          Diagram connecting brain LH/FSH signals, ovarian hormones, and pancreatic insulin response to energy, skin, and ovulation balance.
        </desc>
        <rect width="640" height="380" rx="22" fill="#FAF7F2" />
        <text x="320" y="40" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="18" fill="#39243F">
          Brain–Ovary–Insulin Crosstalk (Ages 18–29)
        </text>

        <rect x="210" y="64" width="220" height="74" rx="16" fill="#EAE3F0" stroke="#39243F" strokeWidth="2.5" />
        <text x="320" y="96" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#39243F">
          Hypothalamus &amp; Pituitary
        </text>
        <text x="320" y="120" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          Coordinates LH, FSH &amp; cycle timing
        </text>

        <path d="M 250 140 L 175 186 M 390 140 L 465 186" stroke="#39243F" strokeWidth="3" strokeLinecap="round" />

        <rect x="30" y="188" width="265" height="90" rx="16" fill="#FAE8E4" stroke="#C66E62" strokeWidth="2.5" />
        <text x="162" y="220" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#8C3329">
          Ovaries (Follicles)
        </text>
        <text x="162" y="244" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          Produce estrogen, progesterone
        </text>
        <text x="162" y="262" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          and normal levels of androgens
        </text>

        <rect x="345" y="188" width="265" height="90" rx="16" fill="#EDF2EB" stroke="#7A9475" strokeWidth="2.5" />
        <text x="477" y="220" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#355238">
          Pancreas &amp; Insulin
        </text>
        <text x="477" y="244" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          High insulin resistance can nudge
        </text>
        <text x="477" y="262" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
          ovaries to raise androgen output
        </text>

        <path d="M 342 233 H 299 M 307 225 L 299 233 L 307 241" fill="none" stroke="#8C3329" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="30" y="298" width="580" height="58" rx="16" fill="#39243F" />
        <text x="320" y="332" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="14.5" fill="#FAF7F2">
          Daily walking &amp; balanced carbs calm insulin, supporting steadier skin and cycles
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 640 380"
      className="pcos-svg"
      role="img"
      aria-labelledby="kyb-hm-adult-title kyb-hm-adult-desc"
    >
      <title id="kyb-hm-adult-title">Endocrine and metabolic integration for ages 30 plus</title>
      <desc id="kyb-hm-adult-desc">
        Integrated endocrine system view for ages 30 plus showing how thyroid, cortisol stress load, insulin sensitivity, and reproductive hormones work together.
      </desc>
      <rect width="640" height="380" rx="22" fill="#FAF7F2" />
      <text x="320" y="40" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="18" fill="#39243F">
        Whole-Body Endocrine Team (Ages 30+)
      </text>

      <rect x="26" y="68" width="180" height="150" rx="18" fill="#EAE3F0" stroke="#39243F" strokeWidth="2.5" />
      <text x="116" y="106" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#39243F">
        Thyroid &amp; Brain
      </text>
      <text x="116" y="136" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
        Sets resting energy,
      </text>
      <text x="116" y="156" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
        mood &amp; cycle tempo
      </text>

      <rect x="230" y="68" width="180" height="150" rx="18" fill="#EDF2EB" stroke="#7A9475" strokeWidth="2.5" />
      <text x="320" y="106" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#355238">
        Muscle &amp; Insulin
      </text>
      <text x="320" y="136" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
        Protects fasting sugar
      </text>
      <text x="320" y="156" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
        &amp; heart-health markers
      </text>

      <rect x="434" y="68" width="180" height="150" rx="18" fill="#FAE8E4" stroke="#C66E62" strokeWidth="2.5" />
      <text x="524" y="106" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="15" fill="#8C3329">
        Stress &amp; Cortisol
      </text>
      <text x="524" y="136" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
        Sleep &amp; rest buffer
      </text>
      <text x="524" y="156" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="12.5" fill="#514B53">
        daily cortisol load
      </text>

      <rect x="26" y="246" width="588" height="98" rx="18" fill="#39243F" />
      <text x="320" y="286" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontWeight="700" fontSize="16.5" fill="#FAF7F2">
        Routine HbA1c, thyroid &amp; lipid checks prevent silent metabolic strain
      </text>
      <text x="320" y="315" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fill="#E6DCE8">
        Understanding your body helps separate age-related hormone changes from treatable gaps
      </text>
    </svg>
  );
}

export default function KnowYourBodySection({
  agePreference = "",
  onInteract,
  onNavigate,
}) {
  const [selectedAgeGroupId, setSelectedAgeGroupId] = useState(() =>
    mapAgePreferenceToGroup(agePreference)
  );

  useEffect(() => {
    if (agePreference) {
      setSelectedAgeGroupId(mapAgePreferenceToGroup(agePreference));
    }
  }, [agePreference]);

  const activeAgeGroup = getAgeGroupById(selectedAgeGroupId);

  const handleSelectAgeGroup = (groupId) => {
    setSelectedAgeGroupId(groupId);
    if (onInteract) onInteract();
  };

  const go = (to) => {
    if (onNavigate) onNavigate(to);
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(`kyb-${sectionId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (onInteract) onInteract();
  };

  return (
    <div className="kyb-hub" data-testid="know-your-body-hub">
      <div className="kyb-controls-card">
        <div className="kyb-controls-top">
          <div>
            <p className="eyebrow">AGE-ADAPTED VISUAL GUIDE · THREE SECTIONS</p>
            <h2>Choose your age group to adapt every diagram</h2>
            <p className="pcos-tabular-sub">
              Body literacy looks different at 14, 24, and 38. Pick an age stage below to see visual diagrams and explanations tailored to that stage across all three sections.
            </p>
          </div>
          <div className="kyb-jump-links" aria-label="Jump to section">
            {KNOW_YOUR_BODY_SECTIONS.map((sec) => (
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

        <div
          className="kyb-age-tabs"
          role="tablist"
          aria-label="Age group for body literacy diagrams"
          data-testid="kyb-age-switcher"
        >
          {KNOW_YOUR_BODY_AGE_GROUPS.map((group) => {
            const active = activeAgeGroup.id === group.id;
            return (
              <button
                key={group.id}
                type="button"
                role="tab"
                aria-selected={active}
                className={active ? "pcos-pillar-btn active kyb-age-btn" : "pcos-pillar-btn kyb-age-btn"}
                onClick={() => handleSelectAgeGroup(group.id)}
              >
                <span>{group.shortLabel}</span>
                <span>{group.label.split("· ")[1] || group.label}</span>
              </button>
            );
          })}
        </div>

        <p className="kyb-age-note">{activeAgeGroup.description}</p>
      </div>

      {KNOW_YOUR_BODY_SECTIONS.map((section) => {
        const ageContent = section.byAge[activeAgeGroup.id];
        return (
          <section
            key={section.id}
            id={`kyb-${section.id}`}
            className="kyb-section-card"
            data-testid={`kyb-section-${section.id}`}
            aria-labelledby={`kyb-title-${section.id}`}
          >
            <div className="kyb-section-head">
              <div>
                <p className="eyebrow">{section.eyebrow}</p>
                <h2 id={`kyb-title-${section.id}`}>{section.title}</h2>
                <p className="pcos-copy-summary">{section.lead}</p>
              </div>
              <span className="kyb-age-indicator">
                Diagram tailored for: <strong>{activeAgeGroup.shortLabel}</strong>
              </span>
            </div>

            <div className="pcos-stage-grid kyb-stage-grid">
              <div className="pcos-visual-box">
                <KnowYourBodyDiagram
                  sectionId={section.id}
                  ageGroupId={activeAgeGroup.id}
                />
              </div>

              <div className="pcos-copy-box">
                <p className="eyebrow">{activeAgeGroup.shortLabel.toUpperCase()} GUIDE</p>
                <h3>{ageContent.diagramTitle}</h3>
                <p className="pcos-copy-summary">{ageContent.diagramSubtitle}</p>

                <ul className="pcos-steps-list">
                  {ageContent.keyPoints.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>

                <div className="kyb-compare-grid">
                  <div className="kyb-compare-box normal">
                    <strong>Common &amp; expected</strong>
                    <p>{ageContent.normalNote}</p>
                  </div>
                  <div className="kyb-compare-box checkin">
                    <strong>Worth checking with a doctor</strong>
                    <p>{ageContent.checkInNote}</p>
                  </div>
                </div>

                <div className="pcos-tabular-links">
                  {section.relatedLinks.map((lnk, idx) => (
                    <a
                      key={lnk.to}
                      href={lnk.to}
                      className={idx === 0 ? "btn primary" : "btn secondary"}
                      onClick={(e) => {
                        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                        e.preventDefault();
                        go(lnk.to);
                      }}
                    >
                      {lnk.label} →
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="panel kyb-guides-panel" aria-labelledby="kyb-guides-heading">
        <p className="eyebrow">TRACKABLE DEEP-DIVE GUIDES</p>
        <h2 id="kyb-guides-heading">Explore the four foundational body guides</h2>
        <p>Read any guide below and mark it completed to build your daily learning streak and progress score.</p>
        <div className="support-nav-grid kyb-subguides-grid">
          {KNOW_YOUR_BODY_SUBGUIDES.map((guide, idx) => (
            <a
              key={guide.to}
              href={guide.to}
              className="topic-card support-nav-card"
              onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                e.preventDefault();
                go(guide.to);
              }}
            >
              <span className="card-no">0{idx + 1} · BODY LITERACY</span>
              <h3>{guide.title}</h3>
              <p>{guide.summary}</p>
              <span className="arrow">↗</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
