<template>
  <section class="relative">
    <Carousel :wrap-around="true" v-model="currentSlide">
      <Slide v-for="(slide, index) in carouselItems" :key="index" class="relative">
        <picture class="overflow-hidden w-full h-[400px] lg:h-[600px]">
          <source class="object-cover w-full h-full" media="(max-width: 768px)" :srcset="slide.pathMobile">
          <img class="object-cover w-full h-full" :src="slide.pathDesktop">
        </picture>
        <div class="container absolute inset-0 mx-auto pt-20 pb-[60px] text-left flex flex-col justify-end h-full">
          <!-- <h4 class="text-5xl font-black uppercase">
            Special sale <br />
            up to 35% ~
          </h4>
          <div class="h-60 w-[2px] bg-black mt-2"></div>
          <time class="mt-2 text-xl font-medium">23.07.23 - 23.08.11</time> -->
          <div class="mt-[43px] progress-bar">
            <div class="progress-bar-fill" :style="{ width: progressPercent }"></div>
          </div>
        </div>
      </Slide>
    </Carousel>
  </section>
</template>

<script setup>
import { Carousel, Pagination, Slide } from "vue3-carousel"
import "vue3-carousel/dist/carousel.css"
import { ref, computed } from "vue"

const currentSlide = ref(0)

const props = defineProps({
  carouselItems: {
    type: Array,
    require: true,
  },
})

const progressPercent = computed(() => {
  const totalSlides = props.carouselItems.length
  return ((currentSlide.value + 1) / totalSlides) * 100 + "%"
})
</script>

<style scoped>
.progress-bar {
  width: 100%;
  height: 8px;
  background: #fff;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.1);
}

.progress-bar-fill {
  height: 100%;
  background-color: #111111;
  transition: width 0.3s ease-in-out;
}
</style>
