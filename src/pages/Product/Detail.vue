<template>
  <main class="container mx-auto mt-[60px] mb-[211px]">
    <section class="w-full h-full overflow-hidden bg-white grid grid-cols-2 gap-x-[58px]">
      <div class="relative flex items-center justify-center px-[86px] py-[175px]"
        style="background: linear-gradient(155deg, #F2F4F6 0%, rgba(255, 255, 255, 0.81) 100%);">
        <figure class="w-full h-[237px]">
          <img class="object-cover object-center w-full h-full" src="https://dummyimage.com/720x400" alt="blog">
        </figure>
      </div>

      <div>
        <article class="pb-[20px] border-b-[4px] border-black flex justify-between items-center">
          <div>
            <span class="text-[14px] font-normal text-[#555555]">베스트 (카테고리 명)</span>
            <strong class="block text-xl font-bold uppercase mt-[8px] mb-3">EDITION FILM CAMERA</strong>
            <small class="py-[2px] px-[6px] text-xs font-normal bg-[#FFF6F2] text-[#FF3609]">여름한정</small>
          </div>
          <figure class="w-6 h-6">
            <img class="object-cover object-center w-full h-full" :src="Images.iconLinkSimple.src"
              :alt="Images.iconLinkSimple.alt">
          </figure>
        </article>
        <article class="mt-4 space-y-4">
          <div class="flex items-center justify-between">
            <strong class="text-[14px] text-black">정가</strong>
            <del class="text-[14px] font-normal text-[#6F6F6F]">24,000원</del>
          </div>
          <div class="flex items-center justify-between">
            <strong class="text-[14px] text-black">구매가</strong>
            <div class="space-x-[6px]">
              <sub class="inline-block text-[#FF2618] text-base font-bold">35%</sub>
              <strong class="text-[24px] inline-block">18,500</strong>
            </div>
          </div>
          <Collapse :isOpen="true" title="등급별 마일리지" classTitle="text-[14px] font-bold text-[#3D3D3D]"
            :iconDown="Images.iconDownBlack" :iconUp="Images.iconUpBlack">
            <div class="border border-[#DFDFDF] py-[18px] px-[20px] space-y-3 mt-4">
              <div class="pb-3 border-b border-[#DFDFDF] flex justify-between">
                <strong class="text-xs text-[#3D3D3D]">Basic</strong>
                <p class="text-xs font-normal text-[#555]">마일리지 적립 X</p>
              </div>
              <div class="pb-3 border-b border-[#DFDFDF] flex justify-between">
                <strong class="text-xs text-[#3D3D3D]">Colored</strong>
                <p class="text-xs font-normal text-[#555]">
                  결제 금액의 <span class="text-[#FF4F27] font-bold">1%</span> 마일리지 적립
                </p>
              </div>
              <div class="pb-3 border-b border-[#DFDFDF] flex justify-between">
                <strong class="text-xs text-[#3D3D3D]">Premium</strong>
                <p class="text-xs font-normal text-[#555]">
                  결제 금액의 <span class="text-[#FF4F27] font-bold">3%</span> 마일리지 적립
                </p>
              </div>
            </div>
          </Collapse>
          <Select classSelected="text-[14px] font-normal bg-[#F2F4F6] px-[20px] py-[10px] flex justify-between"
            classWrapOption="space-y-1 w-full mt-1 bg-white z-50 overflow-y-auto max-h-[221px]"
            classOption="bg-[#F2F4F6] text-[14px] font-normal w-full px-[20px] py-[10px]" :options="selectOptionsQuantity"
            :modelValue="selectedQuantity" placeholder="Select an option" placement="bottomLeft">
            <template #icon>
              <img :src="Images.iconDownBlack.src" :alt="Images.iconDownBlack.alt">
            </template>
          </Select>
          <Select classSelected="text-[14px] font-normal bg-[#F2F4F6] px-[20px] py-[10px] flex justify-between"
            classWrapOption="space-y-1 w-full mt-1 bg-white z-50 overflow-y-auto max-h-[221px]"
            classOption="bg-[#F2F4F6] text-[14px] font-normal w-full px-[20px] py-[10px]" :options="selectOptionsColor"
            :modelValue="selectedColor" placeholder="COLOR" placement="bottomLeft">
            <template #icon>
              <img :src="Images.iconDownBlack.src" :alt="Images.iconDownBlack.alt">
            </template>
          </Select>
        </article>
        <article class="mt-[18px] flex justify-between space-x-[20px]">
          <button class="border border-[#242424] py-[19px] w-full text-base font-bold text-[#242424]">장바구니</button>
          <button class=" bg-[#242424] py-[19px] w-full text-base font-bold text-white">장바구니</button>
        </article>
      </div>
    </section>

    <section class="mt-[120px]">
      <h2 class="text-center">제목</h2>
      <p class="text-center">본문글</p>
      <figure class="mt-[30px] relative" :class="{ 'show': isImageVisible }">
        <img class="w-full h-full" :src="ImagesProd.Product.src" :alt="ImagesProd.Product.alt">
      </figure>
      <Button @click="toggleImage"
        class="border py-[19px] w-full text-base font-bold text-[#242424] flex justify-center items-center space-x-2 border-[#DFDFDF] mt-[96px]">
        <span>상품 설명 접기</span>
        <template #right-icon>
          <img v-if="!isImageVisible" class="w-6 h-6" :src="Images.iconDown.src" :alt="Images.iconDown.alt">
          <img v-else class="w-6 h-6" :src="Images.iconUp.src" :alt="Images.iconUp.alt">
        </template>
      </Button>
    </section>

    <section class="mt-[120px]">
      <Collapse :isOpen="true" title="제품정보 고시"
        classTitle="text-[20px] font-bold text-[#242424] flex justify-between py-[18px] border-b border-[#000]"
        :iconDown="Images.iconDownBlack" :iconUp="Images.iconUpBlack">
        <div class="mt-10 overflow-hidden border-t border-b">
          <div class="flex items-start justify-start h-fit bg-[#FAFBFD] relative">
            <strong class="text-[12px] px-[20px] py-[20px]">품명 및 모델명</strong>
            <p class="bg-white py-[20px] px-7 grow">EDITION FILM CAMERA</p>
            <div class="h-[1px] w-full absolute bottom-0 left-[20px] right-0 bg-[#F2F4F6]"></div>
          </div>
          <div class="flex items-start justify-start h-fit bg-[#FAFBFD] relative">
            <strong class="text-[12px] px-[20px] py-[20px]">품명 및 모델명</strong>
            <p class="bg-white py-[20px] px-7 grow">EDITION FILM CAMERA</p>
            <div class="h-[1px] w-full absolute bottom-0 left-[20px] right-0 bg-[#F2F4F6]"></div>
          </div>
          <div class="flex items-start justify-start h-fit bg-[#FAFBFD] relative">
            <strong class="text-[12px] px-[20px] py-[20px]">품명 및 모델명</strong>
            <p class="bg-white py-[20px] px-7 grow">EDITION FILM CAMERA</p>
            <div class="h-[1px] w-full absolute bottom-0 left-[20px] right-0 bg-[#F2F4F6]"></div>
          </div>
          <div class="flex items-start justify-start h-fit bg-[#FAFBFD] relative">
            <strong class="text-[12px] px-[20px] py-[20px]">품명 및 모델명</strong>
            <p class="bg-white py-[20px] px-7 grow">EDITION FILM CAMERA</p>
            <div class="h-[1px] w-full absolute bottom-0 left-[20px] right-0 bg-[#F2F4F6]"></div>
          </div>
          <div class="flex items-start justify-start h-fit bg-[#FAFBFD] relative">
            <strong class="text-[12px] px-[20px] py-[20px]">품명 및 모델명</strong>
            <p class="bg-white py-[20px] px-7 grow">EDITION FILM CAMERA</p>
            <!-- <div class="h-[1px] w-full absolute bottom-0 left-[20px] right-0 bg-[#F2F4F6]"></div> -->
          </div>
        </div>
      </Collapse>
    </section>
  </main>
