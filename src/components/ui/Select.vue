<script setup>
import { ref, watch, computed, onMounted, onUnmounted } from "vue"

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: [String, Number],
  },
})

const emit = defineEmits(["update:modelValue"])

const selected = ref(props.modelValue)

const isOpen = ref(false)
const element = ref(null)

const selectedOption = computed(() => {
  return props.options.find(option => option.value === selected.value)
})

watch(selected, () => {
  emit("update:modelValue", selected.value)
})

const iconComponent = computed(() => {
  if (!isOpen.value) {
    return "ArrowDownIcon"
  }

  return "ArrowUpIcon"
})

function toggle() {
  isOpen.value = !isOpen.value
}

function close() {
  console.log("closing")
  isOpen.value = false
}

function handleClickOutside(event) {
  if (!element.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside)
})
</script>

<template>
  <div ref="element" class="relative select" @click="toggle">
    <div
      class="flex items-center px-4 py-2 bg-gray-100 border border-transparent rounded cursor-pointer value"
    >
      <component :is="iconComponent" class="mr-2" />
      <span>{{ selectedOption.label }}</span>
    </div>

    <div
      v-show="isOpen"
      class="absolute w-full overflow-auto bg-white rounded shadow-lg options max-h-60"
    >
      <div
        v-for="option in options"
        :key="option.value"
        class="px-4 py-2 cursor-pointer option hover:bg-gray-100"
        @click="selected = option.value"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>
