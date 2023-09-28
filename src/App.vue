<script setup>
import { useRoute } from "vue-router"
import { computed } from "vue"
import Loading from "./components/Loading.vue"

const currentRoute = useRoute()
const layout = computed(
  () => (currentRoute.meta.layout || "default") + "-layout"
)
</script>

<template>
  <component :is="layout">
    <router-view />
    <Loading />
  </component>
</template>
