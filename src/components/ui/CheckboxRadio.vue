<script setup>
import ErrorMessages from "@/components/ui/ErrorMessage.vue"
const props = defineProps({
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
  errors: {
    type: Array,
    default: () => [],
  },
  checkmarkClass: {
    type: Object,
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
</script>

<template>
  <div>
    <input
      :class="inputClass"
      :name="name"
      :id="id"
      :type="type"
      :checked="modelValue"
      @input="handleChange"
    />
    <span :class="checkmarkClass"></span>
    <label :for="id">{{ label }}</label>
  </div>
  <ErrorMessages :errors="errors" />
</template>
