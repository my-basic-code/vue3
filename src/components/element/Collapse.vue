<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  title: {
    type: String,
  },
  classTitle: {
    type: String,
    default: "text-sm font-normal text-[#6F6F6F]"
  },
  iconDown: {
    type: Object,
    require: true
  },
  iconUp: {
    type: Object,
    require: true
  },
  isOpen: {
    type: Boolean,
    require: false
  },
})

const isOpen = ref(props.isOpen)
const element = ref(null)

function toggle() {
  isOpen.value = !isOpen.value
}

// function handleClickOutside() {
//   if (element.value && !element.value.contains(event.target)) {
//     isOpen.value = false
//   }
// }

// onMounted(() => {
//   document.addEventListener("click", handleClickOutside)
// })

// onUnmounted(() => {
//   document.removeEventListener("click", handleClickOutside)
// })

</script>

<template>
  <div ref="element">
    <div :class="`flex justify-start w-full space-x-2 cursor-pointer ${classTitle}`" @click.stop="toggle">
      <span> {{ title }} </span>
      <img v-if="!isOpen" :src="iconDown.src" :alt="iconDown.alt">
      <img v-else :src="iconUp.src" :alt="iconUp.alt">
    </div>
    <div v-if="isOpen">
      <slot />
    </div>
  </div>
</template>