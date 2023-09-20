<template>
  <article>
    <h3 class="text-2xl font-bold">
      이용약관에 <br />
      동의해주세요
    </h3>
    <Checkbox type="checkbox" label="전체동의" classLabel="text-base font-bold" name="all"
      inputClass="w-6 h-6 border appearance-none checked:scale-150 checked:opacity-0 peer/all"
      checkmarkClass="absolute right-0 w-6 h-6 transparent peer-checked/all:bg-[#FF4F27] after:absolute after:left-2 after:top-[2px] after:w-2 after:h-4 after:border-[3px] after:border-white after:border-t-0 after:border-l-0 after:transform after:rotate-45"
      className="mt-10 relative flex flex-row-reverse w-full justify-between" id="check-all"
      v-model="store.valueCheckBox.all" />
    <div class="mt-[17px] bg-[#3D3D3D] w-full h-[4px] lg:h-[1px]"></div>
    <Checkbox type="checkbox" name="old"
      inputClass="absolute right-0 w-6 h-6 border appearance-none checked:scale-150 checked:opacity-0 peer/old"
      checkmarkClass="absolute right-0 w-6 h-6 transparent peer-checked/old:bg-[#FF4F27] after:absolute after:left-2 after:top-[2px] after:w-2 after:h-4 after:border-[3px] after:border-white after:border-t-0 after:border-l-0 after:transform after:rotate-45"
      className="mt-7 relative flex w-full justify-between" id="check-old" v-model="store.valueCheckBox.old">
      <template #label>
        <Collapse title="만 14세 이상(필수)" :iconDown="Images.iconDown" :iconUp="Images.iconUp">
          <div class="bg-[#FAFBFD] text-[#8B8B8B] text-xs font-normal mt-[18px] leading-[136%]">
            이용자는 “몰”이 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.
          </div>
        </Collapse>
      </template>
    </Checkbox>
    <Checkbox type="checkbox" name="service1"
      inputClass="absolute right-0 w-6 h-6 border appearance-none checked:scale-150 checked:opacity-0 peer/service1"
      checkmarkClass="absolute right-0 w-6 h-6 transparent peer-checked/service1:bg-[#FF4F27] after:absolute after:left-2 after:top-[2px] after:w-2 after:h-4 after:border-[3px] after:border-white after:border-t-0 after:border-l-0 after:transform after:rotate-45"
      className="mt-7 relative flex w-full justify-between" id="check-service1" v-model="store.valueCheckBox.service1">
      <template #label>
        <Collapse title="서비스 이용약관(필수)" :iconDown="Images.iconDown" :iconUp="Images.iconUp">
          <div class="bg-[#FAFBFD] text-[#8B8B8B] text-xs font-normal mt-[18px] leading-[136%]">
            “몰”은 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다. <br>
            1. 가입신청자가 이 약관 제7조제3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 다만 제7조제3항에 의한 회원자격 상실 후 3년이 경과한 자로서 “몰”의 회원재가입 승낙을 얻은 경우에는
            예외로 한다. <br>
            2. 등록 내용에 허위, 기재누락, 오기가 있는 경우<br>
            3. 기타 회원으로 등록하는 것이 “몰”의 기술상 현저히 지장이 있다고 판단되는 경우
          </div>
        </Collapse>
      </template>
    </Checkbox>
    <Checkbox type="checkbox" label="Checkbox" name="service2"
      inputClass="absolute right-0 w-6 h-6 border appearance-none checked:scale-150 checked:opacity-0 peer/service2"
      checkmarkClass="absolute right-0 w-6 h-6 transparent peer-checked/service2:bg-[#FF4F27] after:absolute after:left-2 after:top-[2px] after:w-2 after:h-4 after:border-[3px] after:border-white after:border-t-0 after:border-l-0 after:transform after:rotate-45"
      className="mt-7 relative flex w-full justify-between" id="check-service2" v-model="store.valueCheckBox.service2">
      <template #label>
        <Collapse title="서비스 이용약관(필수)" :iconDown="Images.iconDown" :iconUp="Images.iconUp">
          <div class="bg-[#FAFBFD] text-[#8B8B8B] text-xs font-normal mt-[18px] leading-[136%]">
            회원가입계약의 성립 시기는 “몰”의 승낙이 회원에게 도달한 시점으로 합니다.
          </div>
        </Collapse>
      </template>
    </Checkbox>
    <Checkbox type="checkbox" label="Checkbox" name="notification"
      inputClass="absolute right-0 w-6 h-6 border appearance-none checked:scale-150 checked:opacity-0 peer/notification"
      checkmarkClass="absolute right-0 w-6 h-6 transparent peer-checked/notification:bg-[#FF4F27] after:absolute after:left-2 after:top-[2px] after:w-2 after:h-4 after:border-[3px] after:border-white after:border-t-0 after:border-l-0 after:transform after:rotate-45"
      className="mt-7 relative flex w-full justify-between" id="check-notification"
      v-model="store.valueCheckBox.notification">
      <template #label>
        <Collapse title="알림설정 (선택)" :iconDown="Images.iconDown" :iconUp="Images.iconUp">
          <div class="bg-[#FAFBFD] text-[#8B8B8B] text-xs font-normal mt-[18px] leading-[136%]">
            회원은 회원가입 시 등록한 사항에 변경이 있는 경우, 상당한 기간 이내에 “몰”에 대하여 회원정보 수정 등의 방법으로 그 변경사항을 알려야 합니다
          </div>
        </Collapse>
      </template>
    </Checkbox>
    <Button :class="`w-full py-4 px-9 mt-12 ${store.valueCheckBox.old &&
      store.valueCheckBox.service1 &&
      store.valueCheckBox.service2 &&
      store.valueCheckBox.notification
      ? classBtn[1]
      : classBtn[2] + ' cursor-default'
      }`" :disabled="!store.valueCheckBox.old &&
    !store.valueCheckBox.service1 &&
    !store.valueCheckBox.service2 &&
    !store.valueCheckBox.notification
    " @click="() => emit('complete-step1')">다음</Button>
  </article>
</template>
<script setup>
import { ref, watch } from "vue"
import Checkbox from "@/components/ui/Checkbox.vue"
import Collapse from "@/components/element/Collapse.vue"
import Button from "@/components/ui/Button.vue"
import { classBtn } from "@/utils/customClass.js"
import { useRegisterStore } from "@/stores/register.js"
import Images from "@/constants/images.js"

const store = useRegisterStore()
const emit = defineEmits(["complete-step1"])
</script>
