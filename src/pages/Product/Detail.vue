<template>
  <main class="container mx-auto mt-[60px] mb-[211px]">
    <section class="w-full h-full overflow-hidden bg-white grid grid-cols-2 gap-x-[58px]">
      <div class="relative flex items-center justify-center px-[86px] py-[175px]"
        style="background: linear-gradient(155deg, #F2F4F6 0%, rgba(255, 255, 255, 0.81) 100%);">
        <figure class="w-full h-[237px] overflow-hidden">
          <img class="object-contain object-center w-full h-full" :src="product.thumbnail" alt="thumbnail">
        </figure>
      </div>

      <div>
        <article class="pb-[20px] border-b-[4px] border-black flex justify-between items-center">
          <div>
            <span class="text-[14px] font-normal text-[#555555]">{{ product.category?.name }}</span>
            <strong class="block text-xl font-bold uppercase mt-[8px] mb-3">{{ product.name }}</strong>
            <div class="space-x-2">
              <small class="py-[2px] px-[6px] text-xs font-normal bg-[#FFF6F2] text-[#FF3609]" v-for="tag in product.tags"
                :key="tag.id">{{ tag.name }}</small>
            </div>
          </div>
          <figure class="w-6 h-6">
            <img class="object-cover object-center w-full h-full" :src="Images.iconLinkSimple.src"
              :alt="Images.iconLinkSimple.alt">
          </figure>
        </article>
        <article class="mt-4 space-y-4">
          <div class="flex items-center justify-between">
            <strong class="text-[14px] text-black">정가</strong>
            <del class="text-[14px] font-normal text-[#6F6F6F]">{{ formatMoney(product.purchasePrice) }}원</del>
          </div>
          <div class="flex items-center justify-between">
            <strong class="text-[14px] text-black">구매가</strong>
            <div class="space-x-[6px]">
              <sub class="inline-block text-[#FF2618] text-base font-bold">{{ product.discount }}%</sub>
              <strong class="text-[24px] inline-block">{{
                formatMoney(calculateSalePrice(product.purchasePrice, product.discount))
              }} </strong>
            </div>
          </div>
          <!-- <Collapse :isOpen="true" title="등급별 마일리지" classTitle="text-[14px] font-bold text-[#3D3D3D]"
            :iconDown="Images.iconDownBlack" :iconUp="Images.iconUpBlack">
            <div class="border border-[#DFDFDF] py-[18px] px-[20px] space-y-3 mt-4">
              <div class="pb-3 border-b border-[#DFDFDF] flex justify-between">
                <strong class="text-xs text-[#3D3D3D]">Basic</strong>
                <p class="text-xs font-normal text-[#555]">마일리지 적립 X</p>
              </div>
              <div class="pb-3 border-b border-[#DFDFDF] flex justify-between">
                <strong class="text-xs text-[#3D3D3D]">Colored</strong>
                <p class="text-xs font-normal text-[#555]">
                  결제 금액의 <span class="text-[#FF4F27] font-bold">1%</span> 마일리지 적립
                </p>
              </div>
              <div class="pb-3 border-b border-[#DFDFDF] flex justify-between">
                <strong class="text-xs text-[#3D3D3D]">Premium</strong>
                <p class="text-xs font-normal text-[#555]">
                  결제 금액의 <span class="text-[#FF4F27] font-bold">3%</span> 마일리지 적립
                </p>
              </div>
            </div>
          </Collapse> -->
          <Select classSelected="text-[14px] font-normal bg-[#F2F4F6] px-[20px] py-[10px] flex justify-between"
            classWrapOption="space-y-1 w-full mt-1 bg-white z-50 overflow-y-auto max-h-[221px]"
            classOption="bg-[#F2F4F6] text-[14px] font-normal w-full px-[20px] py-[10px]" :options="selectOptionsQuantity"
            v-model="selectedQuantity" placeholder="Select an option" placement="bottomLeft">
            <template #icon>
              <img :src="Images.iconDownBlack.src" :alt="Images.iconDownBlack.alt">
            </template>
          </Select>
          <Select classSelected="text-[14px] font-normal bg-[#F2F4F6] px-[20px] py-[10px] flex justify-between"
            classWrapOption="space-y-1 w-full mt-1 bg-white z-50 overflow-y-auto max-h-[221px]"
            classOption="bg-[#F2F4F6] text-[14px] font-normal w-full px-[20px] py-[10px]" :options="selectOptionsColor"
            v-model="selectedColor" placeholder="COLOR" placement="bottomLeft">
            <template #icon>
              <img :src="Images.iconDownBlack.src" :alt="Images.iconDownBlack.alt">
            </template>
          </Select>
        </article>
        <article class="mt-[18px] flex justify-between space-x-[20px]">
          <button v-if="!route.query.inCart" @click="handleAddCart"
            class="border border-[#242424] py-[19px] w-full text-base font-bold text-[#242424]">장바구니</button>
          <button v-else @click="handleEditCart"
            class="border border-[#242424] py-[19px] w-full text-base font-bold text-[#242424]">고치다</button>
          <button class=" bg-[#242424] py-[19px] w-full text-base font-bold text-white"
            @click="handlePayNow">구매하기</button>
          <Notification ref="notification" />
        </article>
      </div>
    </section>

    <section class="mt-[120px]" v-for="(prod, iProd) in product.descriptionsProductDtos" :key="prod.id">
      <h2 class="text-center text-[16px] font-bold" v-html="prod.title"></h2>
      <p class="text-center text-[16px] font-bold" v-html="prod.content"></p>
      <figure class="mt-[30px] relative w-full h-full" :class="{ 'show': isImageVisible[iProd] }">
        <img class="object-cover object-center w-full h-full" :src="prod.path
          " alt="Product">
      </figure>
      <Button @click="toggleImage(iProd)"
        class="border py-[19px] w-full text-base font-bold text-[#242424] flex justify-center items-center space-x-2 border-[#DFDFDF] mt-[96px]">
        <span>상품 설명 접기</span>
        <template #right-icon>
          <img v-if="!isImageVisible[iProd]" class="w-6 h-6" :src="Images.iconDown.src" :alt="Images.iconDown.alt">
          <img v-else class="w-6 h-6" :src="Images.iconUp.src" :alt="Images.iconUp.alt">
        </template>
      </Button>
    </section>

    <section class="mt-[120px]">
      <Collapse :isOpen="true" title="제품정보 고시"
        classTitle="text-[20px] font-bold text-[#242424] flex justify-between py-[18px] border-b border-[#000]"
        :iconDown="Images.iconDownBlack" :iconUp="Images.iconUpBlack">
        <div class="mt-10 overflow-hidden border-t border-b">
          <div class="grid grid-cols-12 h-fit bg-[#FAFBFD] relative"
            v-for="(specification, iSpecification) in product.specifications" :key="iSpecification">
            <strong class="text-[12px] px-[20px] py-[20px] col-span-2" v-html="specification.title"></strong>
            <p class="bg-white py-[20px] px-7 grow col-span-10" v-html="specification.content"></p>
            <div v-if="iSpecification !== product.specifications.length - 1"
              class="h-[1px] w-full absolute bottom-0 left-[20px] right-0 bg-[#F2F4F6]"></div>
          </div>
        </div>
      </Collapse>
    </section>
  </main>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Images from '@/constants/images'
