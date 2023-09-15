import { categoryService } from '@/services/categoryService';
import { defineStore } from 'pinia';
import { ref } from 'vue'

// Define your Pinia store
export const useCategoryStore = defineStore('myCategory', () => {
  const valueCategory = ref([])

  return {
    valueCategory,
    async fetchData() {
      try {
        const { data: res } = await categoryService.getAllCategory()
        valueCategory.value = res.data.map(item => {
          return {
            id: item.id,
            text: item.name,
            iconLeft: item.icon,
            alt: item.icon,
          }
        });
      } catch (error) {
        console.error(error);
      }
    }
  }
});