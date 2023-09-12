<template>
  <article>
    <div class="flex space-x-4">
      <InputImgReview classImgReview="w-20 h-20 rounded-full" v-model="store.information.image">
        <template #imgInput>
          <img class="w-20 h-20" :src="Images.iconCamera.src" :alt="Images.iconCamera.alt" />
        </template>
      </InputImgReview>
      <Input label="닉네임" type="text" name="nickName" placeholder="닉네임을 입력해주세요 " classLabel="block text-base font-bold"
        :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`" v-model="store.information.nickName">
      <template #sub-label>
        <span class="text-xs text-[#FF3609] font-normal">*</span>
      </template>
      </Input>
    </div>
    <div class="mt-7">
      <div class="block text-base font-bold">
        성별 <span class="text-xs text-[#FF3609] font-normal">*</span>
      </div>
      <Radio class="mt-4 grid grid-cols-2 space-x-[11px]" classInput="hidden"
        className="border border-[#DFDFDF] text-center text-[#A5A5A5] py-[10px] px-9 cursor-pointer text-sm font-normal"
        classActive="border-gray-700 text-stone-950" v-model="store.information.gender" :options="options"></Radio>
    </div>
    <Input wrapClass="mt-7" label="주소" type="text" name="address" classLabel="block text-base font-bold"
      placeholder="주소를 선택해주세요" :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`"
      v-model="store.information.address">
    <template #sub-label>
      <span class="text-xs text-[#FF3609] font-normal">*</span>
    </template>
    </Input>
    <Input wrapClass="mt-3" type="text" name="detailedAddress" placeholder="세부 주소를 입력해주세요"
      :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`" v-model="store.information.detailedAddress">
    </Input>
    <Input wrapClass="mt-7" type="text" :handleValue="handleValueDateBirth" name="dateBirth" label="생년월일"
      classLabel="block text-base font-bold" placeholder="생년월일 8자리를 입력해주세요"
      :className="`px-5 py-4 mt-[6px] w-full ${classInputCustom[2].input}`" v-model="store.information.dateBirth">
    </Input>
    <Button :class="`w-full py-4 px-9 mt-7 ${!store.information.nickName ||
        typeof store.information.gender === 'undefined' ||
        !store.information.address
        ? classBtn[2]
        : classBtn[1]
      }`" :disabled="!store.information.nickName ||
    typeof store.information.gender === 'undefined' ||
    !store.information.address
    " @click="callApiRegister">다음</Button>
  </article>
</template>
<script setup>
import Images from "@/constants/images.js"
import Input from "@/components/ui/Input.vue"
import Radio from "@/components/ui/Radio.vue"
import InputImgReview from "@/components/ui/InputImgReview.vue"
import { useRegisterStore } from "@/stores/register.js"
import { classBtn, classInputCustom } from "@/utils/customClass.js"
import { authService } from "@/services/authService.js"
import { formatPhone } from "@/utils/formatPhone.js"
import { useRouter } from "vue-router"

const router = useRouter()
const store = useRegisterStore()
const options = [
  { label: "남성", value: 0 },
  { label: "여성", value: 1 },
]

const callApiRegister = async () => {
  const formData = new FormData()
  !!store.information.email &&
    formData.append("username", store.information.email)
  !!store.information.nickName &&
    formData.append("nickname", store.information.nickName)
  !!store.information.name && formData.append("name", store.information.name)
  !!store.information.password &&
    formData.append("password", store.information.password)
  !!store.information.phone &&
    formData.append("phone", formatPhone(store.information.phone))
  !!store.information.image &&
    formData.append("fileThumbnail", store.information.image)
  typeof store.information.gender !== "undefined" &&
    formData.append("gender", store.information.gender)
  !!store.information.address &&
    formData.append("address1", store.information.address)
  !!store.information.detailedAddress &&
    formData.append("address2", store.information.detailedAddress)
  !!store.information.dateBirth &&
    formData.append("birthday", store.information.dateBirth)
  try {
    await authService.register(formData)
    router.push("/login")
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
}

const handleValueDateBirth = e => {
  const regex = /^[0-9\-\/.\b]+$/
  if (!regex.test(e.key) && e.key != "Backspace") {
    e.preventDefault()
  }
}
</script>
