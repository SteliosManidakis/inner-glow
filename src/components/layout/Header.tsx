import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";
import { localizedPath, navRoutes } from "@/lib/routes";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav } from "./MobileNav";

export function Header({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-olive/10 bg-ivory/90 backdrop-blur">
      <div className="relative mx-auto flex min-h-20 w-full max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8 lg:px-10">
        <Link className="min-w-0 max-w-[15rem] font-serif text-xl leading-tight text-charcoal sm:max-w-none sm:text-2xl" href={localizedPath(locale)}>
          {dictionary.common.brand}
        </Link>
        <nav className="hidden min-w-0 flex-wrap items-center justify-end gap-x-6 gap-y-3 md:flex" aria-label="Main navigation">
          {navRoutes.map((route) => (
            <Link
              className="inline-flex min-h-10 items-center text-sm uppercase tracking-[0.12em] text-charcoal/75 transition hover:text-olive"
              href={localizedPath(locale, route.href)}
              key={route.key}
            >
              {dictionary.nav[route.key]}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <LanguageSwitcher locale={locale} label={dictionary.common.switchLanguage} />
        </div>
        <MobileNav locale={locale} dictionary={dictionary} />
      </div>
    </header>
  );
}
