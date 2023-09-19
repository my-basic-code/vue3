<template>
  <div class="fixed z-50 inset-0 bg-[#11111142] flex justify-center items-center" v-if="isOpen">
    <article class="bg-white shadow rounded-xl max-w-[600px] min-h-[266px] max-h-screen w-full relative overflow-auto">
      <h4 class="text-[16px] font-bold text-[#242424] text-center mt-[17px]">주문문의</h4>
      <div class="px-[80px] mt-[65px] mb-[60px]">
        <section class="space-y-4">
          <h6 class="text-[14px] font-bold text-[#242424] pb-2 border-b border-[#3D3D3D]">문의 상품</h6>
          <Select v-if="!data.selectedProd"
            classSelected="text-[14px] font-normal bg-[#F2F4F6] px-[20px] py-[10px] flex justify-between text-[#A5A5A5]"
            classWrapOption="space-y-1 w-full mt-1 bg-white z-50 overflow-y-auto max-h-[221px]"
            classOption="bg-[#F2F4F6] text-[14px] font-normal w-full px-[20px] py-[10px]" :options="selectOptionsProd"
            v-model="data.selectedProd"
            :placeholder="`${selectOptionsProd.length > 0 ? '주문 상품을 선택해 주세요' : '주문 상품이 없습니다.'}`" placement="bottomLeft">
            <template #icon>
              <img :src="Images.iconDownBlack.src" :alt="Images.iconDownBlack.alt">
            </template>
          </Select>
          <div v-else class="flex gap-x-[20px] items-center">
            <figure class="w-[80px] h-[80px] flex justify-center items-center"
              style="background: linear-gradient(155deg, #F2F4F6 0%, rgba(255, 255, 255, 0.81) 100%);">
              <img :src="data.selectedProd?.thumbnail" alt="thumbnail">
            </figure>
            <div>
              <strong class="text-[16px] text-[#242424]">{{ data.selectedProd?.name }}</strong>
              <p class="text-[12px] font-normal text-[#6F6F6F]">옵션 - {{ data.selectedProd?.option }}</p>
              <span class="text-[12px] font-normal text-[#6F6F6F]">수량 - {{ data.selectedProd?.quantity }}</span>
              <div class="space-x-[6px]">
                <strong class="text-[#111111] text-[16px]">{{ formatMoney(data.selectedProd?.price) }} 원</strong>
                <!-- <span class="text-[#FF4F27] font-bold text-[12px]">350P 적립 </span> -->
              </div>
            </div>
          </div>
        </section>
        <section class="mt-8 space-y-4">
          <div class="flex justify-between w-full pb-2 border-b border-[#3D3D3D]">
            <h6 class="text-[14px] font-bold text-[#242424]">문의 유형</h6>
            <Button class="text-[12px] font-normal text-[#555555] space-x-1" @click="openFilePicker">
              <template #left-icon>
                <img class="w-[13px] h-[13px]" :src="Images.iconCross.src" :alt="Images.iconCross.alt">
              </template>
              <span>이미지 첨부</span>
            </Button>
          </div>
          <Radio class="grid grid-cols-4 space-x-2" classInput="hidden"
            className="border border-[#DFDFDF] text-center text-[#A5A5A5] py-[6px] px-4 cursor-pointer text-xs font-normal rounded-full"
            classActive="border-gray-700 text-stone-950" v-model="data.typeQuestion" :options="optionsTypeQuestion">
          </Radio>
        </section>
        <section class="mt-8 space-y-4">
          <div class="flex justify-between w-full pb-2 border-b border-[#3D3D3D]">
            <h6 class="text-[14px] font-bold text-[#242424]">제목</h6>
          </div>
          <input class="border border-[#DFDFDF] w-full p-4" type="text" placeholder="문의 제목을 입력해주세요"
            v-model="data.questTitle">
          <input class="hidden" type="file" ref="inputFile" @change="($event) => {
            changeFile($event)
          }" />
          <div v-if="data.inputFileValue">{{ data.inputFileValue?.name }}</div>
          <textarea class="border border-[#DFDFDF] w-full p-4 min-h-[160px]" placeholder="문의 내용을 작성해주세요"
            v-model="data.questContent"></textarea>
        </section>
        <button :class="`w-full py-4 px-9 mt-[64px] ${data.questContent && data.questTitle ? classBtn[1] : classBtn[2]}`"
          :disabled="!data.questContent || !data.questTitle" @click="callApiAddQuestion">문의하기</button>
      </div>
      <div class="absolute top-0 right-0 mt-3 mr-3 cursor-pointer" @click="closePopup">
        <img class="w-6 h-6" :src="Images.iconExit.src" :alt="Images.iconExit.alt" />
      </div>
    </article>
  </div>
  <Notification ref="notification" />
</template>
<script setup>
import Images from "@/constants/images"
import { computed, onMounted, onUnmounted, ref } from "vue"
import Select from "@/components/ui/Select.vue"
import Radio from "@/components/ui/Radio.vue"
import Button from "@/components/ui/Button.vue"
import { questionService } from "@/services/questionService"
import { formatMoney } from "@/utils/formatMoney"
import { classBtn, classInputCustom } from "@/utils/customClass.js"
import Notification from "./Notification.vue"

const isOpen = ref(false)
const inputFile = ref()
const notification = ref()
const data = ref({
  selectedProd: null,
  typeQuestion: 0,
  inputFileValue: null,
  questTitle: '',
  questContent: ''
})

const selectOptionsProd = ref([])
const optionsTypeQuestion = computed(() => {
  let array = []
  if (!data.value.selectedProd) {
    array = [{ label: "1:1 문의", value: 0 }]
  } else {
    array = [
      { label: "1:1 문의", value: 0 },
      { label: "교환신청", value: 1 },
      { label: "환불신청", value: 2 },
      { label: "취소문의", value: 3 },
    ]
  }
  return array
})

const openFilePicker = () => {
  inputFile.value.click();
};

const changeFile = (event) => {
  const target = event.target
  if (target && target.files) {
    data.value.inputFileValue = target.files[0]
  }
};

const callApiAddQuestion = async () => {
  try {
    const formData = new FormData()
    formData.append("typeQuestion", data.value.typeQuestion)
    formData.append("title", data.value.questTitle)
    formData.append("questContent", data.value.questContent)
    data.value.selectedProd && formData.append("productId", data.value.selectedProd.id)
    data.value.inputFileValue && formData.append("attachFiles", data.value.inputFileValue)
    await questionService.postQuestion(formData)
    closePopup()
    notification.value.isOpen = true
    notification.value.title = '문의 상품'
    notification.value.content = 'Them cau hoi thanh cong'
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
};

const closePopup = () => {
  isOpen.value = false
  data.value = {
    selectedProd: null,
    typeQuestion: 0,
    inputFileValue: null,
    questContent: ''
  }
}


defineExpose({
  isOpen,
  data,
  selectOptionsProd
})
</script>
