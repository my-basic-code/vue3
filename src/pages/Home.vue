<template>
  <div>
    <Button class="border border-[#DFDFDF]" @click="handleClick">
      <template v-slot:right-icon>
        <div>abcv</div>
      </template>
      21423
    </Button>
    <CheckboxRadio
      type="checkbox"
      label="Checkbox"
      className="relative"
      inputClass="w-6 h-6 transition-all duration-300 bg-gray-400 rounded-full appearance-none checked:scale-150 checked:opacity-0 peer mr-3"
      id="check-box"
      checkmarkClass="absolute left-0 w-6 h-6 transition-all duration-300 rounded-full transparent peer-checked:bg-green-300"
      :errors="['sdafasd']"
      v-model="valueCheckBox"
    >
    </CheckboxRadio>

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
    <Select :options="optionSelect" v-model="valueSelect" />

    <Select
      :options="optionSelect"
      v-model="valueSelect"
      :disabled="false"
      :multiple="true"
      placeholder="Select an option"
      placement="bottomLeft"
    >
      <template #icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 12a2 2 0 100-4 2 2 0 000 4z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M10 2a8 8 0 100 16 8 8 0 000-16zM7 9a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </template>
      <template #options>
        <div v-for="option in optionSelect" :key="option.value">
          <input type="checkbox" />
          {{ option.label }}
        </div>
      </template>
    </Select>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Button from "@/components/ui/Button.vue"
import CheckboxRadio from "@/components/ui/CheckboxRadio.vue"
import Input from "@/components/ui/Input.vue"
import Select from "@/components/ui/Select.vue"

const valueCheckBox = ref(true)
const valueInput = ref("")
const valueSelect = ref()
const optionSelect = ref([
  { label: "ádfdsa", value: 1 },
  { label: "1234123", value: 2 },
])

const handleClick = () => {
  console.log(123)
}
</script>
