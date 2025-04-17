<template>
  <button
    @click="toggleTheme"
    class="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
    title="Toggle dark/light mode"
    aria-label="Toggle dark/light mode"
  >
    <Icon
      v-if="colorMode.value === 'dark'"
      name="ph:sun-bold"
      class="w-5 h-5 text-yellow-400"
      aria-hidden="true"
    />
    <Icon
      v-else
      name="ph:moon-bold"
      class="w-5 h-5 text-gray-700"
      aria-hidden="true"
    />
  </button>
</template>

<script setup lang="ts">
// Get the current color mode from the composable
const colorMode = useColorMode();

// Toggle between light and dark mode
const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  
  // Store theme preference in localStorage (already handled by the color-mode module)
  // This is just to show that you would do this if implementing manually
  // localStorage.setItem('theme-preference', colorMode.value);
  
  // Optional: Log to console for fellow developers
  console.info('Theme switched to:', colorMode.value);
};

// You could also add a watch to sync with OS changes if using 'system' mode
</script> 