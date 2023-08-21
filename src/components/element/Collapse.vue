<script setup>
import { ref } from 'vue'
import Images from "@/constants/images.js"

const props = defineProps(['title'])

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}

</script>

<template>
  <div>

    <div class="flex space-x-2" @click="toggle">
      <span class="text-sm font-normal text-[#6F6F6F]"> {{ title }} </span>
      <img v-if="!isOpen" :src="Images.iconDown.src" :alt="Images.iconDown.alt">
      <img v-else :src="Images.iconUp.src" :alt="Images.iconUp.alt">
    </div>

    <div v-show="isOpen">
      <slot />
    </div>

  </div>
</template>