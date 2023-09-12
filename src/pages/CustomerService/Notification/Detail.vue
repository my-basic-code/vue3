<template>
  <section class="pt-4 border-t-[2px] border-black">
    <article
      class="flex justify-between text-[16px] text-[#3D3D3D] font-normal py-[13px] border-b border-[#DFDFDF] cursor-pointer">
      <div class="flex items-center justify-start gap-x-3">
        <time class="text-[14px] font-normal text-[#8B8B8B]">{{ formatDate(notification?.createdDate) }}</time>
        <p class="text-[16px] font-normal text-[#3D3D3D]">{{ notification?.title }}</p>
      </div>
      <img class="w-4 h-4" :src="Images.iconRightGray.src" :alt="Images.iconRightGray.alt">
    </article>
    <article class="py-[40px] space-y-[40px] border-b border-[#DFDFDF]">
      <img v-if="notification?.path" class="h-[196px] w-auto" :src="notification?.path" alt="content">
      <div v-if="notification?.content" class="bg-[#FAFBFD] mt-[40px] leading-[136%] flex gap-x-[12px] px-[20px] py-4">
        {{ notification?.content }}
      </div>
    </article>
    <article class="mt-[20px] flex justify-end">
      <button class="w-[140px] py-[10px] flex justify-center items-center bg-black text-white text-[14px] font-bold "
        @click="router.push('/customer-service/notification/list')">목록</button>
    </article>
  </section>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import Images from "@/constants/images.js"
import { customerService } from '@/services/customerService'
import { useRoute, useRouter } from 'vue-router'
import { formatDate } from '@/utils/formatDate.js'

const route = useRoute()
const router = useRouter()
const notification = ref({})

onMounted(async () => {
  try {
    const { data: res } = await customerService.getDetailNotification(route.params.id)
    notification.value = res.data
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
})
</script>
<style scoped></style>