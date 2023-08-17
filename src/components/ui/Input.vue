// Input.vue

<script setup>

import { computed } from 'vue'

const props = defineProps({
  wrapClassName: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String,
    default: ''
  },
  errors: {
    type: Array,
    default: () => []
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const handleChange = (e) => {
  emit('update:modelValue', e.target.value)
}

</script>


<template>
  <div :class="wrapClassName">
    <label v-if="label">{{ label }}</label>
    <slot name="prefix"></slot>
    <input :class="className" :type="type" :name="name" :placeholder="placeholder" :value="modelValue"
      @input="handleChange">
    <slot name="suffix"></slot>
  </div>
  <ErrorMessages v-if="errors.length" :errors="errors" />
</template>