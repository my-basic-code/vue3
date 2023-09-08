<template>
  <div
    :class="`w-full h-full overflow-hidden bg-white cursor-pointer ${type === 3 && 'grid grid-cols-2 gap-x-[20px] items-center'}`"
    @click="router.push(`/product-detail/${item.id}`)">
    <div :class="`flex justify-center items-center relative ${type === 2 ? 'h-[380px]' : 'h-[280px]'}`"
      style="background: linear-gradient(155deg, #F2F4F6 0%, rgba(255, 255, 255, 0.81) 100%);">
      <div v-if="type === 2" class="absolute top-0 left-0 flex items-center justify-center w-12 h-12 text-white bg-black">
        1</div>
      <div :class="`${type === 2 ? 'w-[266px] h-[153px]' : 'w-[196px] h-[113px]'} `">
        <img class="object-cover object-center w-full " :src="item?.thumbnail" alt="blog">
      </div>
    </div>
    <div class="mt-4">
      <div class="space-x-2">
        <small class="py-[2px] px-[6px] text-xs font-normal bg-[#FFF6F2] text-[#FF3609]" v-for="tag in item?.tags"
          :key="tag.id">{{ tag?.name }}</small>
      </div>
      <p class="text-sm font-bold uppercase mt-[6px]">{{ item?.name }}</p>
      <hr class="mt-3">
      <div class="flex items-end justify-start mt-3 gap-x-[6px]">
        <span class="text-sm font-bold text-[#FF2618]">{{ item?.discount }}%</span>
        <div class="text-xl font-bold text-black">{{ formatMoney(Number(item?.purchasePrice * item?.discount / 100)) }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { formatMoney } from '@/utils/formatMoney'
const router = useRouter()
const props = defineProps({
  type: {
    type: Number,
    default: 1,
  },
  item: {
    type: Object,
  }
})
</script>