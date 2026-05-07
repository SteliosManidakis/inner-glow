"use client";

import Link from "next/link";
import { useState } from "react";
import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";
import { localizedPath, navRoutes } from "@/lib/routes";

export function MobileNav({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex min-h-11 min-w-20 items-center justify-center rounded-full border border-olive/30 px-4 text-sm font-semibold uppercase tracking-[0.1em] text-olive"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? "Close" : "Menu"}
      </button>

      {open ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full max-h-[calc(100svh-5rem)] overflow-y-auto border-b border-olive/10 bg-ivory px-5 py-5 shadow-[0_18px_40px_rgba(41,37,31,0.08)]"
        >
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-2" aria-label="Mobile navigation">
            {navRoutes.map((route) => (
              <Link
                className="min-h-12 rounded-lg px-2 py-3 text-base font-semibold text-charcoal transition hover:bg-sage/20"
                href={localizedPath(locale, route.href)}
                key={route.key}
                onClick={() => setOpen(false)}
              >
                {dictionary.nav[route.key]}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
