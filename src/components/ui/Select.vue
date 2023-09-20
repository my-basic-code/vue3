<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue"

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: [String, Number, Array],
  },
  disabled: Boolean,
  multiple: Boolean,
  isShowInput: Boolean,
  placeholder: {
    type: String,
    default: "Select...",
  },
  placement: {
    type: String,
    default: "bottomLeft",
  },
  classSelected: {
    type: String,
    default: "flex items-center justify-between text-2xl"
  },
  classWrapOption: {
    type: String,
    default: ""
  },
  classOption: {
    type: String,
    default: ""
  },
})

const emits = defineEmits(["update:modelValue"])

const selected = ref(
  !props.multiple ? props.modelValue || "" : props.modelValue || []
)
const element = ref(null)
const isOpen = ref(false)
const positionOption = computed(() => {
  switch (props.placement) {
    case "bottomLeft":
      return "left-0 top-[100%]"
    case "bottomRight":
      return "right-0 top-[100%]"
    case "topLeft":
      return "left-0 bottom-[100%]"
    case "topRight":
      return "right-0 bottom-[100%]"
    default:
      return ""
  }
})

const toggle = () => {
  if (props.disabled) return
  isOpen.value = !isOpen.value
}

const toggleValue = value => {
  if (selected.value.includes(value)) {
    return selected.value.filter(v => v !== value)
  } else {
    return selected.value.concat(value)
  }
}

const selectedText = computed(() => {
  if (props.multiple) {
    if (!selected.value.length) {
      return props.placeholder
    }
    return selected.value
      .map(value => props.options.find(o => o.value === value).label)
      .join(", ")
  } else {
    if (!selected.value) {
      return props.placeholder
    }
    return props.options.find(o => o.value === selected.value)?.label
  }
})

function updateValue(newValue) {
  selected.value = newValue
  emits("update:modelValue", newValue)
}

function close() {
  isOpen.value = false
}

function handleClickOutside(event) {
  if (!element.value.contains(event.target)) {
    close()
  }
}

watch(
  () => props.modelValue,
  (newValue) => {
    selected.value = !props.multiple ? newValue || "" : newValue || []
  }
)

onMounted(() => {
  document.addEventListener("click", handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside)
})
</script>

<template>
  <div ref="element" @click="toggle" :class="`${disabled ? 'opacity-50' : ''} relative`">
    <div :class="classSelected">
      <span>{{ selectedText }}</span>
      <slot name="icon"></slot>
    </div>
    <div v-if="isOpen" :class="`absolute ${positionOption} ${classWrapOption}`">
      <div :class="classOption" v-for="option in options" :key="option.value" @click="
        updateValue(multiple ? toggleValue(option.value) : option.value)
        ">
        <input :class="isShowInput ? 'block' : 'hidden'" type="checkbox" v-if="multiple"
          :checked="(selected || []).includes(option.value)" @change="updateValue(toggleValue(option.value))" />
        <input :class="isShowInput ? 'block' : 'hidden'" type="radio" v-else :checked="option.value === selected"
          @change="updateValue(option.value)" />
        {{ option.label }}
      </div>
    </div>
  </div>
</template>
