<template>
  <article>
    <Input label="비밀번호" type="password" name="password" placeholder="비밀번호를 재 설정해주세요"
      classLabel="block text-base font-bold" :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"
      v-model="password">
    <template #sub-label>
      <span class="text-xs text-[#FF3609] font-normal">*</span>
    </template>
    </Input>
    <Input type="password" name="repeatPassword" placeholder="비밀번호를 재 입력해주세요"
      :className="`px-5 py-4 mt-3 w-full ${classInputCustom[2].input}`" v-model="repeatPassword" :errors="errors">
    </Input>
    <Button :class="`w-full py-4 px-9 mt-4 ${classBtn[2]}`" @click="changePassword">로그인</Button>
  </article>
</template>
<script setup>
import Input from "@/components/ui/Input.vue"
import Button from "@/components/ui/Button.vue"
import { classBtn, classInputCustom } from "@/utils/customClass.js"
import { ref } from "vue"
import { authService } from "@/services/authService"
import { useRouter } from "vue-router"

const router = useRouter()
const password = ref("")
const repeatPassword = ref("")
const errors = ref([])

const props = defineProps({
  token: String,
})

const changePassword = async () => {
  if (
    password.value !== repeatPassword.value ||
    password.value.length === 0 ||
    repeatPassword.value.length === 0
  ) {
    errors.value = ["비밀번호가 일치하지 않습니다."]
    return
  }
  errors.value = []
  try {
    await authService.changePassword(
      {
        password: password.value,
        confirmPassword: repeatPassword.value,
      },
      props.token
    )
    router.push("/login")
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
}
</script>
