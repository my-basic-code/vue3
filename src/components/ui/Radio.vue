<script setup>
import { ref, defineProps, defineEmits, watch } from "vue"

const props = defineProps({
  modelValue: null,
  options: { type: Array, required: true },
  classInput: { type: String, default: "" },
  className: { type: String, default: "" },
  classActive: { type: String, default: "" },
})

const emit = defineEmits(["update:modelValue"])

const selected = ref(props.modelValue)

watch(selected, () => {
  emit("update:modelValue", selected.value)
})
</script>

<template>
  <div>
    <label
      v-for="(option, index) in options"
      :key="index"
      :class="`${className}  ${selected === option.value ? classActive : ''}`"
    >
      <input
        type="radio"
        :id="option.value"
        :value="option.value"
        v-model="selected"
        :class="classInput"
      />
      {{ option.label }}
    </label>
  </div>
</template>
