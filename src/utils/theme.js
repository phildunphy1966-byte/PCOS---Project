export const THEME_STORAGE_KEY = "pcos-theme";

export function normalizeTheme(value) {
  return value === "dark" ? "dark" : "light";
}

export function toggleThemeValue(currentTheme) {
  return normalizeTheme(currentTheme) === "dark" ? "light" : "dark";
}

export function loadThemePreference(storage, prefersDark = false) {
  if (storage && typeof storage.getItem === "function") {
    try {
      const saved = storage.getItem(THEME_STORAGE_KEY);
      if (saved === "dark" || saved === "light") {
        return saved;
      }
    } catch {
      // Ignore storage access errors
    }
  }
  return prefersDark ? "dark" : "light";
}

export function saveThemePreference(storage, theme) {
  if (!storage || typeof storage.setItem !== "function") return;
  try {
    storage.setItem(THEME_STORAGE_KEY, normalizeTheme(theme));
  } catch {
    // Ignore storage write errors
  }
}

export function applyDocumentTheme(theme) {
  if (typeof document === "undefined") return;
  const resolved = normalizeTheme(theme);
  document.documentElement.dataset.theme = resolved;
  document.documentElement.style.colorScheme = resolved;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", resolved === "dark" ? "#161219" : "#39243F");
  }
}
