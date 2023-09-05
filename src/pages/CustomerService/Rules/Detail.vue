<template>
  <section class="pt-4 border-t-[2px] border-black">
    <article
      class="flex justify-between text-[16px] text-[#3D3D3D] font-normal py-[13px] border-b border-[#DFDFDF] cursor-pointer">
      <div class="flex items-center justify-start gap-x-3">
        <time class="text-[14px] font-normal text-[#8B8B8B]">23.08.12</time>
        <p class="text-[16px] font-normal text-[#3D3D3D]">상품이 잘못왔어요</p>
      </div>
      <img class="w-4 h-4" :src="Images.iconRightGray.src" :alt="Images.iconRightGray.alt">
    </article>
    <article class="py-[40px] space-y-[40px] border-b border-[#DFDFDF]">
      <div class="text-[16px] font-normal text-[#242424]"> 전혀 다른 상품이 왔는데 처리 부탁드려요</div>
      <div class="bg-[#FAFBFD] mt-[40px] leading-[136%] flex gap-x-[12px] px-[20px] py-4">
        <strong class="text-[#8B8B8B] text-[16px]">A.</strong>
        <p class="text-[16px] font-normal text-[#8B8B8B]">주문상품 배송확인은 마이페이지 > 상세 내역 에서 확인 하실 수 있습니다 더미 텍스트 입니다. <br>
          더 필요하신 내용은 1:1 문의를 이용해주세요<br><br>
          감사합니다</p>
      </div>
    </article>
    <article class="mt-[20px] flex justify-end">
      <button
        class="w-[140px] py-[10px] flex justify-center items-center bg-black text-white text-[14px] font-bold ">목록</button>
    </article>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import Images from "@/constants/images.js"
</script>
<style scoped></style>