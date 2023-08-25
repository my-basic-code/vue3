<template>
  <div class="container mx-auto mt-[60px] mb-[70px]">
    <h1 class="text-[28px] font-bold pb-[25px] border-b-[4px] border-black">photoism story</h1>
    <div class="grid grid-cols-2 gap-10 mt-4">
      <div class="pb-10 border-b border-[#6F6F6F] cursor-pointer" v-for="(story, iStory) in listStory" :key="iStory">
        <time class="text-xs font-normal text-[#6F6F6F]">{{ story.date }}</time>
        <p class="mt-1 text-base font-bold">{{ story.title }}</p>
        <div class="relative overflow-hidden h-[300px] w-full mt-[14px]">
          <img class="object-cover w-full h-full" :src="story.img" :alt="ImagesLanding.Story1.alt">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import ImagesLanding from "@/constants/imagesLanding"

const listStory = ref([
  {
    date: '22.08.12',
    title: '어떤 색깔이 당신을 표현하나요?',
    img: ImagesLanding.Story1.src
  },
  {
    date: '22.08.12',
    title: '어떤 색깔이 당신을 표현하나요?',
    img: ImagesLanding.Story4.src
  },
  {
    date: '22.08.12',
    title: '어떤 색깔이 당신을 표현하나요?',
    img: ImagesLanding.Story2.src
  },
  {
    date: '22.08.12',
    title: '어떤 색깔이 당신을 표현하나요?',
    img: ImagesLanding.Story5.src
  },
])
</script>
<style scoped></style>