import React, { useMemo, useState } from "react";
import {
  computeProgressMetrics,
  DEFAULT_STREAK,
  getEffectiveStreak,
} from "../utils/progress";

const MODES = [
  { id: "combined", label: "Combined" },
  { id: "articles", label: "Articles" },
  { id: "quiz", label: "Quiz" },
];

export default function ProgressTracker({
  articles = [],
  questions = [],
  completedArticles = [],
  quizAnswers = {},
  streak = DEFAULT_STREAK,
  onToggleArticle,
  onResetProgress,
  onNavigate,
  defaultMode = "combined",
  compact = false,
}) {
  const [mode, setMode] = useState(defaultMode);

  const answeredQuestionIds = useMemo(
    () =>
      questions
        .filter((q) => quizAnswers[q.id] !== undefined && quizAnswers[q.id] !== "")
        .map((q) => q.id),
    [questions, quizAnswers]
  );

  const metrics = useMemo(
    () =>
      computeProgressMetrics({
        completedArticleIds: completedArticles,
        answeredQuestionIds,
        totalArticles: articles.length,
        totalQuestions: questions.length,
      }),
    [completedArticles, answeredQuestionIds, articles.length, questions.length]
  );

  const effectiveStreak = useMemo(() => getEffectiveStreak(streak), [streak]);
  const hasAnyProgress =
    metrics.overall.completed > 0 ||
    effectiveStreak.days > 0 ||
    effectiveStreak.longestStreak > 0;

  const activeMetric =
    mode === "articles"
      ? metrics.articles
      : mode === "quiz"
      ? metrics.quiz
      : metrics.overall;

  const activeDescription =
    mode === "articles"
      ? `${metrics.articles.completed} of ${metrics.articles.total} articles completed`
      : mode === "quiz"
      ? `${metrics.quiz.completed} of ${metrics.quiz.total} quiz questions answered`
      : `${metrics.overall.completed} of ${metrics.overall.total} learning items completed (${metrics.articles.completed}/${metrics.articles.total} articles, ${metrics.quiz.completed}/${metrics.quiz.total} quiz)`;

  const streakStatus = effectiveStreak.isActiveToday
    ? "Active today"
    : effectiveStreak.days > 0
    ? "Interact today to continue"
    : "Interact to start";

  const handleLinkClick = (e, to) => {
    if (!onNavigate || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onNavigate(to);
  };

  return (
    <section
      className={compact ? "progress-tracker compact" : "progress-tracker"}
      aria-label="Learning progress tracker"
      data-testid="progress-tracker"
    >
      <div className="progress-top">
        <div>
          <p className="eyebrow">LEARNING PROGRESS</p>
          <h2>{compact ? "Your progress so far" : "Track what you have explored"}</h2>
          <p className="progress-sub" data-testid="progress-summary">
            {activeDescription}
          </p>
        </div>
        <div className="progress-metrics-row">
          <div
            className={
              effectiveStreak.isActiveToday
                ? "progress-streak-box active"
                : "progress-streak-box"
            }
            data-testid="daily-streak"
            aria-label={`Daily streak: ${effectiveStreak.days} ${
              effectiveStreak.days === 1 ? "day" : "days"
            }, ${streakStatus}`}
          >
            <div className="progress-streak-main">
              <span className="progress-streak-icon" aria-hidden="true">
                ✦
              </span>
              <span className="progress-streak-value" data-testid="daily-streak-count">
                {effectiveStreak.days} {effectiveStreak.days === 1 ? "day" : "days"}
              </span>
            </div>
            <span className="progress-percent-label">Daily streak</span>
            <span className="progress-streak-status">{streakStatus}</span>
          </div>
          <div className="progress-percent-box">
            <span className="progress-percent" data-testid="progress-percentage">
              {activeMetric.percentage}%
            </span>
            <span className="progress-percent-label">Complete</span>
          </div>
        </div>
      </div>

      <div className="progress-controls">
        <div className="progress-tabs" role="group" aria-label="Progress view">
          {MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              className={mode === m.id ? "progress-tab active" : "progress-tab"}
              aria-pressed={mode === m.id}
              onClick={() => setMode(m.id)}
            >
              {m.label}
            </button>
          ))}
        </div>
        {hasAnyProgress && onResetProgress && (
          <button
            type="button"
            className="progress-reset"
            onClick={onResetProgress}
          >
            Reset progress
          </button>
        )}
      </div>

      <div
        className="progress-track"
        role="progressbar"
        aria-label={`${mode} completion percentage`}
        aria-valuenow={activeMetric.percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-fill"
          style={{ width: `${activeMetric.percentage}%` }}
        />
      </div>

      {!compact && mode === "combined" && (
        <div className="progress-breakdown">
          <div className="progress-stat-card">
            <div className="progress-stat-head">
              <span>Articles read</span>
              <strong>{metrics.articles.percentage}%</strong>
            </div>
            <p>
              {metrics.articles.completed} of {metrics.articles.total} core guides marked complete
            </p>
            <button
              type="button"
              className="progress-inline-btn"
              onClick={() => setMode("articles")}
            >
              Manage article checklist →
            </button>
          </div>
          <div className="progress-stat-card">
            <div className="progress-stat-head">
              <span>Knowledge check</span>
              <strong>{metrics.quiz.percentage}%</strong>
            </div>
            <p>
              {metrics.quiz.completed} of {metrics.quiz.total} quiz questions answered
            </p>
            <a
              href="/explore/quiz"
              className="progress-inline-btn"
              onClick={(e) => handleLinkClick(e, "/explore/quiz")}
            >
              Go to knowledge check →
            </a>
          </div>
        </div>
      )}

      {!compact && mode === "articles" && (
        <ul className="progress-list">
          {articles.map((article) => {
            const done = completedArticles.includes(article.id);
            return (
              <li
                key={article.id}
                className={done ? "progress-item done" : "progress-item"}
              >
                <label className="progress-check">
                  <input
                    type="checkbox"
                    checked={done}
                    onChange={() => onToggleArticle && onToggleArticle(article.id)}
                  />
                  <span>
                    <strong>{article.title}</strong>
                    <small>{article.category}</small>
                  </span>
                </label>
                <a
                  href={article.id}
                  className="progress-item-link"
                  onClick={(e) => handleLinkClick(e, article.id)}
                >
                  Open ↗
                </a>
              </li>
            );
          })}
        </ul>
      )}

      {!compact && mode === "quiz" && (
        <ul className="progress-list">
          {questions.map((q, index) => {
            const answered = quizAnswers[q.id] !== undefined && quizAnswers[q.id] !== "";
            const isCorrect =
              answered && Number(quizAnswers[q.id]) === q.correctIndex;
            return (
              <li
                key={q.id}
                className={answered ? "progress-item done" : "progress-item"}
              >
                <div className="progress-quiz-row">
                  <span className="progress-quiz-badge">
                    {answered ? (isCorrect ? "Answered ✓" : "Answered") : "Pending"}
                  </span>
                  <span>
                    <strong>Question {index + 1}:</strong> {q.prompt}
                  </span>
                </div>
                <a
                  href="/explore/quiz"
                  className="progress-item-link"
                  onClick={(e) => handleLinkClick(e, "/explore/quiz")}
                >
                  {answered ? "Review ↗" : "Answer ↗"}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
