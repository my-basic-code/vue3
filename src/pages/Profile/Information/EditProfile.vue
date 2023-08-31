<template>
  <section class="pb-[28px] border-b-[4px] border-black w-full flex justify-between items-end">
    <h5 class="text-[28px] font-bold text-[#111]">개인정보 수정</h5>
  </section>
  <section class="mt-[60px] grid grid-cols-2 gap-x-[68px]">
    <article>
      <Input label="이름" type="text" placeholder="이름을 입력해주세요" classLabel="block text-base font-bold"
        :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`">
      <template #sub-label>
        <span class="text-xs text-[#FF3609] font-normal">*</span>
      </template>
      </Input>
      <Input label="연락처" type="number" placeholder="연락처를 입력해주세요" wrapClass="mt-7" classLabel="block text-base font-bold"
        :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`">
      <template #sub-label>
        <span class="text-xs text-[#FF3609] font-normal">*</span>
      </template>
      </Input>
      <button :class="`w-full py-4 px-9 mt-4 ${false ? classBtn[2] : classBtn[3]
        }`">인증번호 재 전송
      </button>
      <Input label="이메일" type="text" placeholder="이메일을 입력해주세요" wrapClass="mt-7" classLabel="block text-base font-bold"
        :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`">
      <template #sub-label>
        <span class="text-xs text-[#FF3609] font-normal">*</span>
      </template>
      </Input>
      <Input label="비밀번호" type="password" placeholder="비밀번호를 재 설정해주세요" wrapClass="mt-7"
        classLabel="block text-base font-bold" :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`">
      <template #sub-label>
        <span class="text-xs text-[#FF3609] font-normal">*</span>
      </template>
      </Input>
      <Input type="password" placeholder="비밀번호를 재 입력해주세요"
        :className="`px-5 py-4 mt-3 w-full ${classInputCustom[2].input}`">
      </Input>
    </article>
    <article>
      <div class="flex space-x-4">
        <InputImgReview classImgReview="w-20 h-20 rounded-full">
          <template #imgInput>
            <img class="w-20 h-20" :src="Images.iconCamera.src" :alt="Images.iconCamera.alt" />
          </template>
        </InputImgReview>
        <Input label="닉네임" type="text" placeholder="닉네임을 입력해주세요 " classLabel="block text-base font-bold"
          :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`">
        <template #sub-label>
          <span class="text-xs text-[#FF3609] font-normal">*</span>
        </template>
        </Input>
      </div>
      <div class="mt-7">
        <div class="block text-base font-bold">성별 <span class="text-xs text-[#FF3609] font-normal">*</span></div>
        <Radio class="mt-4 grid grid-cols-2 space-x-[11px]" classInput="hidden"
          className="border border-[#DFDFDF] text-center text-[#A5A5A5] py-[10px] px-9 cursor-pointer text-sm font-normal"
          classActive="border-blue-500" :options="options"></Radio>
      </div>
      <Input wrapClass="mt-7" label="주소" type="text" classLabel="block text-base font-bold" placeholder="주소를 선택해주세요"
        :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`">
      <template #sub-label>
        <span class="text-xs text-[#FF3609] font-normal">*</span>
      </template>
      </Input>
      <Input wrapClass="mt-3" type="text" placeholder="세부 주소를 입력해주세요"
        :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`">
      </Input>
      <Input wrapClass="mt-7" type="number" label="생년월일" classLabel="block text-base font-bold"
        placeholder="생년월일 8자리를 입력해주세요" :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`">
      </Input>
    </article>
  </section>
  <section class="mt-[60px] flex flex-col items-center space-y-8">
    <button class="text-[14px] font-normal text-white bg-[#111111] py-4 px-9 w-full">수정하기</button>
    <button class="text-[14px] font-normal text-[#A5A5A5] py-4 px-9">회원탈퇴</button>
  </section>
</template>
<script setup>
import Input from "@/components/ui/Input.vue"
import { classBtn, classInputCustom } from "@/utils/customClass.js"
import Images from '@/constants/images'
import InputImgReview from "@/components/ui/InputImgReview.vue"
import Radio from "@/components/ui/Radio.vue"

const options = [
  { label: "남성", value: "male" },
  { label: "여성", value: "female" },
]
</script>
<style scoped></style>