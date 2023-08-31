<template>
  <main class="max-w-[790px] mx-auto mt-[60px] mb-[93px]">
    <h1 class="pb-[60px] border-b-[4px] border-black w-full flex flex-col justify-center items-center gap-y-4">
      <img class="w-[100px] h-[100px]" :src="Images.iconCart.src" :alt="Images.iconCart.alt" />
      <span class="text-[28px] font-bold">주문/결제</span>
    </h1>
    <article class="mt-[48px]">
      <div class="pb-4 border-b border-[#3D3D3D] flex justify-between w-full">
        <strong>주문상품</strong>
        <p class="text-xs font-bold text-[#3D3D3D]">
          총 <span class="text-[#FF4F27]">1</span>개
        </p>
      </div>
      <div class="mt-5">
        <div class="relative flex items-center justify-between w-full gap-x-[40px]">
          <div class="flex items-center gap-x-[20px]">
            <figure class="w-[80px] h-[80px] flex justify-center items-center" style="
                  background: linear-gradient(
                    155deg,
                    #f2f4f6 0%,
                    rgba(255, 255, 255, 0.81) 100%
                  );
                ">
              <img :src="ImagesProd.ProductCrop.src" :alt="ImagesProd.ProductCrop.alt" />
            </figure>
            <div>
              <strong class="text-[16px] text-[#242424]">EDITION FILM CAMERA</strong>
              <div class="flex mt-[7px] space-x-4 h-full w-fit">
                <p
                  class="text-[12px] font-normal text-[#6F6F6F] relative after:content-[''] after:block after:absolute after:top-0 after:right-0 after:mr-[-8px] after:w-[1px] after:h-full after:bg-[#DFDFDF]">
                  옵션 - 네이비
                </p>
                <span class="text-[12px] font-normal text-[#6F6F6F]">수량 - 1개</span>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end grow">
            <div class="space-x-[6px] ml-[40px]">
              <span class="text-[#FF4F27] font-bold text-[12px]">15%</span>
              <strong class="text-[#111111] text-[16px]">18,500</strong>
            </div>
          </div>
        </div>
      </div>
    </article>
    <article class="pb-[20px] border-b border-[#DFDFDF] space-y-[14px] mt-[16px]">
      <div class="flex justify-between">
        <p class="text-[14px] font-normal text-[#8B8B8B]">총 주문 금액</p>
        <strong class="text-[14px] text-[#111111]">18,500원</strong>
      </div>
      <div class="flex justify-between">
        <p class="text-[14px] font-normal text-[#8B8B8B]">배송비</p>
        <strong class="text-[14px] text-[#111111]">3,500원</strong>
      </div>
      <div class="flex justify-between">
        <p class="text-[14px] font-normal text-[#8B8B8B]">마일리지 사용</p>
        <strong class="text-[14px] text-[#111111]">-200원</strong>
      </div>
      <div class="flex justify-between">
        <p class="text-[14px] font-normal text-[#8B8B8B]">적립예정 마일리지</p>
        <strong class="text-[14px] text-[#FF4F27]">200P</strong>
      </div>
    </article>
    <article class="mt-[16px] flex justify-between">
      <p class="text-[20px] font-bold text-[#3D3D3D]">총 결제금액</p>
      <strong class="text-[20px] text-[#FF2618]">23,500원</strong>
    </article>
    <button class="mt-[60px] w-full py-4 px-9 text-white bg-[#111111]">
      주문 내역 보기
    </button>
  </main>
</template>
<script setup>
import Images from "@/constants/images"
import ImagesProd from "@/constants/imagesProd"
</script>
<style scoped></style>