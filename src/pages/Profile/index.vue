<template>
  <main class="container grid grid-cols-12 mx-auto mt-[60px] mb-[109px]">
    <aside class="col-span-2">
      <h3 class="text-[#555555] text-[14px] font-normal">마이페이지</h3>
      <ul class="space-y-[28px] mt-[40px]">
        <li class="text-[14px] font-normal text-[#242424]">홈</li>
        <li class="text-[14px] font-normal text-[#A5A5A5]">내 등급</li>
        <li class="text-[14px] font-normal text-[#A5A5A5]">주문상세</li>
      </ul>
    </aside>
    <div class="col-span-10">
      <router-view />
    </div>
  </main>
</template>