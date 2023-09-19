<template>
  <section class="pt-4 border-t-[2px] border-black">
    <article
      class="flex justify-between text-[16px] text-[#3D3D3D] font-normal py-[13px] border-b border-[#DFDFDF] cursor-pointer">
      <div class="flex items-center justify-start gap-x-3">
        <div
          :class="['text-[14px] font-normal px-[10px] border rounded-full', question?.status === 1 ? 'text-[#FF4F27] border-[#FF4F27]' : 'text-[#A5A5A5] border-[#A5A5A5]']">
          {{ question?.status === 1 ? '답변완료' : '답변대기' }}
        </div>
        <time class="text-[14px] font-normal text-[#8B8B8B]">{{ formatDate(question?.createdDate) }}</time>
        <p class="text-[16px] font-normal text-[#3D3D3D]">{{ question.title }}</p>
      </div>
      <img class="w-4 h-4" :src="Images.iconRightGray.src" :alt="Images.iconRightGray.alt">
    </article>
    <article class="py-[40px] space-y-[40px] border-b border-[#DFDFDF]">
      <div class="text-[16px] font-normal text-[#242424]">{{ question?.questContent }}</div>
      <div v-if="question?.replyContent" class="bg-[#FAFBFD] mt-[40px] leading-[136%] flex gap-x-[12px] px-[20px] py-4">
        {{ question?.replyContent }}
      </div>
    </article>
    <article class="mt-[20px] flex justify-end">
      <button class="w-[140px] py-[10px] flex justify-center items-center bg-black text-white text-[14px] font-bold"
        @click="router.push('/customer-service/question-answer/list')">목록</button>
    </article>
  </section>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import Images from "@/constants/images.js"
import { customerService } from '@/services/customerService'
import { useRoute, useRouter } from 'vue-router'
import { formatDate } from '@/utils/formatDate.js'
import { useLoadingStore } from '@/stores/loading';
const loadingStore = useLoadingStore();

const route = useRoute()
const router = useRouter()
const question = ref({})

onMounted(async () => {
  loadingStore.updateLoading(true)
  try {
    const { data: res } = await customerService.getDetailQuestion(route.params.id)
    question.value = res.data
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
  loadingStore.updateLoading(false)
})
</script>
<style scoped></style>