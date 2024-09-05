<script setup>
import { useRouter } from 'vue-router'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import LoginUi from '../components/Login/LoginUi.vue';

const router = useRouter()
const formSchema = toTypedSchema(z.object({
  username: z.string().min(2, { message: "Must be 2 or more characters long" }).max(50, { message: "Must be 50 or more characters long" }),
  password: z.string().min(6, { message: "Must be 6 or more characters long" }).max(16, { message: "Must be 16 or more characters long" }),
}))

const onSubmit = async (values) => {
  router.push({ name: 'Home' })
}
</script>

<template>
  <LoginUi :schema="formSchema" @submit="onSubmit" />
</template>