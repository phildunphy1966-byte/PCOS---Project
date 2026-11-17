import { toLocalDateKey } from "./progress.js";

export const TRACKER_STORAGE_KEY = "pcos-symptom-tracker-logs";

export const MOOD_OPTIONS = [
  { id: "steady", label: "Steady" },
  { id: "energised", label: "Energised" },
  { id: "low", label: "Low / Irritable" },
  { id: "anxious", label: "Anxious" },
];

export const FATIGUE_LEVELS = [
  { id: "low", label: "Low", score: 1 },
  { id: "moderate", label: "Moderate", score: 2 },
  { id: "high", label: "High", score: 3 },
];

export const CYCLE_VARIATION_OPTIONS = [
  { id: "baseline", label: "Regular / Baseline" },
  { id: "period", label: "Period day" },
  { id: "spotting", label: "Spotting" },
  { id: "delayed", label: "Delayed / Missed" },
  { id: "na", label: "Not applicable" },
];

export const SYMPTOM_TAGS = [
  { id: "cramps", label: "Cramps" },
  { id: "bloating", label: "Bloating" },
  { id: "acne", label: "Skin / Acne flare" },
  { id: "headache", label: "Headache" },
  { id: "cravings", label: "Strong cravings" },
];

export const DAILY_ROUTINES = [
  { id: "steps", label: "9–10k steps", hint: "Daily movement goal" },
  { id: "supplements", label: "Taking supplements", hint: "Taken as planned" },
  { id: "protein", label: "Enough protein", hint: "Balanced protein intake" },
  { id: "sleep", label: "Sleeping on time", hint: "Managed sleep schedule" },
  { id: "water", label: "Drinking enough water", hint: "Hydration goal met" },
];

const ROUTINE_IDS = new Set(DAILY_ROUTINES.map((r) => r.id));
const SYMPTOM_IDS = new Set(SYMPTOM_TAGS.map((s) => s.id));
const MOOD_IDS = new Set(MOOD_OPTIONS.map((m) => m.id));
const FATIGUE_IDS = new Set(FATIGUE_LEVELS.map((f) => f.id));
const CYCLE_IDS = new Set(CYCLE_VARIATION_OPTIONS.map((c) => c.id));

export function createEmptyLogEntry(dateKey = toLocalDateKey()) {
  return {
    date: dateKey || "",
    mood: "steady",
    fatigue: "low",
    cycleVariation: "baseline",
    symptoms: [],
    routines: {
      steps: false,
      supplements: false,
      protein: false,
      sleep: false,
      water: false,
    },
    notes: "",
  };
}

export function normalizeLogEntry(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
  if (typeof raw.date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(raw.date)) {
    return null;
  }

  const mood = MOOD_IDS.has(raw.mood) ? raw.mood : "steady";
  const fatigue = FATIGUE_IDS.has(raw.fatigue) ? raw.fatigue : "low";
  const cycleVariation = CYCLE_IDS.has(raw.cycleVariation) ? raw.cycleVariation : "baseline";

  const symptoms = Array.isArray(raw.symptoms)
    ? Array.from(new Set(raw.symptoms.filter((s) => SYMPTOM_IDS.has(s))))
    : [];

  const routines = {};
  for (const routine of DAILY_ROUTINES) {
    routines[routine.id] = Boolean(raw.routines && raw.routines[routine.id]);
  }

  const notes = typeof raw.notes === "string" ? raw.notes.trim().slice(0, 300) : "";

  return {
    date: raw.date,
    mood,
    fatigue,
    cycleVariation,
    symptoms,
    routines,
    notes,
  };
}

export function upsertTrackerLog(logs = [], entry) {
  const normalized = normalizeLogEntry(entry);
  if (!normalized) {
    return Array.isArray(logs) ? [...logs] : [];
  }
  const safeLogs = Array.isArray(logs)
    ? logs.map(normalizeLogEntry).filter(Boolean)
    : [];
  const filtered = safeLogs.filter((item) => item.date !== normalized.date);
  return [normalized, ...filtered].sort((a, b) => b.date.localeCompare(a.date));
}

export function deleteTrackerLog(logs = [], dateKey) {
  if (!Array.isArray(logs)) return [];
  return logs.filter((item) => item && item.date !== dateKey);
}

