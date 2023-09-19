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
          <td class="pb-4 border-b text-center text-[12px] font-normal text-[#555555]">{{ prod.order.orderDate }}</td>
          <td class="pb-4 border-b">
            <div class="flex items-center gap-x-[20px]">
              <figure class="w-[80px] h-[80px] overflow-hidden flex justify-center items-center"
                style="background: linear-gradient(155deg,#f2f4f6 0%,rgba(255, 255, 255, 0.81) 100%);">
                <img class="object-contain w-full h-full" :src="prod?.thumbnail" alt="product" />
              </figure>
              <div class="cursor-pointer" @click="showProdInformation(prod)">
                <strong class="text-[16px] text-[#242424]">{{ prod?.productName }}</strong>
                <div class="flex mt-[7px] space-x-4 h-full w-fit">
                  <p
                    class="text-[12px] font-normal text-[#6F6F6F] relative after:content-[''] after:block after:absolute after:top-0 after:right-0 after:mr-[-8px] after:w-[1px] after:h-full after:bg-[#DFDFDF]">
                    옵션 - {{ prod?.option }}
                  </p>
                  <span class="text-[12px] font-normal text-[#6F6F6F]">수량 - {{ prod?.quantity }}개</span>
                </div>
              </div>
            </div>
          </td>
          <td class="pb-4 border-b ">
            <div class="flex justify-center w-full">
              <div class="px-[21px] py-2 bg-[#F2F4F6] text-[12px] font-bold mx-auto">
                {{ checkStatus(prod?.status) }}
              </div>
            </div>
          </td>
          <!-- <td class="pb-4 border-b text-center text-[12px] font-normal text-[#FF4F27]">350P</td> -->
          <td class="pb-4 border-b text-center text-[12px] font-normal text-[#555555]">{{ formatMoney(prod?.price) }}원
          </td>
          <td class="pb-4 border-b ">
            <div class="flex flex-col items-center justify-center w-full gap-y-2">
              <button class="px-[44px] py-[6px] border border-[#F2F4F6] min-w-[132px] text-[12px] font-normal mx-auto"
                @click="handleQuestion(prod)">문의하기</button>
              <button v-if="prod.status >= 3"
                class="px-[44px] py-[6px] border border-[#F2F4F6] min-w-[132px] text-[12px] font-normal mx-auto"
                @click="router.push(`/product-detail/${prod?.product?.id}`)">재구매</button>
              <a v-if="prod.status = 2" href="https://www.cjlogistics.com/ko/tool/parcel/tracking" target="_blank"
                class="px-[44px] py-[6px] border border-[#F2F4F6] min-w-[132px] text-[12px] font-normal mx-auto">배송조회</a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  <div v-if="cartSummary.isShow">
    <section class="mt-[60px] pb-[30px] border-b border-[#3D3D3D]">
      <article>
        <div class="pb-4 border-b-[4px] border-[#3D3D3D] flex justify-between w-full">
          <strong class="text-[20px]">결제 정보</strong>
        </div>
      </article>

      <article class="pb-[20px] border-b border-[#DFDFDF] space-y-[16px] mt-[33px]">
        <div class="flex justify-between">
          <p class="text-[14px] font-normal text-[#8B8B8B]">주문 상품 수</p>
          <strong class="text-[16px] text-[#111111]">{{ cartSummary.quantityProd }}개</strong>
        </div>
        <div class="flex justify-between">
          <p class="text-[14px] font-normal text-[#8B8B8B]">총 주문 금액</p>
          <strong class="text-[16px] text-[#111111]">{{ formatMoney(cartSummary.totalOrderAmount) }}원</strong>
        </div>
        <!-- <div class="flex justify-between">
          <p class="text-[14px] font-normal text-[#8B8B8B]">배송비</p>
          <div class="flex items-center space-x-4">
            <p class="text-[16px] font-normal text-[#8B8B8B]">(5만원 이상 구매 시 무료배송)</p>
            <strong class="text-[16px] text-[#111111]">3,500원</strong>
          </div>
        </div>
        <div class="flex justify-between">
          <p class="text-[14px] font-normal text-[#8B8B8B]">적립예정 마일리지</p>
          <strong class="text-[16px] text-[#FF4F27]">200P</strong>
        </div> -->
      </article>
      <article class="mt-[16px] flex justify-between">
        <p class="text-[20px] font-bold text-[#3D3D3D]">총 결제금액</p>
        <strong class="text-[20px] text-[#FF2618]">{{ formatMoney(cartSummary.totalPaymentAmount) }}원</strong>
      </article>
    </section>
    <section class="mt-[60px]">
      <div class="pb-4 border-b-[4px] border-[#3D3D3D] flex justify-between w-full">
        <strong class="text-[20px]">결제 정보</strong>
      </div>
      <div class="flex justify-start mt-7 gap-x-[60px]">
        <div class="space-y-3">
          <p class="space-x-2 text-[14px] font-normal text-[#6F6F6F]">
            <span>{{ cartSummary.receiver }}</span>
            <span>{{ cartSummary.phoneNumber }}</span>
          </p>
          <p class="text-[14px] font-normal text-[#6F6F6F]">
            {{ cartSummary.deliveryAddress }}
          </p>
          <p class="space-x-2 text-[14px] font-normal text-[#6F6F6F]">
            <span class="text-[#A5A5A5]">요청사항</span>
            <span>{{ cartSummary.otherRequest }}</span>
          </p>
        </div>
      </div>
    </section>
  </div>
  <PopupQuestionOrder ref="popupQuestionOrder" />
</template>
<script setup>
import Images from '@/constants/images'
import { userService } from '@/services/userService'
import { computed, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useLoadingStore } from '@/stores/loading';
import { orderService } from '@/services/orderService'
import { formatMoney } from '@/utils/formatMoney'
import { checkStatus } from '@/utils/checkStatus'
import PopupQuestionOrder from '@/components/element/PopupQuestionOrder.vue';

const loadingStore = useLoadingStore();

const router = useRouter()
const popupQuestionOrder = ref()
const user = ref()
const paid = ref([])
const shipping = ref([])
const shipped = ref([])
const listProdPayment = ref([])

const cartSummary = reactive({
  isShow: false,
  quantityProd: 0,
  totalOrderAmount: 0,
  deliveryCharges: 0,
  receiver: null,
  phoneNumber: null,
  deliveryAddress: null,
  otherRequest: null,
  totalPaymentAmount: computed(() => {
    return cartSummary.totalOrderAmount + cartSummary.deliveryCharges;
  })
});

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
    const { data: res } = await orderService.getOrderDetail({
      statuses: '0,1,2,3,4,5,6,7,8,9,10,11'
    })
    listProdPayment.value = res.data
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
  loadingStore.updateLoading(false)
}

const handleQuestion = async (prod) => {
  popupQuestionOrder.value.isOpen = true
  popupQuestionOrder.value.data.selectedProd = prod
}

const showProdInformation = (prod) => {
  cartSummary.isShow = true
  cartSummary.quantityProd = prod.quantity
  cartSummary.totalOrderAmount = prod.price
  cartSummary.receiver = prod.order.receiver
  cartSummary.phoneNumber = prod.order.phoneNumber
  cartSummary.deliveryAddress = prod.order.deliveryAddress
  cartSummary.otherRequest = prod.order.otherRequest
}


onMounted(async () => {
  await Promise.all([getProfileUser(), getOrderStatisticsApi(), getListOrder()])
})
</script>
<style scoped></style>