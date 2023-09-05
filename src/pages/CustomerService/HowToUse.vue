<template>
  <section class="pb-[28px] border-b-[4px] border-black w-full flex justify-between items-end">
    <h5 class="text-[28px] font-bold text-[#111]">자주 묻는 질문</h5>
  </section>
  <section class="space-y-[28px] pt-[28px]">
    <Collapse title="주문상품 배송을 확인하고 싶어요" :iconDown="Images.iconDown" :iconUp="Images.iconUp"
      classTitle="flex justify-between text-[16px] text-[#3D3D3D] font-normal py-[13px] border-b border-[#DFDFDF]">
      <div class="bg-[#FAFBFD] mt-[16px] leading-[136%] flex gap-x-[12px] px-[20px] py-4">
        <strong class="text-[16px] text-black">A.</strong>
        <p class="text-[16px] font-normal text-[#555555]">주문상품 배송확인은 마이페이지 > 상세 내역 에서 확인 하실 수 있습니다 더미 텍스트 입니다. <br>
          더 필요하신 내용은 1:1 문의를 이용해주세요<br><br>
          감사합니다</p>
      </div>
    </Collapse>
    <Collapse title="주문상품 배송을 확인하고 싶어요" :iconDown="Images.iconDown" :iconUp="Images.iconUp"
      classTitle="flex justify-between text-[16px] text-[#3D3D3D] font-normal py-[13px] border-b border-[#DFDFDF]">
      <div class="bg-[#FAFBFD] mt-[16px] leading-[136%] flex gap-x-[12px] px-[20px] py-4">
        <strong class="text-[16px] text-black">A.</strong>
        <p class="text-[16px] font-normal text-[#555555]">주문상품 배송확인은 마이페이지 > 상세 내역 에서 확인 하실 수 있습니다 더미 텍스트 입니다. <br>
          더 필요하신 내용은 1:1 문의를 이용해주세요<br><br>
          감사합니다</p>
      </div>
    </Collapse>
    <Collapse title="주문상품 배송을 확인하고 싶어요" :iconDown="Images.iconDown" :iconUp="Images.iconUp"
      classTitle="flex justify-between text-[16px] text-[#3D3D3D] font-normal py-[13px] border-b border-[#DFDFDF]">
      <div class="bg-[#FAFBFD] mt-[16px] leading-[136%] flex gap-x-[12px] px-[20px] py-4">
        <strong class="text-[16px] text-black">A.</strong>
        <p class="text-[16px] font-normal text-[#555555]">주문상품 배송확인은 마이페이지 > 상세 내역 에서 확인 하실 수 있습니다 더미 텍스트 입니다. <br>
          더 필요하신 내용은 1:1 문의를 이용해주세요<br><br>
          감사합니다</p>
      </div>
    </Collapse>
    <Collapse title="주문상품 배송을 확인하고 싶어요" :iconDown="Images.iconDown" :iconUp="Images.iconUp"
      classTitle="flex justify-between text-[16px] text-[#3D3D3D] font-normal py-[13px] border-b border-[#DFDFDF]">
      <div class="bg-[#FAFBFD] mt-[16px] leading-[136%] flex gap-x-[12px] px-[20px] py-4">
        <strong class="text-[16px] text-black">A.</strong>
        <p class="text-[16px] font-normal text-[#555555]">주문상품 배송확인은 마이페이지 > 상세 내역 에서 확인 하실 수 있습니다 더미 텍스트 입니다. <br>
          더 필요하신 내용은 1:1 문의를 이용해주세요<br><br>
          감사합니다</p>
      </div>
    </Collapse>
    <Collapse title="주문상품 배송을 확인하고 싶어요" :iconDown="Images.iconDown" :iconUp="Images.iconUp"
      classTitle="flex justify-between text-[16px] text-[#3D3D3D] font-normal py-[13px] border-b border-[#DFDFDF]">
      <div class="bg-[#FAFBFD] mt-[16px] leading-[136%] flex gap-x-[12px] px-[20px] py-4">
        <strong class="text-[16px] text-black">A.</strong>
        <p class="text-[16px] font-normal text-[#555555]">주문상품 배송확인은 마이페이지 > 상세 내역 에서 확인 하실 수 있습니다 더미 텍스트 입니다. <br>
          더 필요하신 내용은 1:1 문의를 이용해주세요<br><br>
          감사합니다</p>
      </div>
    </Collapse>
  </section>
  <section class="mt-[60px]">
    <Pagination :totalPages="10" :currentPage="currentPage" @pageChanged="(page) => currentPage = page" />
  </section>
</template>
<script setup>
import { ref } from 'vue'
import Collapse from "@/components/element/Collapse.vue"
import Pagination from "@/components/element/Pagination.vue"
import Images from "@/constants/images.js"

const currentPage = ref(1)
</script>
<style scoped></style>