import { ref } from "vue";

const isOpenModal = ref(false)

export const useModal = () => isOpenModal