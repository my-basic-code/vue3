<template>
  <main class="mt-[60px] my-[117px] mx-auto max-w-[335px]">
    <article>
      <h1 class="text-[28px] font-normal uppercase text-left">회원가입</h1>
      <Steps class="mt-5" :steps="Array(3).fill(null)" :currentStep="currentStep"
        @current-step="step => (currentStep = step)" />
      <img class="mt-5" :src="Images.Line.src" :alt="Images.Line.alt" />
    </article>
    <section class="mt-5">
      <Step1 v-if="currentStep === 0" @value-email="value => (email = value)" @complete-step1="() => (currentStep = 1)" />
      <Step2 v-if="currentStep === 1" :email="email" @complete-step2="() => (currentStep = 2)" />
      <Step3 v-if="currentStep === 2" :token="token" />
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue"
import Images from "@/constants/images.js"
import Steps from "@/components/element/Steps.vue"
import Step1 from "@/components/pages/FindPassword/Step1.vue"
import Step2 from "@/components/pages/FindPassword/Step2.vue"
import Step3 from "@/components/pages/FindPassword/Step3.vue"
import { useRoute } from "vue-router"

const route = useRoute()
const currentStep = ref(2)
const email = ref("")
const token = ref("")

onMounted(() => {
  if (route.query.step) {
    currentStep.value = Number(route.query.step - 1)
  }
  if (route.query.token) {
    token.value = route.query.token
  }
})
</script>
