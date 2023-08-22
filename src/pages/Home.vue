<template>
  <main class="bg-white">
    <CarouselWithProgress :carouselItems="carouselItems" />
    <section class="flex justify-center py-20 space-x-16">
      <div v-for="(item, index) in menuItems" :key="index">
        <div class="p-[22px] bg-[#F9F9F9]">
          <img class="w-9 h-9" :src="item.icon" :alt="item.alt" />
        </div>
        <p class="mt-2 text-sm font-normal text-center">
          {{ item.text }}
        </p>
      </div>
    </section>
    <section class="container mx-auto space-y-10">
      <SimpleBanner :type="1" :img="Images.landingCoupon.src" subTitle="한정수량 임박" title="재구매 회원 할인쿠폰 지급"
        time="23.07.23 - 23.07.28" />
      <SimpleBanner :type="2" :img="Images.landingCameras.src" subTitle="단 4일간 제공되는 특별 쿠폰" title="재구매 베스트 아이템 모음"
        time="23.07.23 - 23.07.28" />
    </section>

    <section></section>

    <section class="container mx-auto">
      <SimpleBanner :type="3" :img="Images.landingGifts.src" subTitle="지금 바로 PICK!" title="재구매 베스트 아이템 모음"
        time="23.07.23 - 23.07.28" />
    </section>
  </main>
</template>
<script setup>
import { ref, computed } from "vue"
import CarouselWithProgress from "@/components/pages/Home/CarouselWithProgress.vue"
import ImgSlide from "@/assets/images/img.png"
import Images from "@/constants/images"
import SimpleBanner from "@/components/element/SimpleBanner.vue"

const carouselItems = ref([
  { image: ImgSlide, alt: "Image 1" },
  { image: ImgSlide, alt: "Image 2" },
  { image: ImgSlide, alt: "Image 3" },
])

const menuItems = ref([
  {
    icon: Images.iconShipping.src,
    alt: Images.iconShipping.alt,
    text: "무료배송",
  },
  {
    icon: Images.iconDiscount.src,
    alt: Images.iconDiscount.alt,
    text: "할인특가",
  },
  {
    icon: Images.iconMembership.src,
    alt: Images.iconMembership.alt,
    text: "멤버십",
  },
  {
    icon: Images.iconBest.src,
    alt: Images.iconBest.alt,
    text: "베스트",
  },
  {
    icon: Images.iconGift.src,
    alt: Images.iconGift.alt,
    text: "선물하기",
  },
])
</script>
