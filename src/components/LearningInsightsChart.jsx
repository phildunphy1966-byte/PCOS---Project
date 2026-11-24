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
import {
  buildMythVerdictChartData,
  buildProgressChartData,
  buildSymptomThemeChartData,
} from "../utils/charts";

const VIEWS = [
  { id: "progress", label: "Your Progress" },
  { id: "topics", label: "Topics & Symptoms" },
  { id: "verdicts", label: "Myths vs. Facts" },
];

function ChartTooltip({ active, payload, label }) {
  if (!active || !Array.isArray(payload) || payload.length === 0) {
    return null;
  }

  return (
    <div className="insights-tooltip">
      <strong>{label}</strong>
      <ul>
        {payload.map((entry) => (
          <li key={entry.dataKey}>
            <span
              className="insights-swatch"
              style={{ backgroundColor: entry.color }}
              aria-hidden="true"
            />
            <span>{entry.name}:</span> <b>{entry.value}</b>
          </li>
        ))}
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
    if (candidate.length > 12 && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={12} textAnchor="middle" fill="var(--chart-tick)" fontSize={11}>
        {lines.map((line, idx) => (
          <tspan key={idx} x={0} dy={idx === 0 ? 0 : 13}>
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

export default function LearningInsightsChart({
  articles = [],
  questions = [],
  completedArticles = [],
  quizAnswers = {},
  mythsAndFacts = [],
  defaultView = "progress",
  onInteract,
}) {
  const [view, setView] = useState(defaultView);

  const progressData = useMemo(
    () =>
      buildProgressChartData({
        articles,
        questions,
        completedArticles,
        quizAnswers,
      }),
    [articles, questions, completedArticles, quizAnswers]
  );

  const verdictData = useMemo(
    () => buildMythVerdictChartData(mythsAndFacts),
    [mythsAndFacts]
  );

  const topicData = useMemo(
    () => buildSymptomThemeChartData(mythsAndFacts),
    [mythsAndFacts]
  );

  const handleSelectView = (nextView) => {
    setView(nextView);
    if (onInteract) onInteract();
  };

  const chartCopy =
    view === "progress"
      ? {
          eyebrow: "PROGRESS VISUALIZATION",
          title: "Your completion across learning sections",
          subtitle:
            "Compare completed and remaining guides and knowledge-check questions in real time.",
          note: "Updates immediately as you complete articles or answer quiz questions.",
        }
      : view === "topics"
      ? {
          eyebrow: "MYTHS & FACTS TOPIC FREQUENCY",
          title: "PCOS symptoms & themes covered in the guide",
          subtitle:
            "Frequency of core PCOS symptoms and misconceptions across the Myths & Facts dataset.",
          note: `Derived directly from the ${mythsAndFacts.length} entries in the Myths & Facts guide (not population prevalence statistics).`,
        }
      : {
          eyebrow: "MYTHS & FACTS BREAKDOWN",
          title: "Myth vs. fact distribution by category",
          subtitle:
            "See how common claims in each category break down into myths and evidence-informed facts.",
          note: `Calculated from all ${mythsAndFacts.length} items in the PCOS Unlocked Myths & Facts library.`,
        };

  const totalCompleted = progressData.reduce((sum, row) => sum + row.completed, 0);
  const totalLearningItems = progressData.reduce((sum, row) => sum + row.total, 0);
  const totalMyths = verdictData.reduce((sum, row) => sum + row.myths, 0);
  const totalFacts = verdictData.reduce((sum, row) => sum + row.facts, 0);

  return (
    <section
      className="insights-chart-card"
      aria-label="PCOS Unlocked visual insights"
      data-testid="learning-insights-chart"
    >
      <div className="insights-head">
        <div className="insights-head-copy">
          <p className="eyebrow">{chartCopy.eyebrow}</p>
          <h2>{chartCopy.title}</h2>
          <p className="insights-sub">{chartCopy.subtitle}</p>
        </div>

        <div className="progress-tabs insights-tabs" role="group" aria-label="Chart view">
          {VIEWS.map((v) => (
            <button
              key={v.id}
              type="button"
              className={view === v.id ? "progress-tab active" : "progress-tab"}
              aria-pressed={view === v.id}
              onClick={() => handleSelectView(v.id)}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <div className="insights-summary-grid">
        {view === "progress" ? (
          progressData.map((row) => (
            <div className="insights-stat-pill" key={row.name}>
              <span>{row.name}</span>
              <strong>
                {row.completed}/{row.total} ({row.percentage}%)
              </strong>
            </div>
          ))
        ) : (
          <>
            <div className="insights-stat-pill">
              <span>Guide statements</span>
              <strong>{mythsAndFacts.length} total</strong>
            </div>
            <div className="insights-stat-pill">
              <span>Myths debunked</span>
              <strong>{totalMyths} claims</strong>
            </div>
            <div className="insights-stat-pill">
              <span>Facts clarified</span>
              <strong>{totalFacts} facts</strong>
            </div>
          </>
        )}
      </div>

      <div
        className="insights-canvas-wrap"
        data-testid={`chart-view-${view}`}
        aria-label={chartCopy.title}
      >
        <ResponsiveContainer width="100%" height={310}>
          {view === "progress" ? (
            <BarChart
              data={progressData}
              margin={{ top: 12, right: 14, left: -14, bottom: 12 }}
              barGap={8}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" vertical={false} />
              <XAxis
                dataKey="name"
                interval={0}
                height={42}
                tick={<WrappedAxisTick />}
                axisLine={{ stroke: "var(--chart-axis)" }}
                tickLine={false}
              />
              <YAxis
                allowDecimals={false}
                tick={{ fill: "var(--chart-muted)", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<ChartTooltip />} cursor={{ fill: "var(--chart-cursor)" }} />
              <Legend
                formatter={renderLegendLabel}
                wrapperStyle={{ fontSize: "12px", paddingTop: "8px" }}
              />
              <Bar
                dataKey="completed"
                name="Completed"
                stackId="progress"
                fill="var(--chart-bar-primary)"
                radius={[0, 0, 6, 6]}
                maxBarSize={56}
              />
              <Bar
                dataKey="remaining"
                name="Remaining"
                stackId="progress"
                fill="var(--chart-bar-remaining)"
                radius={[6, 6, 0, 0]}
                maxBarSize={56}
              />
            </BarChart>
          ) : view === "topics" ? (
            <BarChart
              data={topicData}
              margin={{ top: 12, right: 14, left: -14, bottom: 18 }}
              barGap={6}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" vertical={false} />
              <XAxis
                dataKey="topic"
                interval={0}
                height={48}
                tick={<WrappedAxisTick />}
                axisLine={{ stroke: "var(--chart-axis)" }}
                tickLine={false}
              />
              <YAxis
                allowDecimals={false}
                tick={{ fill: "var(--chart-muted)", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<ChartTooltip />} cursor={{ fill: "var(--chart-cursor)" }} />
              <Legend
                formatter={renderLegendLabel}
                wrapperStyle={{ fontSize: "12px", paddingTop: "8px" }}
              />
              <Bar
                dataKey="myths"
                name="Myths addressing topic"
                stackId="topics"
                fill="var(--chart-bar-coral)"
                radius={[0, 0, 6, 6]}
                maxBarSize={48}
              />
              <Bar
                dataKey="facts"
                name="Facts addressing topic"
                stackId="topics"
                fill="var(--chart-bar-sage)"
                radius={[6, 6, 0, 0]}
                maxBarSize={48}
              />
            </BarChart>
          ) : (
            <BarChart
              data={verdictData}
              margin={{ top: 12, right: 14, left: -14, bottom: 12 }}
              barGap={8}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" vertical={false} />
              <XAxis
                dataKey="category"
                interval={0}
                height={44}
                tick={<WrappedAxisTick />}
                axisLine={{ stroke: "var(--chart-axis)" }}
                tickLine={false}
              />
              <YAxis
                allowDecimals={false}
                tick={{ fill: "var(--chart-muted)", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<ChartTooltip />} cursor={{ fill: "var(--chart-cursor)" }} />
              <Legend
                formatter={renderLegendLabel}
                wrapperStyle={{ fontSize: "12px", paddingTop: "8px" }}
              />
              <Bar
                dataKey="myths"
                name="Myths"
                fill="var(--chart-bar-coral)"
                radius={[6, 6, 0, 0]}
                maxBarSize={40}
              />
              <Bar
                dataKey="facts"
                name="Facts"
                fill="var(--chart-bar-primary)"
                radius={[6, 6, 0, 0]}
                maxBarSize={40}
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      <p className="insights-legend-note">
        {view === "progress"
          ? `${totalCompleted} of ${totalLearningItems} total items completed. ${chartCopy.note}`
          : chartCopy.note}
      </p>
    </section>
  );
}
