import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { getDictionary } from "@/content/dictionaries";
import { getLegalContent } from "@/content/legal";
import { isLocale } from "@/lib/i18n";
import { getSeoMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "el";
  return getSeoMetadata(safeLocale, "terms");
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "el";
  const dictionary = getDictionary(safeLocale);
  const legal = getLegalContent(safeLocale);

  return <LegalPage title={dictionary.nav.terms} content={legal.terms} />;
}
