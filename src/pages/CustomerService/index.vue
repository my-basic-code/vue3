<template>
  <div class="container mx-auto mt-[60px] mb-[75px] grid grid-cols-12">
    <aside class="space-y-[40px] col-span-2">
      <h3 class="text-[20px] font-normal text-[#555555]">고객센터</h3>
      <ul class="space-y-[28px]">
        <li class="text-[14px] font-bold text-[#242424]">이용방법</li>
        <li class="text-[14px] font-normal text-[#A5A5A5]">문의내역</li>
        <li class="text-[14px] font-normal text-[#A5A5A5]">공지사항</li>
        <li class="text-[14px] font-normal text-[#A5A5A5]">약관 및 서비스 정책</li>
      </ul>
    </aside>
    <main class="col-span-10">
      <router-view />
    </main>
  </div>
</template>
<script setup>

</script>
<style scoped></style>