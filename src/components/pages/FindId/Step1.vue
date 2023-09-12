<template>
  <article>
    <Input label="연락처" type="number" name="phone" placeholder="연락처를 입력해주세요" classLabel="block text-base font-bold"
      :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`" v-model="phone">
    <template #sub-label>
      <span class="text-xs text-[#FF3609] font-normal">*</span>
    </template>
    </Input>

    <Button :class="`w-full py-4 px-9 mt-4 ${false ? classBtn[1] : classBtn[2]}`" :disabled="phone.length === 0"
      @click="sendCode">인증번호 받기</Button>
  </article>
  <Notification ref="notification" />
</template>
<script setup>
import Input from "@/components/ui/Input.vue"
import Button from "@/components/ui/Button.vue"
import { classBtn, classInputCustom } from "@/utils/customClass.js"
import { ref, watch } from "vue"
import { authService } from "@/services/authService"
import { formatPhone } from "@/utils/formatPhone"
import Notification from "@/components/element/Notification.vue"
import { useLoadingStore } from '@/stores/loading';

const loadingStore = useLoadingStore();
const phone = ref("")
const notification = ref()
const emit = defineEmits(["valuePhone", "complete-step1"])

const sendCode = async () => {
  loadingStore.updateLoading(true)
  try {
    await authService.sendCodeFindAccount({
      phoneNumber: formatPhone(phone.value),
    })
    emit("complete-step1")
  } catch (error) {
    notification.value.isOpen = true
    notification.value.title = "아이디 찾기"
    notification.value.content = "일치하는 정보가 없습니다."
  }
  loadingStore.updateLoading(false)
}

watch(phone, () => {
  emit("valuePhone", phone.value)
})
</script>
