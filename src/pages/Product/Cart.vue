<template>
  <main class="container mx-auto mt-[60px] grid grid-cols-3 gap-x-9 mb-[170px]">
    <section class="col-span-2">
      <div class="pb-[28px] border-b-[4px] border-black w-full text-start">
        <h1 class="text-[28px] font-bold">장바구니</h1>
      </div>
      <Checkbox type="checkbox" :label="`전체선택(${quantityProdChecked}/${cart.length})`"
        classLabel="text-[14px] font-normal text-[#555]" name="all"
        inputClass="w-6 h-6 border appearance-none checked:scale-150 checked:opacity-0 peer/all"
        checkmarkClass="absolute left-0 w-6 h-6 transparent peer-checked/all:bg-[#FF4F27] after:absolute after:left-2 after:top-[2px] after:w-2 after:h-4 after:border-[3px] after:border-white after:border-t-0 after:border-l-0 after:transform after:rotate-45"
        className="mt-7 relative flex w-full justify-start gap-x-3" id="check-all" v-model="valueCheckBoxAll" />
      <div class="mt-[17px] bg-[#3D3D3D] w-full h-[1px]"></div>
      <article class="mt-7 space-y-[20px]">
        <Checkbox v-for="prod in cart" :key="prod.id" type="checkbox" :name="`product${prod.id}`"
          inputClass="w-6 h-6 border appearance-none checked:scale-150 checked:opacity-0 peer/all"
          checkmarkClass="absolute left-0 w-6 h-6 transparent peer-checked/all:bg-[#FF4F27] after:absolute after:left-2 after:top-[2px] after:w-2 after:h-4 after:border-[3px] after:border-white after:border-t-0 after:border-l-0 after:transform after:rotate-45"
          className="relative flex w-full justify-start items-start gap-x-3 pb-[24px] border-b border-[#DFDFDF]"
          id="check-all" v-model="prod.checkBox">
          <template #label>
            <div class="relative flex items-center justify-between w-full gap-x-[40px]">
              <div class="flex gap-x-[20px]">
                <figure class="w-[80px] h-[80px] overflow-hidden flex justify-center items-center"
                  style="background: linear-gradient(155deg, #F2F4F6 0%, rgba(255, 255, 255, 0.81) 100%);">
                  <img class="object-contain w-full h-full" :src="prod?.productDto?.thumbnail" alt="Product">
                </figure>
                <div>
                  <strong class="text-[16px] text-[#242424]">{{ prod?.productDto?.name }}</strong>
                  <p class="text-[12px] font-normal text-[#6F6F6F]">옵션 - {{ prod?.option }}</p>
                  <span class="text-[12px] font-normal text-[#6F6F6F]">수량 - {{ prod?.quantity }}</span>
                </div>
              </div>
              <div class="flex items-center justify-end grow">
                <div class="space-x-[20px]">
                  <button class="text-[#242424] text-[12px] font-normal px-[28px] py-[6px] border border-[#DFDFDF]"
                    @click="router.push(`/product-detail/${prod.id}?inCart=${prod.productDto.id}`)">옵션변경</button>
                  <button class="text-[#242424] text-[12px] font-normal px-[28px] py-[6px] border border-[#DFDFDF]"
                    @click="router.push(`/product-detail/${prod.id}?inCart=${prod.productDto.id}`)">수량변경</button>
                </div>
                <div class="space-x-[6px] ml-[40px]">
                  <span class="text-[#FF4F27] font-bold text-[12px]">{{ prod?.productDto?.discount }}%</span>
                  <strong class="text-[#111111] text-[16px]">{{ formatMoney(prod?.price) }}</strong>
                </div>
                <button class="w-4 h-4 ml-4 mr-[2px]" @click="delProd(prod?.id)">
                  <img class="w-full h-full" :src="Images.iconExit.src" :alt="Images.iconExit.src">
                </button>
              </div>
            </div>
          </template>
        </Checkbox>
      </article>
    </section>
    <section>
      <div class="mt-[72px] col-span-1 border-t-[4px] border-black px-[20px] pt-[32px] pb-[40px]">
        <article class="pb-[14px] border-b border-[#DFDFDF] w-full text-center">
          <h4 class="text-[16px] font-bold">장바구니</h4>
        </article>
        <article class="pb-[24px] border-b border-[#DFDFDF] space-y-[24px] mt-[24px]">
          <div class="flex justify-between">
            <p class="text-[12px] font-normal text-[#8B8B8B]">주문 상품 수</p>
            <strong class="text-[16px] text-[#111111]">{{ quantityProdChecked }}개</strong>
          </div>
          <div class="flex justify-between">
            <p class="text-[12px] font-normal text-[#8B8B8B]">총 주문 금액</p>
            <strong class="text-[16px] text-[#111111]">{{ formatMoney(totalOrderAmount) }}원</strong>
          </div>
          <div class="flex justify-between">
            <p class="text-[12px] font-normal text-[#8B8B8B]">배송비</p>
            <strong class="text-[16px] text-[#111111]">{{ formatMoney(deliveryCharges) }}원</strong>
          </div>
        </article>
        <article class="mt-[14px] flex justify-between">
          <p class="text-[14px] font-bold text-[#3D3D3D]">총 결제금액</p>
          <strong class="text-[24px] text-[#FF2618]">{{ formatMoney(totalPaymentAmount) }}원</strong>
        </article>
        <button class="w-full mt-10 py-4 px-9 bg-[#111111] text-white text-[16px] font-bold"
          @click="handleEditStatusProd">결제하기</button>
      </div>
    </section>
  </main>
