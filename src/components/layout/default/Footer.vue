<template>
  <footer class="bg-white dark:bg-gray-900 border-t border-[#DFDFDF]">
    <div class="container py-20 mx-auto">
      <div class="flex items-end justify-between">
        <div class="space-y-6">
          <a href="#">
            <img
              class="w-auto h-7"
              :src="Images.logo.src"
              :alt="Images.logo.alt"
            />
          </a>
          <ul class="space-y-2">
            <li class="text-xs font-normal text-[#555555]">
              서울특별시 서초구 34-12 서초구 34-12
            </li>
            <li class="text-xs font-normal text-[#555555]">대표자 : 김옥순</li>
            <li class="text-xs font-normal text-[#555555]">
              사업자 등록번호 :344-1234-4567
            </li>
          </ul>
        </div>

        <div class="space-y-7">
          <strong class="text-xs font-bold text-[#3D3D3D]"
            >고객센터 1833-9133</strong
          >
          <Button
            class="py-[6px] w-[200px] border border-[#DFDFDF] text-xs font-normal text-[#242424]"
          >
            이용약관
          </Button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Images from "@/constants/images"
import Button from "@/components/ui/Button.vue"
</script>
