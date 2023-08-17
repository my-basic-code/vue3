<template>
  <div>
    <Button :class="`${classButtonCustom[1]}`" @click="handleClick">
      <template v-slot:right-icon>
        <div>abcv</div>
      </template>
      21423
    </Button>
    <CheckBox
      label="Checkbox"
      className="relative"
      inputClass="w-6 h-6 transition-all duration-300 bg-gray-400 rounded-full appearance-none checked:scale-150 checked:opacity-0 peer mr-3"
      id="check-box"
      checkmarkClass="absolute left-0 w-6 h-6 transition-all duration-300 rounded-full transparent peer-checked:bg-green-300"
      :errors="['sdafasd']"
      v-model="valueCheckBox"
    >
    </CheckBox>

    <Input
      name="frame18249"
      placeholder="Sam"
      className="font-semibold p-0 placeholder:text-bluegray-800 sm:pr-5 text-base text-bluegray-800 text-left w-full"
      wrapClassName="bg-white border border-indigo-50 border-solid pl-5 pr-[35px] py-[17px] rounded w-full flex space-x-4"
      v-model="valueInput"
    >
      <template v-slot:prefix>
        <div>1243</div>
      </template>
    </Input>
    <SeLectBox :options="optionSelect" v-model="valueSelect" />
  </div>
</template>

<script setup>
import { ref } from "vue"
import Button from "@/components/ui/Button.vue"
import CheckBox from "@/components/ui/CheckBox.vue"
import Input from "@/components/ui/Input.vue"
import SeLectBox from "@/components/ui/Select.vue"
import { classButtonCustom } from "@/utils/customClass"

const valueCheckBox = ref(true)
const valueInput = ref("")
const valueSelect = ref(1)
const optionSelect = ref([
  { label: "ádfdsa", value: 1 },
  { label: "1234123", value: 2 },
])

const handleClick = () => {
  console.log(123)
}
</script>
