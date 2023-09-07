<template>
  <div
    class="fixed z-[100] inset-0 bg-[#11111142] flex justify-center items-center"
    v-if="isOpen"
  >
    <div
      class="bg-white shadow rounded-xl max-w-[600px] min-h-[266px] w-full flex justify-center items-center relative"
    >
      <div
        class="bg-[#FAFBFD] border border-[#F2F4F6] max-w-[440px] min-h-[154px] w-full px-[73px] py-10"
      >
        <h6
          class="pb-3 border-b border-[#F2F4F6] w-full text-center text-[14px] font-bold text-[#242424]"
          v-html="title"
        ></h6>
        <p
          class="mt-[20px] text-[16px] font-normal text-[#3D3D3D] text-center"
          v-html="content"
        ></p>
      </div>
      <div
        class="absolute top-0 right-0 mt-3 mr-3 cursor-pointer"
        @click="isOpen = false"
      >
        <img
          class="w-6 h-6"
          :src="Images.iconExit.src"
          :alt="Images.iconExit.alt"
        />
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

defineExpose({
  isOpen,
  title,
  content,
})
</script>
