import React, { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toLocalDateKey } from "../utils/progress";
import {
  computeLast7DaysSymptomSummary,
  computeWeeklySummary,
  countCompletedRoutines,
  createEmptyLogEntry,
  CYCLE_VARIATION_OPTIONS,
  DAILY_ROUTINES,
  FATIGUE_LEVELS,
  formatShortDateLabel,
  MOOD_OPTIONS,
  SYMPTOM_TAGS,
} from "../utils/tracker";

function WeeklyChartTooltip({ active, payload, label }) {
  if (!active || !Array.isArray(payload) || payload.length === 0) {
    return null;
  }
  const dayData = payload[0]?.payload;
  return (
    <div className="insights-tooltip">
      <strong>
        {label} ({dayData?.shortDate})
      </strong>
      <ul>
        <li>
          <span>Status:</span> <b>{dayData?.logged ? "Logged" : "No log"}</b>
        </li>
        <li>
          <span
            className="insights-swatch"
            style={{ backgroundColor: "#39243f" }}
            aria-hidden="true"
          />
          <span>Routines followed:</span>{" "}
          <b>
            {dayData?.routinesDone ?? 0} / {dayData?.routinesTotal ?? 5}
          </b>
        </li>
      </ul>
    </div>
  );
}

function SymptomSummaryTooltip({ active, payload }) {
  if (!active || !Array.isArray(payload) || payload.length === 0) {
    return null;
  }
  const item = payload[0]?.payload;
  return (
    <div className="insights-tooltip">
      <strong>{item?.label}</strong>
      <ul>
        <li>
          <span
            className="insights-swatch"
            style={{ backgroundColor: "#c66e62" }}
            aria-hidden="true"
          />
          <span>Reported in last 7 days:</span>{" "}
          <b>
            {item?.count ?? 0} {item?.count === 1 ? "time" : "times"}
          </b>
        </li>
        {item?.detail && (
          <li>
            <span>{item.detail}</span>
          </li>
        )}
      </ul>
    </div>
  );
}

