<template>
  <main class="container mx-auto mt-[60px] mb-[87px] grid grid-cols-3 gap-x-9">
    <section class="col-span-2">
      <h1 class="pb-[28px] border-b-[4px] border-black w-full text-start text-[28px] font-bold">
        주문/결제
      </h1>
      <article class="mt-7">
        <div class="pb-4 border-b border-[#3D3D3D] flex justify-between w-full">
          <strong>주문상품</strong>
          <p class="text-xs font-bold text-[#3D3D3D]">
            총 <span class="text-[#FF4F27]">1</span>개
          </p>
        </div>
        <div class="mt-4">
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

      <article class="mt-[51px]">
        <div class="pb-4 border-b border-[#3D3D3D]">
          <strong>배송지 정보</strong>
          <Checkbox type="checkbox" label="기본배송지" classLabel="text-[14px] font-normal text-[#555555]" name="all"
            inputClass="w-6 h-6 border appearance-none checked:scale-150 checked:opacity-0 peer/all"
            checkmarkClass="absolute left-0 w-6 h-6 transparent peer-checked/all:bg-[#FF4F27] after:absolute after:left-2 after:top-[2px] after:w-2 after:h-4 after:border-[3px] after:border-white after:border-t-0 after:border-l-0 after:transform after:rotate-45"
            className="mt-7 relative flex w-full justify-start gap-x-3" id="check-all" v-model="valueCheckBox" />
        </div>
        <div class="mt-[26px] space-y-[24px]">
          <Input wrapClass="flex items-center" label="배송지명" type="text" placeholder="배송지명을 입력해 주세요"
            classLabel="block text-base font-bold flex items-start whitespace-nowrap w-[82px]"
            :className="`px-5 py-4 w-full ${classInputCustom[2].input}`" :disabled="isCheckCertification"
            v-model="data.nameAddress">
          <template #sub-label>
            <span class="text-xs text-[#FF3609] font-normal">*</span>
          </template>
          </Input>
          <Input wrapClass="flex items-center" label="받는분 " type="text" placeholder="받으시는분을 입력해주세요"
            classLabel="block text-base font-bold flex items-start whitespace-nowrap w-[82px]"
            :className="`px-5 py-4 w-full ${classInputCustom[2].input}`" :disabled="isCheckCertification"
            v-model="data.nameAddress">
          <template #sub-label>
            <span class="text-xs text-[#FF3609] font-normal">*</span>
          </template>
          </Input>
          <Input wrapClass="flex items-center" label="연락처 " type="number" placeholder="연락처를 입력해주세요"
            classLabel="block text-base font-bold flex items-start whitespace-nowrap w-[82px]"
            :className="`px-5 py-4 w-full ${classInputCustom[2].input}`" :disabled="isCheckCertification"
            v-model="data.nameAddress">
          <template #sub-label>
            <span class="text-xs text-[#FF3609] font-normal">*</span>
          </template>
          </Input>
          <div class="flex justify-between gap-x-[18px]">
            <Input wrapClass="flex items-center grow" label="우편번호 " type="number" placeholder="우편번호를 검색해주세요"
              classLabel="block text-base font-bold flex items-start whitespace-nowrap w-[82px]"
              :className="`px-5 py-4 w-full ${classInputCustom[2].input}`" :disabled="isCheckCertification"
              v-model="data.nameAddress">
            <template #sub-label>
              <span class="text-xs text-[#FF3609] font-normal">*</span>
            </template>
            </Input>
            <button class="p-[17px] border border-[#F2F4F6] text-[14px] font-normal">우편번호</button>
          </div>
          <div>
            <Input wrapClass="flex items-center" label="주소" type="text" placeholder="주소를 입력해주세요"
              classLabel="block text-base font-bold flex items-start whitespace-nowrap w-[82px]"
              :className="`px-5 py-4 w-full ${classInputCustom[2].input}`" :disabled="isCheckCertification"
              v-model="data.nameAddress">
            <template #sub-label>
              <span class="text-xs text-[#FF3609] font-normal">*</span>
            </template>
            </Input>
            <Input wrapClass="flex items-center" type="text" placeholder="상세주소를 입력해주세요"
              :className="`ml-[73px] px-5 py-4 mt-[16px] w-full ${classInputCustom[2].input}`"
              :disabled="isCheckCertification" v-model="data.nameAddress">
            </Input>
          </div>
          <Input wrapClass="flex items-center" label="요청사항 " type="text" placeholder="배송시 요청사항을 입력해 주세요"
            classLabel="block text-base font-bold flex items-start whitespace-nowrap w-[82px]"
            :className="`px-5 py-4 w-full ${classInputCustom[2].input}`" :disabled="isCheckCertification"
            v-model="data.nameAddress">
          <template #sub-label>
            <span class="text-xs text-[#FF3609] font-normal">*</span>
          </template>
          </Input>
        </div>
      </article>
      <article class="mt-[48px]">
        <div class="pb-4 border-b border-[#3D3D3D]">
          <strong>마일리지 사용</strong>
        </div>
        <div class="mt-[16px]">
          <div class="flex justify-between gap-x-[18px]">
            <Input wrapClass="flex items-center grow" label="마일리지" type="text" placeholder="0 P"
              classLabel="block text-base font-bold flex items-start whitespace-nowrap w-[82px]"
              :className="`px-5 py-4 w-full ${classInputCustom[2].input} placeholder:text-end`"
              :disabled="isCheckCertification" v-model="data.nameAddress">
            </Input>
            <button class="p-[17px] border border-[#F2F4F6] text-[14px] font-normal">모두사용</button>
          </div>
          <p class="text-[14px] font-normal text-[#6F6F6F] mt-3 ml-[73px]">
            잔여 마일리지 : 400P
          </p>
        </div>
      </article>
      <article class="mt-[48px]">
        <div class="pb-4 border-b border-[#3D3D3D]">
          <strong>결제방법</strong>
        </div>
        <div class="mt-[28px] space-x-3">
          <button class="text-[14px] font-bold py-[10px] px-[55px] border border-[#DFDFDF] text-[#242424]">카드결제</button>
          <button class="text-[14px] font-normal py-[10px] px-[55px] border border-[#DFDFDF] text-[#A5A5A5]">계좌이체</button>
          <button class="text-[14px] font-normal py-[10px] px-[55px] border border-[#DFDFDF] text-[#A5A5A5]">가상계좌</button>
        </div>
      </article>
    </section>

    <section>
      <div class="mt-[72px] col-span-1 border-t-[4px] border-black px-[20px] pt-[32px] pb-[40px]">
        <article class="pb-[14px] border-b border-[#DFDFDF] w-full text-center">
          <h4 class="text-[16px] font-bold">결제 금액</h4>
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
          <div class="flex justify-between">
            <p class="text-[12px] font-normal text-[#8B8B8B]">마일리지 사용</p>
            <strong class="text-[16px] text-[#111111]">-300원</strong>
          </div>
        </article>
        <article class="pb-[24px] border-b border-[#DFDFDF] space-y-[24px] mt-[15px]">
          <div class="flex justify-between">
            <p class="text-[12px] font-normal text-[#8B8B8B]">
              적립 예정 마일리지
            </p>
            <div class="flex items-start gap-x-[6px]">
              <span class="text-[12px] font-normal text-white bg-[#8B8B8B] rounded-full px-[6px]">Colored</span>
              <strong class="text-[16px] text-[#111111]">+300P</strong>
            </div>
          </div>
        </article>
        <article class="mt-[14px] flex justify-between">
          <p class="text-[14px] font-bold text-[#3D3D3D]">총 결제금액</p>
          <strong class="text-[24px] text-[#FF2618]">23,500원</strong>
        </article>
        <button class="w-full mt-10 py-4 px-9 bg-[#111111] text-white text-[16px] font-bold">
          23,500원 결제하기
        </button>
      </div>
    </section>
  </main>
</template>
<script setup>
import { ref } from "vue"
import ImagesProd from "@/constants/imagesProd"
import Checkbox from "@/components/ui/Checkbox.vue"
import Input from "@/components/ui/Input.vue"
import { classBtn, classInputCustom } from "@/utils/customClass.js"

const data = ref({
  address: "",
})
</script>
<style scoped></style>
