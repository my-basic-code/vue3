<template>
  <main class="bg-white pb-[329px]">
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
      <SimpleBanner
        :type="1"
        :img="ImagesLanding.Coupon.src"
        subTitle="한정수량 임박"
        title="재구매 회원 할인쿠폰 지급"
        time="23.07.23 - 23.07.28"
      />
      <SimpleBanner
        :type="2"
        :img="ImagesLanding.Cameras.src"
        subTitle="단 4일간 제공되는 특별 쿠폰"
        title="재구매 베스트 아이템 모음"
        time="23.07.23 - 23.07.28"
      />
    </section>

    <article class="space-y-[120px] mt-[80px]">
      <section class="relative">
        <div
          class="bg-[#EDEDED] absolute top-0 left-0 right-0 bottom-[55%] z-10"
        ></div>
        <div class="container relative z-20 mx-auto bg-transparent pt-[60px]">
          <h4 class="text-center text-[40px] font-bold whitespace-nowrap">
            Best item
          </h4>
          <div class="flex gap-x-[30px] mt-[60px]">
            <CardPrd :type="2" />
            <CardPrd :type="2" />
            <CardPrd :type="2" />
          </div>
          <Button
            class="mt-8 border border-[#DFDFDF] px-9 py-4 w-1/2 mx-auto text-base font-bold"
            >베스트 카테고리 바로가기</Button
          >
        </div>
      </section>

      <section class="container mx-auto">
        <SimpleBanner
          :type="3"
          :img="ImagesLanding.Gifts.src"
          subTitle="지금 바로 PICK!"
          title="재구매 베스트 아이템 모음"
          time="23.07.23 - 23.07.28"
        />
      </section>

      <section class="relative">
        <div class="container relative z-20 mx-auto bg-transparent pt-[60px]">
          <div class="flex items-center gap-x-4">
            <h4 class="text-[40px] font-bold whitespace-nowrap">Membership</h4>
            <div class="h-[6px] w-full bg-black"></div>
          </div>
          <div class="flex gap-x-[30px] mt-[60px]">
            <CardPrd />
            <CardPrd />
            <CardPrd />
            <CardPrd />
          </div>
          <Button
            class="mt-8 border border-[#DFDFDF] px-9 py-4 w-1/2 mx-auto text-base font-bold"
            >베스트 카테고리 바로가기</Button
          >
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
            <CardPrd />
            <CardPrd />
            <CardPrd />
            <CardPrd />
          </div>
          <Button
            class="mt-8 border border-[#DFDFDF] px-9 py-4 w-1/2 mx-auto text-base font-bold"
            >베스트 카테고리 바로가기</Button
          >
        </div>
      </section>
      <section class="relative">
        <div class="container relative z-20 mx-auto bg-transparent pt-[60px]">
          <div class="flex items-center gap-x-4">
            <h4 class="text-[40px] font-bold whitespace-nowra">gift shop</h4>
            <div class="h-[6px] w-full bg-black"></div>
          </div>
          <div class="flex gap-x-[30px] mt-[60px]">
            <CardPrd />
            <CardPrd />
            <CardPrd />
            <CardPrd />
          </div>
          <Button
            class="mt-8 border border-[#DFDFDF] px-9 py-4 w-1/2 mx-auto text-base font-bold"
            >베스트 카테고리 바로가기</Button
          >
        </div>
      </section>
      <section class="relative">
        <div class="container relative z-20 mx-auto bg-transparent pt-[60px]">
          <div class="flex items-center gap-x-4">
            <h4 class="text-[40px] font-bold whitespace-nowrap">
              photoism story
            </h4>
            <div class="h-[6px] w-full bg-black"></div>
          </div>
          <div
            class="grid grid-cols-2 gap-4 grid-rows-9 gap-x-6 h-[440px] mt-7"
          >
            <div class="relative overflow-hidden row-span-9">
              <img
                :src="ImagesLanding.Story1.src"
                :alt="ImagesLanding.Story1.alt"
              />
              <div
                class="absolute inset-0 z-20 flex flex-col justify-end p-8"
                style="
                  background: linear-gradient(
                    359deg,
                    rgba(0, 0, 0, 0.6) 3.04%,
                    rgba(0, 0, 0, 0) 100%
                  );
                "
              >
                <span class="w-10 h-1 bg-white"></span>
                <p class="text-[28px] text-white font-bold">
                  프라이빗한 부스에서<br />
                  여름을 즐기는 방법
                </p>
              </div>
            </div>
            <div class="relative w-full row-span-4 overflow-hidden">
              <img
                :src="ImagesLanding.Story2.src"
                :alt="ImagesLanding.Story2.alt"
              />
              <div
                class="absolute inset-0 z-20 flex flex-col justify-end p-8"
                style="
                  background: linear-gradient(
                    359deg,
                    rgba(0, 0, 0, 0.6) 3.04%,
                    rgba(0, 0, 0, 0) 100%
                  );
                "
              >
                <span class="w-[32px] h-[2px] bg-white"></span>
                <p class="text-[16px] text-white font-bold">
                  프라이빗한 부스에서<br />
                  여름을 즐기는 방법
                </p>
              </div>
            </div>
            <div class="relative w-full row-span-4 overflow-hidden">
              <img
                :src="ImagesLanding.Story2.src"
                :alt="ImagesLanding.Story2.alt"
              />
              <div
                class="absolute inset-0 z-20 flex flex-col justify-end p-8"
                style="
                  background: linear-gradient(
                    359deg,
                    rgba(0, 0, 0, 0.6) 3.04%,
                    rgba(0, 0, 0, 0) 100%
                  );
                "
              >
                <span class="w-[32px] h-[2px] bg-white"></span>
                <p class="text-[16px] text-white font-bold">
                  프라이빗한 부스에서<br />
                  여름을 즐기는 방법
                </p>
              </div>
            </div>
            <div class="w-full h-full row-span-1">
              <button
                class="w-full h-full border border-[#DFDFDF] flex justify-center items-center text-[14px] font-bold"
              >
                포스트 목록
              </button>
            </div>
          </div>
        </div>
      </section>
    </article>
  </main>
</template>
<script setup>
import { ref, computed } from "vue"
import CarouselWithProgress from "@/components/pages/Home/CarouselWithProgress.vue"
import ImgSlide from "@/assets/images/img.png"
import ImagesLanding from "@/constants/imagesLanding"
import Images from "@/constants/images"
import SimpleBanner from "@/components/element/SimpleBanner.vue"
import CardPrd from "@/components/element/CardPrd.vue"
import Button from "@/components/ui/Button.vue"

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
    icon: Images.iconMembership.src,
    alt: Images.iconMembership.alt,
    text: "멤버십",
  },
  {
    icon: Images.iconDiscount.src,
    alt: Images.iconDiscount.alt,
    text: "할인특가",
  },
  {
    icon: Images.iconGift.src,
    alt: Images.iconGift.alt,
    text: "선물하기",
  },
  {
    icon: Images.iconBest.src,
    alt: Images.iconBest.alt,
    text: "베스트",
  },
])
</script>
