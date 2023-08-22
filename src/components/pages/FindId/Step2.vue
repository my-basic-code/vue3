<template>
  <article>
    <Input
      label="연락처"
      type="number"
      placeholder="연락처를 입력해주세요"
      wrapClass="mt-7"
      classLabel="block text-base font-bold"
      :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"
    >
      <template #sub-label>
        <span class="text-xs text-[#FF3609] font-normal">*</span>
      </template>
    </Input>
    <Button
      :class="`w-full py-4 px-9 mt-4 ${false ? classBtn[2] : classBtn[3]}`"
      >인증번호 받기
    </Button>
    <div class="flex items-end space-x-[10px]">
      <Input
        label="인증번호 입력"
        type="number"
        wrapClass="mt-7 relative"
        classLabel="block text-base font-bold"
        :className="` px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"
      >
        <template #sub-label>
          <span class="text-xs text-[#FF3609] font-normal">*</span>
        </template>
        <template #suffix>
          <span
            class="absolute right-4 bottom-4 text-[#FF3609] font-medium text-base"
            >{{ formattedTime }}</span
          >
        </template>
      </Input>
      <Button :class="`w-1/4 py-5 px-4 h-fit whitespace-nowrap ${classBtn[1]}`"
        >인증받기</Button
      >
    </div>
    <Button
      :class="`w-full py-4 px-9 mt-12 ${true ? classBtn[1] : classBtn[2]}`"
      >다음</Button
    >
  </article>
</template>
<script setup>
import { ref, onUnmounted } from "vue"
import Input from "@/components/ui/Input.vue"
import Button from "@/components/ui/Button.vue"
import { classBtn, classInputCustom } from "@/utils/customClass.js"
import { formatTime } from "@/utils/formatTime.js"

const countdownTime = ref(3 * 60)
let countdownInterval = null
const formattedTime = ref("")

startCountdown()
function startCountdown() {
  countdownInterval = setInterval(() => {
    if (countdownTime.value > 0) {
      countdownTime.value--
      formattedTime.value = formatTime(countdownTime.value)
    } else {
      clearInterval(countdownInterval)
    }
  }, 1000)
}

// Xóa interval khi component bị hủy
onUnmounted(() => {
  clearInterval(countdownInterval)
})
</script>
