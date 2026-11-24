import test from "node:test";
import assert from "node:assert/strict";
import {
  EXPERT_ADVICE_SPECIALISTS,
  filterSpecialistProfiles,
  getSpecialistById,
  SPECIALIST_DIRECTORY_FILTERS,
  SPECIALIST_DIRECTORY_PROFILES,
  SUPPORT_NAVIGATION_CARDS,
  SUPPORT_RESOURCES_LIST,
  URGENT_CHECKIN_SIGNS,
} from "./supportGuide.js";

test("EXPERT_ADVICE_SPECIALISTS covers multidisciplinary PCOS specialists with clinical guidance and questions", () => {
  const ids = EXPERT_ADVICE_SPECIALISTS.map((s) => s.id);
  assert.deepEqual(ids, [
    "gynecologist",
    "endocrinologist",
    "dietitian",
    "counselor",
    "dermatologist",
  ]);

  for (const specialist of EXPERT_ADVICE_SPECIALISTS) {
    assert.ok(specialist.title.length > 3);
    assert.ok(specialist.whenToConsult.length > 20);
    assert.ok(specialist.clinicalAdvice.length >= 3);
    assert.ok(specialist.questionsToAsk.length >= 3);
    assert.ok(specialist.allyTip.length > 15);
  }
});

test("getSpecialistById returns requested specialist or safely falls back to the first", () => {
  assert.equal(getSpecialistById("dietitian").id, "dietitian");
  assert.equal(getSpecialistById("counselor").id, "counselor");
  assert.equal(getSpecialistById("missing-id").id, "gynecologist");
  assert.equal(getSpecialistById().id, "gynecologist");
});

test("SPECIALIST_DIRECTORY_PROFILES includes nutritionists and specialists with expertise and contact URLs", () => {
  assert.ok(SPECIALIST_DIRECTORY_FILTERS.length >= 5);
  assert.ok(SPECIALIST_DIRECTORY_PROFILES.length >= 6);

  const nutritionProfiles = filterSpecialistProfiles("nutrition");
  assert.ok(nutritionProfiles.length >= 2);

  for (const profile of SPECIALIST_DIRECTORY_PROFILES) {
    assert.ok(profile.title.length > 4);
    assert.ok(profile.credential.length > 4);
    assert.ok(profile.expertise.length >= 3);
    assert.ok(profile.portalUrl.startsWith("https://"));
    assert.ok(profile.reachNote.length > 10);
  }

  assert.equal(filterSpecialistProfiles("all", "14416")[0].id, "tele-manas-mental-health");
  assert.equal(filterSpecialistProfiles("endocrinology", "insulin").length, 1);
  assert.equal(filterSpecialistProfiles("all", "no-match-xyz").length, 0);
});

test("support navigation cards, urgent check-in signs, and trusted resources are populated", () => {
  assert.ok(SUPPORT_NAVIGATION_CARDS.length >= 5);
  assert.ok(SUPPORT_NAVIGATION_CARDS.some((card) => card.to === "/assistant" && card.title.includes("Ask & Talk")));
  assert.ok(URGENT_CHECKIN_SIGNS.length >= 4);
  assert.ok(SUPPORT_RESOURCES_LIST.length >= 3);
  for (const card of SUPPORT_NAVIGATION_CARDS) {
    assert.ok(card.to.startsWith("/"));
    assert.ok(card.title.length > 3);
  }
});
