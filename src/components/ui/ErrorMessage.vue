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
  <div v-if="hasErrors" :class="`flex items-center gap-x-2 ${classErrorMessage[1]} ${className}`">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M7.99992 14.6663C4.31792 14.6663 1.33325 11.6817 1.33325 7.99967C1.33325 4.31767 4.31792 1.33301 7.99992 1.33301C11.6819 1.33301 14.6666 4.31767 14.6666 7.99967C14.6666 11.6817 11.6819 14.6663 7.99992 14.6663ZM7.33325 9.99967V11.333H8.66659V9.99967H7.33325ZM7.33325 4.66634V8.66634H8.66659V4.66634H7.33325Z"
        fill="#FF0000" />
    </svg>
    {{ props.errors.join(", ") }}
  </div>
</template>
