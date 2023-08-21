<template >
  <article>
    <h3 class="text-2xl font-bold">
      이용약관에 <br />
      동의해주세요
    </h3>
    <CheckboxRadio type="checkbox" label="전체동의" classLabel="text-base font-bold" name="all"
      inputClass="w-6 h-6 border appearance-none checked:scale-150 checked:opacity-0 peer/all"
      checkmarkClass="absolute right-0 w-6 h-6 transparent peer-checked/all:bg-[#FF4F27] after:absolute after:left-2 after:top-[2px] after:w-2 after:h-4 after:border-[3px] after:border-white after:border-t-0 after:border-l-0 after:transform after:rotate-45"
      className="mt-10 relative flex flex-row-reverse w-full justify-between" id="check-all"
      v-model="valueCheckBox.all" />
    <div class="mt-[17px] bg-[#3D3D3D] w-full h-[1px]"></div>
    <CheckboxRadio type="checkbox" name="old"
      inputClass="absolute right-0 w-6 h-6 border appearance-none checked:scale-150 checked:opacity-0 peer/old"
      checkmarkClass="absolute right-0 w-6 h-6 transparent peer-checked/old:bg-[#FF4F27] after:absolute after:left-2 after:top-[2px] after:w-2 after:h-4 after:border-[3px] after:border-white after:border-t-0 after:border-l-0 after:transform after:rotate-45"
      className="mt-7 relative flex w-full justify-between" id="check-old" v-model="valueCheckBox.old">
      <template #label>
        <Collapse title="만 14세 이상(필수)">
          <div class="bg-[#FAFBFD] text-[#8B8B8B] text-xs font-normal mt-[18px] leading-[136%]">
            서비스 이용약관 더미 텍스트 입니다 서비스 이용약관은 필수 입니다1.서비스 이용약관에 동의하세요! 2.동의하세요서비스 이용약관 더미 텍스트 입니다 서비스 이용약관은 필수 입니다
            2.동의하세요1.서비스 이용약관에 동의하세요! 2.동의하세요서비스 이용약관 더미 텍스트 입니다 서비스 이용약관은 필수 입니다</div>
        </Collapse>
      </template>
    </CheckboxRadio>
    <CheckboxRadio type="checkbox" name="service1"
      inputClass="absolute right-0 w-6 h-6 border appearance-none checked:scale-150 checked:opacity-0 peer/service1"
      checkmarkClass="absolute right-0 w-6 h-6 transparent peer-checked/service1:bg-[#FF4F27] after:absolute after:left-2 after:top-[2px] after:w-2 after:h-4 after:border-[3px] after:border-white after:border-t-0 after:border-l-0 after:transform after:rotate-45"
      className="mt-7 relative flex w-full justify-between" id="check-service1" v-model="valueCheckBox.service1">
      <template #label>
        <Collapse title="서비스 이용약관(필수)">
          <div class="bg-[#FAFBFD] text-[#8B8B8B] text-xs font-normal mt-[18px] leading-[136%]">
            서비스 이용약관 더미 텍스트 입니다 서비스 이용약관은 필수 입니다1.서비스 이용약관에 동의하세요! 2.동의하세요서비스 이용약관 더미 텍스트 입니다 서비스 이용약관은 필수 입니다
            2.동의하세요1.서비스 이용약관에 동의하세요! 2.동의하세요서비스 이용약관 더미 텍스트 입니다 서비스 이용약관은 필수 입니다</div>
        </Collapse>
      </template>
    </CheckboxRadio>
    <CheckboxRadio type="checkbox" label="Checkbox" name="service2"
      inputClass="absolute right-0 w-6 h-6 border appearance-none checked:scale-150 checked:opacity-0 peer/service2"
      checkmarkClass="absolute right-0 w-6 h-6 transparent peer-checked/service2:bg-[#FF4F27] after:absolute after:left-2 after:top-[2px] after:w-2 after:h-4 after:border-[3px] after:border-white after:border-t-0 after:border-l-0 after:transform after:rotate-45"
      className="mt-7 relative flex w-full justify-between" id="check-service2" v-model="valueCheckBox.service2">
      <template #label>
        <Collapse title="서비스 이용약관(필수)">
          <div class="bg-[#FAFBFD] text-[#8B8B8B] text-xs font-normal mt-[18px] leading-[136%]">
            서비스 이용약관 더미 텍스트 입니다 서비스 이용약관은 필수 입니다1.서비스 이용약관에 동의하세요! 2.동의하세요서비스 이용약관 더미 텍스트 입니다 서비스 이용약관은 필수 입니다
            2.동의하세요1.서비스 이용약관에 동의하세요! 2.동의하세요서비스 이용약관 더미 텍스트 입니다 서비스 이용약관은 필수 입니다</div>
        </Collapse>
      </template>
    </CheckboxRadio>
    <CheckboxRadio type="checkbox" label="Checkbox" name="notification"
      inputClass="absolute right-0 w-6 h-6 border appearance-none checked:scale-150 checked:opacity-0 peer/notification"
      checkmarkClass="absolute right-0 w-6 h-6 transparent peer-checked/notification:bg-[#FF4F27] after:absolute after:left-2 after:top-[2px] after:w-2 after:h-4 after:border-[3px] after:border-white after:border-t-0 after:border-l-0 after:transform after:rotate-45"
      className="mt-7 relative flex w-full justify-between" id="check-notification" v-model="valueCheckBox.notification">
      <template #label>
        <Collapse title="알림설정 (선택)">
          <div class="bg-[#FAFBFD] text-[#8B8B8B] text-xs font-normal mt-[18px] leading-[136%]">
            서비스 이용약관 더미 텍스트 입니다 서비스 이용약관은 필수 입니다1.서비스 이용약관에 동의하세요! 2.동의하세요서비스 이용약관 더미 텍스트 입니다 서비스 이용약관은 필수 입니다
            2.동의하세요1.서비스 이용약관에 동의하세요! 2.동의하세요서비스 이용약관 더미 텍스트 입니다 서비스 이용약관은 필수 입니다</div>
        </Collapse>
      </template>
    </CheckboxRadio>
    <Button :class="`w-full py-4 px-9 mt-12 ${classBtn[1]}`">다음</Button>
  </article>
</template>
<script setup>
import { ref, watch } from 'vue'
import CheckboxRadio from "@/components/ui/CheckboxRadio.vue"
import Collapse from '@/components/element/Collapse.vue'
import Button from "@/components/ui/Button.vue"
import { classBtn } from "@/utils/customClass.js"

const valueCheckBox = ref({
  all: false,
  old: false,
  service1: false,
  service2: false,
  notification: false,
})

watch(
  () => valueCheckBox.value.all,
  (newValue) => {
    if (newValue) {
      valueCheckBox.value.old = true
      valueCheckBox.value.service1 = true
      valueCheckBox.value.service2 = true
      valueCheckBox.value.notification = true
    }
  }
)

watch(
  () => [valueCheckBox.value.old, valueCheckBox.value.service1, valueCheckBox.value.service2, valueCheckBox.value.notification],
  ([oldValue, service1Value, service2Value, notificationValue]) => {
    if (!oldValue || !service1Value || !service2Value || !notificationValue) {
      valueCheckBox.value.all = false
    }
    if (oldValue && service1Value && service2Value && notificationValue) {
      valueCheckBox.value.all = true
    }
  }
)

</script>