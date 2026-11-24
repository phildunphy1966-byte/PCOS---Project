import test from "node:test";
import assert from "node:assert/strict";
import {
  AUDIENCE_PERSPECTIVES,
  filterAudienceGuidance,
  filterPcosFaqs,
  getManagementPillar,
  getNutritionCategory,
  getUnderstandingTab,
  MANAGEMENT_PILLARS,
  NUTRITION_TIPS_CATEGORIES,
  PCOS_FAQ_ASKED_BY,
  PCOS_FAQ_TOPICS,
  PCOS_FAQS,
  UNDERSTANDING_PCOS_TABS,
} from "./pcosGuide.js";

test("UNDERSTANDING_PCOS_TABS includes managing PCOS, Nutritional Tips, FAQs, and core topics", () => {
  const ids = UNDERSTANDING_PCOS_TABS.map((tab) => tab.id);
  assert.ok(ids.includes("managing"));
  assert.ok(ids.includes("nutrition"));
  assert.ok(ids.includes("overview"));
  assert.ok(ids.includes("features"));
  assert.ok(ids.includes("diagnosis"));
  assert.ok(ids.includes("faqs"));
  assert.equal(getUnderstandingTab("managing").label, "Managing PCOS");
  assert.equal(getUnderstandingTab("nutrition").label, "Nutritional Tips");
  assert.equal(getUnderstandingTab("faqs").label, "FAQs");
  assert.equal(getUnderstandingTab("non-existent").id, "managing");
});

test("PCOS_FAQS and filterPcosFaqs cover diet, symptoms, and emotional support for patients and partners", () => {
  assert.ok(PCOS_FAQ_TOPICS.length >= 4);
  assert.ok(PCOS_FAQ_ASKED_BY.length >= 3);
  assert.ok(PCOS_FAQS.length >= 9);

  for (const topic of ["diet", "symptoms", "emotional-support"]) {
    assert.ok(filterPcosFaqs(topic, "patient").length >= 1);
    assert.ok(filterPcosFaqs(topic, "partner").length >= 1);
  }
  assert.equal(filterPcosFaqs("all", "all").length, PCOS_FAQS.length);
  assert.ok(filterPcosFaqs("emotional-support", "partner").length >= 2);
});

test("NUTRITION_TIPS_CATEGORIES provides structured swaps and multi-audience takeaways", () => {
  const catIds = NUTRITION_TIPS_CATEGORIES.map((c) => c.id);
  assert.deepEqual(catIds, [
    "plate-pairing",
    "everyday-meals",
    "snacks-cravings",
    "micronutrients",
  ]);

  for (const cat of NUTRITION_TIPS_CATEGORIES) {
    assert.ok(cat.title.length > 5);
    assert.ok(cat.swaps.length >= 3);
    assert.ok(cat.gentleReminder.length > 10);
    assert.deepEqual(
      cat.perspectives.map((p) => p.audienceId),
      ["with-pcos", "without-pcos", "male-ally"]
    );
  }

  assert.equal(getNutritionCategory("snacks-cravings").id, "snacks-cravings");
  assert.equal(getNutritionCategory("unknown").id, "plate-pairing");
  assert.equal(
    filterAudienceGuidance(getNutritionCategory("everyday-meals"), "male-ally")[0]
      .audienceId,
    "male-ally"
  );
});

test("MANAGEMENT_PILLARS covers diet, physical activity, sleep, hydration, stress, and medical tracking", () => {
  const pillarIds = MANAGEMENT_PILLARS.map((p) => p.id);
  assert.deepEqual(pillarIds, [
    "diet",
    "activity",
    "sleep",
    "hydration",
    "stress",
    "medical",
  ]);

  for (const pillar of MANAGEMENT_PILLARS) {
    assert.ok(pillar.title.length > 5);
    assert.ok(pillar.dailyFocus.length >= 3);
    assert.ok(pillar.illustrationId.length > 0);
    const audienceIds = pillar.perspectives.map((item) => item.audienceId);
    assert.deepEqual(audienceIds, ["with-pcos", "without-pcos", "male-ally"]);
  }

  assert.equal(getManagementPillar("sleep").id, "sleep");
  assert.equal(getManagementPillar("unknown").id, "diet");
});

test("filterAudienceGuidance returns all three audiences or a single tailored perspective", () => {
  const dietPillar = getManagementPillar("diet");
  assert.equal(AUDIENCE_PERSPECTIVES.length, 4);

  const allGuidance = filterAudienceGuidance(dietPillar, "all");
  assert.equal(allGuidance.length, 3);

  const withPcos = filterAudienceGuidance(dietPillar, "with-pcos");
  assert.equal(withPcos.length, 1);
  assert.equal(withPcos[0].audienceId, "with-pcos");

  const withoutPcos = filterAudienceGuidance(dietPillar, "without-pcos");
  assert.equal(withoutPcos.length, 1);
  assert.equal(withoutPcos[0].audienceId, "without-pcos");

  const maleAlly = filterAudienceGuidance(dietPillar, "male-ally");
  assert.equal(maleAlly.length, 1);
  assert.equal(maleAlly[0].audienceId, "male-ally");

  assert.equal(filterAudienceGuidance(dietPillar, "invalid").length, 3);
  assert.deepEqual(filterAudienceGuidance(null, "all"), []);
});
