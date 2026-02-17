<template>
  <!--
    CookieConsent.vue — Minimal, non-intrusive cookie consent banner.

    UX Design Decisions:
    ────────────────────
    • Fixed to the bottom of the viewport so it doesn't push content.
    • Uses a card-style design (not a full-width bar) to feel less aggressive.
    • Two clear actions: Accept (primary) and Decline (secondary).
    • Once a choice is made, the preference is stored in localStorage and
      the banner never reappears (until storage is cleared).
    • Respects dark mode via Tailwind dark: classes.
    • Enters with a subtle slide-up animation for polish without distraction.

    Privacy Logic:
    ──────────────
    • If the user accepts: we call `loadGA()` from the analytics composable,
      which dynamically injects the GA4 script. No script runs before consent.
    • If the user declines: we store 'false' and never load GA.
    • On subsequent visits: we check localStorage immediately. If 'true',
      GA loads silently. If 'false' or absent, it doesn't.
  -->
  <Transition name="consent-slide">
    <div
      v-if="showBanner"
      class="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div
        class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg p-5"
      >
        <div class="flex items-start gap-3">
          <Icon
            name="heroicons:shield-check"
            class="h-5 w-5 text-apple-blue-600 dark:text-apple-blue-400 flex-shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <div>
            <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              This site uses cookies to understand visitor behavior.
              No personal data is sold or shared.
            </p>
            <div class="mt-4 flex items-center gap-3">
              <button
                @click="acceptCookies"
                class="px-4 py-2 text-sm font-medium text-white bg-apple-blue-600 hover:bg-apple-blue-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-apple-blue-500 focus:ring-offset-2"
              >
                Accept
              </button>
              <button
                @click="declineCookies"
                class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAnalytics } from '~/composables/useAnalytics'

/**
 * localStorage key for persisting the user's cookie consent choice.
 * Values: 'true' (accepted), 'false' (declined), or absent (no choice yet).
 */
const CONSENT_KEY = 'analytics-consent'

const showBanner = ref(false)
const { loadGA } = useAnalytics()

/**
 * On mount, check if the user has already made a choice:
 * - 'true'  → silently load GA (no banner)
 * - 'false' → do nothing (no banner)
 * - absent  → show the banner
 */
onMounted(() => {
  const stored = localStorage.getItem(CONSENT_KEY)

  if (stored === 'true') {
    loadGA()
  } else if (stored === null) {
    showBanner.value = true
  }
})

const acceptCookies = () => {
  localStorage.setItem(CONSENT_KEY, 'true')
  showBanner.value = false
  loadGA()
}

const declineCookies = () => {
  localStorage.setItem(CONSENT_KEY, 'false')
  showBanner.value = false
}
</script>

<style scoped>
/*
 * Slide-up entrance / exit animation for the consent banner.
 * Uses translateY to slide from below the viewport into position.
 * Duration is kept short (300ms) to not feel sluggish.
 */
.consent-slide-enter-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.consent-slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.consent-slide-enter-from {
  opacity: 0;
  transform: translateY(16px);
}
.consent-slide-leave-to {
  opacity: 0;
  transform: translateY(16px);
}
</style>
