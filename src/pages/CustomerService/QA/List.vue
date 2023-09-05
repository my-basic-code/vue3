<template>
  <section class="pb-[28px] border-b-[4px] border-black w-full flex justify-between items-end">
    <h5 class="text-[28px] font-bold text-[#111]">문의내역</h5>
    <button class="py-[5px] px-[54px] bg-black text-white">문의하기</button>
  </section>
  <section class="space-y-[28px] pt-[28px]">
    <div
      class="flex justify-between text-[16px] text-[#3D3D3D] font-normal py-[13px] border-b border-[#DFDFDF] cursor-pointer">
      <div class="flex items-center justify-start gap-x-3">
        <div class="text-[14px] font-normal text-[#FF4F27] px-[10px] border border-[#FF4F27] rounded-full">답변완료</div>
        <time class="text-[14px] font-normal text-[#8B8B8B]">23.08.12</time>
        <p class="text-[16px] font-normal text-[#3D3D3D]">상품이 잘못왔어요</p>
      </div>
      <img class="w-4 h-4" :src="Images.iconRightGray.src" :alt="Images.iconRightGray.alt">
    </div>
    <div
      class="flex justify-between text-[16px] text-[#3D3D3D] font-normal py-[13px] border-b border-[#DFDFDF] cursor-pointer">
      <div class="flex items-center justify-start gap-x-3">
        <div class="text-[14px] font-normal text-[#A5A5A5] px-[10px] border border-[#A5A5A5] rounded-full">답변대기</div>
        <time class="text-[14px] font-normal text-[#8B8B8B]">23.08.12</time>
        <p class="text-[16px] font-normal text-[#3D3D3D]">상품이 잘못왔어요</p>
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