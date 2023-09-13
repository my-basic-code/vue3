<template>
  <main class="container mx-auto mt-[60px] mb-[150px]">
    <div class="pb-[28px] border-b-[4px] border-black w-full text-center">
      <div class="flex items-center justify-center space-x-1">
        <span class="text-[24px] font-bold">‘{{ route.query.search || 'all' }}’</span>
        <p class="text-[16px] font-normal">에대한 검색 결과 입니다 </p>
      </div>
    </div>
    <section>
      <div class="flex justify-between mt-[16px]">
        <Dropdown classMenu="absolute left-0 z-20 bg-white shadow-xl dark:bg-gray-800"
          classItem="flex justify-start space-x-3 px-5 py-[10px] text-sm text-[#242424] dark:text-gray-300 hover:bg-gray-100 cursor-pointer text-[16px] text-[#242424] font-normal"
          :menuItems="categoryStore.valueCategory" :isIcon="false" @item-clicked="handleItemMenuClick">
          <template v-slot:toggle>
            <Button class="relative py-[6px] px-3 z-10 flex space-x-1 border rounded-full">
              <template v-slot:right-icon>
                <img :src="Images.iconDown.src" :alt="Images.iconDown.alt" />
              </template>
              <span class="text-[14px] text-[#555555] font-normal">카테고리</span>
            </Button>
          </template>
        </Dropdown>
        <button class="flex items-center justify-center" @click="handleSortPrd">
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
import { useRoute, useRouter } from 'vue-router';
import Dropdown from '@/components/element/Dropdown.vue';
import Button from '@/components/ui/Button.vue';
import CardPrd from '@/components/element/CardPrd.vue'
import { productService } from '@/services/productService';
import { useCategoryStore } from '@/stores/category';
import { useLoadingStore } from '@/stores/loading';
const loadingStore = useLoadingStore();

const route = useRoute();
const router = useRouter();
const categoryStore = useCategoryStore();
const listProd = ref([])
const sort = ref('createDate,desc')

const handleSearchProd = async (key, sort) => {
  loadingStore.updateLoading(true)
  try {
    const { data: res } = await productService.searchProduct({
      key: key,
      page: 0,
      size: 9999,
      sort: sort
    })
    listProd.value = res.data.content
  } catch (error) {
    console.log(error);
  }

  loadingStore.updateLoading(false)
}

const handleSortPrd = () => {
  if (sort.value === 'createDate,desc') {
    sort.value = 'createDate,asc'
  } else {
    sort.value = 'createDate,desc'
  }
  handleSearchProd(route.query.search, sort.value)
}

const handleItemMenuClick = resp => {
  const { item } = resp
  router.push(`/category/${item.id}`)
}

watch(() => route.query.search, async () => {
  sort.value = 'createDate,desc'
  handleSearchProd(route.query.search, sort.value)
})

onMounted(async () => {
  handleSearchProd(route.query.search, sort.value)
})
</script>
<style scoped></style>