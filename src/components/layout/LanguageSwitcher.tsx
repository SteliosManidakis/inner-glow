"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { oppositeLocale, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const nextLocale = oppositeLocale(locale);
  const pathname = usePathname();
  const path = pathname.replace(/^\/(el|en)/, "");

  return (
    <Link
      className="rounded-full border border-olive/30 px-3 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-olive transition hover:bg-sage/20"
      href={`/${nextLocale}${path}`}
      aria-label={`Switch language to ${nextLocale}`}
    >
      {label}
    </Link>
  );
}
