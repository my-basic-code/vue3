<template>
  <section class="pb-[28px] border-b-[4px] border-black w-full flex justify-between items-end">
    <h5 class="text-[28px] font-bold text-[#111]">자주 묻는 질문</h5>
  </section>
  <section class="space-y-[28px] pt-[28px]">
    <div v-if="listContent.length > 0">
      <Collapse v-for="content in listContent" :key="content.id" :title="content.title" :iconDown="Images.iconDown"
        :iconUp="Images.iconUp"
        classTitle="flex justify-between text-[16px] text-[#3D3D3D] font-normal py-[13px] border-b border-[#DFDFDF]">
        <div
          class="bg-[#FAFBFD] mt-[16px] leading-[136%] flex gap-x-[12px] px-[20px] py-4 text-[16px] text-[#555555] font-normal">
          <!-- <strong class="text-[16px] text-black">A.</strong>
        <p class="text-[16px] font-normal text-[#555555]">주문상품 배송확인은 마이페이지 > 상세 내역 에서 확인 하실 수 있습니다 더미 텍스트 입니다. <br>
          더 필요하신 내용은 1:1 문의를 이용해주세요<br><br>
          감사합니다</p> -->
          {{ content.content }}
        </div>
      </Collapse>
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
import Collapse from "@/components/element/Collapse.vue"
import Pagination from "@/components/element/Pagination.vue"
import Images from "@/constants/images.js"
import { customerService } from '@/services/customerService'

const pagination = ref({
  currentPage: 1,
  totalPages: 0,
})
const listContent = ref([])
const handleGetContent = async (currentPage) => {
  try {
    const { data: res } = await customerService.getNotify({
      type: 0,
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
<style scoped></style>