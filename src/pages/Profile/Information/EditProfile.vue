<template>
  <section class="pb-[28px] border-b-[4px] border-black w-full flex justify-between items-end">
    <h5 class="text-[28px] font-bold text-[#111]">개인정보 수정</h5>
  </section>
  <section class="mt-[60px] grid grid-cols-2 gap-x-[68px]">
    <article>
      <Input label="이름" type="text" placeholder="이름을 입력해주세요" classLabel="block text-base font-bold"
        :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`" v-model="user.name">
      <template #sub-label>
        <span class="text-xs text-[#FF3609] font-normal">*</span>
      </template>
      </Input>
      <Input label="연락처" type="number" placeholder="연락처를 입력해주세요" wrapClass="mt-7" classLabel="block text-base font-bold"
        :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`" v-model="user.phone">
      <template #sub-label>
        <span class="text-xs text-[#FF3609] font-normal">*</span>
      </template>
      </Input>
      <button :class="`w-full py-4 px-9 mt-4 ${false ? classBtn[2] : classBtn[3]
        }`" :disabled="dataPhone === user.phone || isShowVerifyCode" @click="checkPhone">인증번호 재 전송
      </button>
      <div class="flex items-end space-x-[10px] mt-4" v-if="isShowVerifyCode">
        <Input label="인증번호 입력" type="number" :maxLength="6" name="certification" wrapClass="relative"
          classLabel="block text-base font-bold" :className="` px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"
          v-model="user.codeVerify">
        <template #sub-label>
          <span class="text-xs text-[#FF3609] font-normal">*</span>
        </template>
        <template #suffix>
          <span v-if="isShowCountdown" class="absolute right-4 bottom-4 text-[#FF3609] font-medium text-base">{{
            formattedTime }}</span>
        </template>
        </Input>
        <Button :class="`w-1/4 py-5 px-4 h-fit whitespace-nowrap ${classBtn[1]}`" @click="handleVerifyCode">인증받기</Button>
      </div>
      <Input label="이메일" type="text" placeholder="이메일을 입력해주세요" wrapClass="mt-7" classLabel="block text-base font-bold"
        :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`" v-model="user.email">
      <template #sub-label>
        <span class="text-xs text-[#FF3609] font-normal">*</span>
      </template>
      </Input>
      <Input label="비밀번호" type="password" placeholder="비밀번호를 재 설정해주세요" wrapClass="mt-7"
        classLabel="block text-base font-bold" :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"
        v-model="user.password">
      <template #sub-label>
        <span class="text-xs text-[#FF3609] font-normal">*</span>
      </template>
      </Input>
      <Input type="password" placeholder="비밀번호를 재 입력해주세요"
        :className="`px-5 py-4 mt-3 w-full ${classInputCustom[2].input}`" v-model="user.repeatPassword">
      </Input>
    </article>
    <article>
      <div class="flex space-x-4">
        <InputImgReview classImgReview="w-20 h-20 rounded-full" v-model="user.thumbnail">
          <template #imgInput>
            <img class="object-cover w-20 h-20" :src="Images.iconCamera.src" :alt="Images.iconCamera.alt" />
          </template>
        </InputImgReview>
        <Input label="닉네임" type="text" placeholder="닉네임을 입력해주세요 " classLabel="block text-base font-bold"
          :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`" v-model="user.nickName">
        <template #sub-label>
          <span class="text-xs text-[#FF3609] font-normal">*</span>
        </template>
        </Input>
      </div>
      <div class="mt-7">
        <div class="block text-base font-bold">성별 <span class="text-xs text-[#FF3609] font-normal">*</span></div>
        <Radio class="mt-4 grid grid-cols-2 space-x-[11px]" classInput="hidden"
          className="border border-[#DFDFDF] text-center text-[#A5A5A5] py-[10px] px-9 cursor-pointer text-sm font-normal"
          classActive="border-gray-700 text-stone-950" v-model="user.gender" :options="options"></Radio>
      </div>
      <Input wrapClass="mt-7" label="주소" type="text" classLabel="block text-base font-bold" placeholder="주소를 선택해주세요"
        :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`" v-model="user.address">
      <template #sub-label>
        <span class="text-xs text-[#FF3609] font-normal">*</span>
      </template>
      </Input>
      <Input wrapClass="mt-3" type="text" placeholder="세부 주소를 입력해주세요"
        :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`" v-model="user.detailedAddress">
      </Input>
      <Input wrapClass="mt-7" type="text" :handleValue="handleValueDateBirth" label="생년월일"
        classLabel="block text-base font-bold" placeholder="생년월일 8자리를 입력해주세요"
        :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`" v-model="user.dateBirth">
      </Input>
    </article>
  </section>
  <section class="mt-[60px] flex flex-col items-center space-y-8">
    <button class="text-[14px] font-normal text-white bg-[#111111] py-4 px-9 w-full"
      @click="handleEditProfile">수정하기</button>
    <button class="text-[14px] font-normal text-[#A5A5A5] py-4 px-9" @click="notification.isOpen = true">회원탈퇴</button>
  </section>
  <Notification ref="notification" h1="회원탈퇴">
    <template #content>
      <div class="flex items-center justify-center">회원탈퇴를 진행하시겠습니까?</div>
    </template>
    <template #action>
      <div class="mt-12 mb-[60px] space-y-2 w-full px-[80px]">
        <Button :class="`w-full py-4 ${classBtn[2]}`" @click="handleDelUser">확인</Button>
        <Button :class="`w-full py-4 ${classBtn[1]}`" @click="notification.isOpen = false">돌아가기</Button>
      </div>
    </template>
  </Notification>
</template>
<script setup>
import Input from "@/components/ui/Input.vue"
import { classBtn, classInputCustom } from "@/utils/customClass.js"
import Images from '@/constants/images'
import InputImgReview from "@/components/ui/InputImgReview.vue"
import Radio from "@/components/ui/Radio.vue"
import { onMounted, ref } from "vue"
import { userService } from "@/services/userService"
import { formatPhone, formatPhone2 } from "@/utils/formatPhone"
import Button from "@/components/ui/Button.vue"
import Notification from "@/components/element/Notification.vue"
import { formatTime } from "@/utils/formatTime"
import { useLoadingStore } from '@/stores/loading';
import { useRouter } from "vue-router"
const loadingStore = useLoadingStore();

const router = useRouter()
const options = [
  { label: "남성", value: 0 },
  { label: "여성", value: 1 },
]

const dataPhone = ref()
const notification = ref()
const isShowCountdown = ref(false)
const countdownTime = ref(3 * 60)
let countdownInterval = null
const formattedTime = ref("")
const isShowVerifyCode = ref(false)

const user = ref({
  name: '',
  phone: '',
  email: '',
  codeVerify: '',
  password: '',
  repeatPassword: '',
  thumbnail: null,
  nickName: '',
  gender: 0,
  address: '',
  detailedAddress: '',
  dateBirth: null
})

const handleEditProfile = async () => {
  if (user.value.password !== user.value.repeatPassword) {
    alert("passwords do not match")
    return
  }
  const formData = new FormData()
  !!user.value.name &&
    formData.append("name", user.value.name)
  !!user.value.phone &&
    formData.append("phone", formatPhone(user.value.phone))
  !!user.value.codeVerify &&
    formData.append("verifyCodeNumber", formatPhone(user.value.codeVerify))
  !!user.value.email &&
    formData.append("email", user.value.email)
  !!user.value.password && user.value.password === user.value.repeatPassword &&
    formData.append("password", user.value.password)
  !!user.value.thumbnail && typeof user.value.thumbnail !== 'string' &&
    formData.append("fileThumbnail", user.value.thumbnail)
  !!user.value.thumbnail && typeof user.value.thumbnail === 'string' &&
    formData.append("thumbnail", user.value.thumbnail)
  !!user.value.nickName &&
    formData.append("nickName", user.value.nickName)
  typeof user.value.gender !== "undefined" &&
    formData.append("gender", user.value.gender)
  !!user.value.address &&
    formData.append("address1", user.value.address)
  !!user.value.detailedAddress &&
    formData.append("address2", user.value.detailedAddress)
  !!user.value.dateBirth &&
    formData.append("birthDate", user.value.dateBirth)
  loadingStore.updateLoading(true)
  try {
    await userService.editProfile(formData)
    getProfile()
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
  loadingStore.updateLoading(false)
}

const handleDelUser = async () => {
  loadingStore.updateLoading(true)
  try {
    await userService.delUser()
    router.push('/login')
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
  loadingStore.updateLoading(false)
}

const checkPhone = () => {
  isShowVerifyCode.value = true
  startCountdown()
}

const handleVerifyCode = async () => {
  loadingStore.updateLoading(true)
  try {
    await userService.getSmsCode()
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
  loadingStore.updateLoading(false)
}

const handleValueDateBirth = e => {
  const regex = /^[0-9\-\/.\b]+$/
  if (!regex.test(e.key) && e.key != "Backspace") {
    e.preventDefault()
  }
}

const getProfile = async () => {
  loadingStore.updateLoading(true)
  try {
    const { data: res } = await userService.getProfile()
    user.value.name = res.data.name
    user.value.phone = formatPhone2(res.data.phone)
    dataPhone.value = formatPhone2(res.data.phone)
    user.value.email = res.data.username
    user.value.nickName = res.data.nickName
    user.value.thumbnail = res.data.thumbnail
    user.value.gender = res.data.gender
    user.value.address = res.data.address1
    user.value.detailedAddress = res.data.address2
    user.value.dateBirth = res.data.birthDate
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
  loadingStore.updateLoading(false)
}

function startCountdown() {
  isShowCountdown.value = true
  countdownInterval = setInterval(() => {
    if (countdownTime.value > 0) {
      countdownTime.value--
      formattedTime.value = formatTime(countdownTime.value)
    } else {
      clearInterval(countdownInterval)
      countdownTime.value = 3 * 60
      isShowCountdown.value = false
      isShowVerifyCode.value = false
    }
  }, 1000)
}


onMounted(async () => {
  getProfile()
})
</script>
<style scoped></style>