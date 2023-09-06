<script setup>
import { computed } from "vue"
import { classErrorMessage } from "@/utils/customClass"

const props = defineProps({
  errors: {
    type: Array,
    default: () => [],
  },
  className: {
    type: String,
    default: "",
  },
})

const hasErrors = computed(() => props.errors.length > 0)
</script>

<template>
  <div v-if="hasErrors" :class="`${classErrorMessage[1]} ${className}`">
    {{ props.errors.join(", ") }}
  </div>
</template>
