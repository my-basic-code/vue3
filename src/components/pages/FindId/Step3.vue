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
      <p class="mt-5 text-sm font-normal text-center">{{ email }}</p>
    </div>
    <Button
      :class="`w-full py-4 px-9 mt-10 ${true ? classBtn[1] : classBtn[2]}`"
      @click="router.push('/login')"
      >로그인</Button
    >
  </article>
</template>
<script setup>
import Input from "@/components/ui/Input.vue"
import { classBtn, classInputCustom } from "@/utils/customClass.js"
import { useRouter } from "vue-router"

const router = useRouter()
const props = defineProps({
  email: {
    type: Text,
  },
})
</script>
