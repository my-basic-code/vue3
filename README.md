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

# Component CheckboxRadio

Component `CheckboxRadio` là một thành phần Vue được sử dụng để tạo ra một trường checkbox đơn giản với các tính năng như nhãn và hiển thị thông báo lỗi.

## Props

- **className** (kiểu: `String`, mặc định: `''`): Prop này cho phép bạn chỉ định một lớp CSS cho phần bao bọc của trường checkbox.

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

Không có slot nào trong component `CheckboxRadio`.

## Sử dụng

Dưới đây là một ví dụ về cách sử dụng component `CheckboxRadio` trong code của bạn:

```vue
<template>
    <CheckboxRadio
      className="checkbox-container"
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

# Component Select

Component `Select` là một thành phần Vue được sử dụng để tạo ra một trường chọn đơn giản với các tùy chọn và tính năng như lựa chọn đa giá trị, đóng mở dropdown, và xử lý sự kiện.

## Props

- **options** (kiểu: `Array`, bắt buộc): Prop này chỉ định danh sách các tùy chọn cho trường chọn. Mỗi tùy chọn là một đối tượng có hai thuộc tính: `value` (giá trị của tùy chọn) và `label` (nhãn hiển thị cho tùy chọn).

- **modelValue** (kiểu: `String`, `Number`, `Array`): Prop này chỉ định giá trị hiện tại của trường chọn. Nếu `multiple` được đặt thành `true`, giá trị có thể là một mảng các giá trị.

- **disabled** (kiểu: `Boolean`): Prop này chỉ định trạng thái vô hiệu hóa của trường chọn.

- **multiple** (kiểu: `Boolean`): Prop này chỉ định xem trường chọn có cho phép lựa chọn đa giá trị hay không.

- **placeholder** (kiểu: `String`, mặc định: `"Select..."`): Prop này chỉ định văn bản mặc định hiển thị khi không có tùy chọn nào được chọn.

- **placement** (kiểu: `String`, mặc định: `"bottomLeft"`): Prop này chỉ định vị trí hiển thị dropdown của trường chọn. Các giá trị hợp lệ bao gồm `"bottomLeft"`, `"bottomRight"`, `"topLeft"` và `"topRight"`.

## Sự kiện

- **update:modelValue**: Sự kiện này được phát ra khi giá trị của trường chọn thay đổi. Bạn có thể lắng nghe sự kiện này để cập nhật giá trị của trường chọn trong component cha.

## Slots

- **icon**: Slot này cho phép bạn tùy chỉnh biểu tượng hiển thị bên trong trường chọn.

- **options**: Slot này cho phép bạn tùy chỉnh giao diện của dropdown và các tùy chọn. Bên trong slot, bạn có thể sử dụng vòng lặp `v-for` để tạo các tùy chọn dựa trên danh sách `options`.

## Sử dụng

Dưới đây là một ví dụ về cách sử dụng component `Select` trong code của bạn:

```vue

<template>
    <Select
      :options="selectOptions"
      :modelValue="selectedValue"
      :disabled="isDisabled"
      :multiple="isMultiple"
      placeholder="Select an option"
      placement="bottomLeft"
      @update:modelValue="handleSelect"
    >
      <template #icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 12a2 2 0 100-4 2 2 0 000 4z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M10 2a8 8 0 100 16 8 8 0 000-16zM7 9a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </template>

      <template #options>
        <div v-for="option in selectOptions" :key="option.value">
          <input type="checkbox" />
          {{ option.label }}
        </div>
      </template>
    </Select>
</template>

<script setup>
import Select from "@/components/ui/Select.vue"

const selectOptions = ref([
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
])
const selectedValue = ref()
const isDisabled = ref(false)
const isMultiple = ref(false)
</script>
```

