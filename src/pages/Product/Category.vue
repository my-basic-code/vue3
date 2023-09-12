<template>
  <main class="container mx-auto mt-[60px] mb-[150px]">
    <div class="pb-[28px] border-b-[4px] border-black w-full text-center">
      <h1 class="text-[24px] font-bold">베스트</h1>
    </div>
    <section>
      <div class="flex justify-between mt-[16px]">
        <strong class="space-x-1">
          <span class="text-[14px] font-normal text-[#555555]">상품</span>
          <em class="text-[14px]">{{ listProd.length }}건</em>
        </strong>
        <button class="flex items-center justify-center">
          <img :src="Images.iconLatest.src" :alt="Images.iconLatest.alt">
          <span class="text--[14px] font-normal text-[#6F6F6F]">최신순</span>
        </button>
      </div>

      <div class="grid grid-cols-4 gap-x-[26px] gap-y-[60px] mt-[34px]">
        <CardPrd v-for="prod in listProd" :key="prod.id" :item="prod" />
      </div>
    </section>
  </main>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import Images from "@/constants/images"
import { useRoute } from 'vue-router';
import Button from '@/components/ui/Button.vue';
import CardPrd from '@/components/element/CardPrd.vue'
import { productService } from '@/services/productService';
import { useLoadingStore } from '@/stores/loading';
const loadingStore = useLoadingStore();

const route = useRoute();
const listProd = ref([])

const handleSearchProd = async (key) => {
  loadingStore.updateLoading(true)
  try {
    const { data: res } = await productService.searchProduct({
      categoryId: key,
      page: 0,
      size: 9999,
      sort: 'createDate,desc'
    })
    listProd.value = res.data.content
  } catch (error) {
    console.log(error);
  }
  loadingStore.updateLoading(false)
}

watch(() => route.params.id, async () => {
  handleSearchProd(route.params.id)
})

onMounted(async () => {
  handleSearchProd(route.params.id)
})
</script>
<style scoped></style>