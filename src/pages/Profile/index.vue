<template>
  <main class="container grid grid-cols-12 mx-auto mt-[60px] mb-[109px]">
    <aside class="col-span-2">
      <h3 class="text-[#555555] text-[14px] font-normal">마이페이지</h3>
      <ul class="space-y-[28px] mt-[40px]">
        <li
          :class="['text-[14px] font-normal cursor-pointer', route.name === 'ShowInformation' ? 'text-[#242424]' : 'text-[#A5A5A5]']"
          @click="router.push('/profile/information/show-information')">홈</li>
        <li
          :class="['text-[14px] font-normal cursor-pointer', route.name === 'Rating' ? 'text-[#242424]' : 'text-[#A5A5A5]']"
          @click="router.push('/profile/rating')">내 등급
        </li>
        <li
          :class="['text-[14px] font-normal cursor-pointer', route.name === 'OrderDetail' ? 'text-[#242424]' : 'text-[#A5A5A5]']"
          @click="router.push('/profile/order-detail')">
          주문상세</li>
        <li class='text-[14px] font-normal cursor-pointer text-[#A5A5A5]' @click="handleLogout">
          Logout</li>
      </ul>
    </aside>
    <div class="col-span-10">
      <router-view />
    </div>
  </main>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const router = useRouter()
const route = useRoute()

const handleLogout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('refreshToken')
  userStore.updateLoginStatus()
  router.push('/login')
}
</script>