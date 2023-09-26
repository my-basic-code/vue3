<script setup>
import { useRoute } from "vue-router"
import { computed } from "vue"

const currentRoute = useRoute()
const layout = computed(
  () => (currentRoute.meta.layout || "default") + "-layout"
)

</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
