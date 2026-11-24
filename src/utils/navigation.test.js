import test from "node:test";
import assert from "node:assert/strict";
import {
  HAMBURGER_MENU_SECTIONS,
  MENU_FOOTER_LINKS,
  TOP_BAR_LINKS,
  isMenuRouteActive,
  isSectionActive,
  stripHashFromRoute,
} from "./navigation";

test("HAMBURGER_MENU_SECTIONS defines 6 structured sections with unique IDs and links", () => {
  assert.equal(HAMBURGER_MENU_SECTIONS.length, 6);
  const ids = new Set(HAMBURGER_MENU_SECTIONS.map((s) => s.id));
  assert.equal(ids.size, 6);
  for (const section of HAMBURGER_MENU_SECTIONS) {
    assert.ok(section.number);
    assert.ok(section.title);
    assert.ok(section.to.startsWith("/"));
    assert.ok(Array.isArray(section.links) && section.links.length >= 1);
  }
});

test("Myths & Facts is nested under Learn & Explore, not a top-level menu item", () => {
  const topTitles = HAMBURGER_MENU_SECTIONS.map((s) => s.title.toLowerCase());
  assert.equal(topTitles.includes("myths & facts"), false);
  assert.equal(
    TOP_BAR_LINKS.some((l) => l.to === "/myths-and-facts"),
    false,
  );

  const exploreSection = HAMBURGER_MENU_SECTIONS.find((s) => s.id === "learn-explore");
  assert.ok(exploreSection);
  assert.ok(exploreSection.links.some((l) => l.to === "/explore/myths" && /myths/i.test(l.label)));
});

test("Ask & Talk is nested under Find Support, not a top-level menu item", () => {
  const topTitles = HAMBURGER_MENU_SECTIONS.map((s) => s.title.toLowerCase());
  assert.equal(topTitles.includes("ask & talk"), false);
  assert.equal(
    TOP_BAR_LINKS.some((l) => l.to === "/assistant"),
    false,
  );

  const supportSection = HAMBURGER_MENU_SECTIONS.find((s) => s.id === "find-support");
  assert.ok(supportSection);
  assert.ok(supportSection.links.some((l) => l.to === "/assistant" && /ask & talk/i.test(l.label)));
});

test("route normalization and active state matching work cleanly", () => {
  assert.equal(stripHashFromRoute("/know-your-body#kyb-management-wellbeing"), "/know-your-body");
  assert.equal(stripHashFromRoute("/pcos/"), "/pcos");
  assert.equal(isMenuRouteActive("/pcos/nutrition", "/pcos/nutrition"), true);
  assert.equal(isMenuRouteActive("/know-your-body", "/know-your-body#kyb-management-wellbeing"), false);

  const pcosSection = HAMBURGER_MENU_SECTIONS.find((s) => s.id === "understand-pcos");
  assert.equal(isSectionActive("/pcos/nutrition", pcosSection), true);
  assert.equal(isSectionActive("/tracker", pcosSection), false);
  assert.ok(MENU_FOOTER_LINKS.some((l) => l.to === "/home"));
});
