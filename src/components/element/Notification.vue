<template>
  <div class="fixed z-[100] inset-0 bg-[#11111142] flex justify-center items-center px-2" v-if="isOpen">
    <div
      class="bg-white shadow rounded-xl max-w-[600px] min-h-[266px] w-full flex flex-col justify-center items-center relative px-10 lg:px-0">
      <div v-if="h1" class="text-[16px] font-bold text-[#242424] text-center mb-[65px] mt-[17px]">{{ h1 }}</div>
      <div class="bg-[#FAFBFD] border border-[#F2F4F6] w-full px-10 py-4 lg:px-[73px] lg:py-10 max-w-[440px]">
        <slot name="content">
          <div class="min-h-[114px]">
            <h6 class="pb-3 border-b border-[#F2F4F6] w-full text-center text-[14px] font-bold text-[#242424]"
              v-html="title">
            </h6>
            <p class="mt-[20px] text-[16px] font-normal text-[#3D3D3D] text-center" v-html="content"></p>
          </div>
        </slot>
      </div>
      <slot name="action"></slot>
      <div class="absolute top-0 right-0 mt-3 mr-3 cursor-pointer" @click="isOpen = false">
        <img class="w-6 h-6" :src="Images.iconExit.src" :alt="Images.iconExit.alt" />
      </div>
    </div>
  </div>
</template>
<script setup>
import Images from "@/constants/images"
import { ref } from "vue"

const isOpen = ref(false)
const title = ref()
const content = ref()

const props = defineProps({
  h1: {
    type: String,
  }
})

defineExpose({
  isOpen,
  title,
  content,
})
</script>
