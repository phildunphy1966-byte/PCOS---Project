export const UNDERSTANDING_PCOS_TABS = [
  {
    id: "managing",
    label: "Managing PCOS",
    eyebrow: "EVERYDAY CARE & LIFESTYLE",
    title: "Managing PCOS step by step",
    lead:
      "Daily habits work best when they are realistic and gentle. Explore how nutrition, movement, sleep, hydration, stress care, and medical check-ins fit together for everyone.",
  },
  {
    id: "nutrition",
    label: "Nutritional Tips",
    eyebrow: "FOOD PAIRING & EVERYDAY SWAPS",
    title: "Practical nutritional tips for steady energy & hormones",
    lead:
      "PCOS-friendly nutrition is about adding fibre, protein, and smart meal pairings to everyday home food—not starving or cutting out entire cuisines.",
  },
  {
    id: "overview",
    label: "What is PCOS?",
    eyebrow: "BODY LITERACY BASICS",
    title: "How PCOS affects hormone signalling",
    lead:
      "Polycystic ovary syndrome (PCOS) is a common hormonal and metabolic condition involving communication between the brain, ovaries, and insulin response. Experiences vary widely.",
    diagram: "/diagrams/hormone-communication.svg",
    diagramAlt: "Educational diagram showing hormone communication between brain and ovaries",
    points: [
      "Affects roughly 1 in 10 women of reproductive age, though symptoms differ from person to person.",
      "Involves interrelated signals: reproductive hormones (LH, FSH, androgens) and metabolic hormones like insulin.",
      "Understanding the biology helps women without PCOS stay informed and helps male allies replace stigma with practical care.",
    ],
    takeaways: {
      "with-pcos": "Your symptoms are biological signals, not a personal failing. Small, steady habits can support your hormones over time.",
      "without-pcos": "Learning how cycles and hormones work builds body literacy early and helps you notice patterns worth discussing with a doctor.",
      "male-ally": "PCOS is not just about periods—it affects energy, mood, metabolism, and skin. Listening without judgement makes a real difference.",
    },
  },
  {
    id: "features",
    label: "Features & Signals",
    eyebrow: "SIGNS TO RECOGNIZE",
    title: "Common features and cycle patterns",
    lead:
      "Not everyone with PCOS has the same symptoms. Clinicians look at patterns over time rather than a single isolated sign.",
    diagram: "/diagrams/menstrual-cycle.svg",
    diagramAlt: "Educational diagram of menstrual cycle phases and ovulation timing",
    points: [
      "Irregular, delayed, or missed menstrual cycles due to less predictable ovulation.",
      "Signs of higher androgen activity, such as persistent acne, facial or body hair changes, or scalp hair thinning.",
      "Fatigue, energy dips after meals, mood shifts, or multiple small follicles seen on an ultrasound.",
    ],
    takeaways: {
      "with-pcos": "Tracking cycle length, fatigue, and skin flares helps you spot your own personal pattern instead of comparing yourself to others.",
      "without-pcos": "Cycle lengths naturally vary between 21 and 35 days; knowing your baseline helps you recognise persistent changes early.",
      "male-ally": "Energy crashes, period pain, or mood fluctuations are real physical effects—offering patience and practical help matters more than unsolicited advice.",
    },
  },
  {
    id: "diagnosis",
    label: "Diagnosis & Health",
    eyebrow: "ASSESSMENT & LONG-TERM CARE",
    title: "Diagnosis, metabolism, and long-term health",
    lead:
      "PCOS cannot be confirmed from a single online quiz or ultrasound alone. A qualified healthcare professional reviews history, symptoms, and lab tests while ruling out other causes.",
    diagram: "/diagrams/insulin-metabolism.svg",
    diagramAlt: "Educational diagram showing glucose in the bloodstream, insulin signal, and body cells",
    points: [
      "Clinicians typically assess cycle history, hormone/blood tests (such as thyroid, prolactin, and glucose/insulin markers), and ultrasound when appropriate.",
      "Insulin resistance can be associated with PCOS across all body sizes, making balanced meals and movement helpful even for lean individuals.",
      "Proactive follow-ups support long-term metabolic, cardiovascular, and emotional wellbeing.",
    ],
    takeaways: {
      "with-pcos": "Bring a 2–3 month log of cycles, symptoms, and questions to your gynecologist or endocrinologist for clearer conversations.",
      "without-pcos": "Routine check-ups and knowing your family metabolic history protect long-term health regardless of PCOS status.",
      "male-ally": "Offer to accompany partners or family members to appointments, help write down questions, and support follow-up lifestyle routines at home.",
    },
  },
];

