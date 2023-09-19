<template>
  <section class="pb-[28px] border-b-[4px] border-black w-full flex justify-between items-end">
    <h5 class="text-[28px] font-bold text-[#111]">문의내역</h5>
    <button class="py-[5px] px-[54px] bg-black text-white" @click="showPopupAddQuestion">문의하기</button>
  </section>
  <section class="space-y-[28px] pt-[28px]">
    <div v-if="listQuestion.length > 0">
      <!-- <div v-for="question in listQuestion" :key="question.id"
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
      </div> -->
      <collapse v-for="question in listQuestion" :key="question.id" :iconDown="Images.iconDown" :iconUp="Images.iconUp"
        classTitle="flex justify-between text-[16px] text-[#3D3D3D] font-normal py-[13px] border-b border-[#DFDFDF]">
        <template #title>
          <div class="flex items-center justify-start gap-x-3">
            <div
              :class="['text-[14px] font-normal px-[10px] border rounded-full ', question.status === 1 ? 'text-[#FF4F27] border-[#FF4F27]' : 'text-[#A5A5A5] border-[#A5A5A5]']">
              {{ question.status === 1 ? '답변완료' : '답변대기' }}</div>
            <time class="text-[14px] font-normal text-[#8B8B8B]">{{ formatDate(question.createdDate) }}</time>
            <p class="text-[16px] font-normal text-[#3D3D3D]">{{ question.title }}</p>
          </div>
        </template>
        <div>
          <div class="bg-[#FAFBFD] mt-[16px] px-[20px] py-4 space-y-2">
            <div class="grid grid-cols-12 gap-x-[12px]">
              <div class="text-[#3D3D3D] text-[16px] font-bold col-span-2">{{ question?.createdBy.nickName }} .
              </div>
              <div class="flex flex-col gap-y-1 text-[16px] text-[#555555] font-normal col-span-10">
                <a class="text-blue-500" v-for="(file, iFile) in question?.fileQuestions" :key="iFile"
                  :href="file.path">{{ file.path }}</a>
                <div v-html="question.questContent"></div>
              </div>
            </div>
            <div v-if="question.status !== 0" class="grid grid-cols-12 gap-x-[12px]">
              <div class="text-[#3D3D3D] text-[16px] font-bold col-span-2">{{ question?.answeredBy?.nickName }} .
              </div>
              <div class="flex flex-col gap-y-1 text-[16px] text-[#555555] font-normal col-span-10">
                <a class="text-blue-500" v-for="(file, iFile) in question?.fileResponseQuestions" :key="iFile"
                  :href="file.path">{{ file.path }}</a>
                <div v-html="question.replyContent"></div>
              </div>
            </div>
          </div>
        </div>
      </collapse>
    </div>
    <div v-else class="flex justify-center w-full">
      <span class="text-[16px] text-[#555555] font-normal text-center">데이터 없음</span>
    </div>
  </section>
  <section v-if="pagination.totalPages > 0" class="mt-[60px]">
    <Pagination :totalPages="pagination.totalPages" :currentPage="pagination.currentPage"
      @pageChanged="(page) => pagination.currentPage = page" />
  </section>
  <PopupQuestionOrder ref="popupQuestionOrder" />
</template>
<script setup>
import { onMounted, ref } from 'vue'
import Pagination from "@/components/element/Pagination.vue"
import Images from "@/constants/images.js"
import { customerService } from '@/services/customerService'
import { formatDate } from '@/utils/formatDate.js'
import { useRouter } from 'vue-router'
import { useLoadingStore } from '@/stores/loading';
import PopupQuestionOrder from '@/components/element/PopupQuestionOrder.vue'
import Collapse from "@/components/element/Collapse.vue"
import { orderService } from '@/services/orderService'
const loadingStore = useLoadingStore();

const router = useRouter()
const popupQuestionOrder = ref()
const pagination = ref({
  currentPage: 1,
  totalPages: 0,
})

const listQuestion = ref([])

const handleGetQuestion = async () => {
  loadingStore.updateLoading(true)
  try {
    const { data: res } = await customerService.getALlQuestion({
      page: 0,
      size: 10,
      sort: 'createdDate,desc'
    })
    listQuestion.value = res.data.content
    pagination.value.totalPages = res.data.totalPages
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
  loadingStore.updateLoading(false)
}

const showPopupAddQuestion = async () => {
  try {
    const { data: res } = await orderService.getOrderDetail({
      statuses: '0,1,2,3,4,5,6,7,8,9,10,11'
    })
    popupQuestionOrder.value.selectOptionsProd = res.data.map(item => {
      return {
        label: item.productName,
        value: item
      }
    })
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
  popupQuestionOrder.value.isOpen = true
}

onMounted(async () => {
  handleGetQuestion()
})
</script>