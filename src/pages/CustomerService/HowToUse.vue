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
          class="bg-[#FAFBFD] mt-[16px] leading-[136%] flex gap-x-[12px] px-[20px] py-4 text-[16px] text-[#555555] font-normal"
          v-html="content.content">
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
import { useLoadingStore } from '@/stores/loading';
const loadingStore = useLoadingStore();

const pagination = ref({
  currentPage: 1,
  totalPages: 0,
})
const listContent = ref([])
const handleGetContent = async (currentPage) => {
  loadingStore.updateLoading(true)
  try {
    const { data: res } = await customerService.getNotify({
      type: 0,
      page: currentPage - 1,
      size: 5,
    })
    listContent.value = res.data.content
    pagination.value.totalPages = res.data.totalPages
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
  loadingStore.updateLoading(false)
}

onMounted(async () => {
  handleGetContent(1)
})
</script>
<style scoped></style>