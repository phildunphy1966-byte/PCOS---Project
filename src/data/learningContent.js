export const TRACKABLE_ARTICLES = [
  {
    id: "/know-your-body/anatomy",
    title: "Reproductive anatomy",
    category: "Know Your Body",
  },
  {
    id: "/know-your-body/menstrual-cycle",
    title: "The menstrual cycle",
    category: "Know Your Body",
  },
  {
    id: "/know-your-body/hormones",
    title: "Hormones and communication",
    category: "Know Your Body",
  },
  {
    id: "/know-your-body/metabolism",
    title: "Insulin and metabolism",
    category: "Know Your Body",
  },
  {
    id: "/pcos/features",
    title: "Features and experiences",
    category: "Understand PCOS",
  },
  {
    id: "/pcos/diagnosis",
    title: "Diagnosis and assessment",
    category: "Understand PCOS",
  },
  {
    id: "/pcos/health",
    title: "Health associations",
    category: "Understand PCOS",
  },
  {
    id: "/pcos/management",
    title: "Management and support",
    category: "Understand PCOS",
  },
];

export const QUIZ_QUESTIONS = [
  {
    id: "q1",
    prompt: "Which statement is most accurate?",
    options: [
      "PCOS affects everyone in exactly the same way.",
      "PCOS can involve reproductive and metabolic features, and experiences vary.",
      "PCOS can be diagnosed from one symptom alone.",
    ],
    correctIndex: 1,
    correctFeedback:
      "That's right. PCOS experiences vary, and assessment considers multiple factors.",
    incorrectFeedback:
      "Not quite. The most accurate answer is that PCOS experiences vary and assessment is broader than one symptom.",
  },
  {
    id: "q2",
    prompt: "Are ovarian cysts required for a PCOS diagnosis?",
    options: [
      "Yes, ovarian cysts must always be visible on ultrasound.",
      "No, diagnosis uses a combination of clinical features and cysts are not required in every case.",
      "Only if a person has a 28-day menstrual cycle.",
    ],
    correctIndex: 1,
    correctFeedback:
      "Correct. Despite the name, ovarian cysts are not present in every person diagnosed with PCOS.",
    incorrectFeedback:
      "Not quite. A PCOS diagnosis considers multiple clinical features; ovarian cysts are not required in every case.",
  },
  {
    id: "q3",
    prompt: "How does insulin resistance relate to PCOS?",
    options: [
      "Insulin resistance is the exact same thing as PCOS.",
      "Insulin resistance can be associated with PCOS, though not everyone with PCOS has it.",
      "Insulin has no connection to hormones or metabolism.",
    ],
    correctIndex: 1,
    correctFeedback:
      "Right. Insulin helps regulate glucose and can be linked with PCOS, but experiences differ from person to person.",
    incorrectFeedback:
      "Not quite. Insulin resistance can be associated with PCOS, though it is not present in every person with PCOS.",
  },
  {
    id: "q4",
    prompt: "What is a helpful step if persistent cycle changes or symptoms concern you?",
    options: [
      "Rely solely on an online quiz to confirm a diagnosis.",
      "Ignore the changes unless symptoms are identical to a friend's.",
      "Consult a qualified healthcare professional to discuss your history and appropriate tests.",
    ],
    correctIndex: 2,
    correctFeedback:
      "Yes. A qualified clinician can evaluate your symptoms, medical history and appropriate tests while ruling out other causes.",
    incorrectFeedback:
      "Not quite. Educational tools cannot diagnose—speaking with a qualified healthcare professional is the right step.",
  },
];

export const PCOS_MYTHS_AND_FACTS = [
  {
    id: "m1",
    claim: "Everyone with PCOS has ovarian cysts.",
    verdict: "Myth",
    category: "Diagnosis & Body",
    explanation:
      "The name can be misleading. PCOS diagnosis is based on a combination of clinical features, and ovarian cysts are not required or present in every case.",
  },
  {
    id: "m2",
    claim: "Only people with larger bodies have PCOS.",
    verdict: "Myth",
    category: "Diagnosis & Body",
    explanation:
      "PCOS occurs across all body sizes. Body weight or appearance alone cannot establish whether someone has PCOS.",
  },
  {
    id: "m3",
    claim: "Everyone with PCOS is infertile.",
    verdict: "Myth",
    category: "Fertility & Cycles",
    explanation:
      "PCOS can affect ovulation, but fertility experiences vary widely. Many people with PCOS conceive, with or without clinical support.",
  },
  {
    id: "m4",
    claim: "A 28-day cycle is the only normal cycle.",
    verdict: "Myth",
    category: "Fertility & Cycles",
    explanation:
      "Healthy cycle patterns vary between individuals. Persistent changes or missed cycles are worth discussing with a qualified professional.",
  },
  {
    id: "m5",
    claim: "PCOS happens because someone is lazy or caused it themselves.",
    verdict: "Myth",
    category: "Causes & Stigma",
    explanation:
      "PCOS is a complex hormonal and metabolic condition shaped by biological and genetic factors. Blame and stigma are inaccurate and unhelpful.",
  },
  {
    id: "m6",
    claim: "Menstrual cups, tampons or pads cause PCOS.",
    verdict: "Myth",
    category: "Causes & Stigma",
    explanation:
      "There is no established evidence linking menstrual products to PCOS. The condition involves hormonal and metabolic signalling.",
  },
  {
    id: "m7",
    claim: "An online quiz can diagnose PCOS.",
    verdict: "Myth",
    category: "Diagnosis & Body",
    explanation:
      "Symptoms can overlap with other health conditions. Diagnosis requires a clinical assessment by a qualified healthcare professional.",
  },
  {
    id: "m8",
    claim: "PCOS management looks the same for everyone.",
    verdict: "Myth",
    category: "Care & Lifestyle",
    explanation:
      "There is no single approach that suits everyone. Support depends on individual symptoms, goals and discussions with a clinician.",
  },
  {
    id: "f1",
    claim: "PCOS can affect reproductive, metabolic and emotional wellbeing.",
    verdict: "Fact",
    category: "Care & Lifestyle",
    explanation:
      "Because PCOS involves interconnected hormonal and metabolic pathways, respectful care considers physical health alongside emotional wellbeing.",
  },
  {
    id: "f2",
    claim: "PCOS features and care needs can change across life stages.",
    verdict: "Fact",
    category: "Care & Lifestyle",
    explanation:
      "Symptoms and health priorities in adolescence can differ from those in later adulthood, so support plans may evolve over time.",
  },
];
