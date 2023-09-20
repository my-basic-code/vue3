<template>
  <div class="container mx-auto mt-[60px] mb-[70px]">
    <h1 class="text-[28px] font-bold pb-[25px] border-b-[4px] border-black">Photoism story</h1>
    <div class="grid grid-cols-1 gap-10 mt-4 lg:grid-cols-2">
      <div class="pb-10 border-b border-[#6F6F6F] cursor-pointer" v-for="(story, iStory) in listStory" :key="iStory"
        @click="router.push(`/detail-story/${story.id}`)">
        <time class="text-xs font-normal text-[#6F6F6F]">{{ formatDate(story.createDate) }}</time>
        <p class="mt-1 text-base font-bold">{{ story.title }}</p>
        <div class="relative overflow-hidden h-[300px] w-full mt-[14px]">
          <picture class="w-full h-full">
            <source class="object-cover w-full h-full" media="(max-width: 768px)" :srcset="story.thumbnailMobile.path">
            <img class="object-cover w-full h-full" :src="story.thumbnailWeb.path">
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import ImagesLanding from "@/constants/imagesLanding"
import { storyService } from '@/services/storyService'
import { formatDate } from '@/utils/formatDate.js'
import { useRouter } from 'vue-router'
import { useLoadingStore } from '@/stores/loading';
const loadingStore = useLoadingStore();

const router = useRouter()
const listStory = ref([])

const handleGetStory = async () => {
  loadingStore.updateLoading(true)
  try {
    const { data: res } = await storyService.getAllStory({
      page: 0,
      size: 999,
      sort: 'createDate,desc'
    })
    listStory.value = res.data.content
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
  loadingStore.updateLoading(false)
}

onMounted(async () => {
  handleGetStory()
})
</script>
<style scoped></style>