import test from "node:test";
import assert from "node:assert/strict";
import {
  buildMythVerdictChartData,
  buildProgressChartData,
  buildSymptomThemeChartData,
} from "./charts.js";
import {
  PCOS_MYTHS_AND_FACTS,
  QUIZ_QUESTIONS,
  TRACKABLE_ARTICLES,
} from "../data/learningContent.js";

test("buildProgressChartData groups articles by category and counts quiz completion", () => {
  const rows = buildProgressChartData({
    articles: TRACKABLE_ARTICLES,
    questions: QUIZ_QUESTIONS,
    completedArticles: [
      "/know-your-body/anatomy",
      "/know-your-body/hormones",
      "/pcos/features",
      "/know-your-body/anatomy", // duplicate should be ignored
    ],
    quizAnswers: {
      q1: "1",
      q2: "",
    },
  });

  assert.deepEqual(rows, [
    { name: "Know Your Body", completed: 2, remaining: 2, total: 4, percentage: 50 },
    { name: "Understand PCOS", completed: 1, remaining: 3, total: 4, percentage: 25 },
    { name: "Knowledge Check", completed: 1, remaining: 3, total: 4, percentage: 25 },
  ]);
});

test("buildMythVerdictChartData counts myths and facts per category accurately", () => {
  const rows = buildMythVerdictChartData(PCOS_MYTHS_AND_FACTS);

  assert.deepEqual(rows, [
    { category: "Diagnosis & Body", myths: 3, facts: 0, total: 3 },
    { category: "Fertility & Cycles", myths: 2, facts: 0, total: 2 },
    { category: "Causes & Stigma", myths: 2, facts: 0, total: 2 },
    { category: "Care & Lifestyle", myths: 1, facts: 2, total: 3 },
  ]);
});

test("buildSymptomThemeChartData derives non-zero topic counts from myth/fact content sorted descending", () => {
  const rows = buildSymptomThemeChartData(PCOS_MYTHS_AND_FACTS);

  assert.ok(rows.length >= 4);
  for (let i = 1; i < rows.length; i += 1) {
    assert.ok(rows[i - 1].total >= rows[i].total);
  }
  const sumMythsAndFacts = rows.every((r) => r.total === r.myths + r.facts && r.total > 0);
  assert.equal(sumMythsAndFacts, true);
});

test("chart builders handle empty inputs gracefully", () => {
  assert.deepEqual(buildMythVerdictChartData([]), []);
  assert.deepEqual(buildSymptomThemeChartData([]), []);
  assert.deepEqual(buildProgressChartData({}), [
    { name: "Knowledge Check", completed: 0, remaining: 0, total: 0, percentage: 0 },
  ]);
});
