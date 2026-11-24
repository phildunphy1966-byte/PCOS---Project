import test from "node:test";
import assert from "node:assert/strict";
import {
  countRevealedMaleMyths,
  filterMaleMyths,
  getMaleMythCategories,
  getMaleSupportRole,
  MALE_ALLY_MYTHS,
  MALE_ALLY_SECTIONS,
  MALE_SUPPORT_ROLES,
  MALE_UNDERSTANDING_CONCEPTS,
} from "./maleAlly.js";

test("MALE_ALLY_SECTIONS defines 3 ordered sections for understanding, myths, and support", () => {
  assert.equal(MALE_ALLY_SECTIONS.length, 3);
  assert.deepEqual(
    MALE_ALLY_SECTIONS.map((s) => s.id),
    ["understanding-pcos", "myths-misconceptions", "support-communication"]
  );
  assert.ok(MALE_UNDERSTANDING_CONCEPTS.length >= 3);
});

test("MALE_ALLY_MYTHS and filters separate categories, verdicts, and revealed counts cleanly", () => {
  const categories = getMaleMythCategories(MALE_ALLY_MYTHS);
  assert.equal(categories[0], "All");
  assert.ok(categories.includes("Body & Biology"));
  assert.ok(categories.includes("Fertility & Future"));

  const onlyFacts = filterMaleMyths(MALE_ALLY_MYTHS, { verdict: "Fact" });
  assert.ok(onlyFacts.length >= 2);
  assert.ok(onlyFacts.every((item) => item.verdict === "Fact"));

  const fertilityMyths = filterMaleMyths(MALE_ALLY_MYTHS, {
    category: "Fertility & Future",
    verdict: "Myth",
  });
  assert.ok(fertilityMyths.length >= 1);
  assert.ok(
    fertilityMyths.every(
      (item) => item.category === "Fertility & Future" && item.verdict === "Myth"
    )
  );

  assert.equal(
    countRevealedMaleMyths({ am1: true, am2: false, orphan: true }, MALE_ALLY_MYTHS),
    1
  );
});

test("MALE_SUPPORT_ROLES covers family, partner, and friends with actions and communication swaps", () => {
  assert.deepEqual(
    MALE_SUPPORT_ROLES.map((r) => r.id),
    ["family", "partner", "friends"]
  );
  for (const role of MALE_SUPPORT_ROLES) {
    assert.ok(role.practicalActions.length >= 3);
    assert.ok(role.communicationSwaps.length >= 2);
    for (const swap of role.communicationSwaps) {
      assert.ok(swap.skip.length > 0 && swap.sayInstead.length > 0);
    }
  }
  assert.equal(getMaleSupportRole("partner").id, "partner");
  assert.equal(getMaleSupportRole("unknown").id, "family");
});
