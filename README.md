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

<script setup>
import Button from "@/components/ui/Button.vue"

const handleClick = () => {
  //handle click button
}
</script>
```

# Component Input

Component `Input` là một thành phần Vue được sử dụng để tạo ra một trường nhập liệu đơn giản với các tính năng như nhãn, biểu tượng tiền tố và hậu tố, và hiển thị thông báo lỗi.

## Props

- **className** (kiểu: `String`, mặc định: `''`): Prop này cho phép bạn chỉ định một lớp CSS cho trường nhập liệu.

- **name** (kiểu: `String`, bắt buộc): Prop này chỉ định tên của trường nhập liệu.

- **placeholder** (kiểu: `String`, mặc định: `''`): Prop này cho phép bạn chỉ định một văn bản gợi ý trong trường nhập liệu.

- **type** (kiểu: `String`, mặc định: `'text'`): Prop này chỉ định kiểu của trường nhập liệu, như `'text'`, `'password'`, `'email'`, v.v.

- **label** (kiểu: `String`, mặc định: `''`): Prop này cho phép bạn chỉ định một nhãn cho trường nhập liệu.

- **errors** (kiểu: `Array`, mặc định: `[]`): Prop này cho phép bạn truyền vào một mảng chứa các thông báo lỗi liên quan đến trường nhập liệu.

- **modelValue** (kiểu: `String`, mặc định: `''`): Prop này chỉ định giá trị hiện tại của trường nhập liệu.

## Sự kiện

- **update:modelValue**: Sự kiện này được phát ra khi giá trị của trường nhập liệu thay đổi. Bạn có thể lắng nghe sự kiện này để cập nhật giá trị của trường nhập liệu trong component cha.

## Slots

- **prefix slot**: Slot này cho phép bạn đặt các phần tử hoặc biểu tượng trước trường nhập liệu.

- **suffix slot**: Slot này cho phép bạn đặt các phần tử hoặc biểu tượng sau trường nhập liệu.

## Sử dụng

Dưới đây là một ví dụ về cách sử dụng component `Input` trong code của bạn:

```vue
<template>
    <Input
      class="input-wrap"
      className="input-field"
      name="username"
      placeholder="Nhập tên người dùng"
      :label="labelText"
      :errors="inputErrors"
      v-model="username"
    >
      <template #prefix>
        <i class="prefix-icon"></i>
      </template>
      <template #suffix>
        <i class="suffix-icon"></i>
      </template>
    </Input>
</template>

<script setup>
import Input from "@/components/ui/Input.vue"

const username = ref("")
const labelText = ref("Tên người dùng")
const inputErrors = ref([])

</script>
```

# Component CheckboxInput

Component `CheckboxInput` là một thành phần Vue được sử dụng để tạo ra một trường checkbox đơn giản với các tính năng như nhãn và hiển thị thông báo lỗi.

## Props

- **inputClass** (kiểu: `String`, mặc định: `''`): Prop này cho phép bạn chỉ định một lớp CSS cho trường checkbox.

- **type** (kiểu: `String`, mặc định: `'checkbox'`): Prop này chỉ định kiểu của trường input : checkbox hoặc radio.

- **name** (kiểu: `String`, bắt buộc): Prop này chỉ định tên của trường checkbox.

- **id** (kiểu: `String`, bắt buộc): Prop này chỉ định ID của trường checkbox.

- **label** (kiểu: `String`, mặc định: `''`): Prop này cho phép bạn chỉ định một nhãn cho trường checkbox.

- **errors** (kiểu: `Array`, mặc định: `[]`): Prop này cho phép bạn truyền vào một mảng chứa các thông báo lỗi liên quan đến trường checkbox.

- **checkmarkClass** (kiểu: `Object`, mặc định: `null`): Prop này cho phép bạn chỉ định một lớp CSS cho biểu tượng checkmark.

- **modelValue** (kiểu: `Boolean`, mặc định: `false`): Prop này chỉ định giá trị hiện tại của trường checkbox.

## Sự kiện

- **update:modelValue**: Sự kiện này được phát ra khi giá trị của trường checkbox thay đổi. Bạn có thể lắng nghe sự kiện này để cập nhật giá trị của trường checkbox trong component cha.

## Slots

Không có slot nào trong component `CheckboxInput`.

## Sử dụng

Dưới đây là một ví dụ về cách sử dụng component `CheckboxInput` trong code của bạn:

```vue
<template>
    <CheckboxInput
      class="checkbox-container"
      inputClass="checkbox-field"
      name="agree_terms"
      id="agree_terms"
      label="Tôi đồng ý với các điều khoản và điều kiện"
      :errors="checkboxErrors"
      v-model="agreeTerms"
    />
</template>

<script setup>
import CheckboxRadio from "@/components/ui/CheckboxRadio.vue"
const checkboxErrors = ref([])
const agreeTerms = ref(false)
</script>
```


