import { ref, watch } from 'vue'

import { defineStore } from 'pinia';

// Define your Pinia store
export const useRegisterStore = defineStore('myRegister', () => {
  const valueCheckBox = ref({
    all: false,
    old: false,
    service1: false,
    service2: false,
    notification: false,
  })
  const information = ref({
    name: "",
    phone: "",
    certification: {
      value: "",
      status: false,
    },
    email: '',
    password: '',
    repeatPassword: '',
    image: null,
    nickName: '',
    gender: null,
    address: '',
    detailedAddress: '',
    dateBirth: null,
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

  return { valueCheckBox, information }
});