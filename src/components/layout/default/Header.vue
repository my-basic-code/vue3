<template>
  <header class="relative bg-white border-b border-[#DFDFDF]">
    <div class="container relative flex items-center justify-between py-3 mx-auto space-y-4 lg:space-y-0">
      <div class="flex items-center justify-between lg:justify-start gap-x-4 sm:gap-x-[100px] lg:gap-x-[161px]">
        <router-link to="/" class="flex items-center h-8">
          <img :src="Images.logo.src" :alt="Images.logo.alt" />
        </router-link>
        <Input :wrapClass="classInputCustom[1].wrapper"
          :className="`py-1 lg:py-[7px] w-[100px] sm:w-[200px] lg:w-[300px] placeholder:text-[10px] lg:placeholder:text-[14px] ${classInputCustom[1].input}`"
          name="search" placeholder="썸머 마지막 50% 세일" v-model="search" @enter="handleSearch">
        <template #suffix>
          <img class="w-4 h-4 lg:w-6 lg:h-[6]" @click="handleSearch" :src="Images.iconSearch.src"
            :alt="Images.iconSearch.alt" />
        </template>
        </Input>
      </div>

      <div class="flex space-x-4 lg:space-x-7">
        <router-link v-if="userStore.state.isLogin" to="/cart" class="flex flex-col items-center space-y-1">
          <img class="w-4 h-4 lg:w-[20px] lg:h-[20px]" :src="Images.iconCart.src" :alt="Images.iconCart.alt" />
          <span class="text-[10px] text-[#242424] font-normal">장바구니</span>
        </router-link>
        <router-link v-if="userStore.state.isLogin" to="/customer-service/how-to-use"
          class="flex flex-col items-center space-y-1">
          <img class="w-4 h-4 lg:w-[20px] lg:h-[20px]" :src="Images.iconCustomerService.src"
            :alt="Images.iconCustomerService.alt" />
          <span class="text-[10px] text-[#242424] font-normal">고객센터</span>
        </router-link>
        <router-link v-if="userStore.state.isLogin" to="/profile/information/show-information"
          class="flex flex-col items-center space-y-1">
          <img class="w-4 h-4 lg:w-[20px] lg:h-[20px]" :src="Images.iconUser.src" :alt="Images.iconUser.alt" />
          <span class="text-[10px] text-[#242424] font-normal">마이</span>
        </router-link>
        <router-link v-else to="/login" class="flex flex-col items-center space-y-1">
          <img class="w-4 h-4 lg:w-[20px] lg:h-[20px]" :src="Images.iconLogin.src" :alt="Images.iconLogin.alt" />
          <span class="text-[10px] text-[#242424] font-normal">마이</span>
        </router-link>
      </div>
    </div>

    <div class="container mx-auto">
      <Dropdown classMenu="absolute left-0 z-[1000] w-[335px] origin-top-right bg-white shadow-xl dark:bg-gray-800"
        classItem="flex justify-start space-x-3 px-5 py-3 text-sm text-[#242424] capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 cursor-pointer text-[16px] text-[#242424] font-normal"
        classIcon="w-6 h-6" :menuItems="categoryStore.valueCategory" @item-clicked="handleItemMenuClick">
        <template v-slot:toggle>
          <Button
            class="relative lg:py-3 lg:px-[18px] z-10 flex text-[#242424] space-x-[10px] border border-transparent dark:text-white">
            <template v-slot:left-icon>
              <img :src="Images.iconBar3.src" :alt="Images.iconBar3.alt" />
            </template>
            <span class="text-[16px] text-[#242424] font-normal">카테고리</span>
          </Button>
        </template>
      </Dropdown>
    </div>
  </header>
</template>

<script setup>
import Images from "@/constants/images"
import Input from "@/components/ui/Input.vue"
import Button from "@/components/ui/Button.vue"
import Dropdown from "@/components/element/Dropdown.vue"
import { classInputCustom } from "@/utils/customClass.js"
import { ref, onMounted, computed } from "vue"
import { useRouter } from "vue-router"
import { useCategoryStore } from '@/stores/category';
import { useUserStore } from '@/stores/user';
import { useLoadingStore } from '@/stores/loading';

const router = useRouter()
const loadingStore = useLoadingStore();
const categoryStore = useCategoryStore();
const userStore = useUserStore();
const search = ref()

const handleSearch = () => {
  router.push({ path: '/search-detail', query: { search: search.value } })
  search.value = ''
}
const handleItemMenuClick = resp => {
  const { item } = resp
  router.push(`/category/${item.id}`)
}

onMounted(async () => {
  loadingStore.updateLoading(true)
  await categoryStore.fetchData();
  loadingStore.updateLoading(false)
})
</script>
