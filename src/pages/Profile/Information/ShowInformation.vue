<template>
  <section class="pb-[28px] border-b-[4px] border-black w-full flex justify-between items-end">
    <div class="flex justify-start gap-x-[28px]">
      <div class="w-[80px] h-[80px] rounded-full overflow-hidden">
        <img class="object-cover w-full h-full" :src="user?.thumbnail" alt="user">
      </div>
      <div class="flex flex-col justify-center gap-y-2">
        <h5 class="text-[28px] font-bold text-[#111]">{{ user?.nickName }}</h5>
        <!-- <span class="px-4 py-1 text-white bg-[#414141] rounded-full w-fit">Colored</span> -->
      </div>
    </div>
    <button class="w-[318px] px-9 py-[10px] text-[14px] font-bold border border-[#DFDFDF]"
      @click="router.push('/profile/information/edit-profile')">
      개인정보 수정
    </button>
  </section>
  <section class="mt-[60px]">
    <h4 class="text-[20px] font-bold">쇼핑정보</h4>
    <div class="mt-[24px] py-[48px] flex justify-center items-end gap-x-[48px] bg-[#111]">
      <div class="space-y-[6px] flex flex-col items-center">
        <span class="text-[14px] text-white font-normal">결제완료</span>
        <strong class="text-[28px] text-white">{{ paid.length }}</strong>
      </div>
      <img class="h-[24px] w-[24px] translate-y-[-25%]" :src="Images.iconRight.src" :alt="Images.iconRight.alt">
      <div class="space-y-[6px] flex flex-col items-center">
        <span class="text-[14px] text-white font-normal">결제완료</span>
        <strong class="text-[28px] text-white">{{ shipping.length }}</strong>
      </div>
      <img class="h-[24px] w-[24px] translate-y-[-25%]" :src="Images.iconRight.src" :alt="Images.iconRight.alt">
      <div class="space-y-[6px] flex flex-col items-center">
        <span class="text-[14px] text-white font-normal">결제완료</span>
        <strong class="text-[28px] text-white">{{ shipped.length }}</strong>
      </div>
    </div>
  </section>
  <section class="mt-[72px] border-t-[2px] border-[#111]">
    <table class="w-full border-separate table-auto border-spacing-y-4">
      <thead>
        <tr class="border-b">
          <th class="pb-4 text-center border-b text-[12px] font-bold">주문일 </th>
          <th class="pb-4 text-center border-b text-[12px] font-bold">주문내역</th>
          <th class="pb-4 text-center border-b text-[12px] font-bold">주문상태</th>
          <!-- <th class="pb-4 text-center border-b text-[12px] font-bold">마일리지</th> -->
          <th class="pb-4 text-center border-b text-[12px] font-bold">총 결제금액</th>
          <th class="pb-4 text-center border-b text-[12px] font-bold"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="prod in listProdPayment" :key="prod.id">
          <td class=" pb-4 border-b text-center text-[12px] font-normal text-[#555555]">{{ prod.orderDate }}</td>
          <td class=" pb-4 border-b flex items-center gap-x-[20px]">
            <figure class="w-[80px] h-[80px] overflow-hidden flex justify-center items-center"
              style="background: linear-gradient(155deg,#f2f4f6 0%,rgba(255, 255, 255, 0.81) 100%);">
              <img class="object-cover w-full h-full" :src="prod?.product?.thumbnail" alt="product" />
            </figure>
            <div>
              <strong class="text-[16px] text-[#242424]">{{ prod?.product?.name }}</strong>
              <div class="flex mt-[7px] space-x-4 h-full w-fit">
                <p
                  class="text-[12px] font-normal text-[#6F6F6F] relative after:content-[''] after:block after:absolute after:top-0 after:right-0 after:mr-[-8px] after:w-[1px] after:h-full after:bg-[#DFDFDF]">
                  옵션 - {{ prod?.option }}
                </p>
                <span class="text-[12px] font-normal text-[#6F6F6F]">수량 - {{ prod?.quantity }}개</span>
              </div>
            </div>
          </td>
          <td class="pb-4 border-b ">
            <div class="flex justify-center w-full">
              <button class="px-[21px] py-2 bg-[#F2F4F6] text-[12px] font-bold mx-auto">{{ prod?.status }}</button>
            </div>
          </td>
          <!-- <td class=" pb-4 border-b text-center text-[12px] font-normal text-[#FF4F27]">350P</td> -->
          <td class=" pb-4 border-b text-center text-[12px] font-normal text-[#555555]">{{ prod?.quantity *
            calculateSalePrice(prod?.product?.purchasePrice, prod?.product?.discount) }}원</td>
          <td class="pb-4 border-b ">
            <div class="flex flex-col items-center justify-center w-full gap-y-2">
              <button class="px-[44px] py-[6px] border border-[#F2F4F6] text-[12px] font-normal mx-auto">문의하기</button>
              <button class="px-[44px] py-[6px] border border-[#F2F4F6] text-[12px] font-normal mx-auto">배송조회</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script setup>
import Images from '@/constants/images'
import ImagesProd from '@/constants/imagesProd'
import { userService } from '@/services/userService'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useLoadingStore } from '@/stores/loading';
import { orderService } from '@/services/orderService'
import { calculateSalePrice } from '@/utils/calculateSalePrice'

const loadingStore = useLoadingStore();

const router = useRouter()
const user = ref()
const paid = ref([])
const shipping = ref([])
const shipped = ref([])

const listProdPayment = computed(() => {
  return [...paid.value, ...shipping.value, ...shipped.value]
})

const getProfileUser = async () => {
  loadingStore.updateLoading(true)
  try {
    const { data: res } = await userService.getProfile()
    user.value = res.data
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
  loadingStore.updateLoading(false)
}

const getOrderStatisticsApi = async () => {
  loadingStore.updateLoading(true)
  try {
    const { data: res } = await orderService.getOrderStatistics()
    paid.value = res.data.paid
    shipping.value = res.data.shipping
    shipped.value = res.data.shipped
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
  loadingStore.updateLoading(false)
}

const getListOrder = async () => {
  loadingStore.updateLoading(true)
  try {
    const { data: res } = await orderService.getOrderDetail()
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
  loadingStore.updateLoading(false)
}


onMounted(async () => {
  await Promise.all([getProfileUser(), getOrderStatisticsApi(), getListOrder()])
})
</script>
<style scoped></style>