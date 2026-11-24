export const KNOW_YOUR_BODY_AGE_GROUPS = [
  {
    id: "teens",
    label: "Ages 10–17 · Teens & First Cycles",
    shortLabel: "Ages 10–17",
    description:
      "Clear, friendly visuals for girls starting periods, navigating irregular early cycles, and building everyday body confidence.",
  },
  {
    id: "young-adults",
    label: "Ages 18–29 · Young Adults",
    shortLabel: "Ages 18–29",
    description:
      "Understand monthly ovulation hormones, spot persistent cycle or skin signals early, and balance college or work routines.",
  },
  {
    id: "adults",
    label: "Ages 30+ · Mid-Adult & Beyond",
    shortLabel: "Ages 30+",
    description:
      "Long-term cycle, metabolic, and bone/heart support alongside recognising natural hormonal transitions over time.",
  },
];

export const KNOW_YOUR_BODY_SECTIONS = [
  {
    id: "menstrual-reproductive",
    number: "01",
    shortLabel: "Menstrual & Reproductive Health",
    eyebrow: "SECTION 01 · MENSTRUAL & REPRODUCTIVE HEALTH",
    title: "Menstrual & reproductive health",
    lead:
      "How the uterus, ovaries, and brain communicate across each menstrual cycle—and how healthy cycle rhythms naturally look different across age stages.",
    relatedLinks: [
      { to: "/know-your-body/menstrual-cycle", label: "Read Menstrual Cycle Guide" },
      { to: "/know-your-body/anatomy", label: "Read Reproductive Anatomy Guide" },
    ],
    byAge: {
      teens: {
        diagramTitle: "Your Monthly Cycle Basics (Ages 10–17)",
        diagramSubtitle:
          "During the first 1–2 years after menarche, brain-to-ovary signals are still warming up—periods every 21–45 days can be completely normal.",
        keyPoints: [
          "The uterus builds a soft cushion every cycle and sheds it gently as menstrual flow when pregnancy does not occur.",
          "Cycle lengths often fluctuate in the first 12–24 months while puberty hormones settle into a steady rhythm.",
          "Tracking start dates on a private calendar or tracker helps you prepare for school days and spot patterns calmly.",
        ],
        normalNote: "Flow lasting 2–7 days; mild lower-belly cramps relieved by warmth or rest.",
        checkInNote: "Periods missing 3+ months in a row after year 2, or pain that stops school/play.",
      },
      "young-adults": {
        diagramTitle: "Ovulation & 21–35 Day Cycle Waves (Ages 18–29)",
        diagramSubtitle:
          "In young adulthood, estrogen builds the uterine lining before ovulation and progesterone stabilises it afterward.",
        keyPoints: [
          "A typical adult cycle spans 21–35 days, guided smoothly by follicle maturation, ovulation, and the luteal phase.",
          "Delayed ovulation (common in PCOS or high stress) stretches cycles past 35 days and shifts PMS timing.",
          "Knowing your normal flow and cervical cues helps you distinguish brief exam/travel stress from persistent hormone changes.",
        ],
        normalNote: "Predictable cycles between 21–35 days with manageable PMS or mild tiredness.",
        checkInNote: "Cycles repeatedly over 35 days, heavy bleeding soaking pads hourly, or persistent pelvic pain.",
      },
      adults: {
        diagramTitle: "Long-Term Reproductive & Cycle Care (Ages 30+)",
        diagramSubtitle:
          "In your 30s and 40s, regular ovulation protects uterine lining health while natural perimenopausal shifts begin gradually.",
        keyPoints: [
          "Consistent cycles help keep the uterine lining healthy; spaced-out periods (<4/year) deserve gynecological review.",
          "PCOS cycles sometimes become more regular in the late 30s–40s, though metabolic health stays important.",
          "Sudden heavier flow, spotting between periods, or hot flashes warrant routine clinical evaluation rather than guessing.",
        ],
        normalNote: "Gradual, mild shifts in cycle length or flow intensity with age.",
        checkInNote: "Bleeding between periods, very heavy clots, or missing 3+ non-pregnant cycles.",
      },
    },
  },
  {
    id: "management-wellbeing",
    number: "02",
    shortLabel: "Management & Wellbeing",
    eyebrow: "SECTION 02 · MANAGEMENT & WELLBEING",
    title: "Management & wellbeing",
    lead:
      "Practical daily habits—from period hygiene and pain comfort to balanced food, physical movement, sleep, and stress support—tailored to your life stage.",
    relatedLinks: [
      { to: "/pcos/management", label: "Explore Managing PCOS Guide" },
      { to: "/tracker", label: "Open Daily Symptom & Routine Tracker" },
    ],
    byAge: {
      teens: {
        diagramTitle: "Teen Everyday Care & Period Comfort (Ages 10–17)",
        diagramSubtitle:
          "Simple daily habits keep energy steady at school and remove fear or stigma around periods.",
        keyPoints: [
          "Period care kit: carry spare pads/menstrual products, change every 4–6 hours, and stay hydrated all school day.",
          "Fuel growing bodies: eat a real protein breakfast (milk, eggs, paneer, sprouts, dal-roti) and sleep 8–10 hours.",
          "Calm cramps & stress: warm water bags, light stretching, and talking openly with a parent, teacher, or doctor.",
        ],
        normalNote: "Mild pre-period hunger, emotional sensitivity, or tiredness relieved by sleep and food.",
        checkInNote: "Severe school-missing cramps, constant exhaustion, or worry around acne/body changes.",
      },
      "young-adults": {
        diagramTitle: "Energy, Routine & Hormone Balance (Ages 18–29)",
        diagramSubtitle:
          "Consistent meal pairing, movement, sleep, and emotional boundaries protect energy through college and early work life.",
        keyPoints: [
          "Pair meals: half veggies + protein + whole carbs (dal, curd, paneer, eggs, millets) steadies post-lunch focus.",
          "Move gently daily: aim toward 9–10k steps or 15-min post-meal walks plus 2–3 weekly strength sessions.",
          "Protect 7–9 hours of sleep and talk with supportive partners, friends, or counselors when stress builds.",
        ],
        normalNote: "Steady energy across work/study weeks with flexible, realistic wellness habits.",
        checkInNote: "Unrelenting afternoon crashes, persistent low mood/anxiety, or unmanageable sleep disruption.",
      },
      adults: {
        diagramTitle: "Whole-Body Resilience & Preventive Care (Ages 30+)",
        diagramSubtitle:
          "Strength, micronutrient adequacy, stress recovery, and routine check-ups sustain bone, heart, and hormonal health.",
        keyPoints: [
          "Prioritise muscle & bone: twice-weekly resistance exercise paired with iron, calcium, Vitamin D, and B12 rich meals.",
          "Guard nervous-system rest: short daily walks, boundaries around work/caregiving load, and consistent bedtimes.",
          "Schedule preventive labs (thyroid, HbA1c, lipids, Vitamin D) with your physician rather than self-prescribing supplements.",
        ],
        normalNote: "Feeling nourished with sustainable movement and restorative sleep routines.",
        checkInNote: "Ongoing fatigue, sudden weight/hair shifts, elevated blood pressure, or mood burnout.",
      },
    },
  },
  {
    id: "hormones-metabolism",
    number: "03",
    shortLabel: "Hormones, Anatomy & Metabolism",
    eyebrow: "SECTION 03 · HORMONES, ANATOMY & METABOLISM",
    title: "Hormones, anatomy & metabolism",
    lead:
      "How chemical messengers link the brain, ovaries, thyroid, and insulin response—explaining why reproductive health affects whole-body energy.",
    relatedLinks: [
      { to: "/know-your-body/hormones", label: "Read Hormones Guide" },
      { to: "/know-your-body/metabolism", label: "Read Insulin & Metabolism Guide" },
    ],
    byAge: {
      teens: {
        diagramTitle: "How Body Messengers Talk to Each Other (Ages 10–17)",
        diagramSubtitle:
          "Think of hormones as friendly messages: the brain signals the ovaries, while insulin acts as a key opening cells for food energy.",
        keyPoints: [
          "Your brain (pituitary gland) sends gentle signals (FSH and LH) telling the ovaries when to mature an egg.",
          "Insulin is a helper key that moves sugar from food into your muscles and brain so you can study and play.",
          "Puberty temporarily shifts insulin sensitivity—nutritious meals and active play keep those keys working smoothly.",
        ],
        normalNote: "Natural growth spurts, skin changes, and maturing hormone communication.",
        checkInNote: "Dark velvety skin patches on the neck/underarms, very persistent acne, or extreme fatigue.",
      },
      "young-adults": {
        diagramTitle: "Brain–Ovary–Insulin Crosstalk (Ages 18–29)",
        diagramSubtitle:
          "When cells resist insulin slightly, extra insulin in the blood can nudge ovaries to produce more androgens—explaining PCOS links.",
        keyPoints: [
          "The brain, ovaries, and pancreas work like one connected team—metabolic and reproductive hormones influence each other.",
          "Insulin resistance can occur at any body weight; active muscles absorb glucose efficiently even without extreme workouts.",
          "Clinicians check thyroid, prolactin, and glucose alongside androgen signs to get the complete picture.",
        ],
        normalNote: "Balanced hunger signals, steady recovery after exercise, and predictable cycle cues.",
        checkInNote: "Strong post-meal sleepiness, jawline acne, excess facial hair, or widening hair part.",
      },
      adults: {
        diagramTitle: "Metabolic & Endocrine Health Across Decades (Ages 30+)",
        diagramSubtitle:
          "Caring for insulin sensitivity, thyroid function, and cortisol lowers long-term diabetes and heart risk regardless of PCOS.",
        keyPoints: [
          "Insulin sensitivity naturally responds to muscle mass, fibre intake, sleep quality, and lower chronic stress.",
          "Thyroid and glucose screening become increasingly valuable in your 30s and 40s for both PCOS and non-PCOS readers.",
          "Evidence-based nutrition, daily walking, and clinician-guided care protect long-term cardiometabolic wellbeing.",
        ],
        normalNote: "Stable fasting glucose, thyroid balance, and consistent energy through the day.",
        checkInNote: "Elevated HbA1c/fasting glucose, high cholesterol, hair shedding, or family metabolic risks.",
      },
    },
  },
];

