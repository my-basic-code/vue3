<template>
  <div
    :class="`w-full h-full overflow-hidden bg-white cursor-pointer relative ${type === 2 && 'grid grid-cols-2 lg:grid-cols-1 gap-x-[20px] items-start pl-9 lg:pl-0 pb-4 lg:pb-0 border-b lg:border-none'} ${type === 3 && 'grid grid-cols-2 gap-x-[20px] items-center'}`"
    @click="router.push(`/product-detail/${item.id}`)">
    <div v-if="type === 2"
      class="absolute top-0 left-0 flex items-center justify-center w-6 h-6 text-white bg-black text-[12px] font-bold lg:hidden">
      {{ index }}</div>
    <div
      :class="`flex justify-center items-center relative w-full px-[15%] h-auto ${type === 2 ? 'py-[30%]' : 'py-[20%]'}`"
      style="background: linear-gradient(155deg, #F2F4F6 0%, rgba(255, 255, 255, 0.81) 100%);">
      <div v-if="type === 2"
        class="absolute top-0 left-0 items-center justify-center hidden w-12 h-12 text-white bg-black lg:flex">
        {{ index }}</div>
      <div class="w-full h-full overflow-hidden">
        <img class="object-contain object-center w-full h-full" :src="item?.thumbnail" alt="blog">
      </div>
    </div>
    <div class="mt-4">
      <div class="flex flex-wrap gap-2">
        <small class="py-[2px] px-[6px] text-xs font-normal bg-[#FFF6F2] text-[#FF3609] w-fit" v-for="tag in item?.tags"
          :key="tag.id">{{ tag?.name }}</small>
      </div>
      <p class="text-sm font-bold uppercase mt-[6px]">{{ item?.name }}</p>
      <hr v-if="type !== 2" class="mt-3">
      <div class="flex items-end justify-start mt-3 gap-x-[6px]">
        <span class="text-sm font-bold text-[#FF2618]">{{ item?.discount }}%</span>
        <div class="text-xl font-bold text-black">{{ formatMoney(calculateSalePrice(item?.purchasePrice, item?.discount))
        }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { formatMoney } from '@/utils/formatMoney'
import { calculateSalePrice } from '@/utils/calculateSalePrice'
const router = useRouter()
const props = defineProps({
  type: {
    type: Number,
    default: 1,
  },
  item: {
    type: Object,
  },
  index: {
    type: Number,
    default: 1,
    required: false,
  }
})
</script>