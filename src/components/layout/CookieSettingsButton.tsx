"use client";

import type { Dictionary } from "@/content/dictionaries";

export function CookieSettingsButton({ dictionary }: { dictionary: Dictionary }) {
  return (
    <button
      className="mt-3 inline-flex min-h-6 items-center rounded-full border border-ivory/20 px-2.5 py-1 text-[0.65rem] font-semibold uppercase leading-tight tracking-[0.08em] text-ivory/70 transition hover:border-clay hover:text-clay"
      onClick={() => window.dispatchEvent(new CustomEvent("innerGlowOpenCookieSettings"))}
      type="button"
    >
      {dictionary.cookieConsent.manage}
    </button>
  );
}
