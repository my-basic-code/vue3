<template>
  <div>
    <input class="hidden" type="file" ref="fileInput" @change="handleFileChange" id="img"
      accept="image/png, image/gif, image/jpeg" />
    <label for="img">
      <div :class="`${classImgReview} overflow-hidden`" v-if="imagePreview || modelValue">
        <img class="object-cover w-full h-full" :src="imagePreview || modelValue" alt="Image Preview" />
      </div>
      <div :class="`${classImgReview} overflow-hidden`" v-else>
        <slot name="imgInput" />
      </div>
    </label>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue"

const props = defineProps({
  classImgReview: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, null],
    default: null,
  },
})

const emit = defineEmits(["update:modelValue"])

const fileInput = ref(null)
const imagePreview = ref(null)

function handleFileChange(event) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      imagePreview.value = reader.result
    }
    reader.readAsDataURL(file)
    emit("update:modelValue", file) // Truyền dữ liệu ra cha thông qua sự kiện 'update:modelValue'
  } else {
    imagePreview.value = null
    emit("update:modelValue", null) // Truyền dữ liệu rỗng ra cha khi không có tệp được chọn
  }
}
</script>
