<script setup>
import { computed } from "vue"

const props = defineProps({
  error: { type: String, default: "" },
  className: { type: String, default: "" },
})

const hasErrors = computed(() => props.error.length > 0)
</script>

<template>
  <div
    v-if="hasErrors"
    class="flex items-center mt-1 ml-4 text-sm text-red-500 gap-x-2"
    :class="className"
  >
    {{ props.error }}
  </div>
</template>