import ImagesProd from '@/constants/imagesProd.js'
import Collapse from '@/components/element/Collapse.vue'
import Select from "@/components/ui/Select.vue"
import Button from '@/components/ui/Button.vue'
import { useRouter, useRoute } from 'vue-router'
import { productService } from '@/services/productService'
import { formatMoney } from '@/utils/formatMoney'
import { calculateSalePrice } from '@/utils/calculateSalePrice'
import { useLoadingStore } from '@/stores/loading';
import Notification from '@/components/element/Notification.vue'
import { cartService } from '@/services/cartService'
const loadingStore = useLoadingStore();

const router = useRouter()
const route = useRoute()
const product = ref({})
const notification = ref()
const selectOptionsQuantity = ref([])
const selectedQuantity = ref(1)
const selectOptionsColor = ref([])
const selectedColor = ref()
const isImageVisible = ref([]);

const toggleImage = (index) => {
  isImageVisible.value[index] = !isImageVisible.value[index];
};

const handleAddCart = async () => {
  loadingStore.updateLoading(true)
  try {
    await cartService.addProd({
      quantity: selectedQuantity.value,
      option: selectedColor.value,
      productId: Number(route.params.id)
    })
    notification.value.isOpen = true
    notification.value.title = '장바구니'
    notification.value.content = '장바구니에  추가완료하였습니다.'
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
  loadingStore.updateLoading(false)
}

const handleEditCart = async () => {
  loadingStore.updateLoading(true)
  try {
    await cartService.editProfileProd(Number(route.params.id), {
      quantity: selectedQuantity.value,
      option: selectedColor.value,
      productId: Number(route.query.inCart)
    })
    notification.value.isOpen = true
    notification.value.title = '장바구니'
    notification.value.content = '장바구니 업데이트가 완료되었습니다.'
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
  loadingStore.updateLoading(false)
}

const callApiGetProd = async () => {
  loadingStore.updateLoading(true)
  try {
    const { data: res } = await productService.getDetail(Number(route.params.id))
    product.value = res.data
    for (let iQuantity = 0; iQuantity < Number(res.data.stockQuantity); iQuantity++) {
      selectOptionsQuantity.value.push({
        label: iQuantity + 1, value: iQuantity + 1
      })
    }
    for (let iColor = 0; iColor < res.data.options.length; iColor++) {
      selectOptionsColor.value.push({
        label: res.data.options[iColor], value: res.data.options[iColor]
      })
    }
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
  loadingStore.updateLoading(false)
}

const callApiGetProdInCart = async () => {
  loadingStore.updateLoading(true)
  try {
    const { data: res } = await cartService.getDetailProd(Number(route.params.id))
    product.value = res.data.productDto
    for (let iQuantity = 0; iQuantity < Number(res.data.productDto.stockQuantity); iQuantity++) {
      selectOptionsQuantity.value.push({
        label: iQuantity + 1, value: iQuantity + 1
      })
    }
    for (let iColor = 0; iColor < res.data.productDto.options.length; iColor++) {
      selectOptionsColor.value.push({
        label: res.data.productDto.options[iColor], value: res.data.productDto.options[iColor]
      })
    }
    selectedQuantity.value = res.data.quantity
    selectedColor.value = res.data.option

  } catch (error) {
    alert(error.response?.data?.message || error)
  }
  loadingStore.updateLoading(false)
}

const handlePayNow = () => {
  if (!selectedColor.value) {
    alert('Option is null')
    return
  }
  const dataProd = {
    id: Number(route.params.id),
    option: selectedColor.value?.trim(),
    quantity: selectedQuantity.value,
    productDto: product.value,
    price: calculateSalePrice(product.value.purchasePrice, product.value.discount)
  }
  localStorage.setItem('prodNow', JSON.stringify(dataProd))
  router.push(`/payment/${route.params.id}`)
}

const handleGlobalEnterKey = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
  }
}

onMounted(async () => {
  document.addEventListener('keydown', handleGlobalEnterKey);
  window.scroll(0, 0)
  if (route.query.inCart) {
    callApiGetProdInCart()
  } else {
    callApiGetProd()
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleGlobalEnterKey);
})
</script>
<style scoped>
figure {
  max-height: 802px;
  overflow: hidden;
  transition: max-height 5s ease-in-out;
}

figure.show {
  max-height: none;
}
</style>