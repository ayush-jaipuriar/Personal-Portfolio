<template>
  <!--
    AvailableBadge.vue — "Open to Opportunities" indicator
    
    Uses a CSS animation trick: two concentric circles where the outer one
    uses `animate-ping` (a Tailwind utility that scales up and fades out
    repeatedly), creating the classic "pulsing dot" effect. The inner dot
    stays solid green so the pulse appears to emanate from it.
  -->
  <span
    class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium
           bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400
           border border-green-200 dark:border-green-800"
  >
    <!-- Pulsing dot container — relative positioning lets us stack two circles -->
    <span class="relative flex h-2.5 w-2.5">
      <!-- Outer ping ring: absolute-positioned on top of the solid dot -->
      <span
        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
      ></span>
      <!-- Inner solid dot -->
      <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
    </span>
    Open to Opportunities
  </span>
</template>