export const AUDIENCE_PERSPECTIVES = [
  { id: "all", label: "All Readers" },
  { id: "with-pcos", label: "Women with PCOS" },
  { id: "without-pcos", label: "Women without PCOS" },
  { id: "male-ally", label: "Male Allies & Family" },
];

export const MANAGEMENT_PILLARS = [
  {
    id: "diet",
    shortLabel: "Balanced Diet",
    title: "Balancing your diet for steady energy",
    summary:
      "Focus on pairing fibre, protein, and complex carbohydrates at every meal so blood sugar rises gently instead of spiking and crashing.",
    illustrationId: "diet",
    dailyFocus: [
      "Fill half your plate with non-starchy vegetables or salad for fibre.",
      "Include a clear protein source each meal (dal, paneer, eggs, fish, curd, tofu, or legumes).",
      "Choose whole-grain or millet carbs (roti, jowar, bajra, oats, brown rice) with healthy fats like nuts or seeds.",
    ],
    gentleReminder:
      "Skip extreme starvation or cutting out entire food groups—skipping meals often worsens cravings, fatigue, and stress hormones.",
    perspectives: [
      {
        audienceId: "with-pcos",
        audienceLabel: "Women with PCOS",
        guidance:
          "Pairing carbs with protein and fibre reduces insulin spikes, which helps calm androgen signalling and afternoon energy crashes.",
      },
      {
        audienceId: "without-pcos",
        audienceLabel: "Women without PCOS",
        guidance:
          "Balanced meals support steadier mood, gut comfort, and long-term metabolic health at every life stage.",
      },
      {
        audienceId: "male-ally",
        audienceLabel: "Male Allies & Family",
        guidance:
          "Share balanced home meals instead of commenting on portion sizes or weight—making nutritious food the household norm helps everyone.",
      },
    ],
  },
  {
    id: "activity",
    shortLabel: "Physical Activity",
    title: "Consistent, joyful physical activity",
    summary:
      "Regular movement acts like a natural helper for insulin sensitivity because active muscles absorb glucose more effectively.",
    illustrationId: "activity",
    dailyFocus: [
      "Aim for gentle daily movement such as a 10–15 minute walk after meals or building toward 9–10k steps.",
      "Add strength or resistance exercises 2–3 times a week (bodyweight, bands, or weights) to support muscle metabolism.",
      "Include restorative yoga, cycling, dancing, or swimming on lower-energy days.",
    ],
    gentleReminder:
      "More is not always better—punishing, exhausting workouts without rest can raise stress hormones and leave you drained.",
    perspectives: [
      {
        audienceId: "with-pcos",
        audienceLabel: "Women with PCOS",
        guidance:
          "Post-meal walking and moderate strength training are among the most sustainable ways to support ovulation and metabolic health.",
      },
      {
        audienceId: "without-pcos",
        audienceLabel: "Women without PCOS",
        guidance:
          "Building a steady mix of walking and strength protects bone density, heart health, and cycle comfort.",
      },
      {
        audienceId: "male-ally",
        audienceLabel: "Male Allies & Family",
        guidance:
          "Invite your partner, sister, or mother for an evening walk or workout together rather than pressuring them about fitness goals.",
      },
    ],
  },
  {
    id: "sleep",
    shortLabel: "Sleep Schedule",
    title: "Maintaining a steady sleep schedule",
    summary:
      "Sleep regulates cortisol, appetite hormones, and overnight insulin recovery. Consistency matters as much as total hours.",
    illustrationId: "sleep",
    dailyFocus: [
      "Keep a predictable bedtime and wake-up window (aiming for 7–9 hours), even on weekends when possible.",
      "Dim bright screens and heavy scrolling 30–45 minutes before bed to support natural melatonin.",
      "Get 10–15 minutes of morning daylight to anchor your circadian clock.",
    ],
    gentleReminder:
      "Even a few nights of short or erratic sleep can temporarily heighten sugar cravings and daytime fatigue.",
    perspectives: [
      {
        audienceId: "with-pcos",
        audienceLabel: "Women with PCOS",
        guidance:
          "Steady sleep helps calm overnight cortisol and improves how sensitively your body responds to insulin the next day.",
      },
      {
        audienceId: "without-pcos",
        audienceLabel: "Women without PCOS",
        guidance:
          "Consistent sleep cycles support hormone balance, skin repair, concentration, and emotional resilience.",
      },
      {
        audienceId: "male-ally",
        audienceLabel: "Male Allies & Family",
        guidance:
          "Respect wind-down routines at home—keep evenings calmer, share late-night chores, and avoid treating rest as laziness.",
      },
    ],
  },
  {
    id: "hydration",
    shortLabel: "Hydration & Care",
    title: "Hydration & clinician-guided supplements",
    summary:
      "Steady hydration supports digestion, bloating relief, and energy, while any supplements should be tailored to your actual lab results.",
    illustrationId: "hydration",
    dailyFocus: [
      "Sip water evenly across the day rather than waiting until you feel very thirsty.",
      "Swap frequent sugary beverages or sweetened teas for plain water, infused water, buttermilk, or herbal teas.",
      "Discuss targeted supplements (such as vitamin D, iron, B12, omega-3, or inositol) with a clinician after testing.",
    ],
    gentleReminder:
      "Avoid expensive unverified 'PCOS cure' teas or viral powders—supplements work only when matched to real deficiencies or clinical advice.",
    perspectives: [
      {
        audienceId: "with-pcos",
        audienceLabel: "Women with PCOS",
        guidance:
          "Staying hydrated eases headaches and bloating, and tracking supplements daily keeps prescribed care consistent.",
      },
      {
        audienceId: "without-pcos",
        audienceLabel: "Women without PCOS",
        guidance:
          "Checking common nutrients like iron, vitamin D, and B12 during routine check-ups prevents silent fatigue.",
      },
      {
        audienceId: "male-ally",
        audienceLabel: "Male Allies & Family",
        guidance:
          "Help with simple daily cues—refill water bottles, pick up prescribed supplements, and stay sceptical of miracle ads together.",
      },
    ],
  },
  {
    id: "stress",
    shortLabel: "Stress & Mood",
    title: "Stress care & emotional wellbeing",
    summary:
      "Chronic stress activates cortisol and adrenaline, which interact directly with insulin and reproductive hormone signalling.",
    illustrationId: "stress",
    dailyFocus: [
      "Build short 5-minute nervous-system resets: slow deep breathing, stretching, or stepping outdoors.",
      "Notice mood shifts, overwhelm, or body-image stress with curiosity instead of self-blame.",
      "Connect with empathetic friends, family, or a mental health professional if anxiety or low mood persists.",
    ],
    gentleReminder:
      "Weight stigma and pressure around fertility or appearance can add heavy emotional stress—respectful support reduces that burden.",
    perspectives: [
      {
        audienceId: "with-pcos",
        audienceLabel: "Women with PCOS",
        guidance:
          "Emotional shifts in PCOS are real and common; caring for mental wellbeing is part of medical care, not an afterthought.",
      },
      {
        audienceId: "without-pcos",
        audienceLabel: "Women without PCOS",
        guidance:
          "Understanding stress-hormone links helps you protect your cycle during exams, work pressure, or life transitions.",
      },
      {
        audienceId: "male-ally",
        audienceLabel: "Male Allies & Family",
        guidance:
          "Never dismiss mood changes or fatigue. Ask 'What would make today easier for you?' and shield loved ones from hurtful family remarks.",
      },
    ],
  },
  {
    id: "medical",
    shortLabel: "Tracking & Doctors",
    title: "Symptom tracking & medical check-ins",
    summary:
      "Because PCOS evolves across life stages, keeping simple notes over weeks empowers clearer, faster medical guidance.",
    illustrationId: "medical",
    dailyFocus: [
      "Note cycle start dates, missed cycles, fatigue levels, mood, and daily habits in a private log.",
      "Write down 3–4 questions before visiting a gynecologist, endocrinologist, or general physician.",
      "Schedule follow-ups if cycles remain absent for 3+ months, pain worsens, or prescribed plans need adjustment.",
    ],
    gentleReminder:
      "Educational guides build confidence, never a diagnosis—personalized medical treatment belongs with a qualified clinician.",
    perspectives: [
      {
        audienceId: "with-pcos",
        audienceLabel: "Women with PCOS",
        guidance:
          "Bringing weekly symptom and routine summaries to appointments turns vague visits into focused, collaborative care.",
      },
      {
        audienceId: "without-pcos",
        audienceLabel: "Women without PCOS",
        guidance:
          "Keeping a simple baseline cycle record makes it easy to spot early changes and advocate for yourself at check-ups.",
      },
      {
        audienceId: "male-ally",
        audienceLabel: "Male Allies & Family",
        guidance:
          "Learn basic cycle and PCOS terms so partners or daughters feel supported—not awkward—when discussing symptoms or clinic visits.",
      },
    ],
  },
];

