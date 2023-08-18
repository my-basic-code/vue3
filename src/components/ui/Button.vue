<script setup>
import { computed } from 'vue'

const props = defineProps({
  leftIcon: {
    type: Object,
    default: null
  },
  rightIcon: {
    type: Object,
    default: null
  }
})

</script>

<template>
  <button class="flex items-center justify-center">
    <slot name="left-icon"></slot>
    <slot />
    <slot name="right-icon"></slot>
  </button>
</template>