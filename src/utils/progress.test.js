import test from "node:test";
import assert from "node:assert/strict";
import {
  calculatePercentage,
  toggleCompletedId,
  markCompletedId,
  computeProgressMetrics,
  loadProgressState,
  saveProgressState,
  clearProgressState,
  PROGRESS_STORAGE_KEY,
  DEFAULT_STREAK,
  toLocalDateKey,
  getDayDifference,
  recordDailyActivity,
  getEffectiveStreak,
} from "./progress";

test("calculatePercentage handles normal, zero, and boundary cases", () => {
  assert.equal(calculatePercentage(0, 8), 0);
  assert.equal(calculatePercentage(1, 8), 13);
  assert.equal(calculatePercentage(2, 4), 50);
  assert.equal(calculatePercentage(4, 4), 100);
  assert.equal(calculatePercentage(0, 0), 0);
  assert.equal(calculatePercentage(10, 4), 100);
  assert.equal(calculatePercentage(-2, 4), 0);
});

test("toggleCompletedId adds, removes, and deduplicates IDs", () => {
  const step1 = toggleCompletedId([], "/pcos/features");
  assert.deepEqual(step1, ["/pcos/features"]);

  const step2 = toggleCompletedId(step1, "/pcos/diagnosis");
  assert.deepEqual(step2, ["/pcos/features", "/pcos/diagnosis"]);

  const step3 = toggleCompletedId(step2, "/pcos/features");
  assert.deepEqual(step3, ["/pcos/diagnosis"]);

  const deduped = toggleCompletedId(["a", "a", "b"], "c");
  assert.deepEqual(deduped, ["a", "b", "c"]);
});

test("markCompletedId adds ID idempotently", () => {
  const added = markCompletedId(["a"], "b");
  assert.deepEqual(added, ["a", "b"]);
  const unchanged = markCompletedId(added, "b");
  assert.deepEqual(unchanged, ["a", "b"]);
});

test("computeProgressMetrics returns accurate article, quiz, and overall percentages", () => {
  const metrics = computeProgressMetrics({
    completedArticleIds: ["/know-your-body/anatomy", "/pcos/features", "/pcos/features"],
    answeredQuestionIds: ["q1"],
    totalArticles: 8,
    totalQuestions: 4,
  });

  assert.deepEqual(metrics.articles, { completed: 2, total: 8, percentage: 25 });
  assert.deepEqual(metrics.quiz, { completed: 1, total: 4, percentage: 25 });
  assert.deepEqual(metrics.overall, { completed: 3, total: 12, percentage: 25 });
});

test("daily streak tracks consecutive days, ignores same-day repeats, and resets after missed days", () => {
  assert.equal(toLocalDateKey(new Date(2026, 10, 17)), "2026-11-17");
  assert.equal(getDayDifference("2026-10-31", "2026-11-01"), 1);
  assert.equal(getDayDifference("2026-11-15", "2026-11-17"), 2);

  // Day 1 interaction
  const day1 = recordDailyActivity(DEFAULT_STREAK, "2026-11-15");
  assert.deepEqual(day1, {
    currentStreak: 1,
    longestStreak: 1,
    lastActiveDate: "2026-11-15",
  });

  // Same-day repeat does not inflate streak
  const day1Repeat = recordDailyActivity(day1, "2026-11-15");
  assert.deepEqual(day1Repeat, day1);

  // Next consecutive day increments streak
  const day2 = recordDailyActivity(day1Repeat, "2026-11-16");
  assert.deepEqual(day2, {
    currentStreak: 2,
    longestStreak: 2,
    lastActiveDate: "2026-11-16",
  });

  // Effective streak on day 3 before interacting is still alive (2 days, not active today)
  assert.deepEqual(getEffectiveStreak(day2, "2026-11-17"), {
    days: 2,
    longestStreak: 2,
    isActiveToday: false,
    lastActiveDate: "2026-11-16",
  });

  // Effective streak after missing a day (day 4) drops to 0 while keeping longestStreak
  assert.deepEqual(getEffectiveStreak(day2, "2026-11-18"), {
    days: 0,
    longestStreak: 2,
    isActiveToday: false,
    lastActiveDate: "2026-11-16",
  });

  // New activity after gap restarts currentStreak at 1 while preserving longestStreak
  const restarted = recordDailyActivity(day2, "2026-11-18");
  assert.deepEqual(restarted, {
    currentStreak: 1,
    longestStreak: 2,
    lastActiveDate: "2026-11-18",
  });
});

test("storage helpers round-trip streak and recover from invalid JSON", () => {
  const store = new Map();
  const mockStorage = {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k),
  };

  saveProgressState(mockStorage, {
    completedArticles: ["/pcos/features", "/pcos/features"],
    quizAnswers: { q1: "1" },
    streak: {
      currentStreak: 3,
      longestStreak: 5,
      lastActiveDate: "2026-11-17",
    },
  });
  assert.deepEqual(loadProgressState(mockStorage), {
    completedArticles: ["/pcos/features"],
    quizAnswers: { q1: "1" },
    streak: {
      currentStreak: 3,
      longestStreak: 5,
      lastActiveDate: "2026-11-17",
    },
  });

  mockStorage.setItem(PROGRESS_STORAGE_KEY, "{bad-json");
  assert.deepEqual(loadProgressState(mockStorage), {
    completedArticles: [],
    quizAnswers: {},
    streak: DEFAULT_STREAK,
  });

  clearProgressState(mockStorage);
  assert.deepEqual(loadProgressState(mockStorage), {
    completedArticles: [],
    quizAnswers: {},
    streak: DEFAULT_STREAK,
  });
});
