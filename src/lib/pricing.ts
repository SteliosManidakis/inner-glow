import { headers } from "next/headers";
import {
  euCountryCodes,
  pricingByRegion,
  type PricingRegion,
} from "@/content/pricing";
import type { Locale } from "@/lib/i18n";

const currencySymbols = {
  EUR: "€",
  USD: "$",
  GBP: "£",
};

function resolveRegion(countryCode?: string | null): PricingRegion {
  const country = countryCode?.toUpperCase();

  if (country === "GR") return "GR";
  if (country === "US") return "US";
  if (country === "GB") return "GB";
  if (country && euCountryCodes.includes(country)) return "EU";

  return "DEFAULT";
}

function formatPrice(amount: number, currency: keyof typeof currencySymbols) {
  const symbol = currencySymbols[currency];
  return currency === "EUR" ? `${amount}${symbol}` : `${symbol}${amount}`;
}

export async function getLocationPrice(locale: Locale) {
  const requestHeaders = await headers();
  const countryCode = requestHeaders.get("x-vercel-ip-country");
  const region = resolveRegion(countryCode);
  const price = pricingByRegion[region];

  return {
    amount: price.amount,
    currency: price.currency,
    countryCode,
    label: price.labels[locale],
    formatted: formatPrice(price.amount, price.currency),
    region,
  };
}
