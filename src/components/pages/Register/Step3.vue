<template>
  <article>
    <Input
      label="이메일"
      type="email"
      name="email"
      placeholder="이메일을 입력해주세요"
      classLabel="block text-base font-bold"
      :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"
      v-model="store.information.email"
    >
      <template #sub-label>
        <span class="text-xs text-[#FF3609] font-normal">*</span>
      </template>
    </Input>
    <Input
      label="비밀번호"
      type="password"
      name="password"
      placeholder="비밀번호를 입력해주세요"
      wrapClass="mt-7"
      classLabel="block text-base font-bold"
      :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"
      v-model="store.information.password"
    >
      <template #sub-label>
        <span class="text-xs text-[#FF3609] font-normal">*</span>
      </template>
    </Input>
    <Input
      type="password"
      name="repeatPassword"
      placeholder="비밀번호를 재 입력해주세요"
      wrapClass="mt-3"
      classLabel="block text-base font-bold"
      :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"
      v-model="store.information.repeatPassword"
    >
    </Input>
    <Button
      :class="`w-full py-4 px-9 mt-12 ${true ? classBtn[1] : classBtn[2]}`"
      :disabled="
        !store.information.email ||
        !store.information.password ||
        !store.information.repeatPassword ||
        store.information.password !== store.information.repeatPassword
      "
      @click="() => emit('complete-step3')"
      >다음</Button
    >
  </article>
</template>
<script setup>
import Input from "@/components/ui/Input.vue"
import Button from "@/components/ui/Button.vue"
import { classBtn, classInputCustom } from "@/utils/customClass.js"
import { useRegisterStore } from "@/stores/register.js"
const store = useRegisterStore()
const emit = defineEmits(["complete-step3"])
</script>
