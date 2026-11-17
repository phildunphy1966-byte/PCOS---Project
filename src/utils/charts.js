export const SYMPTOM_TOPIC_DEFINITIONS = [
  {
    id: "ovulation-cycles",
    label: "Cycles & Ovulation",
    pattern: /\b(cycle|cycles|ovulat\w*|28-day|menstrual)\b/i,
  },
  {
    id: "ovarian-cysts",
    label: "Ovarian Cysts",
    pattern: /\b(cyst|cysts|ultrasound)\b/i,
  },
  {
    id: "hormones-metabolism",
    label: "Hormones & Metabolism",
    pattern: /\b(hormonal|metabolic|signalling|biological)\b/i,
  },
  {
    id: "fertility",
    label: "Fertility",
    pattern: /\b(infertil\w*|fertilit\w*|conceive)\b/i,
  },
  {
    id: "body-stigma",
    label: "Body Size & Stigma",
    pattern: /\b(body|bodies|weight|appearance|lazy|blame|stigma)\b/i,
  },
  {
    id: "care-wellbeing",
    label: "Care & Wellbeing",
    pattern: /\b(management|support|clinician|assessment|emotional|wellbeing|life stages)\b/i,
  },
];

export function buildProgressChartData({
  articles = [],
  questions = [],
  completedArticles = [],
  quizAnswers = {},
} = {}) {
  const completedSet = new Set(Array.isArray(completedArticles) ? completedArticles : []);
  const categoryOrder = [];
  const categoryBuckets = new Map();

  for (const article of Array.isArray(articles) ? articles : []) {
    if (!article || !article.id) continue;
    const category = article.category || "Articles";
    if (!categoryBuckets.has(category)) {
      categoryBuckets.set(category, { total: 0, completed: 0 });
      categoryOrder.push(category);
    }
    const bucket = categoryBuckets.get(category);
    bucket.total += 1;
    if (completedSet.has(article.id)) {
      bucket.completed += 1;
    }
  }

  const rows = categoryOrder.map((name) => {
    const bucket = categoryBuckets.get(name);
    const remaining = Math.max(0, bucket.total - bucket.completed);
    const percentage =
      bucket.total > 0 ? Math.round((bucket.completed / bucket.total) * 100) : 0;
    return {
      name,
      completed: bucket.completed,
      remaining,
      total: bucket.total,
      percentage,
    };
  });

  const safeQuestions = Array.isArray(questions) ? questions : [];
  const safeAnswers = quizAnswers && typeof quizAnswers === "object" ? quizAnswers : {};
  const quizTotal = safeQuestions.length;
  const quizCompleted = safeQuestions.filter(
    (q) => q && safeAnswers[q.id] !== undefined && safeAnswers[q.id] !== ""
  ).length;
  const quizRemaining = Math.max(0, quizTotal - quizCompleted);

  rows.push({
    name: "Knowledge Check",
    completed: quizCompleted,
    remaining: quizRemaining,
    total: quizTotal,
    percentage: quizTotal > 0 ? Math.round((quizCompleted / quizTotal) * 100) : 0,
  });

  return rows;
}

export function buildMythVerdictChartData(items = []) {
  const categoryOrder = [];
  const buckets = new Map();

  for (const item of Array.isArray(items) ? items : []) {
    if (!item || !item.category) continue;
    if (!buckets.has(item.category)) {
      buckets.set(item.category, { category: item.category, myths: 0, facts: 0, total: 0 });
      categoryOrder.push(item.category);
    }
    const bucket = buckets.get(item.category);
    if (item.verdict === "Fact") {
      bucket.facts += 1;
    } else {
      bucket.myths += 1;
    }
    bucket.total += 1;
  }

  return categoryOrder.map((category) => buckets.get(category));
}

export function buildSymptomThemeChartData(items = []) {
  const safeItems = Array.isArray(items) ? items : [];

  const rows = SYMPTOM_TOPIC_DEFINITIONS.map((def, index) => {
    let myths = 0;
    let facts = 0;

    for (const item of safeItems) {
      if (!item) continue;
      const combinedText = `${item.claim || ""} ${item.explanation || ""}`;
      if (def.pattern.test(combinedText)) {
        if (item.verdict === "Fact") {
          facts += 1;
        } else {
          myths += 1;
        }
      }
    }

    return {
      topic: def.label,
      myths,
      facts,
      total: myths + facts,
      _order: index,
    };
  });

  return rows
    .filter((row) => row.total > 0)
    .sort((a, b) => b.total - a.total || a._order - b._order)
    .map(({ _order, ...rest }) => rest);
}