</template>
<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import Checkbox from '@/components/ui/Checkbox.vue';
import ImagesProd from '@/constants/imagesProd'
import Images from '@/constants/images'
import { useRouter } from 'vue-router'
import { formatMoney } from '@/utils/formatMoney'
import { cartService } from '@/services/cartService'
import { useLoadingStore } from '@/stores/loading';
import { calculateSalePrice } from '@/utils/calculateSalePrice';
const loadingStore = useLoadingStore();

const cart = ref([])

const router = useRouter()
const valueCheckBoxAll = ref(false);

const quantityProdChecked = computed(() => {
  return cart.value.filter((prod) => prod.checkBox).length
});

const totalOrderAmount = computed(() => {
  let total = 0
  cart.value.forEach((prod) => {
    if (prod.checkBox) {
      total += prod.price * prod.quantity
    }
  })
  return total
})

const deliveryCharges = ref(0)

const totalPaymentAmount = computed(() => {
  return totalOrderAmount.value + deliveryCharges.value
})

const delProd = async (id) => {
  loadingStore.updateLoading(true)
  try {
    const { data: res } = await cartService.delProd(id)
    callApiGetCart()
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
  loadingStore.updateLoading(false)
}

watch(quantityProdChecked, () => {
  if (quantityProdChecked.value === cart.value.length) {
    valueCheckBoxAll.value = true
  } else {
    valueCheckBoxAll.value = false
  }
})

const handleEditStatusProd = async () => {
  if (quantityProdChecked.value === 0) return;

  const checkedProductIds = cart.value
    .filter(prod => prod.checkBox)
    .map(prod => prod.id);

  loadingStore.updateLoading(true);

  try {
    await cartService.editStatusProd({
      ids: checkedProductIds
    });
    router.push('/payment');
  } catch (error) {
    alert(error.response?.data?.message || error);
  }

  loadingStore.updateLoading(false);
}

watch(valueCheckBoxAll, () => {
  valueCheckBoxAll.value && cart.value.forEach((prod) => {
    prod.checkBox = true
  })
  !valueCheckBoxAll.value && quantityProdChecked.value === cart.value.length && cart.value.forEach((prod) => {
    prod.checkBox = false
  })
})

const callApiGetCart = async () => {
  loadingStore.updateLoading(true)
  try {
    const { data: res } = await cartService.getCart()
    cart.value = res.data.map(item => {
      return { ...item, checkBox: item.status, price: calculateSalePrice(item.productDto.purchasePrice, item.productDto.discount) }
    })
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
  loadingStore.updateLoading(false)
}

onMounted(async () => {
  callApiGetCart()
})

</script>
<style scoped></style>