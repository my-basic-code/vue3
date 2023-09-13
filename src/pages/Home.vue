<template>
  <main class="bg-white pb-[167px]">
    <CarouselWithProgress :carouselItems="listBanner" />
    <section class="flex justify-center py-20 space-x-16">
      <div class="cursor-pointer" v-for="(item, index) in categoryStore.valueCategory" :key="index"
        @click="router.push(`/category/${item.id}`)">
        <div class="p-[22px] bg-[#F9F9F9]">
          <img class="w-9 h-9" :src="item.iconLeft" :alt="item.alt" />
        </div>
        <p class="mt-2 text-sm font-normal text-center">
          {{ item.text }}
        </p>
      </div>
    </section>
    <section class="container mx-auto space-y-10">
      <SimpleBanner :type="1" :img="ImagesLanding.Coupon.src" subTitle="한정수량 임박" title="재구매 회원 할인쿠폰 지급"
        time="23.07.23 - 23.07.28" />
      <SimpleBanner :type="2" :img="ImagesLanding.Cameras.src" subTitle="단 4일간 제공되는 특별 쿠폰" title="재구매 베스트 아이템 모음"
        time="23.07.23 - 23.07.28" />
    </section>

    <article class="space-y-[120px] mt-[80px]">
      <section class="relative">
        <div class="bg-[#EDEDED] absolute top-0 left-0 right-0 bottom-[55%] z-10"></div>
        <div class="container relative z-20 mx-auto bg-transparent pt-[60px]">
          <h4 class="text-center text-[40px] font-bold whitespace-nowrap">
            Best item
          </h4>
          <div class="flex gap-x-[30px] mt-[60px]">
            <CardPrd :type="2" v-for="(prod, iProd) in listBest" :key="prod.id" :item="prod" :index="iProd + 1" />
          </div>
          <Button class="mt-8 border border-[#DFDFDF] px-9 py-4 w-1/2 mx-auto text-base font-bold"
            @click="router.push('/category/3')">베스트 카테고리 바로가기</Button>
        </div>
      </section>

      <section class="container mx-auto">
        <SimpleBanner :type="3" :img="ImagesLanding.Gifts.src" subTitle="지금 바로 PICK!" title="재구매 베스트 아이템 모음"
          time="23.07.23 - 23.07.28" />
      </section>

      <section class="relative">
        <div class="container relative z-20 mx-auto bg-transparent pt-[60px]">
          <div class="flex items-center gap-x-4">
            <h4 class="text-[40px] font-bold whitespace-nowrap">Membership</h4>
            <div class="h-[6px] w-full bg-black"></div>
          </div>
          <div class="flex gap-x-[30px] mt-[60px]">
            <CardPrd v-for="prod in listMembership" :key="prod.id" :item="prod" />
          </div>
          <Button class="mt-8 border border-[#DFDFDF] px-9 py-4 w-1/2 mx-auto text-base font-bold"
            @click="router.push('/category/2')">베스트 카테고리 바로가기</Button>
        </div>
      </section>
      <section class="bg-black">
        <div class="container mx-auto py-[120px]">
          <h4 class="text-[40px] font-bold whitespace-nowrap text-white">
            BRAND WEEK DAY
          </h4>
          <div class="h-[6px] w-full bg-white mt-[60px]"></div>
          <div class="grid grid-cols-2 gap-8 mt-8">
            <CardPrd :type="3" />
            <CardPrd :type="3" />
            <CardPrd :type="3" />
            <CardPrd :type="3" />
          </div>
        </div>
      </section>
      <section class="relative">
        <div class="container relative z-20 mx-auto bg-transparent pt-[60px]">
          <div class="flex items-center gap-x-4">
            <h4 class="text-[40px] font-bold whitespace-nowrap">Membership</h4>
            <div class="h-[6px] w-full bg-black"></div>
          </div>
          <div class="flex gap-x-[30px] mt-[60px]">
            <CardPrd v-for="prod in listMembership" :key="prod.id" :item="prod" />
          </div>
          <Button class="mt-8 border border-[#DFDFDF] px-9 py-4 w-1/2 mx-auto text-base font-bold"
            @click="router.push('/category/2')">베스트 카테고리 바로가기</Button>
        </div>
      </section>
      <section class="relative">
        <div class="container relative z-20 mx-auto bg-transparent pt-[60px]">
          <div class="flex items-center gap-x-4">
            <h4 class="text-[40px] font-bold whitespace-nowrap">gift shop</h4>
            <div class="h-[6px] w-full bg-black"></div>
          </div>
          <div class="flex gap-x-[30px] mt-[60px]">
            <CardPrd v-for="prod in listGiftShop" :key="prod.id" :item="prod" />
          </div>
          <Button class="mt-8 border border-[#DFDFDF] px-9 py-4 w-1/2 mx-auto text-base font-bold"
            @click="router.push('/category/4')">베스트 카테고리 바로가기</Button>
        </div>
      </section>
      <section class="relative">
        <div class="container relative z-20 mx-auto bg-transparent pt-[60px]">
          <div class="flex items-center gap-x-4">
            <h4 class="text-[40px] font-bold whitespace-nowrap">
              Photoism story
            </h4>
            <div class="h-[6px] w-full bg-black"></div>
          </div>
          <div class="grid grid-cols-2 gap-4 gap-x-6 mt-7">
            <div class="relative w-full h-[280px] row-span-4 overflow-hidden" v-for="story in listStory" :key="story.id">
              <picture class="object-cover w-full h-full">
                <source media="(max-width: 768px)" :srcset="story.thumbnailMobile.path">
                <img :src="story.thumbnailWeb.path">
              </picture>
              <div class="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <span class="w-[32px] h-[4px] bg-white"></span>
                <p class="text-[24px] text-white font-bold w-1/2">
                  {{ story.title }}
                </p>
              </div>
            </div>
          </div>
          <div class="w-full h-full mt-4">
            <button
              class="border border-[#DFDFDF] flex justify-center items-center text-[14px] font-bold py-4 px-9 w-1/2 mx-auto"
              @click="router.push('/list-story')">
              포스트 목록 바로가기
            </button>
          </div>
        </div>
      </section>
    </article>
  </main>
