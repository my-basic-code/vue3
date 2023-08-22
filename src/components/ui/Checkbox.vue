<script setup>
import ErrorMessages from "@/components/ui/ErrorMessage.vue"
const props = defineProps({
  className: {
    type: String,
    default: "",
  },
  inputClass: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "checkbox",
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    require: true,
  },
  label: {
    type: String,
    default: "",
  },
  classLabel: {
    type: String,
    default: "",
  },
  errors: {
    type: Array,
    default: () => [],
  },
  checkmarkClass: {
    type: String,
    default: null,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(["update:modelValue"])

const handleChange = e => {
  emit("update:modelValue", e.target.checked)
}
const clickCheckmark = e => {
  emit("update:modelValue", e)
}
</script>

<template>
  <div :class="className">
    <input
      :class="inputClass"
      :name="name"
      :id="id"
      :type="type"
      :checked="modelValue"
      @input="handleChange"
    />
    <span @click="clickCheckmark(!modelValue)" :class="checkmarkClass"></span>
    <slot name="label">
      <label :class="classLabel" :for="id">{{ label }}</label>
    </slot>
  </div>
  <ErrorMessages :errors="errors" />
</template>
