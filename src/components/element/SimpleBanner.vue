<template>
  <div :class="`grid grid-cols-2 ${typeClass[type].bg}`">
    <div class="w-full py-[24px] lg:py-[45px] pl-9 lg:pl-[128px]">
      <div :class="typeClass[type].subTitle">
        <p class="hidden lg:block w-fit">{{ subTitle }}</p>
        <p class="block lg:hidden w-fit">{{ subTitleMobile }}</p>
      </div>
      <h5 :class="`mt-2 ${typeClass[type].title}`">
        <p class="hidden lg:block">{{ title }}</p>
        <p class="block lg:hidden">{{ titleMobile }}</p>
      </h5>
      <time :class="typeClass[type].time">{{ time }}</time>
    </div>
    <div class="flex justify-center">
      <img class="h-full" :src="img" alt="thumb">
    </div>
  </div>
</template>
<script setup>

const props = defineProps({
  type: {
    type: Number,
    default: 1,
  },
  subTitle: {
    type: String,
    default: "",
  },
  subTitleMobile: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  titleMobile: {
    type: String,
    default: "",
  },
  time: {
    type: String,
    default: "",
  },
  img: {
    type: String,
    default: 1,
  },
})

const typeClass = {
  1: {
    bg: "bg-[#247DE4]",
    subTitle: 'text-[#005AC1] px-2 lg:px-[10px] py-1 bg-[#FFF] rounded-full text-[12px] lg:text-[14px] font-medium w-fit',
    title: 'text-[18px] lg:text-[28px] font-bold text-white',
    time: 'text-[12px] lg:text-sm font-normal text-white opacity-60'
  },
  2: {
    bg: "bg-[#FFEAB6]",
    subTitle: 'text-[#3D3D3D] text-[16px] font-bold w-fit',
    title: 'text-[18px] lg:text-[28px font-bold text-[#242424]',
    time: 'text-[12px] lg:text-sm font-normal text-[#555] '
  },
  3: {
    bg: "bg-[#FFE1EE]",
    subTitle: 'text-white px-2 lg:px-[10px] py-1 bg-[#F62A83] rounded-full text-[12px] lg:text-[14px] font-medium w-fit',
    title: 'text-[18px] lg:text-[28px font-bold text-[#6C002F]',
    time: 'text-[12px] lg:text-sm font-normal text-[#A64B61] opacity-60'
  },
}
</script>
<style lang=""></style>
