export const locales = ["tr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";
