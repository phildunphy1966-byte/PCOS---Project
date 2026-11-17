import test from "node:test";
import assert from "node:assert/strict";
import { PCOS_MYTHS_AND_FACTS } from "../data/learningContent";
import {
  getMythCategories,
  filterMythsAndFacts,
  countRevealedMyths,
} from "./myths";

test("getMythCategories returns All followed by unique categories in order", () => {
  const categories = getMythCategories(PCOS_MYTHS_AND_FACTS);
  assert.equal(categories[0], "All");
  assert.ok(categories.includes("Diagnosis & Body"));
  assert.ok(categories.includes("Fertility & Cycles"));
  assert.ok(categories.includes("Causes & Stigma"));
  assert.ok(categories.includes("Care & Lifestyle"));
  assert.equal(new Set(categories).size, categories.length);
});

test("filterMythsAndFacts filters by category and verdict", () => {
  const all = filterMythsAndFacts(PCOS_MYTHS_AND_FACTS);
  assert.equal(all.length, PCOS_MYTHS_AND_FACTS.length);

  const fertility = filterMythsAndFacts(PCOS_MYTHS_AND_FACTS, {
    category: "Fertility & Cycles",
  });
  assert.equal(fertility.length, 2);
  assert.ok(fertility.every((item) => item.category === "Fertility & Cycles"));

  const factsOnly = filterMythsAndFacts(PCOS_MYTHS_AND_FACTS, {
    verdict: "Fact",
  });
  assert.equal(factsOnly.length, 2);
  assert.ok(factsOnly.every((item) => item.verdict === "Fact"));

  const combined = filterMythsAndFacts(PCOS_MYTHS_AND_FACTS, {
    category: "Diagnosis & Body",
    verdict: "Myth",
  });
  assert.equal(combined.length, 3);
});

test("countRevealedMyths counts only truthy revealed item IDs", () => {
  assert.equal(countRevealedMyths({}, PCOS_MYTHS_AND_FACTS), 0);
  assert.equal(
    countRevealedMyths({ m1: true, f1: true, m2: false, unknown: true }, PCOS_MYTHS_AND_FACTS),
    2
  );
});
