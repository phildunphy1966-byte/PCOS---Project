import test from "node:test";
import assert from "node:assert/strict";
import {
  clearTrackerLogs,
  computeLast7DaysSymptomSummary,
  computeWeeklySummary,
  createEmptyLogEntry,
  deleteTrackerLog,
  getWeekDateKeys,
  loadTrackerLogs,
  saveTrackerLogs,
  upsertTrackerLog,
} from "./tracker.js";

test("getWeekDateKeys returns Monday-Sunday 7-day range and shifts by weekOffset", () => {
  // 2026-11-17 is a Tuesday -> Monday is 2026-11-16, Sunday is 2026-11-22
  const currentWeek = getWeekDateKeys("2026-11-17", 0);
  assert.deepEqual(currentWeek, [
    "2026-11-16",
    "2026-11-17",
    "2026-11-18",
    "2026-11-19",
    "2026-11-20",
    "2026-11-21",
    "2026-11-22",
  ]);

  const prevWeek = getWeekDateKeys("2026-11-17", -1);
  assert.equal(prevWeek[0], "2026-11-09");
  assert.equal(prevWeek[6], "2026-11-15");
});

test("upsertTrackerLog inserts, replaces same-date entries, and sorts newest first", () => {
  let logs = [];
  logs = upsertTrackerLog(logs, {
    ...createEmptyLogEntry("2026-11-16"),
    mood: "low",
    fatigue: "high",
    routines: { steps: true, supplements: true, protein: false, sleep: true, water: true },
  });
  logs = upsertTrackerLog(logs, {
    ...createEmptyLogEntry("2026-11-17"),
    mood: "steady",
    fatigue: "low",
    routines: { steps: true, supplements: false, protein: true, sleep: true, water: true },
  });
  assert.equal(logs.length, 2);
  assert.equal(logs[0].date, "2026-11-17");

  // Update 2026-11-16 entry
  logs = upsertTrackerLog(logs, {
    ...createEmptyLogEntry("2026-11-16"),
    mood: "energised",
    fatigue: "low",
    routines: { steps: true, supplements: true, protein: true, sleep: true, water: true },
  });
  assert.equal(logs.length, 2);
  assert.equal(logs[1].mood, "energised");

  logs = deleteTrackerLog(logs, "2026-11-16");
  assert.equal(logs.length, 1);
  assert.equal(logs[0].date, "2026-11-17");
});

test("computeWeeklySummary calculates logged counts, routine adherence, and symptom summary", () => {
  const logs = [
    {
      date: "2026-11-16",
      mood: "low",
      fatigue: "high",
      cycleVariation: "delayed",
      symptoms: ["bloating"],
      routines: { steps: true, supplements: true, protein: true, sleep: false, water: true },
    },
    {
      date: "2026-11-17",
      mood: "low",
      fatigue: "moderate",
      cycleVariation: "baseline",
      symptoms: [],
      routines: { steps: true, supplements: true, protein: false, sleep: true, water: true },
    },
    {
      date: "2026-11-10", // previous week, should not count in weekOffset 0
      mood: "steady",
      fatigue: "low",
      cycleVariation: "baseline",
      symptoms: [],
      routines: { steps: true, supplements: true, protein: true, sleep: true, water: true },
    },
  ];

  const summary = computeWeeklySummary(logs, "2026-11-17", 0);
  assert.equal(summary.loggedCount, 2);
  assert.equal(summary.totalRoutinesCompleted, 8);
  assert.equal(summary.overallRoutineRate, 80); // 8 / (2 * 5) = 80%
  assert.equal(summary.topMoodLabel, "Low / Irritable");
  assert.equal(summary.highFatigueDays, 1);
  assert.equal(summary.cycleVariationDays, 1);

  const stepsStat = summary.routineStats.find((r) => r.id === "steps");
  const sleepStat = summary.routineStats.find((r) => r.id === "sleep");
  assert.equal(stepsStat.completedDays, 2);
  assert.equal(sleepStat.completedDays, 1);
});

test("computeLast7DaysSymptomSummary counts specific symptoms over rolling 7 days and excludes day -7", () => {
  const logs = [
    {
      date: "2026-11-17", // day 0 (included)
      mood: "low",
      fatigue: "high",
      cycleVariation: "delayed",
      symptoms: ["cramps", "bloating"],
      routines: {},
    },
    {
      date: "2026-11-15", // day -2 (included)
      mood: "anxious",
      fatigue: "moderate",
      cycleVariation: "spotting",
      symptoms: ["bloating", "headache"],
      routines: {},
    },
    {
      date: "2026-11-11", // day -6 (included boundary)
      mood: "steady",
      fatigue: "low",
      cycleVariation: "baseline",
      symptoms: ["acne"],
      routines: {},
    },
    {
      date: "2026-11-10", // day -7 (excluded)
      mood: "low",
      fatigue: "high",
      cycleVariation: "period",
      symptoms: ["cramps", "cravings"],
      routines: {},
    },
  ];

  const summary = computeLast7DaysSymptomSummary(logs, "2026-11-17");
  assert.equal(summary.rangeLabel, "Nov 11 – Nov 17");
  assert.equal(summary.loggedCount, 3);

  const byId = Object.fromEntries(summary.symptomCounts.map((s) => [s.id, s.count]));
  assert.equal(byId.fatigue, 2);
  assert.equal(byId["mood-swings"], 2);
  assert.equal(byId["cycle-variation"], 2);
  assert.equal(byId.cramps, 1);
  assert.equal(byId.bloating, 2);
  assert.equal(byId.acne, 1);
  assert.equal(byId.headache, 1);
  assert.equal(byId.cravings, 0);
  assert.equal(summary.totalSymptomReports, 11);
});

test("tracker storage helpers round-trip and recover from invalid JSON", () => {
  const store = new Map();
  const mockStorage = {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, v),
    removeItem: (k) => store.delete(k),
  };

  const sample = [createEmptyLogEntry("2026-11-17")];
  saveTrackerLogs(mockStorage, sample);
  const loaded = loadTrackerLogs(mockStorage);
  assert.equal(loaded.length, 1);
  assert.equal(loaded[0].date, "2026-11-17");

  mockStorage.setItem("pcos-symptom-tracker-logs", "{corrupt");
  assert.deepEqual(loadTrackerLogs(mockStorage), []);

  saveTrackerLogs(mockStorage, sample);
  clearTrackerLogs(mockStorage);
  assert.deepEqual(loadTrackerLogs(mockStorage), []);
});
