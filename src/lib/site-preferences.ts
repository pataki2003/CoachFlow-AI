export const SITE_THEME_COOKIE = "site-theme";
export const SITE_LANGUAGE_COOKIE = "site-lang";
export const SITE_PREFERENCE_MAX_AGE = 60 * 60 * 24 * 365;

export type ThemeMode = "light" | "dark";
export type LanguageCode = "en" | "hu";

export function parseTheme(value: string | null | undefined): ThemeMode {
  return value === "dark" ? "dark" : "light";
}

export function parseLanguage(value: string | null | undefined): LanguageCode {
  return value === "hu" ? "hu" : "en";
}
