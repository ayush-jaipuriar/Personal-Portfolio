/**
 * composables/useAnalytics.ts — Consent-gated Google Analytics (GA4) integration.
 *
 * Why this pattern?
 * ─────────────────
 * GA4 drops a cookie (`_ga`), which triggers GDPR (EU), CCPA (California),
 * and India's DPDP Act requirements. Instead of loading the script on every
 * page load and asking forgiveness, we load it *only* after the user clicks
 * "Accept" on the cookie consent banner.
 *
 * How it works:
 *   1. `loadGA()` dynamically injects the gtag.js <script> tag + initializes
 *      the dataLayer. Called once when the user accepts cookies.
 *   2. `trackEvent()` fires a custom GA4 event. It safely no-ops when GA
 *      hasn't been loaded (user declined or hasn't responded yet).
 *   3. `trackOutboundClick()` is a convenience wrapper for external links.
 *
 * The composable reads the GA Measurement ID from Nuxt's public runtime
 * config so it's set once in `nuxt.config.ts` and available everywhere.
 */

import { useRuntimeConfig } from 'nuxt/app'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

let gaLoaded = false

export const useAnalytics = () => {
  const config = useRuntimeConfig()
  const gaId: string = (config.public?.gaId as string) || ''

  /**
   * Dynamically load the GA4 gtag.js script and initialize the dataLayer.
   *
   * This is called exactly once — when the user accepts cookies. Subsequent
   * calls are no-ops thanks to the `gaLoaded` flag.
   *
   * "dataLayer" is Google's event queue: gtag() pushes events into it,
   * and GA4 processes them asynchronously. The `js` event with `new Date()`
   * tells GA4 when the page session started.
   */
  const loadGA = () => {
    if (gaLoaded || !gaId || typeof window === 'undefined') return

    // 1. Inject the gtag.js loader script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    document.head.appendChild(script)

    // 2. Initialize the dataLayer and configure the measurement stream
    window.dataLayer = window.dataLayer || []
    window.gtag = function (...args: unknown[]) {
      window.dataLayer.push(args)
    }
    window.gtag('js', new Date())
    window.gtag('config', gaId, {
      // Send pageview on every SPA route change automatically.
      // Nuxt uses client-side navigation, so GA4's "enhanced measurement"
      // handles SPA pageviews via the History API listener.
      send_page_view: true,
    })

    gaLoaded = true
  }

  /**
   * Track a custom GA4 event. Safe to call anywhere — no-ops gracefully
   * when GA isn't loaded (user declined cookies or hasn't responded).
   *
   * @param name   - Event name (e.g., 'resume_download', 'contact_form_submit')
   * @param params - Optional key-value pairs attached to the event
   */
  const trackEvent = (name: string, params?: Record<string, string>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', name, params)
    }
  }

  /**
   * Convenience wrapper for tracking outbound link clicks.
   * Logs the destination URL as the event label.
   */
  const trackOutboundClick = (url: string) => {
    trackEvent('outbound_click', {
      event_category: 'engagement',
      event_label: url,
    })
  }

  return { loadGA, trackEvent, trackOutboundClick }
}
