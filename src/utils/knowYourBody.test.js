import test from "node:test";
import assert from "node:assert/strict";
import {
  getAgeGroupById,
  getKnowYourBodySection,
  KNOW_YOUR_BODY_AGE_GROUPS,
  KNOW_YOUR_BODY_SECTIONS,
  KNOW_YOUR_BODY_SUBGUIDES,
  mapAgePreferenceToGroup,
} from "./knowYourBody.js";

test("KNOW_YOUR_BODY_SECTIONS defines 3 sections including Menstrual & Reproductive Health and Management & Wellbeing", () => {
  const ids = KNOW_YOUR_BODY_SECTIONS.map((s) => s.id);
  assert.deepEqual(ids, [
    "menstrual-reproductive",
    "management-wellbeing",
    "hormones-metabolism",
  ]);
  assert.equal(KNOW_YOUR_BODY_SECTIONS[0].shortLabel, "Menstrual & Reproductive Health");
  assert.equal(KNOW_YOUR_BODY_SECTIONS[1].shortLabel, "Management & Wellbeing");

  for (const section of KNOW_YOUR_BODY_SECTIONS) {
    assert.ok(section.relatedLinks.length >= 2);
    for (const ageGroup of KNOW_YOUR_BODY_AGE_GROUPS) {
      const content = section.byAge[ageGroup.id];
      assert.ok(content, `Missing ${ageGroup.id} in ${section.id}`);
      assert.ok(content.diagramTitle.length > 5);
      assert.ok(content.keyPoints.length >= 3);
      assert.ok(content.normalNote.length > 5);
      assert.ok(content.checkInNote.length > 5);
    }
  }
});

test("mapAgePreferenceToGroup maps optional age preference strings to diagram age bands", () => {
  assert.equal(mapAgePreferenceToGroup("Under 18"), "teens");
  assert.equal(mapAgePreferenceToGroup("18–21"), "young-adults");
  assert.equal(mapAgePreferenceToGroup("26–30"), "young-adults");
  assert.equal(mapAgePreferenceToGroup("31–35"), "adults");
  assert.equal(mapAgePreferenceToGroup("Above 35"), "adults");
  assert.equal(mapAgePreferenceToGroup(""), "teens");
});

test("getAgeGroupById, getKnowYourBodySection, and subguides handle lookups cleanly", () => {
  assert.equal(getAgeGroupById("adults").id, "adults");
  assert.equal(getAgeGroupById("invalid").id, "teens");
  assert.equal(getKnowYourBodySection("management-wellbeing").id, "management-wellbeing");
  assert.equal(getKnowYourBodySection("missing").id, "menstrual-reproductive");
  assert.equal(KNOW_YOUR_BODY_SUBGUIDES.length, 4);
});
