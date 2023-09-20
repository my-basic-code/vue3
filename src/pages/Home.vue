<template>
  <main class="bg-white pb-[100px] lg:pb-[167px]">
    <CarouselWithProgress :carouselItems="listBanner" />
    <section class="flex justify-center py-12 space-x-[14px] lg:space-x-16 lg:py-20">
      <div class="cursor-pointer" v-for="(item, index) in categoryStore.valueCategory" :key="index"
        @click="router.push(`/category/${item.id}`)">
        <div class="p-[14px] lg:p-[22px] bg-[#F9F9F9]">
          <img class="lg:w-9 lg:h-9 w-7 h-7" :src="item.iconLeft" :alt="item.alt" />
        </div>
        <p class="mt-2 text-[12px] lg:text-sm font-normal text-center">
          {{ item.text }}
        </p>
      </div>
    </section>
    <section class="container mx-auto space-y-10">
      <SimpleBanner :type="1" :img="ImagesLanding.Coupon.src" subTitle="한정수량 임박" subTitleMobile="한정수량 임박"
        title="재구매 회원 할인쿠폰 지급" titleMobile="할인쿠폰 지급" time="23.07.23 - 23.07.28" />
      <SimpleBanner :type="2" :img="ImagesLanding.Cameras.src" subTitle="단 4일간 제공되는 특별 쿠폰" subTitleMobile="단 4일간 제공"
        title="재구매 베스트 아이템 모음" titleMobile="할인쿠폰 지급" time="23.07.23 - 23.07.28" />
    </section>

    <article class="space-y-[48px] lg:space-y-[120px] lg:mt-[80px]">
      <section class="relative">
        <div class="lg:bg-[#EDEDED] absolute top-0 left-0 right-0 bottom-[55%] z-10"></div>
        <div class="container relative z-20 mx-auto bg-transparent pt-[48px] lg:pt-[60px]">
          <h4
            class="text-[20px] lg:text-[40px] font-bold whitespace-nowrap flex justify-between lg:justify-center items-center space-x-2">
            <span>Best item</span>
            <span class="block lg:hidden w-full h-1 bg-[#111111]"></span>
          </h4>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-[30px] mt-[18px] lg:mt-[60px]">
            <CardPrd :type="2" v-for="(prod, iProd) in listBest" :key="prod.id" :item="prod" :index="iProd + 1" />
          </div>
          <Button
            class="mt-4 lg:mt-8 border border-[#DFDFDF] px-9 py-[10px] lg:py-4 w-full lg:w-1/2 mx-auto text-[14px] lg:text-base font-bold"
            @click="router.push('/category/3')">베스트 카테고리 바로가기</Button>
        </div>
      </section>

      <section class="container mx-auto">
        <SimpleBanner :type="3" :img="ImagesLanding.Gifts.src" subTitle="지금 바로 PICK!" subTitleMobile="지금 바로 PICK!"
          title="재구매 베스트 아이템 모음" titleMobile="할인쿠폰 지급" time="23.07.23 - 23.07.28" />
      </section>

      <section class="relative">
        <div class="container relative z-20 mx-auto bg-transparent lg:pt-[60px]">
          <div class="flex items-center gap-x-4">
            <h4 class="text-[20px] lg:text-[40px] font-bold whitespace-nowrap">Membership</h4>
            <div class="h-1 lg:h-[6px] w-full bg-black"></div>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-[14px] lg:gap-[30px] mt-5 lg:mt-[60px]">
            <CardPrd v-for="prod in listMembership" :key="prod.id" :item="prod" />
          </div>
          <Button
            class="mt-4 lg:mt-8 border border-[#DFDFDF] px-9 py-[10px] lg:py-4 w-full lg:w-1/2 mx-auto text-[14px] lg:text-base font-bold"
            @click="router.push('/category/2')">베스트 카테고리 바로가기</Button>
        </div>
      </section>
      <!-- <section class="bg-black">
        <div class="container mx-auto py-[120px]">
          <h4 class="text-[40px] font-bold whitespace-nowrap text-white">
            BRAND WEEK DAY
          </h4>
          <div class="h-[6px] w-full bg-white mt-[60px]"></div>
          <div class="grid grid-cols-2 gap-8 mt-8">
            <CardPrd :type="3" v-for="prod in listBrand" :key="prod.id" :item="prod" />
          </div>
        </div>
      </section> -->
      <!-- <section class="relative">
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
      </section> -->
      <section class="relative">
        <div class="container relative z-20 mx-auto bg-transparent lg:pt-[60px]">
          <div class="flex items-center gap-x-4">
            <h4 class="text-[20px] lg:text-[40px] font-bold whitespace-nowrap">gift shop</h4>
            <div class="h-1 lg:h-[6px] w-full bg-black"></div>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-[14px] lg:gap-[30px] mt-5 lg:mt-[60px]">
            <CardPrd v-for="prod in listGiftShop" :key="prod.id" :item="prod" />
          </div>
          <Button
            class="mt-4 lg:mt-8 border border-[#DFDFDF] px-9 py-[10px] lg:py-4 w-full lg:w-1/2 mx-auto text-[14px] lg:text-base font-bold"
            @click="router.push('/category/4')">베스트 카테고리 바로가기</Button>
        </div>
      </section>
      <section class="relative">
        <div class="container relative z-20 mx-auto bg-transparent lg:pt-[60px]">
          <div class="flex items-center gap-x-4">
            <h4 class="text-[20px] lg:text-[40px] font-bold whitespace-nowrap">
              Photoism story
            </h4>
            <div class="h-1 lg:h-[6px] w-full bg-black"></div>
          </div>
          <div class="grid grid-cols-2 gap-4 gap-x-6 mt-7">
            <div class="relative w-full h-auto row-span-4 overflow-hidden" v-for="story in listStory" :key="story.id">
              <picture class="object-cover w-full h-full">
                <source class="object-cover w-full h-full" media="(max-width: 768px)"
                  :srcset="story?.thumbnailMobile?.path">
                <img class="object-cover w-full h-full" :src="story?.thumbnailWeb?.path">
              </picture>
              <div class="absolute inset-0 z-20 flex flex-col justify-end p-4 lg:p-8">
                <span class="w-[32px] h-[2px] lg:h-[4px] bg-white"></span>
                <p class="text-[14px] lg:text-[24px] text-white font-bold w-1/2">
                  {{ story?.title }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-center w-full h-full mt-4">
            <button
              class="mt-4 lg:mt-8 border border-[#DFDFDF] px-9 py-[10px] lg:py-4 w-full lg:w-1/2 mx-auto text-[14px] lg:text-base font-bold"
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
const listBrand = ref([])
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
 