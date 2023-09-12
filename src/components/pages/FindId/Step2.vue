<template>
  <article>
    <Input
      label="연락처"
      type="number"
      name="phone"
      disabled
      placeholder="연락처를 입력해주세요"
      wrapClass="mt-7"
      classLabel="block text-base font-bold"
      :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"
      :modelValue="phoneNumber"
    >
      <template #sub-label>
        <span class="text-xs text-[#FF3609] font-normal">*</span>
      </template>
    </Input>
    <Button
      :class="`w-full py-4 px-9 mt-4 ${
        isSendCodeAgain ? classBtn[2] : classBtn[3]
      }`"
      :disabled="!isSendCodeAgain"
      @click="sendCodeAgain"
      >인증번호 받기
    </Button>
    <div class="flex items-end space-x-[10px]">
      <Input
        label="인증번호 입력"
        name="verifyCode"
        type="number"
        :maxLength="6"
        wrapClass="mt-7 relative"
        classLabel="block text-base font-bold"
        :className="` px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"
        :disabled="isSendCodeAgain"
        v-model="isVerifyCode"
      >
        <template #sub-label>
          <span class="text-xs text-[#FF3609] font-normal">*</span>
        </template>
        <template #suffix>
          <span
            v-if="isShowCountdown"
            class="absolute right-4 bottom-4 text-[#FF3609] font-medium text-base"
            >{{ formattedTime }}</span
          >
        </template>
      </Input>
      <Button
        :class="`w-1/4 py-5 px-4 h-fit whitespace-nowrap ${classBtn[1]}`"
        @click="verifyCode"
        :disabled="isVerifyCode.length === 0"
        >인증받기</Button
      >
    </div>
    <Button
      :class="`w-full py-4 px-9 mt-12 ${true ? classBtn[1] : classBtn[2]}`"
      :disabled="!statusVerifyCode"
      @click="() => emit('complete-step2', email)"
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
import { authService } from "@/services/authService"
import { formatPhone } from "@/utils/formatPhone"

const countdownTime = ref(3 * 60)
const isShowCountdown = ref()
const isVerifyCode = ref("")
const statusVerifyCode = ref(false)
const isSendCodeAgain = ref(false)

const email = ref()

let countdownInterval = null
const formattedTime = ref("")

const props = defineProps({
  phoneNumber: {
    type: Number,
  },
})
const emit = defineEmits(["complete-step2"])

const sendCodeAgain = async () => {
  try {
    await authService.sendCodeFindAccount({
      phoneNumber: formatPhone(props.phoneNumber),
    })
    isSendCodeAgain.value = false
    startCountdown()
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
}

const verifyCode = async () => {
  try {
    const { data: res } = await authService.verifyCodeFindAccount({
      phoneNumber: formatPhone(props.phoneNumber),
      smsCode: isVerifyCode.value,
    })
    email.value = res.data
    statusVerifyCode.value = true
    clearCountdownInterval()
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
}

startCountdown()
function startCountdown() {
  isShowCountdown.value = true
  countdownInterval = setInterval(() => {
    if (countdownTime.value > 0) {
      countdownTime.value--
      formattedTime.value = formatTime(countdownTime.value)
    } else {
      clearCountdownInterval()
      isSendCodeAgain.value = true
    }
  }, 1000)
}
const clearCountdownInterval = () => {
  clearInterval(countdownInterval)
  countdownTime.value = 3 * 60
  isShowCountdown.value = false
}

// Xóa interval khi component bị hủy
onUnmounted(() => {
  clearInterval(countdownInterval)
})
</script>
