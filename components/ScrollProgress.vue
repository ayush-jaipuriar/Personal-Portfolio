<template>
  <div
    v-if="progress > 0"
    aria-hidden="true"
    class="fixed top-0 left-0 h-[3px] z-[60] bg-gradient-to-r from-apple-blue-600 to-purple-600 will-change-[width] transition-none"
    :style="{ width: `${progress}%` }"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Tracks scroll percentage using a passive scroll listener.
 *
 * - `passive: true` tells the browser we won't call `preventDefault()`,
 *   which allows it to optimise scrolling on the compositor thread.
 * - We calculate: scrollY / (scrollHeight − clientHeight) × 100.
 */
const progress = ref(0)

const updateProgress = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  progress.value = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress() // initial calculation
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>
