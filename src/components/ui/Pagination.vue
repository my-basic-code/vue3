<template>
  <div>
    <ul class="flex items-center justify-center gap-x-3">
      <li v-if="currentPage > 1" class="cursor-pointer">
        <a @click="changePage(currentPage - 1)">
          <svg
            style="transform: rotate(180deg)"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path d="M9.5 6.32031L15.5 12.3203L9.5 18.3203" stroke="#A5A5A5" />
          </svg>
        </a>
      </li>
      <li v-for="pageNumber in visiblePages" :key="pageNumber">
        <a
          class="w-[32px] h-[24px] text-[12px] font-bold flex justify-center items-center cursor-pointer text-[#8B8B8B]"
          :class="{ 'text-black': currentPage === pageNumber }"
          @click="changePage(pageNumber)"
          >{{ pageNumber }}</a
        >
      </li>
      <li v-if="currentPage < totalPages" class="cursor-pointer">
        <a @click="changePage(currentPage + 1)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path d="M9.5 6.32031L15.5 12.3203L9.5 18.3203" stroke="#A5A5A5" />
          </svg>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"

const props = defineProps({
  totalPages: { type: Number, required: true },
  currentPage: { type: Number, required: true },
})
const emit = defineEmits(["pageChanged"])

const visiblePages = computed(() => {
  const pages = []
  const startPage = Math.max(1, props.currentPage - 2)
  const endPage = Math.min(props.totalPages, startPage + 4)
  if (startPage > 1) {
    pages.push(1)
    if (startPage > 2) {
      pages.push("...")
    }
  }
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }
  if (endPage < props.totalPages) {
    if (endPage < props.totalPages - 1) {
      pages.push("...")
    }
    pages.push(props.totalPages)
  }
  return pages
})

function changePage(page) {
  if (page >= 1 && page <= props.totalPages) {
    emit("pageChanged", page)
  }
}
</script>