export const KNOW_YOUR_BODY_SUBGUIDES = [
  {
    to: "/know-your-body/anatomy",
    title: "Reproductive anatomy",
    summary: "A calm introduction to the organs commonly discussed in menstrual and reproductive health.",
  },
  {
    to: "/know-your-body/menstrual-cycle",
    title: "The menstrual cycle",
    summary: "How brain, ovary, and uterine phases coordinate across a cycle.",
  },
  {
    to: "/know-your-body/hormones",
    title: "Hormones and communication",
    summary: "Learn how chemical messengers carry signals between glands and cells.",
  },
  {
    to: "/know-your-body/metabolism",
    title: "Insulin and metabolism",
    summary: "Understand glucose energy uptake and how insulin links to overall hormone health.",
  },
];

export function mapAgePreferenceToGroup(savedAge = "") {
  const value = String(savedAge || "").trim();
  if (value === "Under 18") return "teens";
  if (value === "18–21" || value === "22–25" || value === "26–30") {
    return "young-adults";
  }
  if (value === "31–35" || value === "Above 35") return "adults";
  return "teens";
}

export function getAgeGroupById(ageGroupId) {
  return (
    KNOW_YOUR_BODY_AGE_GROUPS.find((group) => group.id === ageGroupId) ||
    KNOW_YOUR_BODY_AGE_GROUPS[0]
  );
}

export function getKnowYourBodySection(sectionId) {
  return (
    KNOW_YOUR_BODY_SECTIONS.find((sec) => sec.id === sectionId) ||
    KNOW_YOUR_BODY_SECTIONS[0]
  );
}