</template>
<script setup>
import { ref } from 'vue'
import Images from '@/constants/images'
import ImagesProd from '@/constants/imagesProd.js'
import Collapse from '@/components/element/Collapse.vue'
import Select from "@/components/ui/Select.vue"
import Button from '@/components/ui/Button.vue'

const selectOptionsQuantity = ref([
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
  { value: 6, label: 6 },
  { value: 7, label: 7 },
  { value: 8, label: 8 },
  { value: 9, label: 9 },
  { value: 10, label: 10 },
  { value: 11, label: 11 },
  { value: 12, label: 12 },
  { value: 13, label: 13 },
  { value: 14, label: 14 },
  { value: 15, label: 15 },
  { value: 16, label: 16 },
  { value: 17, label: 17 },
  { value: 18, label: 18 },
  { value: 19, label: 19 },
  { value: 20, label: 20 },
])
const selectedQuantity = ref(1)
const selectOptionsColor = ref([
  { value: "Red", label: "Red" },
  { value: "Yellow", label: "Yellow" },
  { value: "Green", label: "Green" },
  { value: "Blue", label: "Blue" },
  { value: "Black", label: "Black" },
])
const selectedColor = ref()
const isImageVisible = ref(false);

const toggleImage = () => {
  isImageVisible.value = !isImageVisible.value;
};

</script>
<style scoped>
figure {
  max-height: 802px;
  overflow: hidden;
  transition: max-height 5s ease-in-out;
}

figure.show {
  max-height: none;
}
</style>