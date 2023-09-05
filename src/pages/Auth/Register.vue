<template>
  <main class="mt-[60px] my-[117px] mx-auto max-w-[335px]">
    <article>
      <h1 class="text-[28px] font-normal uppercase text-left">회원가입</h1>
      <Steps class="mt-5" :steps="Array(4).fill(null)" @current-step="step => (currentStep = step)" />
      <img class="mt-5" :src="Images.Line.src" :alt="Images.Line.alt" />
    </article>
    <section class="mt-5">
      <Step1 v-if="currentStep === 0" />
      <Step2 v-if="currentStep === 1" />
      <Step3 v-if="currentStep === 2" />
      <Step4 v-if="currentStep === 3" />
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue"
import Images from "@/constants/images.js"
import Steps from "@/components/element/Steps.vue"
import Step1 from "@/components/pages/Register/Step1.vue"
import Step2 from "@/components/pages/Register/Step2.vue"
import Step3 from "@/components/pages/Register/Step3.vue"
import Step4 from "@/components/pages/Register/Step4.vue"

const currentStep = ref(0)
</script>
