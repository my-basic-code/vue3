<template>
  <div class="container grid grid-cols-1 lg:grid-cols-12 mx-auto mt-7 lg:mt-[60px] mb-[109px]">
    <aside class="lg:space-y-[40px] lg:col-span-2 w-full">
      <h3 class="hidden lg:block text-[#555555] text-[14px] font-bold lg:font-normal">고객센터</h3>
      <ul class="flex lg:flex-col justify-start items-center lg:items-start gap-[48px] lg:gap-[28px] mt-3 lg:mt-[40px] pb-[14px] lg:pb-0 lg:border-none border-b-8 border-[#FAFBFD] w-full overflow-x-scroll
        ">
        <li
          :class="['text-[14px] cursor-pointer whitespace-nowrap', route.matched[1].name === 'HowToUse' ? 'text-[#242424] font-bold' : 'text-[#A5A5A5] font-normal']"
          @click="router.push('/customer-service/how-to-use')">이용방법</li>
        <li
          :class="['text-[14px] cursor-pointer whitespace-nowrap', route.matched[1].name === 'QuestionAnswer' ? 'text-[#242424] font-bold' : 'text-[#A5A5A5] font-normal']"
          @click="router.push('/customer-service/question-answer/list')">문의내역</li>
        <li
          :class="['text-[14px] cursor-pointer whitespace-nowrap', route.matched[1].name === 'Notification' ? 'text-[#242424] font-bold' : 'text-[#A5A5A5] font-normal']"
          @click="router.push('/customer-service/notification/list')">공지사항</li>
        <li
          :class="['text-[14px] cursor-pointer whitespace-nowrap', route.matched[1].name === 'Rules' ? 'text-[#242424] font-bold' : 'text-[#A5A5A5] font-normal']"
          @click="router.push('/customer-service/rules/list')">약관 및 서비스 정책</li>
      </ul>
    </aside>
    <main class="col-span-10">
      <router-view />
    </main>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
console.log('🚀 ~ file: index.vue:29 ~ route:', route.matched[1].name)
</script>
<style scoped></style>