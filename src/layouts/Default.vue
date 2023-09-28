<template>
  <Header />
  <slot></slot>
  <Footer />
</template>
<script setup>
import Header from "@/components/layout/default/Header.vue"
import Footer from "@/components/layout/default/Footer.vue"
</script>
