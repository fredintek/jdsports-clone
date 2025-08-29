import { defineRouting } from "next-intl/routing";
import { locales, defaultLocale } from "@/lib/config/locales";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,
});
