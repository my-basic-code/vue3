<template>
  <main class="container mx-auto mt-[60px] mb-[87px] grid grid-cols-3 gap-x-9">
    <section class="col-span-2">
      <h1 class="pb-[28px] border-b-[4px] border-black w-full text-start text-[28px] font-bold">
        주문/결제
      </h1>
      <article class="mt-7">
        <div class="pb-4 border-b border-[#3D3D3D] flex justify-between w-full">
          <strong>주문상품</strong>
          <p class="text-xs font-bold text-[#3D3D3D]">
            총 <span class="text-[#FF4F27]">1</span>개
          </p>
        </div>
        <div class="mt-4 space-y-3">
          <div class="relative flex items-center justify-between w-full gap-x-[40px]" v-for="prod in listProdPayment"
            :key="prod.id">
            <div class="flex items-center gap-x-[20px]">
              <figure class="w-[80px] h-[80px] overflow-hidden flex justify-center items-center" style="
                  background: linear-gradient(
                    155deg,
                    #f2f4f6 0%,
                    rgba(255, 255, 255, 0.81) 100%
                  );
                ">
                <img class="object-contain w-full h-full" :src="prod?.productDto?.thumbnail" alt="product" />
              </figure>
              <div>
                <strong class="text-[16px] text-[#242424]">{{ prod?.productDto?.name }}</strong>
                <div class="flex mt-[7px] space-x-4 h-full w-fit">
                  <p
                    class="text-[12px] font-normal text-[#6F6F6F] relative after:content-[''] after:block after:absolute after:top-0 after:right-0 after:mr-[-8px] after:w-[1px] after:h-full after:bg-[#DFDFDF]">
                    옵션 - {{ prod?.option }}
                  </p>
                  <span class="text-[12px] font-normal text-[#6F6F6F]">수량 - {{ prod?.quantity }}개</span>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-end grow">
              <div class="space-x-[6px] ml-[40px]">
                <span class="text-[#FF4F27] font-bold text-[12px]">{{ prod?.productDto?.discount }}%</span>
                <strong class="text-[#111111] text-[16px]">{{ formatMoney(prod?.price) }}</strong>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article class="mt-[51px]">
        <div class="pb-4 border-b border-[#3D3D3D]">
          <strong>배송지 정보</strong>
          <Checkbox type="checkbox" label="기본배송지" classLabel="text-[14px] font-normal text-[#555555]" name="all"
            inputClass="w-6 h-6 border appearance-none checked:scale-150 checked:opacity-0 peer/all"
            checkmarkClass="absolute left-0 w-6 h-6 transparent peer-checked/all:bg-[#FF4F27] after:absolute after:left-2 after:top-[2px] after:w-2 after:h-4 after:border-[3px] after:border-white after:border-t-0 after:border-l-0 after:transform after:rotate-45"
            className="mt-7 relative flex w-full justify-start gap-x-3" id="check-all" v-model="defaultShippingAddress" />
        </div>
        <div class="mt-[26px] space-y-[24px]">
          <Input wrapClass="flex items-center" label="배송지명" type="text" placeholder="배송지명을 입력해 주세요"
            classLabel="block text-base font-bold flex items-start whitespace-nowrap w-[82px]"
            :className="`px-5 py-4 w-full ${classInputCustom[2].input}`" :disabled="isCheckCertification"
            v-model="formData.shippingAddress" name="shippingAddress">
          <template #sub-label>
            <span class="text-xs text-[#FF3609] font-normal">*</span>
          </template>
          </Input>
          <Input wrapClass="flex items-center" label="받는분 " type="text" placeholder="받으시는분을 입력해주세요"
            classLabel="block text-base font-bold flex items-start whitespace-nowrap w-[82px]"
            :className="`px-5 py-4 w-full ${classInputCustom[2].input}`" :disabled="isCheckCertification"
            v-model="formData.receiver" name="receiver">
          <template #sub-label>
            <span class="text-xs text-[#FF3609] font-normal">*</span>
          </template>
          </Input>
          <Input wrapClass="flex items-center" label="연락처 " type="number" placeholder="연락처를 입력해주세요"
            classLabel="block text-base font-bold flex items-start whitespace-nowrap w-[82px]"
            :className="`px-5 py-4 w-full ${classInputCustom[2].input}`" :disabled="isCheckCertification"
            v-model="formData.phone" name="phone">
          <template #sub-label>
            <span class="text-xs text-[#FF3609] font-normal">*</span>
          </template>
          </Input>
          <div class="flex justify-between gap-x-[18px]">
            <Input wrapClass="flex items-center grow" label="우편번호 " type="number" placeholder="우편번호를 검색해주세요"
              classLabel="block text-base font-bold flex items-start whitespace-nowrap w-[82px]"
              :className="`px-5 py-4 w-full ${classInputCustom[2].input}`" :disabled="isCheckCertification"
              v-model="formData.mailboxNumber" name="mailboxNumber">
            <template #sub-label>
              <span class="text-xs text-[#FF3609] font-normal">*</span>
            </template>
            </Input>
            <button class="p-[17px] border border-[#F2F4F6] text-[14px] font-normal"
              @click="handlerSearchAddress">우편번호</button>
          </div>
          <div>
            <Input wrapClass="flex items-center" label="주소" type="text" placeholder="주소를 입력해주세요"
              classLabel="block text-base font-bold flex items-start whitespace-nowrap w-[82px]"
              :className="`px-5 py-4 w-full ${classInputCustom[2].input}`" :disabled="isCheckCertification"
              v-model="formData.address1" name="address1">
            <template #sub-label>
              <span class="text-xs text-[#FF3609] font-normal">*</span>
            </template>
            </Input>
            <Input wrapClass="flex items-center" type="text" placeholder="상세주소를 입력해주세요"
              :className="`ml-[73px] px-5 py-4 mt-[16px] w-full ${classInputCustom[2].input}`"
              :disabled="isCheckCertification" v-model="formData.address2" name="address2">
            </Input>
          </div>
          <Input wrapClass="flex items-center" label="요청사항 " type="text" placeholder="배송시 요청사항을 입력해 주세요"
            classLabel="block text-base font-bold flex items-start whitespace-nowrap w-[82px]"
            :className="`px-5 py-4 w-full ${classInputCustom[2].input}`" :disabled="isCheckCertification"
            v-model="formData.separateRequest" name="separateRequest">
          <template #sub-label>
            <span class="text-xs text-[#FF3609] font-normal">*</span>
          </template>
          </Input>
        </div>
      </article>
      <!-- <article class="mt-[48px]">
        <div class="pb-4 border-b border-[#3D3D3D]">
          <strong>마일리지 사용</strong>
        </div>
        <div class="mt-[16px]">
          <div class="flex justify-between gap-x-[18px]">
            <Input wrapClass="flex items-center grow" label="마일리지" type="text" placeholder="0 P"
              classLabel="block text-base font-bold flex items-start whitespace-nowrap w-[82px]"
              :className="`px-5 py-4 w-full ${classInputCustom[2].input} placeholder:text-end`"
              :disabled="isCheckCertification" v-model="data.nameAddress">
            </Input>
            <button class="p-[17px] border border-[#F2F4F6] text-[14px] font-normal">모두사용</button>
          </div>
          <p class="text-[14px] font-normal text-[#6F6F6F] mt-3 ml-[73px]">
            잔여 마일리지 : 400P
          </p>
        </div>
      </article> -->
      <article class="mt-[48px]">
        <div class="pb-4 border-b border-[#3D3D3D]">
          <strong>결제방법</strong>
        </div>
        <Radio class="mt-4 flex justify-start space-x-[11px]" classInput="hidden"
          className="border border-[#DFDFDF] text-center text-[#A5A5A5] py-[10px] px-9 cursor-pointer text-sm"
          classActive="border-gray-700 text-stone-950 font-bold" v-model="paymentMethods" :options="options"></Radio>
      </article>
    </section>

    <section>
      <div class="mt-[72px] col-span-1 border-t-[4px] border-black px-[20px] pt-[32px] pb-[40px]">
        <article class="pb-[14px] border-b border-[#DFDFDF] w-full text-center">
          <h4 class="text-[16px] font-bold">결제 금액</h4>
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
          <!-- <div class="flex justify-between">
            <p class="text-[12px] font-normal text-[#8B8B8B]">마일리지 사용</p>
            <strong class="text-[16px] text-[#111111]">-300원</strong>
          </div> -->
        </article>
        <!-- <article class="pb-[24px] border-b border-[#DFDFDF] space-y-[24px] mt-[15px]">
          <div class="flex justify-between">
            <p class="text-[12px] font-normal text-[#8B8B8B]">
              적립 예정 마일리지
            </p>
            <div class="flex items-start gap-x-[6px]">
              <span class="text-[12px] font-normal text-white bg-[#8B8B8B] rounded-full px-[6px]">Colored</span>
              <strong class="text-[16px] text-[#111111]">+300P</strong>
            </div>
          </div>
        </article> -->
        <article class="mt-[14px] flex justify-between">
          <p class="text-[14px] font-bold text-[#3D3D3D]">총 결제금액</p>
          <strong class="text-[24px] text-[#FF2618]">{{ formatMoney(totalPaymentAmount) }}원</strong>
        </article>
        <button @click="completePayment" class="w-full mt-10 py-4 px-9 bg-[#111111] text-white text-[16px] font-bold"
          :disabled="validateFormData">
          {{ formatMoney(totalPaymentAmount) }}원 결제하기
        </button>
      </div>
    </section>
  </main>
