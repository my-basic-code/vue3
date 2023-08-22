<template>
  <article>
    <div class="flex space-x-4">
      <InputImgReview
        classImgReview="w-20 h-20 rounded-full"
        v-model="store.information.image"
      >
        <template #imgInput>
          <img
            class="w-20 h-20"
            :src="Images.iconCamera.src"
            :alt="Images.iconCamera.alt"
          />
        </template>
      </InputImgReview>
      <Input
        label="닉네임"
        type="text"
        placeholder="이메일을 입력해주세요"
        classLabel="block text-base font-bold"
        :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"
        v-model="store.information.useName"
      >
        <template #sub-label>
          <span class="text-xs text-[#FF3609] font-normal">*</span>
        </template>
      </Input>
    </div>
    <Radio
      class="mt-4 grid grid-cols-2 space-x-[11px]"
      classInput="hidden"
      className="border border-[#DFDFDF] text-center text-[#A5A5A5] py-[10px] px-9 cursor-pointer text-sm font-normal"
      classActive="border-blue-500"
      v-model="store.information.gender"
      :options="options"
    ></Radio>
    <Input
      wrapClass="mt-7"
      label="주소"
      type="text"
      classLabel="block text-base font-bold"
      placeholder="주소를 선택해주세요"
      :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"
      v-model="store.information.address"
    >
      <template #sub-label>
        <span class="text-xs text-[#FF3609] font-normal">*</span>
      </template>
    </Input>
    <Input
      wrapClass="mt-3"
      type="text"
      placeholder="세부 주소를 입력해주세요"
      :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"
      v-model="store.information.detailedAddress"
    >
    </Input>
    <Input
      wrapClass="mt-7"
      type="number"
      label="생년월일"
      classLabel="block text-base font-bold"
      placeholder="생년월일 8자리를 입력해주세요"
      :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"
      v-model="store.information.DateBirth"
    >
    </Input>
    <Button
      :class="`w-full py-4 px-9 mt-7 ${false ? classBtn[1] : classBtn[2]}`"
      >다음</Button
    >
  </article>
</template>
<script setup>
import Images from "@/constants/images.js"
import Input from "@/components/ui/Input.vue"
import Radio from "@/components/ui/Radio.vue"
import InputImgReview from "@/components/ui/InputImgReview.vue"
import { useRegisterStore } from "@/stores/register.js"
import { classBtn, classInputCustom } from "@/utils/customClass.js"

const store = useRegisterStore()
const options = [
  { label: "남성", value: "male" },
  { label: "여성", value: "female" },
]
</script>
