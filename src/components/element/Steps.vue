<script setup>
import { ref, computed } from "vue"
const props = defineProps({
  steps: {
    type: Array,
    require: true,
  },
  currentStep: {
    type: Number,
    require: true,
  },
})
const emit = defineEmits(["current-step"])
// Dữ liệu
const steps = ref(props.steps)
const currentStep = computed(() => props.currentStep)
</script>

<template>
  <div class="flex justify-start space-x-3">
    <div v-for="(step, index) in steps" :key="index">
      <div class="flex justify-start">
        <h3
          :class="[
            'w-6 h-6  rounded-full flex justify-center items-center text-xs font-bold cursor-default',
            currentStep === index
              ? 'bg-[#3D3D3D] text-white'
              : 'bg-[#F2F4F6] text-[#A5A5A5]',
          ]"
        >
          {{ index + 1 }}
        </h3>
        <h3 v-if="step?.title">{{ step.title }}</h3>
        <h3 v-if="step?.subTitle">{{ step.subTitle }}</h3>
      </div>
      <p v-if="step?.content">{{ step.content }}</p>
    </div>
  </div>
</template>
