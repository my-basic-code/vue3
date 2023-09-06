<template>
  <article>
    <Input
      label="이름"
      type="text"
      name="name"
      placeholder="이름을 입력해주세요"
      classLabel="block text-base font-bold"
      :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"
      :disabled="isCheckCertification"
      v-model="store.information.name"
    >
      <template #sub-label>
        <span class="text-xs text-[#FF3609] font-normal">*</span>
      </template>
    </Input>
    <Input
      label="연락처"
      name="phone"
      type="number"
      placeholder="연락처를 입력해주세요"
      wrapClass="mt-7"
      classLabel="block text-base font-bold"
      :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"
      :disabled="isCheckCertification"
      v-model="store.information.phone"
    >
      <template #sub-label>
        <span class="text-xs text-[#FF3609] font-normal">*</span>
      </template>
    </Input>
    <Button
      :class="`w-full py-4 px-9 mt-4 ${
        !isCheckCertification ? classBtn[2] : classBtn[3]
      }`"
      @click="checkCertification"
      :disabled="!store.information.name || !store.information.phone"
      >인증번호 받기
    </Button>
    <div v-if="isCheckCertification" class="flex items-end space-x-[10px]">
      <Input
        label="인증번호 입력"
        type="number"
        :maxLength="6"
        name="certification"
        wrapClass="mt-7 relative"
        classLabel="block text-base font-bold"
        :className="` px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"
        v-model="store.information.certification.value"
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
        :disabled="
          store.information.certification.status ||
          store.information.certification.value.length === 0
        "
        >인증받기</Button
      >
    </div>
    <Button
      v-if="isCheckCertification"
      :class="`w-full py-4 px-9 mt-12 ${
        store.information.name &&
        store.information.phone &&
        store.information.certification.value &&
        store.information.certification.status
          ? classBtn[1]
          : classBtn[2]
      }`"
      :disabled="
        !store.information.name ||
        !store.information.phone ||
        !store.information.certification.value ||
        !store.information.certification.status
      "
      @click="() => emit('complete-step2')"
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
import { formatPhone } from "@/utils/formatPhone.js"
import { authService } from "@/services/authService.js"
import { useRegisterStore } from "@/stores/register.js"
const store = useRegisterStore()

const isCheckCertification = ref(false)
const isShowCountdown = ref(false)
const countdownTime = ref(3 * 60)
let countdownInterval = null
const formattedTime = ref("")

const emit = defineEmits(["complete-step2"])

const checkCertification = async () => {
  if (isCheckCertification.value) return
  try {
    await authService.sendCodeRegister({
      name: store.information.name,
      phoneNumber: formatPhone(store.information.phone),
    })
    isCheckCertification.value = true
    startCountdown()
  } catch (error) {
    alert(error.response.data.message)
  }
}

const verifyCode = async () => {
  if (!store.information.certification.value) return
  try {
    const { data: res } = await authService.verifyCodeRegister({
      phoneNumber: formatPhone(store.information.phone),
      smsCode: store.information.certification.value,
    })
    store.information.certification.status = true
    clearCountdownInterval()
  } catch (error) {
    alert(error.response.data.message)
  }
}

function startCountdown() {
  isShowCountdown.value = true
  countdownInterval = setInterval(() => {
    if (countdownTime.value > 0) {
      countdownTime.value--
      formattedTime.value = formatTime(countdownTime.value)
    } else {
      clearCountdownInterval()
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
