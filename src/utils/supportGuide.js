export const EXPERT_ADVICE_SPECIALISTS = [
  {
    id: "gynecologist",
    shortLabel: "Gynecologist",
    title: "Gynecologist / OB-GYN",
    focus: "Menstrual cycles, ovulation patterns, ultrasound review, and personalised symptom care",
    whenToConsult:
      "Book a visit if cycles are consistently shorter than 21 days or longer than 35 days, periods skip 3+ months, bleeding becomes unusually heavy, or pelvic pain disrupts daily life.",
    clinicalAdvice: [
      "PCOS is assessed using your full cycle history, androgen signs, and targeted hormone labs—never from a single ultrasound report alone.",
      "Care options are tailored to what matters most to you right now: cycle regularity, uterine lining protection, acne or hair care, or future fertility planning.",
      "If periods arrive fewer than 4 times a year, discuss ways to safely protect the uterine lining.",
    ],
    questionsToAsk: [
      "Which diagnostic checks or blood tests make the most sense for my age and cycle pattern?",
      "What steps keep my uterine lining healthy if my cycles are spaced far apart?",
      "What are the benefits, timeline, and potential side effects of each treatment option?",
    ],
    allyTip:
      "Normalise gynecological visits at home—offer transport, help organise past cycle dates, and respect privacy during consultations.",
  },
  {
    id: "endocrinologist",
    shortLabel: "Endocrinologist",
    title: "Endocrinologist",
    focus: "Insulin resistance, thyroid balance, prolactin, and metabolic hormone signalling",
    whenToConsult:
      "Helpful when you notice strong afternoon energy crashes, darkening skin creases (acanthosis nigricans), family history of diabetes or thyroid conditions, or complex hormone labs.",
    clinicalAdvice: [
      "Clinicians check look-alike hormone conditions such as thyroid imbalance, elevated prolactin, or adrenal signals before confirming PCOS.",
      "Insulin sensitivity can be affected in both lean and larger bodies; fasting glucose, HbA1c, or glucose tolerance tests give clearer answers than guesswork.",
      "Combining gentle meal pairing and regular movement with clinician-prescribed medication works better than crash dieting.",
    ],
    questionsToAsk: [
      "Could thyroid, prolactin, or insulin markers be contributing to my fatigue or cycle changes?",
      "Which metabolic follow-up labs should I repeat over the next 6–12 months?",
      "How do we track metabolic improvements beyond body weight alone?",
    ],
    allyTip:
      "Remember that insulin resistance and fatigue are physiological hormone signals—never label tiredness or sugar cravings as laziness.",
  },
  {
    id: "dietitian",
    shortLabel: "Dietitian",
    title: "Registered Dietitian / Nutritionist",
    focus: "Realistic everyday meals, blood-sugar steadiness, and lab-backed nutrient support",
    whenToConsult:
      "Consider consulting a qualified dietitian if post-meal sluggishness is frequent, diet advice online feels conflicting, or you want PCOS-friendly Indian home meals without restriction.",
    clinicalAdvice: [
      "Aim to upgrade familiar home meals—pair roti, rice, or dosa with dal, paneer, curd, eggs, fish, and vegetables rather than eliminating whole food groups.",
      "Prioritise consistent meal timing and morning protein to reduce evening cravings and sleep disruption.",
      "Match supplements like Vitamin D, B12, iron, or inositol to actual lab findings instead of buying pricey miracle blends.",
    ],
    questionsToAsk: [
      "How can I build higher protein and fibre into my regular household breakfast and tiffin?",
      "Based on my blood reports, which nutrients should I focus on through food or supplements?",
      "What is a realistic weekly habit goal I can maintain alongside work or classes?",
    ],
    allyTip:
      "Help stock nutritious basics like nuts, seeds, curd, and seasonal vegetables at home, and avoid policing anyone's plate.",
  },
  {
    id: "counselor",
    shortLabel: "Mental Health",
    title: "Mental Health Counselor / Psychologist",
    focus: "Anxiety, mood dips, body-image pressure, and sustainable stress boundaries",
    whenToConsult:
      "Reach out if persistent worry, low mood, appearance distress, or social pressure around fertility or weight starts affecting sleep, relationships, or motivation.",
    clinicalAdvice: [
      "Higher rates of anxiety and depressive symptoms are well documented with PCOS; caring for emotional health is core medical care.",
      "Evidence-based therapy helps untangle self-worth from skin flares, weight stigma, or intrusive questions from relatives.",
      "Realistic pacing keeps symptom tracking empowering rather than turning daily habits into another source of perfectionism.",
    ],
    questionsToAsk: [
      "What practical tools help when cycle unpredictability or body comments spike my stress?",
      "How can I keep healthy routines steady without feeling overwhelmed on low-energy days?",
      "Should we coordinate sleep or fatigue strategies with my primary physician?",
    ],
    allyTip:
      "Listen with empathy before offering solutions, and step in calmly when extended family make unhelpful remarks about appearance or marriage.",
  },
  {
    id: "dermatologist",
    shortLabel: "Dermatologist",
    title: "Dermatologist",
    focus: "Hormonal jawline acne, excess facial or body hair, and scalp hair thinning",
    whenToConsult:
      "Helpful when persistent lower-face acne leaves marks, scalp parting widens, or unwanted hair growth causes discomfort despite gentle skincare.",
    clinicalAdvice: [
      "Androgen-related skin and hair symptoms respond best when targeted dermatological care works alongside internal hormone management.",
      "Give evidence-based routines 8–12 weeks to show steady progress, and skip harsh scrubs or viral DIY acids that damage the skin barrier.",
      "Safe medical and procedural options exist for unwanted hair growth and hair thinning—early evaluation widens your choices.",
    ],
    questionsToAsk: [
      "Do these acne or hair patterns suggest hormone sensitivity we should share with my gynecologist?",
      "Which gentle cleanser, sunscreen, and treatment actives fit safely with my medical plan?",
      "How soon should we review results before adjusting this routine?",
    ],
    allyTip:
      "Avoid commenting on acne flares, facial hair, or shedding; privacy and reassurance protect confidence while treatments take time.",
  },
];

