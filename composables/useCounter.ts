import { ref, onMounted, onUnmounted, type Ref } from 'vue'

/**
 * useCounter — Scroll-triggered count-up animation composable.
 *
 * Concepts:
 * - **Intersection Observer**: A browser API that fires a callback when a
 *   target element enters (or exits) the viewport. It's far more efficient
 *   than attaching a scroll listener because the browser handles the
 *   geometry checks internally on a background thread.
 *
 * - **requestAnimationFrame (rAF)**: Schedules a callback before the
 *   browser's next paint. Running the counting loop inside rAF ensures
 *   updates are synchronised with the display refresh rate (~60 fps)
 *   and the browser can optimally batch repaints.
 *
 * - **Easing function (easeOutCubic)**: Instead of a linear count (which
 *   looks mechanical), an ease-out curve starts fast and decelerates,
 *   creating a satisfying "landing" at the target number.
 *
 * @param target   The number to count up to (e.g. 6, 30, 92).
 * @param el       A template ref pointing to the element to observe.
 * @param duration Time in milliseconds for the full count (default 2000 ms).
 * @returns        A reactive `current` ref whose value animates from 0 → target.
 */
export function useCounter(
  target: number,
  el: Ref<HTMLElement | null>,
  duration: number = 2000
) {
  const current = ref(0)
  let observer: IntersectionObserver | null = null
  let hasAnimated = false

  const prefersReducedMotion = () =>
    globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

  /** Cubic ease-out: f(t) = 1 - (1-t)^3 */
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

  const animate = () => {
    const start = performance.now()

    const step = (now: number) => {
      const elapsed = now - start
      const rawProgress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutCubic(rawProgress)

      current.value = Math.round(easedProgress * target)

      if (rawProgress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }

  onMounted(() => {
    if (!el.value) return

    // Accessibility: users opting out of animation should see final values instantly.
    if (prefersReducedMotion()) {
      hasAnimated = true
      current.value = target
      return
    }

    // Graceful fallback for very old browsers without IntersectionObserver.
    if (!('IntersectionObserver' in globalThis)) {
      hasAnimated = true
      current.value = target
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        // Fire once when the element is at least 30 % visible
        if (entries[0]?.isIntersecting && !hasAnimated) {
          hasAnimated = true
          animate()
          observer?.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { current }
}
