<script setup>
import { computed } from "vue"

const props = defineProps({
  error: {
    type: Array,
    default: () => [],
  },
  className: {
    type: String,
    default: "",
  },
})

const hasErrors = computed(() => props.error.length > 0)
</script>

<template>
  <div v-if="hasErrors" :class="`flex items-center gap-x-2 ml-4 mt-1 text-red-500 text-sm ${className}`">
    {{ props.error }}
  </div>
</template>
@/helper/customClass