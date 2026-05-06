import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { PreviewSections } from "@/components/sections/PreviewSections";
import { getDictionary } from "@/content/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";
import { getSeoMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "el";
  return getSeoMetadata(safeLocale, "");
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = (isLocale(rawLocale) ? rawLocale : "el") as Locale;
  const dictionary = getDictionary(locale);

  return (
    <>
      <HeroSection dictionary={dictionary} locale={locale} />
      <IntroSection dictionary={dictionary} />
      <PreviewSections dictionary={dictionary} locale={locale} />
    </>
  );
}
