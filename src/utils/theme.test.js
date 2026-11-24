import test from "node:test";
import assert from "node:assert/strict";
import {
  loadThemePreference,
  normalizeTheme,
  saveThemePreference,
  THEME_STORAGE_KEY,
  toggleThemeValue,
} from "./theme.js";

function createMemoryStorage(initial = {}) {
  const store = { ...initial };
  return {
    getItem(key) {
      return Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null;
    },
    setItem(key, value) {
      store[key] = String(value);
    },
  };
}

test("normalizeTheme and toggleThemeValue switch cleanly between light and dark", () => {
  assert.equal(normalizeTheme("dark"), "dark");
  assert.equal(normalizeTheme("light"), "light");
  assert.equal(normalizeTheme("other"), "light");

  assert.equal(toggleThemeValue("light"), "dark");
  assert.equal(toggleThemeValue("dark"), "light");
});

test("loadThemePreference reads saved storage or falls back to system preference", () => {
  const darkStorage = createMemoryStorage({ [THEME_STORAGE_KEY]: "dark" });
  const lightStorage = createMemoryStorage({ [THEME_STORAGE_KEY]: "light" });
  const invalidStorage = createMemoryStorage({ [THEME_STORAGE_KEY]: "sepia" });

  assert.equal(loadThemePreference(darkStorage, false), "dark");
  assert.equal(loadThemePreference(lightStorage, true), "light");
  assert.equal(loadThemePreference(invalidStorage, true), "dark");
  assert.equal(loadThemePreference(null, false), "light");
  assert.equal(loadThemePreference(null, true), "dark");
});

test("saveThemePreference persists normalized theme value", () => {
  const storage = createMemoryStorage();
  saveThemePreference(storage, "dark");
  assert.equal(storage.getItem(THEME_STORAGE_KEY), "dark");
  saveThemePreference(storage, "invalid");
  assert.equal(storage.getItem(THEME_STORAGE_KEY), "light");
});
