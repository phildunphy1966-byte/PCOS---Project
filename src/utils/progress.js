export const PROGRESS_STORAGE_KEY = "pcos-learning-progress";

export const DEFAULT_STREAK = {
  currentStreak: 0,
  longestStreak: 0,
  lastActiveDate: null,
};

export function toLocalDateKey(date = new Date()) {
  const d = date instanceof Date ? date : new Date(date);
  if (Number.isNaN(d.getTime())) return null;
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getDayDifference(fromDateKey, toDateKey) {
  if (!fromDateKey || !toDateKey) return null;
  const fromParts = String(fromDateKey).split("-").map(Number);
  const toParts = String(toDateKey).split("-").map(Number);
  if (fromParts.length !== 3 || toParts.length !== 3) return null;
  const [fy, fm, fd] = fromParts;
  const [ty, tm, td] = toParts;
  if ([fy, fm, fd, ty, tm, td].some((n) => !Number.isInteger(n))) return null;
  const fromUtc = Date.UTC(fy, fm - 1, fd);
  const toUtc = Date.UTC(ty, tm - 1, td);
  return Math.round((toUtc - fromUtc) / 86400000);
}

export function normalizeStreakState(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return { ...DEFAULT_STREAK };
  }
  const currentStreak =
    Number.isInteger(raw.currentStreak) && raw.currentStreak >= 0
      ? raw.currentStreak
      : 0;
  const longestStreak =
    Number.isInteger(raw.longestStreak) && raw.longestStreak >= 0
      ? Math.max(raw.longestStreak, currentStreak)
      : currentStreak;
  const lastActiveDate =
    typeof raw.lastActiveDate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(raw.lastActiveDate)
      ? raw.lastActiveDate
      : null;
  return { currentStreak, longestStreak, lastActiveDate };
}

export function getEffectiveStreak(streakState, date = new Date()) {
  const safe = normalizeStreakState(streakState);
  const todayKey = typeof date === "string" ? date : toLocalDateKey(date);
  if (!safe.lastActiveDate || !todayKey || safe.currentStreak === 0) {
    return {
      days: 0,
      longestStreak: safe.longestStreak,
      isActiveToday: false,
      lastActiveDate: safe.lastActiveDate,
    };
  }
  const diff = getDayDifference(safe.lastActiveDate, todayKey);
  if (diff === 0) {
    return {
      days: safe.currentStreak,
      longestStreak: safe.longestStreak,
      isActiveToday: true,
      lastActiveDate: safe.lastActiveDate,
    };
  }
  if (diff === 1) {
    return {
      days: safe.currentStreak,
      longestStreak: safe.longestStreak,
      isActiveToday: false,
      lastActiveDate: safe.lastActiveDate,
    };
  }
  return {
    days: 0,
    longestStreak: safe.longestStreak,
    isActiveToday: false,
    lastActiveDate: safe.lastActiveDate,
  };
}

export function recordDailyActivity(streakState, date = new Date()) {
  const safe = normalizeStreakState(streakState);
  const todayKey = typeof date === "string" ? date : toLocalDateKey(date);
  if (!todayKey) return safe;

  if (!safe.lastActiveDate) {
    return {
      currentStreak: 1,
      longestStreak: Math.max(1, safe.longestStreak),
      lastActiveDate: todayKey,
    };
  }

  const diff = getDayDifference(safe.lastActiveDate, todayKey);
  if (diff === null) {
    return safe;
  }
  if (diff <= 0) {
    // Already active today (or clock skewed backwards) — keep streak intact
    return safe;
  }
  if (diff === 1) {
    const nextStreak = safe.currentStreak + 1;
    return {
      currentStreak: nextStreak,
      longestStreak: Math.max(safe.longestStreak, nextStreak),
      lastActiveDate: todayKey,
    };
  }
  // Missed one or more days — restart streak at 1
  return {
    currentStreak: 1,
    longestStreak: Math.max(safe.longestStreak, 1),
    lastActiveDate: todayKey,
  };
}

