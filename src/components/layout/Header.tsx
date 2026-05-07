import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries";
import { siteImages } from "@/content/images";
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
    <header className="sticky top-0 z-30 overflow-visible border-b border-olive/10 bg-ivory/90 backdrop-blur">
      <div className="relative mx-auto flex min-h-20 w-full max-w-[100rem] items-center justify-between gap-4 px-4 py-3 sm:px-6 md:justify-end md:pl-[24rem] lg:px-8 lg:pl-[25rem] xl:pl-[26rem]">
        <Link
          className="inline-flex shrink-0 items-center overflow-hidden rounded-b-lg rounded-t-sm shadow-[0_16px_32px_rgba(41,37,31,0.12)] md:absolute md:left-10 md:top-0 lg:left-12"
          href={localizedPath(locale)}
        >
          <Image
            src={siteImages.logos.header}
            alt={dictionary.common.brand}
            width={320}
            height={140}
            className="h-auto w-44 md:w-[19.25rem] lg:w-[20.25rem]"
            priority
          />
        </Link>
        <nav className="hidden min-w-0 flex-1 flex-nowrap items-center justify-end gap-x-2 lg:gap-x-3 xl:gap-x-4 md:flex" aria-label="Main navigation">
          {navRoutes.map((route) => (
            <Link
              className="inline-flex min-h-10 shrink-0 items-center text-[0.7rem] uppercase tracking-[0.08em] text-charcoal/75 transition hover:text-olive xl:text-xs xl:tracking-[0.1em]"
              href={localizedPath(locale, route.href)}
              key={route.key}
              title={route.key === "contact" ? dictionary.nav[route.key] : undefined}
              aria-label={route.key === "contact" ? dictionary.nav[route.key] : undefined}
            >
              {route.key === "contact" ? (
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              ) : (
                dictionary.nav[route.key]
              )}
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
