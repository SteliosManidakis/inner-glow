//C:\dev\inner-glow\src\app\[locale]\[treatment]\page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TreatmentDetail } from "@/components/sections/TreatmentDetail";
import { getDictionary } from "@/content/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { absoluteRoute, languageAlternates } from "@/lib/seo";
import { getTreatmentRoute, treatmentRoutes } from "@/lib/treatments";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    treatmentRoutes.map((route) => ({
      locale,
      treatment: route.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; treatment: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, treatment: slug } = await params;
  if (!isLocale(rawLocale)) return {};

  const treatmentRoute = getTreatmentRoute(slug);
  if (!treatmentRoute) return {};

  const locale = rawLocale as Locale;
  const dictionary = getDictionary(locale);
  const treatment = dictionary.healing.treatments[treatmentRoute.treatmentIndex];
  const path = `${locale}/${treatmentRoute.slug}`;

  return {
    title: `${treatment.title} | ${dictionary.healing.title}`,
    description: treatment.body,
    alternates: {
      canonical: `/${path}`,
      languages: languageAlternates(treatmentRoute.slug),
    },
    openGraph: {
      title: `${treatment.title} | ${dictionary.common.brand}`,
      description: treatment.body,
      url: absoluteRoute(locale, treatmentRoute.slug),
      siteName: dictionary.common.brand,
      locale: locale === "el" ? "el_GR" : "en_US",
      alternateLocale: locale === "el" ? ["en_US"] : ["el_GR"],
      type: "website",
      images: [
        {
          url: treatment.image,
          width: 1000,
          height: 750,
          alt: dictionary.common.brand,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${treatment.title} | ${dictionary.common.brand}`,
      description: treatment.body,
      images: [treatment.image],
    },
  };
}

export default async function TreatmentPage({
  params,
}: {
  params: Promise<{ locale: string; treatment: string }>;
}) {
  const { locale: rawLocale, treatment: slug } = await params;
  if (!isLocale(rawLocale)) notFound();

  const treatmentRoute = getTreatmentRoute(slug);
  if (!treatmentRoute) notFound();

  const locale = rawLocale as Locale;
  const dictionary = getDictionary(locale);
  const treatment = dictionary.healing.treatments[treatmentRoute.treatmentIndex];

  return <TreatmentDetail dictionary={dictionary} treatment={treatment} />;
}
