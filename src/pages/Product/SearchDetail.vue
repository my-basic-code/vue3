<template>
  <main class="container mx-auto mt-[60px] mb-[150px]">
    <div class="pb-[28px] border-b-[4px] border-black w-full text-center">
      <div v-if="route.params.slug === 'prod'" class="flex items-center justify-center space-x-1">
        <span class="text-[24px] font-bold">‘카메라’</span>
        <p class="text-[16px] font-normal">에대한 검색 결과 입니다 </p>
      </div>
      <h1 v-else class="text-[24px] font-bold">베스트</h1>
    </div>
    <section>
      <div class="flex justify-between mt-[16px]">
        <Dropdown v-if="route.params.slug === 'prod'" classMenu="absolute left-0 z-20 bg-white shadow-xl dark:bg-gray-800"
          classItem="flex justify-start space-x-3 px-5 py-[10px] text-sm text-[#242424] dark:text-gray-300 hover:bg-gray-100 cursor-pointer text-[16px] text-[#242424] font-normal"
          :menuItems="menuItems" @item-clicked="handleItemMenuClick">
          <template v-slot:toggle>
            <Button class="relative py-[6px] px-3 z-10 flex space-x-1 border rounded-full">
              <template v-slot:right-icon>
                <img :src="Images.iconDown.src" :alt="Images.iconDown.alt" />
              </template>
              <span class="text-[14px] text-[#555555] font-normal">카테고리</span>
            </Button>
          </template>
        </Dropdown>
        <strong v-else class="space-x-1">
          <span class="text-[14px] font-normal text-[#555555]">상품</span>
          <em class="text-[14px]">12건</em>
        </strong>
        <button class="flex items-center justify-center">
          <img :src="Images.iconLatest.src" :alt="Images.iconLatest.alt">
          <span class="text--[14px] font-normal text-[#6F6F6F]">최신순</span>
        </button>
      </div>

      <div class="grid grid-cols-4 gap-x-[26px] gap-y-[60px]">
        <CardPrd />
        <CardPrd />
        <CardPrd />
        <CardPrd />
        <CardPrd />
        <CardPrd />
        <CardPrd />
        <CardPrd />
        <CardPrd />
        <CardPrd />
        <CardPrd />
        <CardPrd />
      </div>
    </section>
  </main>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import Images from "@/constants/images"
import { useRoute } from 'vue-router';
import Dropdown from '@/components/element/Dropdown.vue';
import Button from '@/components/ui/Button.vue';
import CardPrd from '@/components/element/CardPrd.vue'

const route = useRoute();
const menuItems = ref([
  {
    text: "무료배송",
  },
  {
    text: "할인특가",
  },
  {
    text: "멤버쉽",
  },
  {
    text: "베스트",
  },
  {
    text: "선물하기",
  },
])

onMounted(() => {
  console.log('🚀 ~ file: SearchDetail.vue:22 ~ router:', route.params.slug)
})
</script>
<style scoped></style>