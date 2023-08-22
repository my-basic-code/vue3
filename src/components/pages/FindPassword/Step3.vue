<template>
  <article>
    <Input
      label="비밀번호"
      type="password"
      placeholder="비밀번호를 재 설정해주세요"
      classLabel="block text-base font-bold"
      :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"
    >
      <template #sub-label>
        <span class="text-xs text-[#FF3609] font-normal">*</span>
      </template>
    </Input>
    <Input
      type="password"
      placeholder="비밀번호를 재 입력해주세요"
      :className="`px-5 py-4 mt-3 w-full ${classInputCustom[2].input}`"
    >
    </Input>
    <Button
      :class="`w-full py-4 px-9 mt-4 ${false ? classBtn[1] : classBtn[2]}`"
      >로그인</Button
    >
  </article>
</template>
<script setup>
import Input from "@/components/ui/Input.vue"
import Button from "@/components/ui/Button.vue"
import { classBtn, classInputCustom } from "@/utils/customClass.js"
</script>
