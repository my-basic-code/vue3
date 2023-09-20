<template>
  <main class="container grid lg:grid-cols-12 mx-auto mt-7  lg:mt-[60px] mb-[109px]">
    <aside class="lg:col-span-2">
      <h3 class="hidden lg:block text-[#555555] text-[14px] font-bold lg:font-normal">마이페이지</h3>
      <ul class="flex lg:flex-col justify-start items-center lg:items-start gap-[48px] lg:gap-[28px] mt-3 lg:mt-[40px] pb-[14px] lg:pb-0 lg:border-none border-b-8 border-[#FAFBFD] w-full overflow-x-scroll
        ">
        <li
          :class="['text-[14px] cursor-pointer', route.name === 'ShowInformation' ? 'text-[#242424] font-bold' : 'text-[#A5A5A5] font-normal']"
          @click="router.push('/profile/information/show-information')">홈</li>
        <li
          :class="['text-[14px] cursor-pointer', route.name === 'Rating' ? 'text-[#242424] font-bold' : 'text-[#A5A5A5] font-normal']"
          @click="router.push('/profile/rating')">내 등급
        </li>
        <!-- <li
          :class="['text-[14px] cursor-pointer', route.name === 'OrderDetail' ? 'text-[#242424] font-bold' : 'text-[#A5A5A5] font-normal']"
          @click="router.push('/profile/order-detail')">
          주문상세</li> -->
        <li class='text-[14px] cursor-pointer text-[#A5A5A5]' @click="handleLogout">
          Logout</li>
      </ul>
    </aside>
    <div class="mt-4 lg:mt-0 lg:col-span-10">
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