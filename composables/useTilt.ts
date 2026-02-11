import { onMounted, onUnmounted, type Ref } from 'vue'

/**
 * useTilt — 3D perspective-tilt composable for card hover effects.
 *
 * Concepts:
 * - **CSS perspective()**: Defines the distance between the viewer and
 *   the z=0 plane. A value of 1000 px gives subtle, realistic depth.
 * - **rotateX / rotateY**: Tilt the card along each axis. We invert
 *   the Y calculation so the card follows the cursor naturally (lift
 *   towards the pointer).
 * - **prefers-reduced-motion**: If the user has reduced motion enabled,
 *   we skip registering the event listeners entirely — no tilt at all.
 *
 * Usage:
 *   const cardRef = ref<HTMLElement | null>(null)
 *   useTilt(cardRef, { maxDeg: 6, transitionMs: 300 })
 *
 * @param el           Template ref to the card element.
 * @param options.maxDeg       Maximum tilt in degrees (default 6).
 * @param options.transitionMs Ease-out duration on mouse leave (default 300).
 */
export function useTilt(
  el: Ref<HTMLElement | null>,
  options: { maxDeg?: number; transitionMs?: number } = {}
) {
  const maxDeg = options.maxDeg ?? 6
  const transitionMs = options.transitionMs ?? 300

  let rafId: number | null = null

  const handleMouseMove = (e: MouseEvent) => {
    const card = el.value
    if (!card) return

    // Cancel any pending rAF to avoid stacking frames
    if (rafId !== null) cancelAnimationFrame(rafId)

    rafId = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect()
      // Normalise cursor position to -1 … +1 relative to card centre
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2

      // rotateX is driven by vertical position (inverted), rotateY by horizontal
      const rotateX = (-y * maxDeg).toFixed(2)
      const rotateY = (x * maxDeg).toFixed(2)

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      card.style.transition = 'transform 0.05s linear'

      // Subtle shadow shift following tilt direction
      const shadowX = (x * 8).toFixed(1)
      const shadowY = (y * 8).toFixed(1)
      card.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0,0,0,0.08)`
    })
  }

  const handleMouseLeave = () => {
    const card = el.value
    if (!card) return
    if (rafId !== null) cancelAnimationFrame(rafId)

    card.style.transition = `transform ${transitionMs}ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow ${transitionMs}ms ease`
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
    card.style.boxShadow = ''
  }

  onMounted(() => {
    const card = el.value
    if (!card) return

    // Respect reduced-motion preference — skip tilt entirely
    if (globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    card.addEventListener('mousemove', handleMouseMove, { passive: true })
    card.addEventListener('mouseleave', handleMouseLeave)
  })

  onUnmounted(() => {
    const card = el.value
    if (!card) return
    card.removeEventListener('mousemove', handleMouseMove)
    card.removeEventListener('mouseleave', handleMouseLeave)
    if (rafId !== null) cancelAnimationFrame(rafId)
  })
}
