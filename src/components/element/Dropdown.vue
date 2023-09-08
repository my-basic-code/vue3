<template>
  <div class="relative inline-block" ref="element">
    <!-- Dropdown toggle -->
    <div @click="isOpen = !isOpen">
      <slot name="toggle"></slot>
    </div>

    <!-- Dropdown menu -->
    <ul :class="classMenu" v-if="isOpen">
      <li v-for="(item, index) in menuItems" :key="index" :class="classItem" @click="handleItemClick(item, index)">
        <img v-if="item.iconLeft && !!isIcon" :class="classIcon" :src="item.iconLeft" :alt="item.alt" />
        <span>{{ item.text }}</span>
        <img v-if="item.iconRight && !!isIcon" :class="classIcon" :src="item.iconRight" :alt="item.alt" />
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const props = defineProps({
  classMenu: {
    type: String,
    default: "",
  },
  classItem: {
    type: String,
    default: "",
  },
  classIcon: {
    type: String,
    default: "",
  },
  isIcon: {
    type: Boolean,
    default: true,
  },
  menuItems: {
    type: Array,
    require: true,
  },
})
const emit = defineEmits(["item-clicked"])

const isOpen = ref(false)
const element = ref(null)

function handleClickOutside(event) {
  if (!element.value.contains(event.target)) {
    isOpen.value = false
  }
}

function handleItemClick(item, index) {
  isOpen.value = false
  emit("item-clicked", { item, index })
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside)
})
</script>
