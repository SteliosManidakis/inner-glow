//C:\dev\inner-glow\src\app\[locale]\[treatment]\page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceStructuredData } from "@/components/seo/ServiceStructuredData";
import { TreatmentDetail } from "@/components/sections/TreatmentDetail";
import { getDictionary } from "@/content/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { absoluteRoute, getTreatmentSeoMetadata, languageAlternates } from "@/lib/seo";
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
  const seo = getTreatmentSeoMetadata(locale, treatmentRoute.key);
  const path = `${locale}/${treatmentRoute.slug}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: `/${path}`,
      languages: languageAlternates(treatmentRoute.slug),
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
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
      title: seo.title,
      description: seo.description,
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

  return (
    <>
      <ServiceStructuredData
        locale={locale}
        treatment={treatment}
        treatmentRoute={treatmentRoute}
      />
      <TreatmentDetail
        dictionary={dictionary}
        locale={locale}
        treatment={treatment}
        treatmentKey={treatmentRoute.key}
      />
    </>
  );
}
