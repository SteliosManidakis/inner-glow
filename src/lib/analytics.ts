type AnalyticsEventParams = Record<string, string | number | boolean | null | undefined>;
type FbqFunction = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  loaded?: boolean;
  push?: FbqFunction;
  queue?: unknown[];
  version?: string;
};

const STORAGE_KEY = "innerGlowCookieConsentV1";
const META_LEAD_EVENTS = new Set([
  "contact_request_submit",
  "treatment_request_submit",
  "systemic_workshop_signup",
  "newsletter_subscribe",
]);

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: FbqFunction;
  }
}

export function trackAnalyticsEvent(event: string, params: AnalyticsEventParams = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...params,
  });

  if (META_LEAD_EVENTS.has(event) && hasMarketingConsent()) {
    window.fbq?.("track", "Lead", sanitizeMetaParams({ content_name: event, ...params }));
    window.fbq?.("trackCustom", event, sanitizeMetaParams(params));
  }
}

function hasMarketingConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw) as { marketing?: unknown };
    return Boolean(parsed.marketing);
  } catch {
    return false;
  }
}

function sanitizeMetaParams(params: AnalyticsEventParams) {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== null && value !== undefined),
  );
}