export const URGENT_CHECKIN_SIGNS = [
  "Severe or sudden sharp lower-abdominal pain, fever, or dizziness",
  "Very heavy bleeding (soaking a pad or tampon every hour for 2+ hours) or periods lasting over 8 days",
  "Three or more missed periods in a row (when not pregnant)",
  "Persistent low mood, hopelessness, or thoughts of self-harm",
];

export const SUPPORT_NAVIGATION_CARDS = [
  {
    to: "/support/appointment",
    eyebrow: "APPOINTMENT PREP",
    title: "Prepare for an appointment",
    description:
      "Review and print practical questions to bring to your gynecologist, endocrinologist, or dietitian.",
  },
  {
    to: "/support/when-to-seek-help",
    eyebrow: "TIMELY CARE",
    title: "When to seek medical help",
    description:
      "Recognise cycle, bleeding, metabolic, and emotional patterns worth discussing promptly with a clinician.",
  },
  {
    to: "/support/resources",
    eyebrow: "TRUSTED READING",
    title: "Reliable resources",
    description:
      "Start with peer-reviewed guidelines and public health organisations rather than unverified social claims.",
  },
  {
    to: "/tracker",
    eyebrow: "DAILY PATTERNS",
    title: "Symptom & routine tracker",
    description:
      "Bring a 7-day summary of mood, fatigue, cycles, steps, protein, sleep, and water to your visit.",
  },
  {
    to: "/assistant",
    eyebrow: "SEARCH & VOICE COMPANION",
    title: "Ask & Talk",
    description:
      "Ask PCOS questions grounded in live Google Search or start a real-time voice conversation anytime.",
  },
];

export const SUPPORT_RESOURCES_LIST = [
  {
    title: "World Health Organization (WHO) — Polycystic Ovary Syndrome",
    summary: "Clear global public-health overview of prevalence, symptoms, diagnosis, and care.",
    url: "https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome",
  },
  {
    title: "International Evidence-Based Guideline for PCOS Assessment & Management",
    summary: "Peer-reviewed clinical consensus informing diagnosis, lifestyle care, and emotional wellbeing.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9826643/",
  },
  {
    title: "Indian Council of Medical Research (ICMR) — Health & Nutrition Guidance",
    summary: "Balanced Indian dietary principles emphasizing fibre, pulses, millets, and moderate lifestyle habits.",
    url: "https://www.icmr.gov.in/",
  },
];