</template>
<script setup>
import { computed, onMounted, ref, watch } from "vue"
import { useRoute } from 'vue-router'
import ImagesProd from "@/constants/imagesProd"
import Checkbox from "@/components/ui/Checkbox.vue"
import Input from "@/components/ui/Input.vue"
import { classBtn, classInputCustom } from "@/utils/customClass.js"
import Radio from "@/components/ui/Radio.vue"
import { cartService } from "@/services/cartService"
import { paymentService } from "@/services/paymentService"
import { formatMoney } from '@/utils/formatMoney'
import useGetAddress from '@/helper/getMailBoxNumber'
import { useLoadingStore } from '@/stores/loading';
import { calculateSalePrice } from "@/utils/calculateSalePrice"
import { productService } from "@/services/productService"

const loadingStore = useLoadingStore();
const route = useRoute()
const { handlerSearchAddress, dataGetAddress } = useGetAddress();

const formData = ref({
  shippingAddress: "",
  receiver: "",
  phone: "",
  mailboxNumber: "",
  address1: "",
  address2: "",
  separateRequest: "",
})
const validateFormData = computed(() => {
  return !formData.value.shippingAddress || !formData.value.receiver || !formData.value.phone || !formData.value.mailboxNumber || !formData.value.address1 || !formData.value.separateRequest
})
const defaultShippingAddress = ref(true)
const listProdPayment = ref([])
const quantityProdChecked = computed(() => {
  return listProdPayment.value.length
});

