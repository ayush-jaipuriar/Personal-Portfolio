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
    <!-- Blob 1 — apple-blue, top-right drift -->
    <div
      class="blob blob-1 absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-25 dark:opacity-15 blur-[80px] will-change-transform"
      :style="{ background: 'radial-gradient(circle, rgba(0,122,255,0.6) 0%, rgba(0,122,255,0) 70%)' }"
    />
    <!-- Blob 2 — purple, bottom-left drift -->
    <div
      class="blob blob-2 absolute -bottom-32 -left-32 w-[450px] h-[450px] rounded-full opacity-20 dark:opacity-10 blur-[80px] will-change-transform"
      :style="{ background: 'radial-gradient(circle, rgba(147,51,234,0.5) 0%, rgba(147,51,234,0) 70%)' }"
    />
    <!-- Blob 3 — teal, centre drift -->
    <div
      class="blob blob-3 absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full opacity-20 dark:opacity-10 blur-[80px] will-change-transform"
      :style="{ background: 'radial-gradient(circle, rgba(20,184,166,0.45) 0%, rgba(20,184,166,0) 70%)' }"
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
  animation: drift-1 20s ease-in-out infinite alternate;
}
.blob-2 {
  animation: drift-2 25s ease-in-out infinite alternate;
}
.blob-3 {
  animation: drift-3 30s ease-in-out infinite alternate;
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
