<script setup>
import ErrorMessage from "@/components/ui/ErrorMessage.vue"

const props = defineProps({
  wrapClass: { type: String, default: "" },
  className: { type: String, default: "" },
  classLabel: { type: String, default: "" },
  name: { type: String },
  placeholder: { type: String, default: "" },
  type: { type: String, default: "text" },
  label: { type: String, default: "" },
  maxLength: { type: Number, default: 100 },
  disabled: { type: Boolean, default: false },
  handlePattern: { type: Function, default: () => {} },
  error: { type: String, default: "" },
  modelValue: { type: String, default: "" },
})

const emit = defineEmits(["update:modelValue", "onBlur"])

const handleChange = e => {
  const value = e.target.value
  if (value.length > props.maxLength) {
    e.target.value = value.slice(0, props.maxLength)
    emit("update:modelValue", value.slice(0, props.maxLength))
  } else {
    emit("update:modelValue", value)
  }
}

const handleKeyDown = event => {
  props.handlePattern(event)
  // Prevent input of "e" on input of type "number"
  if (props.type === "number" && (event.key === "e" || event.key === "E")) {
    event.preventDefault()
  }
}
</script>

<template>
  <div :class="wrapClass">
    <label :class="classLabel" v-if="label"
      >{{ label }} <slot name="sub-label"></slot
    ></label>
    <slot name="prefix"></slot>
    <input
      :class="className"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleChange"
      @keydown="handleKeyDown"
      :disabled="disabled"
      @blur="emit('onBlur')"
    />
    <slot name="suffix"></slot>
  </div>
  <ErrorMessage v-if="error.length > 0" :error="error" />
</template>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -webkit-appearance: textfield;
  /* Safari and Chrome */
  -moz-appearance: textfield;
  /* Firefox */
  appearance: textfield;
  /* Fallback */
}
</style>
