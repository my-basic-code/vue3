import { defineStore } from 'pinia';
import { ref } from 'vue'

// Define your Pinia store
export const useLoadingStore = defineStore('myLoading', () => {
  const isLoading = ref(false);

  /**
   * Update the loading status.
   *
   * @param {boolean} status - The new loading status.
   */
  const updateLoading = (status) => {
    isLoading.value = status;
  };

  return {
    isLoading,
    updateLoading
  }
});