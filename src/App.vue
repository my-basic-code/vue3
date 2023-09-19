<script setup>
import { useRoute } from "vue-router"
import { computed } from "vue"
import Loading from "./components/element/Loading.vue"
import { useLoadingStore } from '@/stores/loading.js';

const currentRoute = useRoute()
const loadingStore = useLoadingStore()
const layout = computed(
  () => (currentRoute.meta.layout || "default") + "-layout"
)

</script>

<template>
  <component :is="layout">
    <router-view />
    <Loading v-if="loadingStore.isLoading" />
  </component>
</template>
