/**
 * Meta Pixel (Facebook Pixel) — Reusable Helper Functions
 *
 * Usage:
 *   import { trackPageView, trackLead, trackContact } from "@/lib/metaPixel";
 *   trackLead({ content_name: "Strategy Request" });
 *
 * All helpers are safe to call server-side (they silently no-op when `fbq` is unavailable).
 */

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

// ─── Internal guard ────────────────────────────────────────────────
function fbq(...args) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq(...args);
  }
}

// ─── Standard Events ───────────────────────────────────────────────

/**
 * Fires the standard "PageView" event.
 * Called automatically by the MetaPixel component on every route change.
 */
export function trackPageView() {
  fbq("track", "PageView");
}

/**
 * Fires the standard "Lead" event.
 * Use when a user submits a contact / strategy-request form.
 *
 * @param {Object} [params] - Optional params (content_name, value, currency, etc.)
 */
export function trackLead(params = {}) {
  fbq("track", "Lead", params);
}

/**
 * Fires the standard "Contact" event.
 * Use for email link clicks, phone calls, or direct contact actions.
 *
 * @param {Object} [params] - Optional params
 */
export function trackContact(params = {}) {
  fbq("track", "Contact", params);
}

/**
 * Fires the standard "ViewContent" event.
 * Use on service pages, blog posts, or pricing pages.
 *
 * @param {Object} [params] - Should include content_name, content_category, etc.
 */
export function trackViewContent(params = {}) {
  fbq("track", "ViewContent", params);
}

/**
 * Fires the standard "Schedule" event.
 * Use when a user books / schedules a call or meeting.
 *
 * @param {Object} [params] - Optional params
 */
export function trackScheduleCall(params = {}) {
  fbq("track", "Schedule", params);
}

// ─── Custom Events ─────────────────────────────────────────────────

/**
 * Fires a completely custom event (trackCustom).
 * Use for any event not covered by Meta's standard events.
 *
 * @param {string}  eventName - Custom event name (e.g., "DownloadBrochure")
 * @param {Object}  [params]  - Optional params
 */
export function trackCustomEvent(eventName, params = {}) {
  fbq("trackCustom", eventName, params);
}
