<template>
  <div :class="`grid grid-cols-2 ${typeClass[type].bg}`">
    <div class="w-full py-[45px] pl-[128px]">
      <span :class="typeClass[type].subTitle">{{ subTitle }}</span>
      <h5 :class="`mt-2 ${typeClass[type].title}`">
        {{ title }}
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
  title: {
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
    subTitle: 'text-[#005AC1] px-[10px] py-1 bg-[#FFF] rounded-full text-[14px] font-medium',
    title: 'text-[28px] font-bold text-white',
    time: 'text-sm font-normal text-white opacity-60'
  },
  2: {
    bg: "bg-[#FFEAB6]",
    subTitle: 'text-[#3D3D3D] text-[16px] font-bold',
    title: 'text-[28px] font-bold text-[#242424]',
    time: 'text-sm font-normal text-[#555] '
  },
  3: {
    bg: "bg-[#FFE1EE]",
    subTitle: 'text-white px-[10px] py-1 bg-[#F62A83] rounded-full text-[14px] font-medium',
    title: 'text-[28px] font-bold text-[#6C002F]',
    time: 'text-sm font-normal text-[#A64B61] opacity-60'
  },
}
</script>
<style lang=""></style>
