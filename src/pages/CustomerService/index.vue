<template>
  <div class="container mx-auto mt-[60px] mb-[75px] grid grid-cols-12">
    <aside class="space-y-[40px] col-span-2">
      <h3 class="text-[20px] font-normal text-[#555555]">고객센터</h3>
      <ul class="space-y-[28px]">
        <li
          :class="['text-[14px] font-normal cursor-pointer', route.matched[1].name === 'HowToUse' ? 'text-[#242424]' : 'text-[#A5A5A5]']"
          @click="router.push('/customer-service/how-to-use')">이용방법</li>
        <li
          :class="['text-[14px] font-normal cursor-pointer', route.matched[1].name === 'QuestionAnswer' ? 'text-[#242424]' : 'text-[#A5A5A5]']"
          @click="router.push('/customer-service/question-answer/list')">문의내역</li>
        <li
          :class="['text-[14px] font-normal cursor-pointer', route.matched[1].name === 'Notification' ? 'text-[#242424]' : 'text-[#A5A5A5]']"
          @click="router.push('/customer-service/notification/list')">공지사항</li>
        <li
          :class="['text-[14px] font-normal cursor-pointer', route.matched[1].name === 'Rules' ? 'text-[#242424]' : 'text-[#A5A5A5]']"
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