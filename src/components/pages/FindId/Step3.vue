<template>
  <article>
    <div class="px-5 py-[41px] bg-[#F2F4F6]">
      <Input
        wrapClass="mt-7"
        label="이메일"
        type="text"
        classLabel="block text-sm font-bold text-center"
        :className="`w-full h-0 ${classInputCustom[2].input}`"
        :disabled="true"
      >
      </Input>
      <p class="mt-5 text-sm font-normal text-center">1234@naver.com</p>
    </div>
    <Button
      :class="`w-full py-4 px-9 mt-10 ${true ? classBtn[1] : classBtn[2]}`"
      >로그인</Button
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
