//C:\dev\inner-glow\src\lib\treatments.ts

import type { Locale } from "@/lib/i18n";

export const treatmentRoutes = [
  { key: "regressionHypnosis", slug: "regression-hypnosis", treatmentIndex: 2 },
  { key: "nlpCoaching", slug: "nlp-coaching", treatmentIndex: 4 },
  { key: "tapping", slug: "tapping", treatmentIndex: 1 },
  { key: "reiki", slug: "reiki", treatmentIndex: 0 },
  { key: "systemicConstellation", slug: "systemic-constellation", treatmentIndex: 3 },
  { key: "meditations", slug: "meditations", treatmentIndex: 5 },
] as const;

export type TreatmentRoute = (typeof treatmentRoutes)[number];
export type TreatmentRouteKey = TreatmentRoute["key"];

export function getTreatmentRoute(slug: string) {
  return treatmentRoutes.find((route) => route.slug === slug);
}

export function treatmentPath(locale: Locale, route: TreatmentRoute) {
  return `/${locale}/${route.slug}`;
}