export function parseDateKeyToUtc(dateKey) {
  if (typeof dateKey !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) return null;
  const [y, m, d] = dateKey.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

export function formatUtcDateKey(utcDate) {
  const y = utcDate.getUTCFullYear();
  const m = String(utcDate.getUTCMonth() + 1).padStart(2, "0");
  const d = String(utcDate.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function shiftDateKey(dateKey, deltaDays) {
  const utc = parseDateKeyToUtc(dateKey);
  if (!utc || !Number.isFinite(deltaDays)) return null;
  utc.setUTCDate(utc.getUTCDate() + deltaDays);
  return formatUtcDateKey(utc);
}

export function getWeekStartDateKey(referenceDateKey = toLocalDateKey(), weekOffset = 0) {
  const utc = parseDateKeyToUtc(referenceDateKey);
  if (!utc) return null;
  // Monday as start of week (0 = Sun -> 6, 1 = Mon -> 0, ...)
  const dayIndex = (utc.getUTCDay() + 6) % 7;
  utc.setUTCDate(utc.getUTCDate() - dayIndex + weekOffset * 7);
  return formatUtcDateKey(utc);
}

export function getWeekDateKeys(referenceDateKey = toLocalDateKey(), weekOffset = 0) {
  const start = getWeekStartDateKey(referenceDateKey, weekOffset);
  if (!start) return [];
  return Array.from({ length: 7 }, (_, i) => shiftDateKey(start, i));
}

export function formatShortDateLabel(dateKey) {
  const utc = parseDateKeyToUtc(dateKey);
  if (!utc) return dateKey || "";
  return utc.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function formatWeekdayShort(dateKey) {
  const utc = parseDateKeyToUtc(dateKey);
  if (!utc) return "";
  return utc.toLocaleDateString("en-US", {
    weekday: "short",
    timeZone: "UTC",
  });
}

export function countCompletedRoutines(entry) {
  if (!entry || !entry.routines) return 0;
  let count = 0;
  for (const id of ROUTINE_IDS) {
    if (entry.routines[id]) count += 1;
  }
  return count;
}

export function computeWeeklySummary(logs = [], referenceDateKey = toLocalDateKey(), weekOffset = 0) {
  const weekKeys = getWeekDateKeys(referenceDateKey, weekOffset);
  const logMap = new Map();
  for (const raw of Array.isArray(logs) ? logs : []) {
    const normalized = normalizeLogEntry(raw);
    if (normalized) logMap.set(normalized.date, normalized);
  }

  const days = weekKeys.map((dateKey) => {
    const entry = logMap.get(dateKey) || null;
    const routinesDone = entry ? countCompletedRoutines(entry) : 0;
    const fatigueScore = entry
      ? FATIGUE_LEVELS.find((f) => f.id === entry.fatigue)?.score || 0
      : 0;
    return {
      date: dateKey,
      dayLabel: formatWeekdayShort(dateKey),
      shortDate: formatShortDateLabel(dateKey),
      logged: Boolean(entry),
      entry,
      routinesDone,
      routinesTotal: DAILY_ROUTINES.length,
      fatigueScore,
    };
  });

  const loggedDays = days.filter((d) => d.logged);
  const loggedCount = loggedDays.length;

  const routineStats = DAILY_ROUTINES.map((routine) => {
    const completedDays = loggedDays.filter((d) => d.entry?.routines?.[routine.id]).length;
    const adherencePercent = Math.round((completedDays / 7) * 100);
    return {
      id: routine.id,
      label: routine.label,
      hint: routine.hint,
      completedDays,
      targetDays: 7,
      adherencePercent,
    };
  });

  const totalRoutinesCompleted = loggedDays.reduce((sum, d) => sum + d.routinesDone, 0);
  const totalPossibleInLoggedDays = loggedCount * DAILY_ROUTINES.length;
  const overallRoutineRate =
    totalPossibleInLoggedDays > 0
      ? Math.round((totalRoutinesCompleted / totalPossibleInLoggedDays) * 100)
      : 0;

  const moodCounts = {};
  let highFatigueDays = 0;
  let cycleVariationDays = 0;

  for (const day of loggedDays) {
    const e = day.entry;
    moodCounts[e.mood] = (moodCounts[e.mood] || 0) + 1;
    if (e.fatigue === "high") highFatigueDays += 1;
    if (e.cycleVariation && e.cycleVariation !== "baseline" && e.cycleVariation !== "na") {
      cycleVariationDays += 1;
    }
  }

  let topMoodId = null;
  let topMoodCount = 0;
  for (const [moodId, count] of Object.entries(moodCounts)) {
    if (count > topMoodCount) {
      topMoodId = moodId;
      topMoodCount = count;
    }
  }
  const topMoodLabel = topMoodId
    ? MOOD_OPTIONS.find((m) => m.id === topMoodId)?.label || topMoodId
    : "No logs yet";

  const rangeLabel =
    weekKeys.length === 7
      ? `${formatShortDateLabel(weekKeys[0])} – ${formatShortDateLabel(weekKeys[6])}`
      : "";

  return {
    weekKeys,
    rangeLabel,
    days,
    loggedCount,
    routineStats,
    totalRoutinesCompleted,
    overallRoutineRate,
    topMoodLabel,
    highFatigueDays,
    cycleVariationDays,
  };
}

export function computeLast7DaysSymptomSummary(
  logs = [],
  referenceDateKey = toLocalDateKey()
) {
  const endKey =
    typeof referenceDateKey === "string" && /^\d{4}-\d{2}-\d{2}$/.test(referenceDateKey)
      ? referenceDateKey
      : toLocalDateKey();
  const startKey = shiftDateKey(endKey, -6);
  const windowDates = startKey
    ? Array.from({ length: 7 }, (_, i) => shiftDateKey(startKey, i))
    : [];
  const windowSet = new Set(windowDates);

  const logMap = new Map();
  for (const raw of Array.isArray(logs) ? logs : []) {
    const normalized = normalizeLogEntry(raw);
    if (normalized && windowSet.has(normalized.date)) {
      logMap.set(normalized.date, normalized);
    }
  }

  const loggedEntries = Array.from(logMap.values());
  const fatigueBreakdown = { low: 0, moderate: 0, high: 0 };
  const moodBreakdown = { steady: 0, energised: 0, low: 0, anxious: 0 };
  const cycleBreakdown = { baseline: 0, period: 0, spotting: 0, delayed: 0, na: 0 };
  const tagCounts = Object.fromEntries(SYMPTOM_TAGS.map((t) => [t.id, 0]));

  for (const entry of loggedEntries) {
    if (fatigueBreakdown[entry.fatigue] !== undefined) {
      fatigueBreakdown[entry.fatigue] += 1;
    }
    if (moodBreakdown[entry.mood] !== undefined) {
      moodBreakdown[entry.mood] += 1;
    }
    if (cycleBreakdown[entry.cycleVariation] !== undefined) {
      cycleBreakdown[entry.cycleVariation] += 1;
    }
    for (const tagId of entry.symptoms) {
      if (tagCounts[tagId] !== undefined) {
        tagCounts[tagId] += 1;
      }
    }
  }

  const fatigueReportedCount = fatigueBreakdown.moderate + fatigueBreakdown.high;
  const moodSwingsCount = moodBreakdown.low + moodBreakdown.anxious;
  const cycleVariationCount =
    cycleBreakdown.period + cycleBreakdown.spotting + cycleBreakdown.delayed;

  const symptomCounts = [
    {
      id: "fatigue",
      label: "Fatigue (Moderate / High)",
      shortLabel: "Fatigue",
      count: fatigueReportedCount,
      detail: `${fatigueBreakdown.moderate} moderate · ${fatigueBreakdown.high} high`,
    },
    {
      id: "mood-swings",
      label: "Mood swings (Low / Anxious)",
      shortLabel: "Mood swings",
      count: moodSwingsCount,
      detail: `${moodBreakdown.low} low/irritable · ${moodBreakdown.anxious} anxious`,
    },
    {
      id: "cycle-variation",
      label: "Cycle variations",
      shortLabel: "Cycle shifts",
      count: cycleVariationCount,
      detail: `${cycleBreakdown.period} period · ${cycleBreakdown.spotting} spotting · ${cycleBreakdown.delayed} delayed`,
    },
    ...SYMPTOM_TAGS.map((tag) => ({
      id: tag.id,
      label: tag.label,
      shortLabel: tag.label.replace("Skin / Acne flare", "Acne flare").replace("Strong cravings", "Cravings"),
      count: tagCounts[tag.id] || 0,
      detail: tagCounts[tag.id] === 1 ? "Reported 1 day" : `Reported ${tagCounts[tag.id] || 0} days`,
    })),
  ];

  const totalSymptomReports = symptomCounts.reduce((sum, item) => sum + item.count, 0);
  const sortedTop = [...symptomCounts]
    .filter((item) => item.count > 0)
    .sort((a, b) => b.count - a.count);

  const rangeLabel =
    windowDates.length === 7
      ? `${formatShortDateLabel(windowDates[0])} – ${formatShortDateLabel(windowDates[6])}`
      : "";

  return {
    windowDates,
    rangeLabel,
    loggedCount: loggedEntries.length,
    totalSymptomReports,
    topSymptom: sortedTop[0] || null,
    symptomCounts,
    fatigueBreakdown,
    moodBreakdown,
    cycleBreakdown,
  };
}

export function loadTrackerLogs(storage) {
  if (!storage || typeof storage.getItem !== "function") return [];
  try {
    const raw = storage.getItem(TRACKER_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const normalized = parsed.map(normalizeLogEntry).filter(Boolean);
    const deduped = new Map();
    for (const item of normalized) {
      if (!deduped.has(item.date)) {
        deduped.set(item.date, item);
      }
    }
    return Array.from(deduped.values()).sort((a, b) => b.date.localeCompare(a.date));
  } catch {
    return [];
  }
}

export function saveTrackerLogs(storage, logs) {
  if (!storage || typeof storage.setItem !== "function") return;
  try {
    const normalized = (Array.isArray(logs) ? logs : [])
      .map(normalizeLogEntry)
      .filter(Boolean);
    storage.setItem(TRACKER_STORAGE_KEY, JSON.stringify(normalized));
  } catch {
    // Ignore storage quota or private browsing errors
  }
}

export function clearTrackerLogs(storage) {
  if (!storage || typeof storage.removeItem !== "function") return;
  try {
    storage.removeItem(TRACKER_STORAGE_KEY);
  } catch {
    // Ignore storage errors
  }
}
