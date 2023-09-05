<template>
  <section class="pb-[28px] border-b-[4px] border-black w-full flex justify-between items-end">
    <h5 class="text-[28px] font-bold text-[#111]">공지사항</h5>
  </section>
  <section class="space-y-[28px] pt-[28px]">
    <div
      class="flex justify-between text-[16px] text-[#3D3D3D] font-normal py-[13px] border-b border-[#DFDFDF] cursor-pointer">
      <div class="flex items-center justify-start gap-x-3">
        <time class="text-[14px] font-normal text-[#8B8B8B]">23.08.12</time>
        <p class="text-[16px] font-normal text-[#3D3D3D]">[개인정보처리] 변동 안내</p>
      </div>
      <img class="w-4 h-4" :src="Images.iconRightGray.src" :alt="Images.iconRightGray.alt">
    </div>
    <div
      class="flex justify-between text-[16px] text-[#3D3D3D] font-normal py-[13px] border-b border-[#DFDFDF] cursor-pointer">
      <div class="flex items-center justify-start gap-x-3">
        <time class="text-[14px] font-normal text-[#8B8B8B]">23.08.12</time>
        <p class="text-[16px] font-normal text-[#3D3D3D]">[개인정보처리] 변동 안내</p>
      </div>
      <img class="w-4 h-4" :src="Images.iconRightGray.src" :alt="Images.iconRightGray.alt">
    </div>
  </section>
  <section class="mt-[60px]">
    <Pagination :totalPages="10" :currentPage="currentPage" @pageChanged="(page) => currentPage = page" />
  </section>
</template>
<script setup>
import { ref } from 'vue'
import Pagination from "@/components/element/Pagination.vue"
import Images from "@/constants/images.js"

const currentPage = ref(1)
</script>