<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue"

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
  placeholder: {
    type: String,
    default: "Select...",
  },
  placement: {
    type: String,
    default: "bottomLeft",
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
      return "left-0 top-[-100%]"
    case "topRight":
      return "right-0 top-[-100%]"
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

onMounted(() => {
  document.addEventListener("click", handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside)
})
</script>

<template>
  <div
    ref="element"
    @click="toggle"
    :class="`${disabled ? 'opacity-50' : ''} relative`"
  >
    <span class="text-3xl">{{ selectedText }}</span>

    <slot name="icon"></slot>

    <div v-if="isOpen" :class="`absolute ${positionOption}`">
      <slot name="options">
        <div
          v-for="option in options"
          :key="option.value"
          @click="
            updateValue(multiple ? toggleValue(option.value) : option.value)
          "
        >
          <input
            type="checkbox"
            v-if="multiple"
            :checked="(selected || []).includes(option.value)"
            @change="updateValue(toggleValue(option.value))"
          />

          <input
            type="radio"
            v-else
            :checked="option.value === selected"
            @change="updateValue(option.value)"
          />

          {{ option.label }}
        </div>
      </slot>
    </div>
  </div>
</template>
