<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
const currentRoute = useRoute();
const layout = computed(() => (currentRoute.meta.layout || 'default') + "-layout");
</script>

<template>
  <div>
    <component :is="layout">
      <router-view class="container mx-auto" />
    </component>
  </div>
</template>
