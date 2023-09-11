<template>
  <section class="pb-[28px] border-b-[4px] border-black w-full flex justify-between items-end">
    <h5 class="text-[28px] font-bold text-[#111]">문의내역</h5>
    <button class="py-[5px] px-[54px] bg-black text-white">문의하기</button>
  </section>
  <section class="space-y-[28px] pt-[28px]">
    <div v-for="question in listQuestion" :key="question.id"
      @click="router.push(`/customer-service/question-answer/detail/${question.id}`)"
      class="flex justify-between text-[16px] text-[#3D3D3D] font-normal py-[13px] border-b border-[#DFDFDF] cursor-pointer">
      <div class="flex items-center justify-start gap-x-3">
        <div
          :class="['text-[14px] font-normal px-[10px] border rounded-full ', question.status === 1 ? 'text-[#FF4F27] border-[#FF4F27]' : 'text-[#A5A5A5] border-[#A5A5A5]']">
          {{ question.status === 1 ? '답변완료' : '답변대기' }}</div>
        <time class="text-[14px] font-normal text-[#8B8B8B]">{{ formatDate(question.createdDate) }}</time>
        <p class="text-[16px] font-normal text-[#3D3D3D]">{{ question.questContent }}</p>
      </div>
      <img class="w-4 h-4" :src="Images.iconRightGray.src" :alt="Images.iconRightGray.alt">
    </div>
  </section>
  <section class="mt-[60px]">
    <Pagination :totalPages="10" :currentPage="currentPage" @pageChanged="(page) => currentPage = page" />
  </section>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import Pagination from "@/components/element/Pagination.vue"
import Images from "@/constants/images.js"
import { customerService } from '@/services/customerService'
import { formatDate } from '@/utils/formatDate.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentPage = ref(1)
const listQuestion = ref([
  { id: 0, status: 'pending', date: '23.08.12', content: '상품이 잘못왔어요' }
])
onMounted(async () => {
  try {
    const { data: res } = await customerService.getALlQuestion({
      page: 0,
      size: 10,
      sort: 'createdDate,desc'
    })
    listQuestion.value = res.data.content
  } catch (error) {
    alert(error.response.data.message)
  }
})
</script>