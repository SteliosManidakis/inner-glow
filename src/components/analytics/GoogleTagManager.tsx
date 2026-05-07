"use client";

import { useEffect, useRef } from "react";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const STORAGE_KEY = "innerGlowCookieConsentV1";

type ConsentPreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function GoogleTagManager() {
  const loaded = useRef(false);

  useEffect(() => {
    if (!GTM_ID) return;

    function loadGtm(preferences: ConsentPreferences) {
      const canLoadGtm = preferences.analytics || preferences.marketing;

      if (!canLoadGtm || loaded.current) return;

      loaded.current = true;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "cookie_consent_update",
        analytics_storage: preferences.analytics ? "granted" : "denied",
        ad_storage: preferences.marketing ? "granted" : "denied",
        ad_user_data: preferences.marketing ? "granted" : "denied",
        ad_personalization: preferences.marketing ? "granted" : "denied",
      });
      window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

      const firstScript = document.getElementsByTagName("script")[0];
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      firstScript.parentNode?.insertBefore(script, firstScript);
    }

    const savedConsent = readConsent();
    if (savedConsent) {
      loadGtm(savedConsent);
    }

    function handleConsent(event: Event) {
      loadGtm((event as CustomEvent<ConsentPreferences>).detail);
    }

    window.addEventListener("innerGlowCookieConsent", handleConsent);

    return () => window.removeEventListener("innerGlowCookieConsent", handleConsent);
  }, []);

  return null;
}

function readConsent(): ConsentPreferences | null {
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
