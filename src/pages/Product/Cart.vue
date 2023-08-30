<template>
  <main class="container mx-auto mt-[60px] grid grid-cols-3 gap-x-9 mb-[170px]">
    <section class="col-span-2">
      <div class="pb-[28px] border-b-[4px] border-black w-full text-start">
        <h1 class="text-[28px] font-bold">장바구니</h1>
      </div>
      <Checkbox type="checkbox" label="전체선택(0/3)" classLabel="text-[14px] font-normal text-[#555]" name="all"
        inputClass="w-6 h-6 border appearance-none checked:scale-150 checked:opacity-0 peer/all"
        checkmarkClass="absolute left-0 w-6 h-6 transparent peer-checked/all:bg-[#FF4F27] after:absolute after:left-2 after:top-[2px] after:w-2 after:h-4 after:border-[3px] after:border-white after:border-t-0 after:border-l-0 after:transform after:rotate-45"
        className="mt-7 relative flex w-full justify-start gap-x-3" id="check-all" v-model="valueCheckBoxAll" />
      <div class="mt-[17px] bg-[#3D3D3D] w-full h-[1px]"></div>
      <article class="mt-7 space-y-[20px]">
        <Checkbox type="checkbox" name="all"
          inputClass="w-6 h-6 border appearance-none checked:scale-150 checked:opacity-0 peer/all"
          checkmarkClass="absolute left-0 w-6 h-6 transparent peer-checked/all:bg-[#FF4F27] after:absolute after:left-2 after:top-[2px] after:w-2 after:h-4 after:border-[3px] after:border-white after:border-t-0 after:border-l-0 after:transform after:rotate-45"
          className="relative flex w-full justify-start items-start gap-x-3 pb-[24px] border-b border-[#DFDFDF]"
          id="check-all" v-model="valueCheckBoxAll">
          <template #label>
            <div class="relative flex items-center justify-between w-full gap-x-[40px]">
              <div class="flex gap-x-[20px]">
                <figure class="w-[80px] h-[80px] flex justify-center items-center"
                  style="background: linear-gradient(155deg, #F2F4F6 0%, rgba(255, 255, 255, 0.81) 100%);">
                  <img :src="ImagesProd.ProductCrop.src" :alt="ImagesProd.ProductCrop.alt">
                </figure>
                <div>
                  <strong class="text-[16px] text-[#242424]">EDITION FILM CAMERA</strong>
                  <p class="text-[12px] font-normal text-[#6F6F6F]">옵션 - 네이비</p>
                  <span class="text-[12px] font-normal text-[#6F6F6F]">수량 - 1</span>
                </div>
              </div>
              <div class="flex items-center justify-end grow">
                <div class="space-x-[20px]">
                  <button
                    class="text-[#242424] text-[12px] font-normal px-[28px] py-[6px] border border-[#DFDFDF]">옵션변경</button>
                  <button
                    class="text-[#242424] text-[12px] font-normal px-[28px] py-[6px] border border-[#DFDFDF]">수량변경</button>
                </div>
                <div class="space-x-[6px] ml-[40px]">
                  <span class="text-[#FF4F27] font-bold text-[12px]">15%</span>
                  <strong class="text-[#111111] text-[16px]">18,500</strong>
                </div>
                <button class="w-4 h-4 ml-4 mr-[2px]">
                  <img class="w-full h-full" :src="Images.iconExit.src" :alt="Images.iconExit.src">
                </button>
              </div>
            </div>
          </template>
        </Checkbox>
        <Checkbox type="checkbox" name="all"
          inputClass="w-6 h-6 border appearance-none checked:scale-150 checked:opacity-0 peer/all"
          checkmarkClass="absolute left-0 w-6 h-6 transparent peer-checked/all:bg-[#FF4F27] after:absolute after:left-2 after:top-[2px] after:w-2 after:h-4 after:border-[3px] after:border-white after:border-t-0 after:border-l-0 after:transform after:rotate-45"
          className="relative flex w-full justify-start items-start gap-x-3 pb-[24px] border-b border-[#DFDFDF]"
          id="check-all" v-model="valueCheckBoxAll">
          <template #label>
            <div class="relative flex items-center justify-between w-full gap-x-[40px]">
              <div class="flex gap-x-[20px]">
                <figure class="w-[80px] h-[80px] flex justify-center items-center"
                  style="background: linear-gradient(155deg, #F2F4F6 0%, rgba(255, 255, 255, 0.81) 100%);">
                  <img :src="ImagesProd.ProductCrop.src" :alt="ImagesProd.ProductCrop.alt">
                </figure>
                <div>
                  <strong class="text-[16px] text-[#242424]">EDITION FILM CAMERA</strong>
                  <p class="text-[12px] font-normal text-[#6F6F6F]">옵션 - 네이비</p>
                  <span class="text-[12px] font-normal text-[#6F6F6F]">수량 - 1</span>
                </div>
              </div>
              <div class="flex items-center justify-end grow">
                <div class="space-x-[20px]">
                  <button
                    class="text-[#242424] text-[12px] font-normal px-[28px] py-[6px] border border-[#DFDFDF]">옵션변경</button>
                  <button
                    class="text-[#242424] text-[12px] font-normal px-[28px] py-[6px] border border-[#DFDFDF]">수량변경</button>
                </div>
                <div class="space-x-[6px] ml-[40px]">
                  <span class="text-[#FF4F27] font-bold text-[12px]">15%</span>
                  <strong class="text-[#111111] text-[16px]">18,500</strong>
                </div>
                <button class="w-4 h-4 ml-4 mr-[2px]">
                  <img class="w-full h-full" :src="Images.iconExit.src" :alt="Images.iconExit.src">
                </button>
              </div>
            </div>
          </template>
        </Checkbox>
        <Checkbox type="checkbox" name="all"
          inputClass="w-6 h-6 border appearance-none checked:scale-150 checked:opacity-0 peer/all"
          checkmarkClass="absolute left-0 w-6 h-6 transparent peer-checked/all:bg-[#FF4F27] after:absolute after:left-2 after:top-[2px] after:w-2 after:h-4 after:border-[3px] after:border-white after:border-t-0 after:border-l-0 after:transform after:rotate-45"
          className="relative flex w-full justify-start items-start gap-x-3 pb-[24px] border-b border-[#DFDFDF]"
          id="check-all" v-model="valueCheckBoxAll">
          <template #label>
            <div class="relative flex items-center justify-between w-full gap-x-[40px]">
              <div class="flex gap-x-[20px]">
                <figure class="w-[80px] h-[80px] flex justify-center items-center"
                  style="background: linear-gradient(155deg, #F2F4F6 0%, rgba(255, 255, 255, 0.81) 100%);">
                  <img :src="ImagesProd.ProductCrop.src" :alt="ImagesProd.ProductCrop.alt">
                </figure>
                <div>
                  <strong class="text-[16px] text-[#242424]">EDITION FILM CAMERA</strong>
                  <p class="text-[12px] font-normal text-[#6F6F6F]">옵션 - 네이비</p>
                  <span class="text-[12px] font-normal text-[#6F6F6F]">수량 - 1</span>
                </div>
              </div>
              <div class="flex items-center justify-end grow">
                <div class="space-x-[20px]">
                  <button
                    class="text-[#242424] text-[12px] font-normal px-[28px] py-[6px] border border-[#DFDFDF]">옵션변경</button>
                  <button
                    class="text-[#242424] text-[12px] font-normal px-[28px] py-[6px] border border-[#DFDFDF]">수량변경</button>
                </div>
                <div class="space-x-[6px] ml-[40px]">
                  <span class="text-[#FF4F27] font-bold text-[12px]">15%</span>
                  <strong class="text-[#111111] text-[16px]">18,500</strong>
                </div>
                <button class="w-4 h-4 ml-4 mr-[2px]">
                  <img class="w-full h-full" :src="Images.iconExit.src" :alt="Images.iconExit.src">
                </button>
              </div>
            </div>
          </template>
        </Checkbox>
      </article>
    </section>
    <section>
      <div class="mt-[72px] col-span-1 border-t-[4px] border-black px-[20px] pt-[32px] pb-[40px]">
        <article class="pb-[14px] border-b border-[#DFDFDF] w-full text-center">
          <h4 class="text-[16px] font-bold">장바구니</h4>
        </article>
        <article class="pb-[24px] border-b border-[#DFDFDF] space-y-[24px] mt-[24px]">
          <div class="flex justify-between">
            <p class="text-[12px] font-normal text-[#8B8B8B]">주문 상품 수</p>
            <strong class="text-[16px] text-[#111111]">1개</strong>
          </div>
          <div class="flex justify-between">
            <p class="text-[12px] font-normal text-[#8B8B8B]">총 주문 금액</p>
            <strong class="text-[16px] text-[#111111]">18,500원</strong>
          </div>
          <div class="flex justify-between">
            <p class="text-[12px] font-normal text-[#8B8B8B]">배송비</p>
            <strong class="text-[16px] text-[#111111]">3,500원</strong>
          </div>
        </article>
        <article class="mt-[14px] flex justify-between">
          <p class="text-[14px] font-bold text-[#3D3D3D]">총 결제금액</p>
          <strong class="text-[24px] text-[#FF2618]">23,500원</strong>
        </article>
        <button class="w-full mt-10 py-4 px-9 bg-[#111111] text-white text-[16px] font-bold">결제하기</button>
      </div>
    </section>
  </main>
</template>
<script setup>
import { ref } from 'vue'
import Checkbox from '@/components/ui/Checkbox.vue';
import ImagesProd from '@/constants/imagesProd'
import Images from '@/constants/images'


const valueCheckBoxAll = ref(false);

</script>
<style scoped></style>