export const SPECIALIST_DIRECTORY_FILTERS = [
  { id: "all", label: "All Specialists" },
  { id: "nutrition", label: "Nutritionists & Dietitians" },
  { id: "gynecology", label: "Gynecology & Tele-OPD" },
  { id: "endocrinology", label: "Endocrinology" },
  { id: "mental-health", label: "Mental Health" },
  { id: "dermatology", label: "Dermatology" },
];

export const SPECIALIST_DIRECTORY_PROFILES = [
  {
    id: "ida-dietitians",
    category: "nutrition",
    roleLabel: "Registered Dietitian (RD) Directory",
    title: "Indian Dietetic Association (IDA) — PCOS Nutritionists",
    credential: "IDA Registration Board · Medical Nutrition Therapy (MNT)",
    summary:
      "Locate nationally credentialed Registered Dietitians trained in clinical Medical Nutrition Therapy for insulin resistance, hormone balance, and everyday Indian meals.",
    expertise: [
      "Insulin-steady home meal pairing (roti, rice, dal, millets)",
      "Lab-guided micronutrient care (Vitamin D, B12, iron, folate)",
      "Non-restrictive PCOS eating plans without crash dieting",
    ],
    consultationMode: "In-person clinics & Telehealth across India",
    portalLabel: "Search IDA Registered Dietitians",
    portalUrl: "https://idaindia.com",
    reachNote:
      "Confirm the nutritionist's valid IDA Registration Board RD number and ask about clinical experience in PCOS and metabolic care.",
  },
  {
    id: "icmr-nin-nutrition",
    category: "nutrition",
    roleLabel: "Public Nutrition & Dietary Guidelines",
    title: "ICMR – National Institute of Nutrition (NIN)",
    credential: "Apex Indian Public Nutrition Research Body · Hyderabad",
    summary:
      "Reference food-first Indian nutritional standards emphasising whole grains, millets, pulses, vegetables, and healthy fats for long-term metabolic wellbeing.",
    expertise: [
      "Dietary Guidelines for Indians tailored to metabolic health",
      "Low-glycemic pulses, millets, and fibre-first food ratios",
      "Safe daily nutrient limits vs unverified supplement powders",
    ],
    consultationMode: "Public clinical nutrition guidance & reference portal",
    portalLabel: "Visit ICMR-NIN Official Portal",
    portalUrl: "https://www.nin.res.in",
    reachNote:
      "Access official Dietary Guidelines for Indians directly on the portal to review evidence-backed meal portions and nutrient benchmarks.",
  },
  {
    id: "esanjeevani-teleopd",
    category: "gynecology",
    roleLabel: "National Teleconsultation OPD",
    title: "eSanjeevani — Tele-Gynecology & Physician Consults",
    credential: "Ministry of Health & Family Welfare (MoHFW), Govt. of India",
    summary:
      "Free national telemedicine platform connecting patients directly to qualified doctors and specialist OB-GYN outpatient desks across public medical centres.",
    expertise: [
      "Evaluation of delayed, irregular, or missed menstrual cycles",
      "Initial PCOS screening labs and specialist referrals",
      "Accessible follow-up guidance & digital prescriptions",
    ],
    consultationMode: "Free online video OPD & local Health Centres",
    portalLabel: "Book Consultation on eSanjeevani",
    portalUrl: "https://esanjeevani.mohfw.gov.in/",
    reachNote:
      "Sign in with your mobile number to join the eSanjeevani OPD queue; keep your 7-day Symptom Tracker log ready to share.",
  },
  {
    id: "fogsi-gynecology",
    category: "gynecology",
    roleLabel: "Obstetrics & Gynecology Network",
    title: "FOGSI — Gynecologist Specialist Network",
    credential: "Federation of Obstetric & Gynaecological Societies of India",
    summary:
      "India's national professional body for obstetricians and gynecologists, setting clinical standards for menstrual disorders, ovulation care, and reproductive health.",
    expertise: [
      "Clinical PCOS diagnosis & ultrasound interpretation",
      "Endometrial lining protection during spaced cycles",
      "Adolescent, adult & fertility-stage PCOS care plans",
    ],
    consultationMode: "Member society clinics & hospitals nationwide",
    portalLabel: "Explore FOGSI Member Network",
    portalUrl: "https://www.fogsi.org",
    reachNote:
      "Check your city's local FOGSI member society directory or ask hospital OB-GYN desks for a clinician experienced in hormonal cycle care.",
  },
  {
    id: "esi-endocrinology",
    category: "endocrinology",
    roleLabel: "Hormone & Metabolism Specialists",
    title: "Endocrine Society of India (ESI)",
    credential: "National Endocrinology Society & PCOS Clinical Network",
    summary:
      "Board-certified endocrinologists specialising in insulin signalling, thyroid balance, prolactin, and androgen pathways across all body sizes.",
    expertise: [
      "Insulin resistance, HbA1c & glucose-tolerance evaluation",
      "Ruling out thyroid, prolactin, or adrenal look-alikes",
      "Long-term metabolic and cardiovascular risk prevention",
    ],
    consultationMode: "Tertiary hospital OPDs & specialist clinics",
    portalLabel: "Visit Endocrine Society of India",
    portalUrl: "https://www.endocrinesocietyindia.org",
    reachNote:
      "Look for DM or DNB Endocrinology credentials at teaching hospitals or clinics when metabolic fatigue or complex hormone labs appear.",
  },
  {
    id: "tele-manas-mental-health",
    category: "mental-health",
    roleLabel: "24/7 Emotional & Stress Counseling",
    title: "Tele MANAS — National Mental Health Support",
    credential: "MoHFW 24/7 Free Multilingual Counseling Service",
    summary:
      "Confidential, round-the-clock access to trained mental health counselors supporting anxiety, low mood, body-image stress, and chronic-condition burnout.",
    expertise: [
      "Support for PCOS-linked anxiety, worry & mood dips",
      "Coping with weight stigma or family pressure",
      "Guided referrals to in-person psychologists & psychiatrists",
    ],
    consultationMode: "24/7 Toll-Free Phone Helpline & Mobile App",
    helpline: "14416 / 1800-89-14416",
    portalLabel: "Open Tele MANAS Portal",
    portalUrl: "https://telemanas.mohfw.gov.in",
    reachNote:
      "Call 14416 or 1800-89-14416 any time at zero cost for private counseling in your preferred regional language.",
  },
  {
    id: "iadvl-dermatology",
    category: "dermatology",
    roleLabel: "Skin & Hair Specialists",
    title: "IADVL — Qualified Dermatologist Directory",
    credential: "Indian Association of Dermatologists, Venereologists & Leprologists",
    summary:
      "Searchable directory of qualified dermatologists equipped to manage androgen-sensitive acne, scalp hair thinning, and unwanted hair growth safely.",
    expertise: [
      "Jawline hormonal acne & post-acne mark prevention",
      "Evidence-based care for hirsutism & hair shedding",
      "Barrier-safe routines paired with internal hormone care",
    ],
    consultationMode: "City-wise specialist clinic lookup across India",
    portalLabel: "Find a Dermatologist on IADVL",
    portalUrl: "https://public.iadvl.org",
    reachNote:
      "Filter the 'Find a Dermatologist' directory by city and confirm MD, DNB, or DVD Dermatology qualifications before scheduling.",
  },
];

export function getSpecialistById(specialistId) {
  return (
    EXPERT_ADVICE_SPECIALISTS.find((item) => item.id === specialistId) ||
    EXPERT_ADVICE_SPECIALISTS[0]
  );
}

export function filterSpecialistProfiles(categoryId = "all", query = "") {
  const normalizedCategory = categoryId || "all";
  const q = String(query || "").trim().toLowerCase();

  return SPECIALIST_DIRECTORY_PROFILES.filter((profile) => {
    const matchesCategory =
      normalizedCategory === "all" || profile.category === normalizedCategory;
    if (!matchesCategory) return false;
    if (!q) return true;

    const haystack = [
      profile.title,
      profile.roleLabel,
      profile.credential,
      profile.summary,
      profile.consultationMode,
      profile.helpline || "",
      profile.reachNote,
      ...(profile.expertise || []),
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(q);
  });
}