</template>
<script setup>
import { ref, computed, onMounted } from "vue"
import CarouselWithProgress from "@/components/pages/Home/CarouselWithProgress.vue"
import ImagesLanding from "@/constants/imagesLanding"
import Images from "@/constants/images"
import SimpleBanner from "@/components/element/SimpleBanner.vue"
import CardPrd from "@/components/element/CardPrd.vue"
import Button from "@/components/ui/Button.vue"
import { bannerService } from "@/services/bannerService"
import { useRouter } from 'vue-router'
import { useCategoryStore } from '@/stores/category';
import { useLoadingStore } from '@/stores/loading';
import { productService } from "@/services/productService"
import { storyService } from "@/services/storyService"

const router = useRouter()
const categoryStore = useCategoryStore();
const loadingStore = useLoadingStore();
const listBanner = ref([])
const listBest = ref([])
const listMembership = ref([])
const listGiftShop = ref([])
const listStory = ref([])

const getAllBanner = async () => {
  try {
    const { data: res } = await bannerService.getAllBanner({
      "page": 0,
      "size": 3,
      "sort": 'displayOrder,desc'
    })
    return res.data.content
  } catch (error) {
    alert('getAllBanner', error.response?.data?.message || error)
  }
}

const handleGetProd = async (key, size) => {
  try {
    const { data: res } = await productService.searchProduct({
      categoryId: key,
      page: 0,
      size: size,
      sort: 'createDate,desc'
    })
    return res.data.content
  } catch (error) {
    alert('handleGetProd', error.response?.data?.message || error)
  }
}

const handleGetStory = async () => {
  try {
    const { data: res } = await storyService.getAllStory({
      page: 0,
      size: 4,
      sort: 'createDate,desc'
    })
    return res.data.content
  } catch (error) {
    alert('handleGetStory', error.response?.data?.message || error)
  }
}

onMounted(async () => {
  loadingStore.updateLoading(true)
  try {
    const [ListBannerRes, listBestRes, listMembershipRes, listGiftShopRes, listStoryRes] = await Promise.all([
      getAllBanner(),
      handleGetProd(3, 3), // Best
      handleGetProd(2, 4), // Membership
      handleGetProd(4, 4),  // Gift shop
      handleGetStory()
    ]);
    listBanner.value = ListBannerRes
    listBest.value = listBestRes
    listMembership.value = listMembershipRes
    listGiftShop.value = listGiftShopRes
    listStory.value = listStoryRes
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
  }
  loadingStore.updateLoading(false)
})
</script>
 