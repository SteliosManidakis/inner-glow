import Image from "next/image";
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
      <div className="relative mx-auto flex min-h-20 w-full max-w-[95rem] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link className="inline-flex shrink-0 items-center gap-3 whitespace-nowrap font-serif text-xl leading-tight text-charcoal sm:text-2xl" href={localizedPath(locale)}>
          <Image
            src="/images/small_logo.png"
            alt=""
            width={44}
            height={44}
            className="h-9 w-9 object-contain sm:h-10 sm:w-10"
            priority
          />
          <span>{dictionary.common.brand}</span>
        </Link>
        <nav className="hidden min-w-0 flex-1 flex-wrap items-center justify-end gap-x-3 gap-y-3 lg:gap-x-4 xl:gap-x-5 md:flex" aria-label="Main navigation">
          {navRoutes.map((route) => (
            <Link
              className="inline-flex min-h-10 items-center text-xs uppercase tracking-[0.1em] text-charcoal/75 transition hover:text-olive xl:tracking-[0.12em]"
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