function WrappedAxisTick({ x, y, payload }) {
  const words = String(payload?.value || "").split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > 10 && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={12} textAnchor="middle" fill="#514b53" fontSize={11}>
        {lines.map((line, idx) => (
          <tspan key={idx} x={0} dy={idx === 0 ? 0 : 12}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
}

function renderLegendLabel(value) {
  return <span className="insights-legend-label">{value}</span>;
}

export default function SymptomTracker({
  logs = [],
  onSaveLog,
  onDeleteLog,
  onClearLogs,
}) {
  const todayKey = useMemo(() => toLocalDateKey(), []);
  const [selectedDate, setSelectedDate] = useState(todayKey);
  const [weekOffset, setWeekOffset] = useState(0);
  const [overviewTab, setOverviewTab] = useState("summary"); // summary | routines

  const initialForToday = useMemo(() => {
    const existing = logs.find((item) => item.date === todayKey);
    return existing ? { ...existing, routines: { ...existing.routines } } : createEmptyLogEntry(todayKey);
  }, []);

  const [formState, setFormState] = useState(initialForToday);
  const [saveMessage, setSaveMessage] = useState("");
  const [confirmClear, setConfirmClear] = useState(false);

  const weeklySummary = useMemo(
    () => computeWeeklySummary(logs, todayKey, weekOffset),
    [logs, todayKey, weekOffset]
  );

  const last7DaysSummary = useMemo(
    () => computeLast7DaysSymptomSummary(logs, todayKey),
    [logs, todayKey]
  );

  const selectDateForEditing = (dateKey) => {
    if (!dateKey) return;
    setSelectedDate(dateKey);
    const existing = logs.find((item) => item.date === dateKey);
    if (existing) {
      setFormState({
        ...existing,
        symptoms: [...existing.symptoms],
        routines: { ...existing.routines },
      });
    } else {
      setFormState(createEmptyLogEntry(dateKey));
    }
    setSaveMessage("");
  };

  const toggleSymptomTag = (tagId) => {
    setFormState((prev) => {
      const exists = prev.symptoms.includes(tagId);
      return {
        ...prev,
        symptoms: exists
          ? prev.symptoms.filter((id) => id !== tagId)
          : [...prev.symptoms, tagId],
      };
    });
  };

  const toggleRoutine = (routineId) => {
    setFormState((prev) => ({
      ...prev,
      routines: {
        ...prev.routines,
        [routineId]: !prev.routines[routineId],
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.date) return;
    const entryToSave = {
      ...formState,
      date: formState.date,
    };
    if (onSaveLog) onSaveLog(entryToSave);
    setSelectedDate(entryToSave.date);
    setSaveMessage(
      `Saved daily check-in for ${formatShortDateLabel(entryToSave.date)}.`
    );
  };

  const handleDelete = (dateKey) => {
    if (onDeleteLog) onDeleteLog(dateKey);
    if (selectedDate === dateKey) {
      setFormState(createEmptyLogEntry(dateKey));
    }
    setSaveMessage("");
  };

  const handleConfirmClear = () => {
    if (onClearLogs) onClearLogs();
    setFormState(createEmptyLogEntry(todayKey));
    setSelectedDate(todayKey);
    setConfirmClear(false);
    setSaveMessage("All local symptom logs cleared.");
  };

  const isEditingExisting = logs.some((item) => item.date === formState.date);
  const weekLoggedEntries = weeklySummary.days
    .filter((d) => d.logged && d.entry)
    .map((d) => d.entry)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="tracker-layout" data-testid="symptom-tracker">
      <section className="tracker-card" aria-label="Daily symptom and routine log form">
        <div className="tracker-card-head">
          <div>
            <p className="eyebrow">DAILY CHECK-IN</p>
            <h2>{isEditingExisting ? "Update daily log" : "Log today's symptoms & routines"}</h2>
            <p className="tracker-sub">
              Stored privately in your browser so you can review weekly patterns without creating an account.
            </p>
          </div>
          {isEditingExisting && (
            <span className="tracker-editing-badge">Editing saved day</span>
          )}
        </div>

        <form className="tracker-form" onSubmit={handleSubmit}>
          <div className="tracker-form-grid">
            <label className="tracker-field">
              <span>Date</span>
              <input
                type="date"
                value={formState.date}
                max={todayKey}
                onChange={(e) => selectDateForEditing(e.target.value)}
                required
              />
            </label>

            <label className="tracker-field">
              <span>Mood</span>
              <select
                value={formState.mood}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, mood: e.target.value }))
                }
              >
                {MOOD_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="tracker-field">
              <span>Cycle variation</span>
              <select
                value={formState.cycleVariation}
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    cycleVariation: e.target.value,
                  }))
                }
              >
                {CYCLE_VARIATION_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <fieldset className="tracker-fieldset">
            <legend>Fatigue level</legend>
            <div className="tracker-seg-group">
              {FATIGUE_LEVELS.map((level) => (
                <label
                  key={level.id}
                  className={
                    formState.fatigue === level.id
                      ? "tracker-seg-btn active"
                      : "tracker-seg-btn"
                  }
                >
                  <input
                    type="radio"
                    name="fatigue-level"
                    value={level.id}
                    checked={formState.fatigue === level.id}
                    onChange={() =>
                      setFormState((prev) => ({ ...prev, fatigue: level.id }))
                    }
                  />
                  <span>{level.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="tracker-fieldset">
            <legend>Additional symptoms (optional)</legend>
            <div className="tracker-chips">
              {SYMPTOM_TAGS.map((tag) => {
                const checked = formState.symptoms.includes(tag.id);
                return (
                  <label
                    key={tag.id}
                    className={checked ? "tracker-chip active" : "tracker-chip"}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleSymptomTag(tag.id)}
                    />
                    <span>{tag.label}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <fieldset className="tracker-fieldset">
            <legend>Daily habits &amp; supportive routines</legend>
            <div className="tracker-routines-grid">
              {DAILY_ROUTINES.map((routine) => {
                const checked = Boolean(formState.routines[routine.id]);
                return (
                  <label
                    key={routine.id}
                    className={
                      checked ? "tracker-routine-item done" : "tracker-routine-item"
                    }
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleRoutine(routine.id)}
                    />
                    <span>
                      <strong>{routine.label}</strong>
                      <small>{routine.hint}</small>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <label className="tracker-field">
            <span>Personal note (optional)</span>
            <textarea
              rows={2}
              maxLength={300}
              value={formState.notes}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, notes: e.target.value }))
              }
              placeholder="e.g., Slept at 11pm, took morning walk, felt sluggish after lunch"
            />
          </label>

          <div className="tracker-form-actions">
            <button type="submit" className="btn primary">
              {isEditingExisting ? "Update daily log" : "Save daily log"}
            </button>
            {saveMessage && (
              <span className="tracker-save-msg" role="status">
                {saveMessage}
              </span>
            )}
          </div>
        </form>
      </section>

      <section
        className="tracker-card"
        aria-label="Weekly symptom and routine overview"
        data-testid="weekly-overview"
      >
        <div className="tracker-week-head">
          <div>
            <p className="eyebrow">
              {overviewTab === "summary" ? "LAST 7 DAYS SYMPTOMS" : "WEEKLY ROUTINE REVIEW"}
            </p>
            <h2>
              {overviewTab === "summary" ? "Weekly Summary" : "How your week is going"}
            </h2>
            <p className="tracker-sub">
              {overviewTab === "summary"
                ? `Last 7 days (${last7DaysSummary.rangeLabel}) · ${last7DaysSummary.loggedCount} of 7 days logged`
                : `${weeklySummary.rangeLabel} · ${weeklySummary.loggedCount} of 7 days logged`}
            </p>
          </div>
          <div className="progress-tabs insights-tabs" role="group" aria-label="Weekly overview mode">
            <button
              type="button"
              className={overviewTab === "summary" ? "progress-tab active" : "progress-tab"}
              aria-pressed={overviewTab === "summary"}
              onClick={() => setOverviewTab("summary")}
            >
              Weekly Summary
            </button>
            <button
              type="button"
              className={overviewTab === "routines" ? "progress-tab active" : "progress-tab"}
              aria-pressed={overviewTab === "routines"}
              onClick={() => setOverviewTab("routines")}
            >
              Routines &amp; History
            </button>
          </div>
        </div>

        {overviewTab === "summary" ? (
          <div data-testid="weekly-summary-view">
            <div className="insights-summary-grid">
              <div className="insights-stat-pill">
                <span>Days logged (last 7d)</span>
                <strong>{last7DaysSummary.loggedCount} / 7</strong>
              </div>
              <div className="insights-stat-pill">
                <span>Symptom reports (7d)</span>
                <strong>{last7DaysSummary.totalSymptomReports} total</strong>
              </div>
              <div className="insights-stat-pill">
                <span>Most reported</span>
                <strong>
                  {last7DaysSummary.topSymptom
                    ? `${last7DaysSummary.topSymptom.shortLabel} (${last7DaysSummary.topSymptom.count}×)`
                    : "No reports yet"}
                </strong>
              </div>
            </div>

            <div className="tracker-symptom-grid" data-testid="weekly-symptom-counts">
              {last7DaysSummary.symptomCounts.map((item) => (
                <div
                  key={item.id}
                  className={
                    item.count > 0
                      ? "tracker-symptom-stat reported"
                      : "tracker-symptom-stat"
                  }
                >
                  <div className="tracker-symptom-stat-top">
                    <span>{item.label}</span>
                    <strong>
                      {item.count} {item.count === 1 ? "time" : "times"}
                    </strong>
                  </div>
                  <small>{item.detail}</small>
                </div>
              ))}
            </div>

            <div
              className="insights-canvas-wrap tracker-chart-wrap"
              aria-label="Reported symptoms over the last 7 days chart"
            >
              <ResponsiveContainer width="100%" height={275}>
                <BarChart
                  data={last7DaysSummary.symptomCounts}
                  margin={{ top: 12, right: 12, left: -16, bottom: 14 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee8e2" vertical={false} />
                  <XAxis
                    dataKey="shortLabel"
                    interval={0}
                    height={44}
                    tick={<WrappedAxisTick />}
                    axisLine={{ stroke: "#dfd5e2" }}
                    tickLine={false}
                  />
                  <YAxis
                    allowDecimals={false}
                    domain={[0, 7]}
                    tick={{ fill: "#716973", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<SymptomSummaryTooltip />} cursor={{ fill: "#f4eff6" }} />
                  <Legend formatter={renderLegendLabel} wrapperStyle={{ fontSize: "12px" }} />
                  <Bar
                    dataKey="count"
                    name="Times reported (last 7 days)"
                    fill="#c66e62"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={42}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="tracker-summary-footer">
              <button
                type="button"
                className="progress-inline-btn"
                onClick={() => setOverviewTab("routines")}
              >
                View 5-habit adherence &amp; daily log history →
              </button>
            </div>
          </div>
        ) : (
          <div data-testid="weekly-routines-view">
            <div className="tracker-week-nav-row">
              <div className="tracker-week-nav" role="group" aria-label="Switch week">
                <button
                  type="button"
                  className="progress-reset"
                  onClick={() => setWeekOffset((w) => w - 1)}
                >
                  ← Previous week
                </button>
                {weekOffset !== 0 && (
                  <button
                    type="button"
                    className="progress-reset"
                    onClick={() => setWeekOffset(0)}
                  >
                    This week
                  </button>
                )}
                <button
                  type="button"
                  className="progress-reset"
                  disabled={weekOffset >= 0}
                  onClick={() => setWeekOffset((w) => Math.min(0, w + 1))}
                >
                  Next week →
                </button>
              </div>
            </div>

            <div className="tracker-week-strip" role="group" aria-label="7-day check-in strip">
              {weeklySummary.days.map((day) => {
                const isSelected = day.date === selectedDate;
                return (
                  <button
                    key={day.date}
                    type="button"
                    className={`tracker-day-tile${day.logged ? " logged" : ""}${
                      isSelected ? " selected" : ""
                    }`}
                    onClick={() => selectDateForEditing(day.date)}
                    aria-pressed={isSelected}
                  >
                    <span className="tracker-day-name">{day.dayLabel}</span>
                    <strong className="tracker-day-date">{day.shortDate}</strong>
                    <span className="tracker-day-meta">
                      {day.logged ? `${day.routinesDone}/5 habits` : "Not logged"}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="insights-summary-grid">
              <div className="insights-stat-pill">
                <span>Routine consistency</span>
                <strong>{weeklySummary.overallRoutineRate}%</strong>
              </div>
              <div className="insights-stat-pill">
                <span>Most logged mood</span>
                <strong>{weeklySummary.topMoodLabel}</strong>
              </div>
              <div className="insights-stat-pill">
                <span>High-fatigue / Cycle days</span>
                <strong>
                  {weeklySummary.highFatigueDays} / {weeklySummary.cycleVariationDays}
                </strong>
              </div>
            </div>

            <div className="tracker-routines-summary">
              <h3>Weekly routine adherence</h3>
              <div className="tracker-routine-bars">
                {weeklySummary.routineStats.map((stat) => (
                  <div className="tracker-routine-bar-row" key={stat.id}>
                    <div className="tracker-routine-bar-top">
                      <span>{stat.label}</span>
                      <strong>
                        {stat.completedDays}/7 days ({stat.adherencePercent}%)
                      </strong>
                    </div>
                    <div className="progress-track">
                      <div
                        className="progress-fill"
                        style={{ width: `${stat.adherencePercent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="insights-canvas-wrap tracker-chart-wrap" aria-label="Weekly routines followed chart">
              <ResponsiveContainer width="100%" height={240}>
                <BarChart
                  data={weeklySummary.days}
                  margin={{ top: 10, right: 12, left: -16, bottom: 4 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee8e2" vertical={false} />
                  <XAxis
                    dataKey="dayLabel"
                    tick={{ fill: "#514b53", fontSize: 12 }}
                    axisLine={{ stroke: "#dfd5e2" }}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, DAILY_ROUTINES.length]}
                    allowDecimals={false}
                    tick={{ fill: "#716973", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<WeeklyChartTooltip />} cursor={{ fill: "#f4eff6" }} />
                  <Legend formatter={renderLegendLabel} wrapperStyle={{ fontSize: "12px" }} />
                  <Bar
                    dataKey="routinesDone"
                    name="Routines followed (out of 5)"
                    fill="#39243f"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={42}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        <div className="tracker-history">
          <div className="tracker-history-head">
            <h3>Logged entries this week</h3>
            {logs.length > 0 && (
              <div className="tracker-clear-wrap">
                {!confirmClear ? (
                  <button
                    type="button"
                    className="progress-reset"
                    onClick={() => setConfirmClear(true)}
                  >
                    Clear all logs
                  </button>
                ) : (
                  <div className="tracker-confirm-row">
                    <span>Delete all {logs.length} logs?</span>
                    <button
                      type="button"
                      className="btn primary tracker-small-btn"
                      onClick={handleConfirmClear}
                    >
                      Yes, clear
                    </button>
                    <button
                      type="button"
                      className="progress-reset"
                      onClick={() => setConfirmClear(false)}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {weekLoggedEntries.length === 0 ? (
            <p className="tracker-empty-note">
              No daily logs recorded for this week yet. Select any day above or submit the check-in form to get started.
            </p>
          ) : (
            <ul className="tracker-log-list">
              {weekLoggedEntries.map((entry) => {
                const moodLabel =
                  MOOD_OPTIONS.find((m) => m.id === entry.mood)?.label || entry.mood;
                const fatigueLabel =
                  FATIGUE_LEVELS.find((f) => f.id === entry.fatigue)?.label ||
                  entry.fatigue;
                const cycleLabel =
                  CYCLE_VARIATION_OPTIONS.find((c) => c.id === entry.cycleVariation)
                    ?.label || entry.cycleVariation;
                const doneCount = countCompletedRoutines(entry);
                const symptomLabels = entry.symptoms
                  .map((id) => SYMPTOM_TAGS.find((t) => t.id === id)?.label)
                  .filter(Boolean);

                return (
                  <li key={entry.date} className="tracker-log-item">
                    <div className="tracker-log-main">
                      <div className="tracker-log-top">
                        <strong>{formatShortDateLabel(entry.date)}</strong>
                        <span className="tracker-log-pill">
                          {doneCount}/5 routines
                        </span>
                      </div>
                      <p className="tracker-log-meta">
                        Mood: <b>{moodLabel}</b> · Fatigue: <b>{fatigueLabel}</b> ·
                        Cycle: <b>{cycleLabel}</b>
                      </p>
                      {symptomLabels.length > 0 && (
                        <p className="tracker-log-symptoms">
                          Symptoms: {symptomLabels.join(", ")}
                        </p>
                      )}
                      {entry.notes && (
                        <p className="tracker-log-notes">“{entry.notes}”</p>
                      )}
                    </div>
                    <div className="tracker-log-actions">
                      <button
                        type="button"
                        className="progress-reset"
                        onClick={() => selectDateForEditing(entry.date)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="progress-reset"
                        onClick={() => handleDelete(entry.date)}
                        aria-label={`Delete log for ${formatShortDateLabel(entry.date)}`}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
