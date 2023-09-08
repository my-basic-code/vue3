<template>
  <div
    :class="`w-full h-full overflow-hidden bg-white cursor-pointer ${type === 3 && 'grid grid-cols-2 gap-x-[20px] items-center'}`"
    @click="router.push('/product-detail/12')">
    <div :class="`flex justify-center items-center relative ${type === 2 ? 'h-[380px]' : 'h-[280px]'}`"
      style="background: linear-gradient(155deg, #F2F4F6 0%, rgba(255, 255, 255, 0.81) 100%);">
      <div v-if="type === 2" class="absolute top-0 left-0 flex items-center justify-center w-12 h-12 text-white bg-black">
        1</div>
      <div :class="`${type === 2 ? 'w-[266px] h-[153px]' : 'w-[196px] h-[113px]'} `">
        <img class="object-cover object-center w-full " src="https://dummyimage.com/720x400" alt="blog">
      </div>
    </div>
    <div class="mt-4">
      <small class="py-[2px] px-[6px] text-xs font-normal bg-[#FFF6F2] text-[#FF3609]">여름한정</small>
      <p class="text-sm font-bold uppercase mt-[6px]">EDITION FILM CAMERA</p>
      <hr class="mt-3">
      <div class="flex items-end justify-start mt-3 gap-x-[6px]">
        <span class="text-sm font-bold text-[#FF2618]">15%</span>
        <div class="text-xl font-bold text-black">18,500</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  type: {
    type: Number,
    default: 1,
  }
})
</script>