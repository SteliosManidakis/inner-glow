import type { Locale } from "@/lib/i18n";

export type PricingRegion = "GR" | "US" | "GB" | "EU" | "DEFAULT";

export type PriceConfig = {
  amount: number;
  currency: "EUR" | "USD" | "GBP";
  labels: Record<Locale, string>;
};

export const euCountryCodes = [
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
];

export const pricingByRegion: Record<PricingRegion, PriceConfig> = {
  GR: {
    amount: 50,
    currency: "EUR",
    labels: { el: "Ελλάδα", en: "Greece" },
  },
  US: {
    amount: 90,
    currency: "USD",
    labels: { el: "Ηνωμένες Πολιτείες", en: "United States" },
  },
  GB: {
    amount: 80,
    currency: "GBP",
    labels: { el: "Ηνωμένο Βασίλειο", en: "United Kingdom" },
  },
  EU: {
    amount: 60,
    currency: "EUR",
    labels: { el: "Ευρωπαϊκή Ένωση", en: "European Union" },
  },
  DEFAULT: {
    amount: 80,
    currency: "USD",
    labels: { el: "Διεθνώς", en: "International" },
  },
};
