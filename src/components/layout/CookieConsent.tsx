"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/routes";

const STORAGE_KEY = "innerGlowCookieConsentV1";

type ConsentPreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const necessaryOnly: ConsentPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function CookieConsent({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const savedConsent = typeof window === "undefined" ? null : readConsent();
  const [preferences, setPreferences] = useState<ConsentPreferences>(savedConsent ?? necessaryOnly);
  const [visible, setVisible] = useState(!savedConsent);

  useEffect(() => {
    publishConsent(preferences);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function openSettings() {
      setVisible(true);
    }

    window.addEventListener("innerGlowOpenCookieSettings", openSettings);
    return () => window.removeEventListener("innerGlowOpenCookieSettings", openSettings);
  }, []);

  function saveConsent(nextPreferences: ConsentPreferences) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextPreferences));
    setPreferences(nextPreferences);
    setVisible(false);
    publishConsent(nextPreferences);
  }

  function acceptAll() {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  }

  function rejectAll() {
    saveConsent(necessaryOnly);
  }

  function saveChoices() {
    saveConsent(preferences);
  }

  return (
    <>
      {visible ? (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-olive/20 bg-ivory/95 px-4 py-4 shadow-[0_-18px_45px_rgba(41,37,31,0.12)] backdrop-blur sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <h2 className="font-serif text-2xl leading-tight text-charcoal">
                {dictionary.cookieConsent.title}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-charcoal/72">
                {dictionary.cookieConsent.body}{" "}
                <Link className="font-semibold text-olive underline-offset-4 hover:underline" href={localizedPath(locale, "privacy")}>
                  {dictionary.cookieConsent.privacy}
                </Link>
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <ConsentOption
                  checked
                  description={dictionary.cookieConsent.necessaryBody}
                  disabled
                  label={dictionary.cookieConsent.necessary}
                />
                <ConsentOption
                  checked={preferences.analytics}
                  description={dictionary.cookieConsent.analyticsBody}
                  label={dictionary.cookieConsent.analytics}
                  onChange={(checked) =>
                    setPreferences((current) => ({ ...current, analytics: checked }))
                  }
                />
                <ConsentOption
                  checked={preferences.marketing}
                  description={dictionary.cookieConsent.marketingBody}
                  label={dictionary.cookieConsent.marketing}
                  onChange={(checked) =>
                    setPreferences((current) => ({ ...current, marketing: checked }))
                  }
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <button
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-olive/35 px-5 text-sm font-semibold uppercase tracking-[0.08em] text-olive transition hover:border-olive hover:bg-sage/20"
                onClick={rejectAll}
                type="button"
              >
                {dictionary.cookieConsent.rejectAll}
              </button>
              <button
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-olive/35 px-5 text-sm font-semibold uppercase tracking-[0.08em] text-olive transition hover:border-olive hover:bg-sage/20"
                onClick={saveChoices}
                type="button"
              >
                {dictionary.cookieConsent.save}
              </button>
              <button
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-olive px-5 text-sm font-semibold uppercase tracking-[0.08em] text-ivory transition hover:bg-charcoal"
                onClick={acceptAll}
                type="button"
              >
                {dictionary.cookieConsent.acceptAll}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function ConsentOption({
  checked,
  description,
  disabled = false,
  label,
  onChange,
}: {
  checked: boolean;
  description: string;
  disabled?: boolean;
  label: string;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <label className="grid gap-2 rounded-lg border border-olive/15 bg-ivory/75 p-3 text-sm leading-5 text-charcoal/70">
      <span className="flex items-center gap-2 font-semibold text-charcoal">
        <input
          checked={checked}
          className="h-4 w-4 accent-olive"
          disabled={disabled}
          onChange={(event) => onChange?.(event.target.checked)}
          type="checkbox"
        />
        {label}
      </span>
      <span>{description}</span>
    </label>
  );
}

function readConsent(): ConsentPreferences | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentPreferences>;

    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
    };
  } catch {
    return null;
  }
}

function publishConsent(preferences: ConsentPreferences) {
  window.dispatchEvent(
    new CustomEvent("innerGlowCookieConsent", {
      detail: preferences,
    }),
  );
}
