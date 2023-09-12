<template>
  <section class="pb-[28px] border-b-[4px] border-black w-full flex justify-between items-end">
    <h5 class="text-[28px] font-bold text-[#111]">공지사항</h5>
  </section>
  <section class="space-y-[28px] pt-[28px]">
    <div v-if="listContent.length > 0">
      <div v-for="content in listContent" :key="content.id"
        @click="router.push(`/customer-service/notification/detail/${content.id}`)"
        class="flex justify-between text-[16px] text-[#3D3D3D] font-normal py-[13px] border-b border-[#DFDFDF] cursor-pointer">
        <div class="flex items-center justify-start gap-x-3">
          <time class="text-[14px] font-normal text-[#8B8B8B]">{{ formatDate(content.createdDate) }}</time>
          <p class="text-[16px] font-normal text-[#3D3D3D]">{{ content.content }}</p>
        </div>
        <img class="w-4 h-4" :src="Images.iconRightGray.src" :alt="Images.iconRightGray.alt">
      </div>
    </div>
    <div v-else class="flex justify-center w-full">
      <span class="text-[16px] text-[#555555] font-normal text-center">데이터 없음</span>
    </div>
  </section>
  <section v-if="pagination.totalPages > 0" class="mt-[60px]">
    <Pagination :totalPages="pagination.totalPages" :currentPage="pagination.currentPage"
      @pageChanged="(page) => pagination.currentPage = page" />
  </section>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import Pagination from "@/components/element/Pagination.vue"
import Images from "@/constants/images.js"
import { useRouter } from 'vue-router'
import { customerService } from '@/services/customerService'
import { formatDate } from '@/utils/formatDate'

const router = useRouter()
const pagination = ref({
  currentPage: 1,
  totalPages: 0,
})
const listContent = ref([])
const handleGetContent = async (currentPage) => {
  try {
    const { data: res } = await customerService.getNotify({
      type: 1,
      page: currentPage - 1,
      size: 5,
    })
    listContent.value = res.data.content
    pagination.value.totalPages = res.data.totalPages
  } catch (error) {
    alert(error.response.data.message)
  }
}

onMounted(async () => {
  handleGetContent(1)
})
</script>