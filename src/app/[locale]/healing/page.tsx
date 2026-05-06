import { redirect } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/routes";

export default async function HealingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = (isLocale(rawLocale) ? rawLocale : "el") as Locale;

  redirect(localizedPath(locale, "regression-hypnosis"));
}
