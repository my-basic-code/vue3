<template>
  <main class="mt-[60px] my-[117px] mx-auto max-w-[335px]">
    <article>
      <h1 class="text-[28px] font-normal uppercase text-left">아이디 찾기</h1>
      <Steps class="mt-5" :steps="Array(3).fill(null)" :currentStep="currentStep"
        @current-step="step => (currentStep = step)" />
      <img class="mt-5" :src="Images.Line.src" :alt="Images.Line.alt" />
    </article>
    <section class="mt-5">
      <Step1 v-if="currentStep === 0" @value-phone="value => (phoneNumber = value)"
        @complete-step1="() => (currentStep = 1)" />
      <Step2 v-if="currentStep === 1" :phoneNumber="phoneNumber" @complete-step2="value => {
          email = value
          currentStep = 2
        }
        " @back-step-1="() => (currentStep = 0)" />
      <Step3 v-if="currentStep === 2" :email="email" />
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue"
import Images from "@/constants/images.js"
import Steps from "@/components/element/Steps.vue"
import Step1 from "@/components/pages/FindId/Step1.vue"
import Step2 from "@/components/pages/FindId/Step2.vue"
import Step3 from "@/components/pages/FindId/Step3.vue"

const currentStep = ref(0)
const phoneNumber = ref("")
const email = ref("")
</script>
