<template>
  <!--
    GradientMesh.vue — Animated gradient blob background.

    Three large, blurred blobs drift slowly behind the hero content
    using pure CSS @keyframes (GPU-composited transforms). The result
    is a subtle, organic "mesh gradient" effect popularised by Apple
    and Stripe landing pages.

    Key design decisions:
    - Opacity kept at 20-30 % so text contrast is preserved.
    - `pointer-events: none` so the blobs never intercept clicks.
    - `prefers-reduced-motion` → blobs render statically (no animation).
    - `will-change: transform` hints to the browser to promote each
      blob to its own compositing layer for smooth 60 fps animation.
  -->
  <div aria-hidden="true" class="gradient-mesh absolute inset-0 overflow-hidden pointer-events-none -z-10">
    <!-- Blob 1: vermilion in light mode, signal green in dark mode -->
    <div
      class="blob blob-1 absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-25 dark:opacity-15 blur-[80px] will-change-transform"
    />
    <!-- Blob 2: slate depth in light mode, graphite depth in dark mode -->
    <div
      class="blob blob-2 absolute -bottom-32 -left-32 w-[450px] h-[450px] rounded-full opacity-20 dark:opacity-10 blur-[80px] will-change-transform"
    />
    <!-- Blob 3: quiet green bridge between both themes -->
    <div
      class="blob blob-3 absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full opacity-20 dark:opacity-10 blur-[80px] will-change-transform"
    />
  </div>
</template>

<style scoped>
/*
 * Each blob follows a unique figure-8-ish path so they never
 * perfectly overlap. Durations are intentionally prime-ish (20s,
 * 25s, 30s) so the pattern doesn't visibly repeat.
 */
.blob-1 {
  background: radial-gradient(circle, rgba(227, 66, 52, 0.5) 0%, rgba(227, 66, 52, 0) 70%);
  animation: drift-1 20s ease-in-out infinite alternate;
}
.blob-2 {
  background: radial-gradient(circle, rgba(15, 23, 42, 0.2) 0%, rgba(15, 23, 42, 0) 70%);
  animation: drift-2 25s ease-in-out infinite alternate;
}
.blob-3 {
  background: radial-gradient(circle, rgba(24, 160, 88, 0.24) 0%, rgba(24, 160, 88, 0) 70%);
  animation: drift-3 30s ease-in-out infinite alternate;
}

:global(.dark .blob-1) {
  background: radial-gradient(circle, rgba(49, 223, 130, 0.36) 0%, rgba(49, 223, 130, 0) 70%);
}

:global(.dark .blob-2) {
  background: radial-gradient(circle, rgba(11, 13, 12, 0.65) 0%, rgba(11, 13, 12, 0) 70%);
}

:global(.dark .blob-3) {
  background: radial-gradient(circle, rgba(14, 107, 60, 0.3) 0%, rgba(14, 107, 60, 0) 70%);
}

@keyframes drift-1 {
  0%   { transform: translate(0, 0) scale(1); }
  33%  { transform: translate(-40px, 30px) scale(1.05); }
  66%  { transform: translate(30px, -20px) scale(0.95); }
  100% { transform: translate(-20px, 40px) scale(1.02); }
}

@keyframes drift-2 {
  0%   { transform: translate(0, 0) scale(1); }
  33%  { transform: translate(35px, -25px) scale(1.08); }
  66%  { transform: translate(-25px, 35px) scale(0.92); }
  100% { transform: translate(15px, -30px) scale(1.04); }
}

@keyframes drift-3 {
  0%   { transform: translate(0, 0) scale(1); }
  50%  { transform: translate(-30px, -30px) scale(1.1); }
  100% { transform: translate(20px, 20px) scale(0.96); }
}

/* Respect reduced-motion preference — blobs stay visible but static */
@media (prefers-reduced-motion: reduce) {
  .blob {
    animation: none !important;
  }
}
</style>
