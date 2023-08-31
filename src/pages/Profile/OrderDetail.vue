<template>
  <section>
    <div class="mt-[24px] py-[48px] flex justify-center items-end gap-x-[48px] bg-[#111]">
      <div class="space-y-[6px] flex flex-col items-center">
        <span class="text-[14px] text-white font-normal">결제완료</span>
        <strong class="text-[28px] text-white">3</strong>
      </div>
      <img class="h-[24px] w-[24px] translate-y-[-25%]" :src="Images.iconRight.src" :alt="Images.iconRight.alt">
      <div class="space-y-[6px] flex flex-col items-center">
        <span class="text-[14px] text-white font-normal">결제완료</span>
        <strong class="text-[28px] text-white">3</strong>
      </div>
      <img class="h-[24px] w-[24px] translate-y-[-25%]" :src="Images.iconRight.src" :alt="Images.iconRight.alt">
      <div class="space-y-[6px] flex flex-col items-center">
        <span class="text-[14px] text-white font-normal">결제완료</span>
        <strong class="text-[28px] text-white">3</strong>
      </div>
    </div>
  </section>
  <section class="mt-[60px]">
    <h4 class="text-[20px] font-bold">주문 상품정보</h4>
    <div class="mt-[28px] border-t-[4px] border-[#111]">
      <table class="w-full border-separate table-auto border-spacing-y-4">
        <thead>
          <tr class="border-b">
            <th class="pb-4 text-center border-b text-[12px] font-bold">주문일 </th>
            <th class="pb-4 text-center border-b text-[12px] font-bold">주문내역</th>
            <th class="pb-4 text-center border-b text-[12px] font-bold">주문상태</th>
            <th class="pb-4 text-center border-b text-[12px] font-bold">마일리지</th>
            <th class="pb-4 text-center border-b text-[12px] font-bold">총 결제금액</th>
            <th class="pb-4 text-center border-b text-[12px] font-bold"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class=" pb-4 border-b text-center text-[12px] font-normal text-[#555555]">2023.06. 18</td>
            <td class=" pb-4 border-b flex items-center gap-x-[20px]">
              <figure class="w-[80px] h-[80px] flex justify-center items-center"
                style="background: linear-gradient(155deg,#f2f4f6 0%,rgba(255, 255, 255, 0.81) 100%);">
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
            </td>
            <td class="pb-4 border-b ">
              <div class="flex justify-center w-full">
                <button class="px-[21px] py-2 bg-[#F2F4F6] text-[12px] font-bold mx-auto">결제완료</button>
              </div>
            </td>
            <td class=" pb-4 border-b text-center text-[12px] font-normal text-[#FF4F27]">350P</td>
            <td class=" pb-4 border-b text-center text-[12px] font-normal text-[#555555]">18,500원</td>
            <td class="pb-4 border-b ">
              <div class="flex flex-col items-center justify-center w-full gap-y-2">
                <button class="px-[44px] py-[6px] border border-[#F2F4F6] text-[12px] font-normal mx-auto">문의하기</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  <section class="mt-[60px] pb-[30px] border-b border-[#3D3D3D]">
    <article>
      <div class="pb-4 border-b-[4px] border-[#3D3D3D] flex justify-between w-full">
        <strong class="text-[20px]">결제 정보</strong>
      </div>
    </article>
    <article class="pb-[20px] border-b border-[#DFDFDF] space-y-[16px] mt-[33px]">
      <div class="flex justify-between">
        <p class="text-[14px] font-normal text-[#8B8B8B]">주문 상품 수</p>
        <strong class="text-[16px] text-[#111111]">1개</strong>
      </div>
      <div class="flex justify-between">
        <p class="text-[14px] font-normal text-[#8B8B8B]">총 주문 금액</p>
        <strong class="text-[16px] text-[#111111]">18,500원</strong>
      </div>
      <div class="flex justify-between">
        <p class="text-[14px] font-normal text-[#8B8B8B]">배송비</p>
        <div class="flex items-center space-x-4">
          <p class="text-[16px] font-normal text-[#8B8B8B]">(5만원 이상 구매 시 무료배송)</p>
          <strong class="text-[16px] text-[#111111]">3,500원</strong>
        </div>
      </div>
      <div class="flex justify-between">
        <p class="text-[14px] font-normal text-[#8B8B8B]">적립예정 마일리지</p>
        <strong class="text-[16px] text-[#FF4F27]">200P</strong>
      </div>
    </article>
    <article class="mt-[16px] flex justify-between">
      <p class="text-[20px] font-bold text-[#3D3D3D]">총 결제금액</p>
      <strong class="text-[20px] text-[#FF2618]">23,500원</strong>
    </article>
  </section>
  <section class="mt-[60px]">
    <div class="pb-4 border-b-[4px] border-[#3D3D3D] flex justify-between w-full">
      <strong class="text-[20px]">결제 정보</strong>
    </div>
    <div class="flex justify-start mt-7 gap-x-[60px]">
      <strong class="text-[#3D3D3D] text-[16px]">우리집</strong>
      <div class="space-y-3">
        <p class="space-x-2 text-[14px] font-normal text-[#6F6F6F]">
          <span>김포토</span>
          <span>010 -1111-1111</span>
        </p>
        <p class="text-[14px] font-normal text-[#6F6F6F]">
          서울특별시 강남구 테헤란로 999길 10-12 <br>
          김가가아파트 1002동 103호
        </p>
        <p class="space-x-2 text-[14px] font-normal text-[#6F6F6F]">
          <span class="text-[#A5A5A5]">김포토</span>
          <span>010 -1111-1111</span>
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>
import Images from '@/constants/images'
import ImagesProd from '@/constants/imagesProd'
</script>
<style scoped></style>