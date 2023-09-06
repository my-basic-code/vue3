<template>
  <article>
    <Input label="이메일" type="text" :disabled="!isCheckEmail" placeholder="이메일을 입력해주세요"
      classLabel="block text-base font-bold" :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"
      v-model="emailValue">
    <template #sub-label>
      <span class="text-xs text-[#FF3609] font-normal">*</span>
    </template>
    </Input>
    <Button :class="`w-full py-4 px-9 mt-4 ${!isCheckEmail ? classBtn[1] : classBtn[2]
      }`" :disabled="isSendEmail" @click="findEmail">다음</Button>
  </article>
  <Notification ref="notification" />
</template>
<script setup>
import Input from "@/components/ui/Input.vue"
import Button from "@/components/ui/Button.vue"
import { classBtn, classInputCustom } from "@/utils/customClass.js"
import { authService } from "@/services/authService"
import Notification from "@/components/element/Notification.vue"
import { ref } from "vue"

const props = defineProps({
  email: Text,
})
const emailValue = ref(props.email)
const notification = ref()
const isCheckEmail = ref(false)
const isSendEmail = ref(false)

const findEmail = async () => {
  try {
    await authService.sendMailForgotPass({
      username: emailValue.value,
      url: import.meta.env.VITE_REDIRECT_CHANGE_PASSWORD,
    })
    isSendEmail.value = true
    notification.value.isOpen = true
    notification.value.title = '이메일 전송'
    notification.value.content = '해당 메일로 비밀번호 재 설정 <br>링크가 전송되었습니다.'
  } catch (error) {
    isCheckEmail.value = true
    notification.value.isOpen = true
    notification.value.title = '이메일 전송'
    notification.value.content = error.response.data.message
  }
}
</script>