export function calculatePercentage(completedCount, totalCount) {
  if (!Number.isFinite(completedCount) || !Number.isFinite(totalCount) || totalCount <= 0) {
    return 0;
  }
  const ratio = completedCount / totalCount;
  const clamped = Math.min(1, Math.max(0, ratio));
  return Math.round(clamped * 100);
}

export function toggleCompletedId(ids, targetId) {
  const safeIds = Array.isArray(ids) ? Array.from(new Set(ids)) : [];
  if (!targetId) return safeIds;
  if (safeIds.includes(targetId)) {
    return safeIds.filter((id) => id !== targetId);
  }
  return [...safeIds, targetId];
}

export function markCompletedId(ids, targetId) {
  const safeIds = Array.isArray(ids) ? Array.from(new Set(ids)) : [];
  if (!targetId || safeIds.includes(targetId)) {
    return safeIds;
  }
  return [...safeIds, targetId];
}

export function computeProgressMetrics({
  completedArticleIds = [],
  answeredQuestionIds = [],
  totalArticles = 0,
  totalQuestions = 0,
}) {
  const uniqueArticles = Array.from(new Set(completedArticleIds)).slice(
    0,
    Math.max(0, totalArticles)
  );
  const uniqueQuestions = Array.from(new Set(answeredQuestionIds)).slice(
    0,
    Math.max(0, totalQuestions)
  );

  const articlesCompleted = uniqueArticles.length;
  const questionsCompleted = uniqueQuestions.length;
  const overallCompleted = articlesCompleted + questionsCompleted;
  const overallTotal = Math.max(0, totalArticles) + Math.max(0, totalQuestions);

  return {
    articles: {
      completed: articlesCompleted,
      total: Math.max(0, totalArticles),
      percentage: calculatePercentage(articlesCompleted, totalArticles),
    },
    quiz: {
      completed: questionsCompleted,
      total: Math.max(0, totalQuestions),
      percentage: calculatePercentage(questionsCompleted, totalQuestions),
    },
    overall: {
      completed: overallCompleted,
      total: overallTotal,
      percentage: calculatePercentage(overallCompleted, overallTotal),
    },
  };
}

export function loadProgressState(storage) {
  const empty = {
    completedArticles: [],
    quizAnswers: {},
    streak: { ...DEFAULT_STREAK },
  };
  if (!storage || typeof storage.getItem !== "function") {
    return empty;
  }
  try {
    const raw = storage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return empty;
    const parsed = JSON.parse(raw);
    const completedArticles = Array.isArray(parsed?.completedArticles)
      ? Array.from(new Set(parsed.completedArticles.filter((v) => typeof v === "string")))
      : [];
    const quizAnswers =
      parsed?.quizAnswers && typeof parsed.quizAnswers === "object" && !Array.isArray(parsed.quizAnswers)
        ? parsed.quizAnswers
        : {};
    const streak = normalizeStreakState(parsed?.streak);
    return { completedArticles, quizAnswers, streak };
  } catch {
    return empty;
  }
}

export function saveProgressState(storage, state) {
  if (!storage || typeof storage.setItem !== "function") {
    return;
  }
  try {
    storage.setItem(
      PROGRESS_STORAGE_KEY,
      JSON.stringify({
        completedArticles: Array.isArray(state?.completedArticles)
          ? Array.from(new Set(state.completedArticles))
          : [],
        quizAnswers:
          state?.quizAnswers && typeof state.quizAnswers === "object" ? state.quizAnswers : {},
        streak: normalizeStreakState(state?.streak),
      })
    );
  } catch {
    // Ignore storage quota or private browsing errors
  }
}

export function clearProgressState(storage) {
  if (!storage || typeof storage.removeItem !== "function") {
    return;
  }
  try {
    storage.removeItem(PROGRESS_STORAGE_KEY);
  } catch {
    // Ignore storage errors
  }
}
