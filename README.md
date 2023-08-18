# Project of Hoang Hiéu
custom by Hoang Hiéu

## Mục lục

- [Giới thiệu](#giới-thiệu)
- [Hướng dẫn cài đặt](#hướng-dẫn-cài-đặt)
- [Cấu trúc thư mục](#cấu-trúc-thư-mục)
- [Document](#document)

## Giới thiệu
Vue 3 basic code
Để thay đổi layout trong route thêm 
```sh
      meta: {
        layout: "name-layout",
      }
```
## Hướng dẫn cài đặt
Để chạy ứng dụng trên máy local:
Clone repository này về máy
```sh
git clone https://github.com/my-basic-code/vue3.git
```
Cài đặt các dependency
```sh
npm install
```
Khởi động server dev
```sh
npm run dev
```

## Cấu trúc thư mục

├── src
    
    ├── assets
        │
        ├── css /* Các file css */
        │
        └── images /* Các file ảnh */
        
    ├── components
        │
        ├── layout /* Các layout component */
        │
        └── ui /* Các component UI tái sử dụng */

    ├── constants /* Khi có quá nhiều import hãy tạo file và lưu vào đây. ex : images.js file import tất cả các ảnh */
    │
    ├── helper /* Các hàm tiện ích của library */
    │
    ├── hooks /* Custom hooks */
    │
    ├── layouts /* Các layout wrapper */
        │
        ├── Default.vue
        │
        └── OnlyView.vue
     
    ├── pages /* Các trang */
    │
    ├── router /* Cấu hình routing */
    │
    ├── stores /* Quản lý state */
    │ 
    ├── utils /* Các tiện ích khác */
    │   │
    │   ├── import.js /* import layout */
    │   │
    │   └── customClass.js /* custom classes dùng */
    │
    ├── App.vue /* Gốc ứng dụng */
    │
    └── main.js /* Entry point 

## document

# Component Button

Component `Button` là một thành phần Vue được sử dụng để tạo ra một nút đơn giản với khả năng hiển thị biểu tượng ở các vị trí khác nhau.

## Slots

- **default slot**: Khi sử dụng component `<Button>`, bạn có thể đặt nội dung bên trong nút.

- **left-icon slot**: Khi sử dụng component `<Button>`, bạn có thể đặt biểu tượng bên trái của nút trong slot này.

- **right-icon slot**: Khi sử dụng component `<Button>`, bạn có thể đặt biểu tượng bên phải của nút trong slot này.

## Sử dụng

Dưới đây là một ví dụ về cách sử dụng component `Button` trong code của bạn:

```vue
<template>
  <div>
    <Button :class="`${classButtonCustom[1]}`" @click="handleClick">
      <template v-slot:right-icon>
        <div>right-icon</div>
      </template>
      Gửi
      <template v-slot:left-icon>
        <div>right-icon</div>
      </template>
    </Button>
  </div>
</template>

<script>
import Button from './components/Button.vue';

export default {
  components: {
    Button,
  },
  data() {
    return {
      leftIcon: {
        // Đối tượng biểu tượng bên trái
      },
      rightIcon: {
        // Đối tượng biểu tượng bên phải
      },
    };
  },
};
</script>
```