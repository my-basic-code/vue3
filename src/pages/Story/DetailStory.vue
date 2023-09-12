<template>
  <div class="container mx-auto mt-[60px] mb-[70px]">
    <div class="space-y-10">
      <picture class="object-cover w-full h-full">
        <source media="(max-width: 768px)" :srcset="story?.thumbnailMobile?.path">
        <img :src="story?.thumbnailWeb?.path">
      </picture>
      <div v-html="story?.postContent"></div>
    </div>
    <div class="pt-[28px] border-t mt-[100px] flex justify-end">
      <button class="py-[10px] px-[36px] text-[14px] font-bold border border-[#3D3D3D]"
        @click="router.push('/list-story')">포스트 목록</button>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { storyService } from '@/services/storyService'
import { useRoute, useRouter } from 'vue-router'
import { useLoadingStore } from '@/stores/loading';
const loadingStore = useLoadingStore();

const route = useRoute()
const router = useRouter()
const story = ref({})
const handleGetStory = async () => {
  loadingStore.updateLoading(true)
  try {
    const { data: res } = await storyService.getDetailStory(route.params.id)
    story.value = res.data
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