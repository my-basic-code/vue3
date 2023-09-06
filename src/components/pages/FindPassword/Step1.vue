<template>
  <article>
    <Input
      label="이메일"
      type="email"
      name="email"
      placeholder="이메일을 입력해주세요"
      classLabel="block text-base font-bold"
      :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"
      v-model="email"
    >
      <template #sub-label>
        <span class="text-xs text-[#FF3609] font-normal">*</span>
      </template>
    </Input>
    <Button
      :class="`w-full py-4 px-9 mt-4 ${false ? classBtn[1] : classBtn[2]}`"
      :disabled="email.length === 0"
      @click="emit('complete-step1')"
      >다음</Button
    >
  </article>
</template>
<script setup>
import Input from "@/components/ui/Input.vue"
import Button from "@/components/ui/Button.vue"
import { classBtn, classInputCustom } from "@/utils/customClass.js"
import { ref, watch } from "vue"

const email = ref("")
const emit = defineEmits(["valueEmail", "complete-step1"])

watch(email, () => {
  emit("valueEmail", email.value)
})
</script>
