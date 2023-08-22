<template>
  <article>
    <Input
      label="연락처"
      type="text"
      placeholder="연락처를 입력해주세요"
      classLabel="block text-base font-bold"
      :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"
    >
      <template #sub-label>
        <span class="text-xs text-[#FF3609] font-normal">*</span>
      </template>
    </Input>

    <Button
      :class="`w-full py-4 px-9 mt-4 ${false ? classBtn[1] : classBtn[2]}`"
      >인증번호 받기</Button
    >
  </article>
</template>
<script setup>
import Input from "@/components/ui/Input.vue"
import Button from "@/components/ui/Button.vue"
import { classBtn, classInputCustom } from "@/utils/customClass.js"
</script>