const totalOrderAmount = computed(() => {
  let total = 0
  listProdPayment.value.forEach((prod) => {
    total += prod.price * prod.quantity
  })
  return total
})
const deliveryCharges = ref(0)
const totalPaymentAmount = computed(() => {
  return totalOrderAmount.value + deliveryCharges.value
})
const paymentMethods = ref('카드')
const options = [
  { label: "카드결제", value: '카드' },
  { label: "계좌이체", value: '계좌이체' },
  { label: "가상계좌", value: '가상계좌' },
]

const completePayment = async () => {
  const ids = []
  listProdPayment.value.forEach(prod => {
    ids.push(prod.id)
  })
  try {
    const { data: res } = await paymentService.postPayment({
      cartIds: ids,
      deliveryAddressDefault: {
        deliveryAddress: formData.value.shippingAddress,
        receiver: formData.value.receiver,
        phoneNumber: formData.value.phone,
        numberOfMailbox: formData.value.mailboxNumber,
        address1: formData.value.address1,
        address2: formData.value.address2,
        otherRequest: formData.value.separateRequest,
        default: defaultShippingAddress.value
      },
      paymentMethod: paymentMethods.value === "카드" ? 1 : paymentMethods.value === "계좌이체" ? 2 : 3,
    })
    const orderId = `${res.data.code}-${Date.now()}`
    const clientKey = import.meta.env.VITE_TOSSPAYMENT_CLIENT_KEY
    const tossPayments = TossPayments(clientKey)
    const tossPaymentsForm = {
      amount: formatMoney(totalPaymentAmount.value, false),
      orderId: orderId,
      orderName: `order-${orderId}`,
      customerName: formData.value.receiver,
      successUrl: window.location.origin + '/order',
      failUrl: window.location.origin + '/payment',
    }
    tossPayments.requestPayment(paymentMethods.value, tossPaymentsForm)
  } catch (error) {
    console.log('🚀 ~ file: Payment.vue:289 ~ completePayment ~ error:', error)
    alert(error.response?.data?.message || error)
  }

}

const getListProdPayment = async () => {
  loadingStore.updateLoading(true)
  try {
    const { data: res } = await cartService.getListProdPayment()
    listProdPayment.value = res.data.map(item => {
      return { ...item, price: calculateSalePrice(item.productDto.purchasePrice, item.productDto.discount) }
    })
    console.log('🚀 ~ file: Payment.vue:293 ~ getListProdPayment ~ listProdPayment:', listProdPayment.value)
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
  loadingStore.updateLoading(false)
}

const getProdPayment = async () => {
  loadingStore.updateLoading(true)
  try {
    const { data: res } = await productService.getDetail(Number(route.params.id))
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
  loadingStore.updateLoading(false)
}

const getUserDeliveryAddress = async () => {
  loadingStore.updateLoading(true)
  try {
    const { data: res } = await paymentService.getDeliveryAddress()
    formData.value = {
      shippingAddress: res.data?.deliveryAddress,
      receiver: res.data?.receiver,
      phone: res.data?.phoneNumber,
      mailboxNumber: res.data?.numberOfMailbox,
      address1: res.data?.address1,
      address2: res.data?.address2,
      separateRequest: res.data?.otherRequest,
    }
  } catch (error) {
    alert(error.response?.data?.message || error)
  }
  loadingStore.updateLoading(false)
}

watch(dataGetAddress.value, () => {
  formData.value.mailboxNumber = dataGetAddress.value.zip
})

onMounted(async () => {
  if (route.params.id) {
    await Promise.all([getProdPayment(), getUserDeliveryAddress()])
  } else {
    await Promise.all([getListProdPayment(), getUserDeliveryAddress()])
  }
})
</script>
<style scoped></style>
