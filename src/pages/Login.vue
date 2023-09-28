<template>
  <div
    class="container flex flex-col items-center justify-center h-screen mx-auto"
  >
    <form @submit.prevent="onSubmit" class="max-w-sm mx-auto mt-8">
      <Input
        label="Username"
        type="text"
        name="username"
        placeholder="Nhập username"
        classLabel="block text-base font-bold"
        className="px-5 py-4 mt-[6px] w-full border rounded-lg"
        v-model="data.username"
        :error="data.errorUsername"
        @onBlur="
          () => {
            data.errorUsername = onBlurInput('username', data, validationRules)
          }
        "
      />
      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="Nhập password"
        wrapClass="mt-7"
        classLabel="block text-base font-bold"
        className="px-5 py-4 mt-[6px] w-full border rounded-lg"
        v-model="data.password"
        :error="data.errorPassword"
        @onBlur="
          () => {
            data.errorPassword = onBlurInput('password', data, validationRules)
          }
        "
      />
      <button
        class="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script setup>
import Input from "@/components/ui/Input.vue"
import { validateForm, onBlurInput } from "@/helper/validateForm"
import { ref } from "vue"
import { useUserStore } from "@/stores/user"
import { isLoading } from "@/hooks/isLoading"

const userStore = useUserStore()

const data = ref({
  username: "",
  errorUserName: "",
  password: "",
  errorPassword: "",
})
const validationRules = {
  username: [{ required: true, message: "Vui lòng nhập name" }],
  password: [
    { required: true, message: "Vui lòng nhập password" },
    { min: 6, message: "Password lớn hơn 6" },
  ],
}

const onSubmit = async () => {
  const validationErrors = validateForm(data.value, validationRules)
  if (Object.keys(validationErrors).length > 0) {
    data.value.errorUserName = validationErrors.username
    data.value.errorPassword = validationErrors.password
    return
  }
  isLoading.value = true
  try {
    await userStore.login(data.value)
  } catch (error) {
    console.error(error)
  }
  isLoading.value = false
}
</script>
