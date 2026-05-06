import type { Locale } from "./i18n";
import { treatmentRoutes } from "./treatments";

export const navRoutes = [
  { key: "home", href: "" },
  { key: "about", href: "about" },
  ...treatmentRoutes.map((route) => ({ key: route.key, href: route.slug })),
  { key: "contact", href: "contact" },
] as const;

export type RouteKey = (typeof navRoutes)[number]["key"];

export function localizedPath(locale: Locale, path = "") {
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return normalized ? `/${locale}/${normalized}` : `/${locale}`;
}
