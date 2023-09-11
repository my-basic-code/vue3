import { defineStore } from 'pinia';
import { ref } from 'vue'

// Define your Pinia store
export const useUserStore = defineStore('myUser', () => {
  const state = ref({
    isLogin: !!localStorage.getItem("token"),
  })

  const updateLoginStatus = () => {
    state.value.isLogin = !!localStorage.getItem("token")
  }

  return {
    state,
    updateLoginStatus
  }
});