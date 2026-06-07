<template>
  <img
    :src="resolvedSrc"
    :alt="alt || ''"
    v-bind="passthroughAttrs"
  >
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'

const props = defineProps<{
  src?: string
  alt?: string
}>()

const attrs = useAttrs()
const { toAssetPath } = useAssetPath()

const normalizedSrc = computed(() => {
  if (!props.src) return ''

  return props.src.replace(/^(?:\.\.\/)+images\//, '/images/')
})

const resolvedSrc = computed(() => toAssetPath(normalizedSrc.value))

const passthroughAttrs = computed(() => {
  const { src, alt, ...rest } = attrs
  return rest
})
</script>
