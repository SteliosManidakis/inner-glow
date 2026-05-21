"use client";

import { usePathname } from "next/navigation";
import type { MutableRefObject } from "react";
import { useEffect, useRef } from "react";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const STORAGE_KEY = "innerGlowCookieConsentV1";

type ConsentPreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

declare global {
  interface Window {
    fbq?: FbqFunction;
    _fbq?: FbqFunction;
  }
}

type FbqFunction = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  loaded?: boolean;
  push?: FbqFunction;
  queue?: unknown[];
  version?: string;
};

export function MetaPixel() {
  const pathname = usePathname();
  const initialized = useRef(false);
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!META_PIXEL_ID) return;

    function loadPixel(preferences: ConsentPreferences) {
      if (!preferences.marketing || initialized.current) return;

      initialized.current = true;
      installFbq();
      window.fbq?.("init", META_PIXEL_ID);
      trackPageView(pathname, lastTrackedPath);
    }

    const savedConsent = readConsent();
    if (savedConsent) {
      loadPixel(savedConsent);
    }

    function handleConsent(event: Event) {
      loadPixel((event as CustomEvent<ConsentPreferences>).detail);
    }

    window.addEventListener("innerGlowCookieConsent", handleConsent);

    return () => window.removeEventListener("innerGlowCookieConsent", handleConsent);
  }, [pathname]);

  useEffect(() => {
    if (!META_PIXEL_ID || !initialized.current || !hasMarketingConsent()) return;
    trackPageView(pathname, lastTrackedPath);
  }, [pathname]);

  return null;
}

function installFbq() {
  if (window.fbq) return;

  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
    } else {
      fbq.queue?.push(args);
    }
  } as FbqFunction;

  window.fbq = fbq;
  window._fbq = fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];

  const firstScript = document.getElementsByTagName("script")[0];
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  firstScript.parentNode?.insertBefore(script, firstScript);
}

function trackPageView(
  pathname: string,
  lastTrackedPath: MutableRefObject<string | null>,
) {
  if (lastTrackedPath.current === pathname) return;
  lastTrackedPath.current = pathname;
  window.fbq?.("track", "PageView");
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

function hasMarketingConsent() {
  return Boolean(readConsent()?.marketing);
}
