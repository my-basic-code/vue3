<template>
  <header class="relative bg-white border-b border-[#DFDFDF]">
    <div class="container flex items-center justify-between py-3 mx-auto">
      <div class="space-x-[120px] flex items-center">
        <div class="h-8 w-28">
          <img :src="Images.logo.src" :alt="Images.logo.alt" />
        </div>
        <Input
          :wrapClass="classInputCustom[1].wrapper"
          :className="`pt-1 pb-[10px] ${classInputCustom[1].input}`"
          name="search"
          placeholder="썸머 마지막 50% 세일"
          v-model="search"
          @click="handleSearch"
        >
          <template #suffix>
            <img :src="Images.iconSearch.src" :alt="Images.iconSearch.alt" />
          </template>
        </Input>
      </div>

      <ul class="menu">
        <li class="flex space-x-[28px]">
          <a href="#" class="flex flex-col items-center space-y-1">
            <img :src="Images.iconCart.src" :alt="Images.iconCart.alt" />
            <span class="text-[10px] text-[#242424] font-normal">장바구니</span>
          </a>
          <a href="#" class="flex flex-col items-center space-y-1">
            <img
              :src="Images.iconCustomerService.src"
              :alt="Images.iconCustomerService.alt"
            />
            <span class="text-[10px] text-[#242424] font-normal">고객센터</span>
          </a>
          <a href="#" class="flex flex-col items-center space-y-1">
            <img :src="Images.iconUser.src" :alt="Images.iconUser.alt" />
            <span class="text-[10px] text-[#242424] font-normal">마이</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="container mx-auto">
      <Dropdown
        classMenu="absolute left-0 z-20 w-[335px] origin-top-right bg-white shadow-xl dark:bg-gray-800"
        classItem="flex justify-start space-x-3 px-5 py-3 text-sm text-[#242424] capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 cursor-pointer text-[16px] text-[#242424] font-normal"
        :menuItems="menuItems"
        @item-clicked="handleItemMenuClick"
      >
        <template v-slot:toggle>
          <Button
            class="relative py-3 px-[18px] z-10 flex text-[#242424] space-x-[10px] border border-transparent dark:text-white"
          >
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
import { ref } from "vue"

const isOpenMenu = ref(false)
const menuItems = ref([
  {
    iconLeft: Images.iconShipping.src,
    alt: Images.iconShipping.alt,
    text: "무료배송",
  },
  {
    iconLeft: Images.iconMembership.src,
    alt: Images.iconMembership.alt,
    text: "멤버십",
  },
  {
    iconLeft: Images.iconDiscount.src,
    alt: Images.iconDiscount.alt,
    text: "할인특가",
  },
  {
    iconLeft: Images.iconGift.src,
    alt: Images.iconGift.alt,
    text: "선물하기",
  },
  {
    iconLeft: Images.iconBest.src,
    alt: Images.iconBest.alt,
    text: "베스트",
  },
])
const search = ref()

const handleSearch = () => {}
const handleItemMenuClick = item => {
  console.log(item)
}
</script>