export function getUnderstandingTab(tabId) {
  return (
    UNDERSTANDING_PCOS_TABS.find((tab) => tab.id === tabId) ||
    UNDERSTANDING_PCOS_TABS[0]
  );
}

export function getManagementPillar(pillarId) {
  return (
    MANAGEMENT_PILLARS.find((pillar) => pillar.id === pillarId) ||
    MANAGEMENT_PILLARS[0]
  );
}

export const NUTRITION_TIPS_CATEGORIES = [
  {
    id: "plate-pairing",
    shortLabel: "Meal Pairing & Swaps",
    title: "Pair carbs with fibre, protein & healthy fats",
    summary:
      "You do not need to give up rice, roti, or favourite home foods. Adding protein and vegetables before or alongside carbohydrates slows glucose absorption and prevents energy crashes.",
    illustrationId: "plate-pairing",
    swaps: [
      {
        focus: "Morning tea & starter",
        insteadOf: "Sugary chai + refined biscuits on an empty stomach",
        tryInstead: "Soaked almonds or walnuts + boiled egg / paneer / sprouts before lightly sweetened chai",
        why: "Blunts early-morning blood sugar spikes and cuts mid-morning shakiness.",
      },
      {
        focus: "Lunch & dinner staple",
        insteadOf: "Large plate of plain white rice with minimal veggies",
        tryInstead: "Half plate salad/sabzi + dal, curd, paneer, or fish + smaller rice or millet roti portion",
        why: "Fibre and protein slow digestion so insulin stays steadier after eating.",
      },
      {
        focus: "Beverages",
        insteadOf: "Packaged fruit juices, colas, or syrupy milkshakes",
        tryInstead: "Whole seasonal fruit paired with roasted seeds, plain water, or spiced chaas",
        why: "Whole fruit keeps natural fibre intact instead of delivering concentrated liquid sugar.",
      },
    ],
    gentleReminder:
      "Never skip meals to 'save calories'—under-eating raises stress hormones and triggers stronger evening sugar cravings.",
    perspectives: [
      {
        audienceId: "with-pcos",
        audienceLabel: "Women with PCOS",
        guidance:
          "Eating veggies or protein first and carbs alongside helps calm post-meal sleepiness and supports steadier androgen and insulin signalling.",
      },
      {
        audienceId: "without-pcos",
        audienceLabel: "Women without PCOS",
        guidance:
          "Balanced plate pairing keeps afternoon focus high, eases bloating, and builds effortless metabolic habits early.",
      },
      {
        audienceId: "male-ally",
        audienceLabel: "Male Allies & Family",
        guidance:
          "Serve salad, dal, and protein as shared table staples at home instead of preparing 'diet food' separately for one person.",
      },
    ],
  },
  {
    id: "everyday-meals",
    shortLabel: "Breakfast & Main Meals",
    title: "Build protein-rich starts & calmer evening meals",
    summary:
      "Front-loading protein and complex carbs at breakfast and keeping dinner light yet nourishing supports overnight sleep quality and next-day appetite regulation.",
    illustrationId: "everyday-meals",
    swaps: [
      {
        focus: "Savory breakfast",
        insteadOf: "Just white bread toast, jam, or skipping breakfast",
        tryInstead: "Moong/besan chilla with paneer, oats + dahi + chia seeds, or 2 eggs with multigrain roti",
        why: "Aiming for 18–25g protein at breakfast reduces afternoon cravings.",
      },
      {
        focus: "Grain diversity",
        insteadOf: "Only refined maida snacks, noodles, or polished grains",
        tryInstead: "Rotate whole wheat, jowar, bajra, ragi, oats, quinoa, and brown or hand-pounded rice",
        why: "Minimally processed grains deliver magnesium, B-vitamins, and slower glucose release.",
      },
      {
        focus: "Dinner timing",
        insteadOf: "Very heavy fried dinner right before lying down",
        tryInstead: "Balanced home meal 2–3 hours before bed, followed by a relaxed 10-minute walk",
        why: "Supports digestion, overnight insulin recovery, and deeper sleep.",
      },
    ],
    gentleReminder:
      "Cultural foods like idli-sambar, poha with peanuts and sprouts, or dal-roti-sabzi can all be PCOS-friendly with a simple protein boost.",
    perspectives: [
      {
        audienceId: "with-pcos",
        audienceLabel: "Women with PCOS",
        guidance:
          "Consistent breakfast protein helps regulate ghrelin and leptin, making energy steadier across work or college days.",
      },
      {
        audienceId: "without-pcos",
        audienceLabel: "Women without PCOS",
        guidance:
          "Wholesome everyday meals prevent afternoon brain fog and nourish iron and protein stores across menstrual cycles.",
      },
      {
        audienceId: "male-ally",
        audienceLabel: "Male Allies & Family",
        guidance:
          "Share evening meal prep or take a 10-minute post-dinner walk together—supportive routines stick best when done as a team.",
      },
    ],
  },
  {
    id: "snacks-cravings",
    shortLabel: "Smart Snacks & Cravings",
    title: "Satisfy cravings without the crash",
    summary:
      "Cravings are often your body asking for steady fuel or rest, not a lack of willpower. Keeping high-protein, crunchy snacks handy turns 5 p.m. dips into calm nutrition.",
    illustrationId: "snacks-cravings",
    swaps: [
      {
        focus: "Evening crunch",
        insteadOf: "Deep-fried chips, namkeen mixtures, or bakery puffs",
        tryInstead: "Roasted makhana, roasted chana with peanuts, or cucumber/carrot sticks with hung curd dip",
        why: "Gives satisfying crunch alongside protein and minerals without trans fats.",
      },
      {
        focus: "Sweet tooth",
        insteadOf: "Large dessert bars on an empty stomach",
        tryInstead: "A square of 70%+ dark chocolate with almonds, or cinnamon Greek curd with berries/apple",
        why: "Healthy fats and protein keep sweet treats enjoyable without a sharp crash.",
      },
      {
        focus: "Hydration & calm",
        insteadOf: "Multiple sugary iced coffees late in the day",
        tryInstead: "Infused water, unsweetened green tea, or spearmint/chamomile tea after midday",
        why: "Protects deep sleep while keeping daily hydration consistent.",
      },
    ],
    gentleReminder:
      "Restricting every treat completely often backfires—enjoying sweets right after a balanced meal causes a gentler glucose curve than snacking alone.",
    perspectives: [
      {
        audienceId: "with-pcos",
        audienceLabel: "Women with PCOS",
        guidance:
          "Pre-planning one protein-rich afternoon snack prevents late-evening binge fatigue and supports hormone steadiness.",
      },
      {
        audienceId: "without-pcos",
        audienceLabel: "Women without PCOS",
        guidance:
          "Smart snacks keep blood sugar even before PMS days when natural progesterone shifts appetite.",
      },
      {
        audienceId: "male-ally",
        audienceLabel: "Male Allies & Family",
        guidance:
          "Keep roasted nuts, fruits, or makhana stocked in shared spaces and never shame someone for having cravings.",
      },
    ],
  },
  {
    id: "micronutrients",
    shortLabel: "Key Micronutrients",
    title: "Nourish key micronutrients & gut health",
    summary:
      "Deficiencies in Vitamin D, Vitamin B12, iron, magnesium, and omega-3 fatty acids frequently overlap with fatigue and hormone stress—prioritise nutrient-rich foods and lab-guided care.",
    illustrationId: "micronutrients",
    swaps: [
      {
        focus: "Omega-3 & seeds",
        insteadOf: "Relying only on refined seed oils",
        tryInstead: "Ground flaxseeds, chia seeds, walnuts, or fatty fish alongside varied cold-pressed oils",
        why: "Anti-inflammatory omega-3 fats support cellular signalling and lipid health.",
      },
      {
        focus: "Iron, folate & magnesium",
        insteadOf: "Low-variety convenience meals",
        tryInstead: "Spinach, methi, rajma, chole, pumpkin seeds paired with lemon/amla (Vitamin C)",
        why: "Vitamin C boosts plant-based iron absorption, helping ease cycle-related tiredness.",
      },
      {
        focus: "Vitamin D & B12 + gut",
        insteadOf: "Unregulated 'PCOS cure' detox teas or blind mega-dosing",
        tryInstead: "Homemade curd/idli for gut support + morning sunlight + doctor-checked Vitamin D/B12",
        why: "Targeted lab-checked supplements fix real gaps safely without wasting money.",
      },
    ],
    gentleReminder:
      "Seed cycling and herbal trends cannot replace evidence-based medical care—ask a doctor or registered dietitian before starting supplements.",
    perspectives: [
      {
        audienceId: "with-pcos",
        audienceLabel: "Women with PCOS",
        guidance:
          "Checking Vitamin D, B12, iron, and thyroid markers with your clinician often uncovers treatable reasons behind persistent exhaustion.",
      },
      {
        audienceId: "without-pcos",
        audienceLabel: "Women without PCOS",
        guidance:
          "Building iron, folate, calcium, and B12 through everyday vegetarian or mixed meals protects bone and energy health long-term.",
      },
      {
        audienceId: "male-ally",
        audienceLabel: "Male Allies & Family",
        guidance:
          "Remind loved ones to get routine nutrient blood panels rather than falling for expensive social-media 'hormone gummies'.",
      },
    ],
  },
];

export function getNutritionCategory(categoryId) {
  return (
    NUTRITION_TIPS_CATEGORIES.find((cat) => cat.id === categoryId) ||
    NUTRITION_TIPS_CATEGORIES[0]
  );
}

export function filterAudienceGuidance(pillar, perspectiveId = "all") {
  if (!pillar || !Array.isArray(pillar.perspectives)) {
    return [];
  }
  if (!perspectiveId || perspectiveId === "all") {
    return pillar.perspectives;
  }
  const matched = pillar.perspectives.filter(
    (item) => item.audienceId === perspectiveId
  );
  return matched.length > 0 ? matched : pillar.perspectives;
}
