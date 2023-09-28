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
  <Button :class="`${classButtonCustom[1]}`" @click="handleClick">
    <template v-slot:right-icon>
      <div>right-icon</div>
    </template>
    Gửi
    <template v-slot:left-icon>
      <div>right-icon</div>
    </template>
  </Button>
</template>

<script setup>
import Button from "@/components/ui/Button.vue"

const handleClick = () => {
  //handle click button
}
</script>
```

# Component Input

Component `Input` cung cấp một trường nhập liệu tuỳ chỉnh với các tính năng như độ dài tối đa, trạng thái bị vô hiệu hóa và xử lý lỗi.

## Props

- **wrapClass** (kiểu: `String`, mặc định: `''`): Lớp CSS bổ sung cho container bao bọc.

- **className** (kiểu: `String`, mặc định: `''`): Lớp CSS bổ sung cho phần tử input.

- **name** (kiểu: `String`, bắt buộc): Thuộc tính name cho phần tử input.

- **placeholder** (kiểu: `String`, mặc định: `''`): Văn bản gợi ý trong trường nhập liệu.

- **type** (kiểu: `String`, mặc định: `'text'`): Thuộc tính type cho phần tử input.

- **label** (kiểu: `String`, mặc định: `''`):Văn bản nhãn cho phần tử input.

- **maxLength ** (kiểu: `Number`, mặc định: `100`):Độ dài tối đa của giá trị nhập liệu.

- **disabled ** (kiểu: `Boolean`, mặc định: `false`):Xác định trạng thái bị vô hiệu hóa của trường nhập liệu.

- **handlePattern ** (kiểu: `Function`, mặc định: `() => {}`):Một hàm để xử lý giá trị nhập liệu.

- **error** (kiểu: `String`, mặc định: `'text'`): Prop này cho phép bạn truyền vào một thông báo lỗi liên quan đến trường nhập liệu.

- **modelValue** (kiểu: `String`, mặc định: `''`): Prop này chỉ định giá trị hiện tại của trường nhập liệu.

## Sự kiện

- **update:modelValue**: Khi giá trị nhập liệu được cập nhật.

- **onBlur**: Khi phần tử input mất trạng thái focus.

## Phương thức

- **handleChange**: Phương thức để xử lý sự kiện thay đổi giá trị nhập liệu.

- **handleKeyDown**: Phương thức để xử lý sự kiện nhấn phím.

## Slots

- **sub-label**: Nội dung bổ sung được hiển thị dưới nhãn (label).

- **prefix slot**: Slot này cho phép bạn đặt các phần tử hoặc biểu tượng trước trường nhập liệu.

- **suffix slot**: Slot này cho phép bạn đặt các phần tử hoặc biểu tượng sau trường nhập liệu.

## Sử dụng

Dưới đây là một ví dụ về cách sử dụng component `Input` trong code của bạn:

```vue
<template>
  <Input
    wrapClass="my-input"
    className="input-field"
    type="text"
    name="username"
    placeholder="Nhập tên tài khoản"
    label="Tên tài khoản"
    :maxLength="20"
    :disabled="false"
    :modelValue="username"
    @onBlur="handleBlur"
    :error="usernameError"
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
const usernameError = ref("")
const handleBlur = () => {
    // Thực hiện kiểm tra hợp lệ hoặc các hành động khác khi mất trạng thái focus
},
</script>
```

# Component InputImgReview

Component `InputImgReview` cho phép người dùng chọn một file hình ảnh và xem trước hình ảnh đó. Khi người dùng chọn một file hình ảnh, component sẽ hiển thị hình ảnh xem trước của file đó. Người dùng cũng có thể thay thế hình ảnh xem trước bằng cách chọn một file hình ảnh khác.

## Props

- **classImgReview ** (kiểu: `String`, mặc định: `''`): ớp CSS bổ sung cho phần tử chứa hình ảnh xem trước.

- **modelValue** (kiểu: `String || null,`, mặc định: `null`): Giá trị mô hình cho trường nhập file.

## Sự kiện

- **update:modelValue**: Khi giá trị nhập liệu được cập nhật.

## Slots

- **imgInput**: Nội dung bổ sung hiển thị khi không có hình ảnh xem trước.

## Sử dụng

Dưới đây là một ví dụ về cách sử dụng component `Input` trong code của bạn:

```vue
<template>
  <InputImgReview classImgReview="my-img-review" v-model="selectedImage">
    <div class="custom-file-input">
      <span>Select Image</span>
    </div>
  </InputImgReview>
</template>

<script setup>
import InputImgReview from "@/components/ui/InputImgReview.vue"

const selectedImage = ref(null)
</script>
```

# Component Checkbox

Component `Checkbox` cho phép người dùng chọn một giá trị checkbox và hiển thị thông báo lỗi nếu có. Component cũng hỗ trợ tùy chỉnh các lớp CSS và các sự kiện để xử lý sự kiện thay đổi giá trị checkbox.

## Props

- **className** (kiểu: `String`, mặc định: `''`): ớp CSS bổ sung cho container bao bọc.

- **inputClass** (kiểu: `String`, mặc định: `''`): Lớp CSS bổ sung cho phần tử input.

- **type** (kiểu: `String`, mặc định: `'checkbox'`): Kiểu của trường checkbox.

- **name** (kiểu: `String`, bắt buộc): Thuộc tính name cho phần tử input.

- **id** (kiểu: `String`, bắt buộc): Thuộc tính id cho phần tử input

- **label** (kiểu: `String`, mặc định: `''`): Văn bản nhãn cho phần tử checkbox.

- **classLabel ** (kiểu: `String`, mặc định: `''`): VLớp CSS bổ sung cho phần tử nhãn (label).

- **error** (kiểu: `String`, mặc định: `''`): Prop này cho phép bạn truyền vào một thông báo lỗi liên quan đến trường nhập liệu.

- **checkmarkClass** (kiểu: `Object`, mặc định: `null`): Lớp CSS bổ sung cho phần tử checkmark (dấu tích).

- **modelValue** (kiểu: `Boolean`, mặc định: `false`): Prop này chỉ định giá trị hiện tại của trường checkbox.

## Sự kiện

- **update:modelValue**: Sự kiện này được phát ra khi giá trị của trường checkbox thay đổi. Bạn có thể lắng nghe sự kiện này để cập nhật giá trị của trường checkbox trong component cha.

## Slots

- **label**: Nội dung bổ sung hiển thị cho nhãn (label) của checkbox.

## Sử dụng

Dưới đây là một ví dụ về cách sử dụng component `Checkbox` trong code của bạn:

```vue
<template>
  <Checkbox
    className="my-checkbox"
    inputClass="my-checkbox-input"
    name="agree"
    id="agree"
    label="Tôi đồng ý với các điều khoản và điều kiện"
    :modelValue="agree"
    :error="checkboxError"
  />
</template>

<script setup>
import Checkbox from "@/components/ui/Checkbox.vue"
const checkboxError = ref("")
const agree = ref(false)
</script>
```

# Component Select

Component `Select` là một thành phần Vue được sử dụng để tạo ra một trường chọn đơn giản với các tùy chọn và tính năng như lựa chọn đa giá trị, đóng mở dropdown, và xử lý sự kiện.

## Props

- **options** (kiểu: `Array`, bắt buộc): Danh sách các tùy chọn cho dropdown.

- **modelValue** (kiểu: `String`, `Number`, `Array`): Giá trị được chọn hiện tại của dropdown.

- **disabled** (kiểu: `Boolean`, mặc định: `false`): Xác định xem dropdown có bị vô hiệu hóa hay không.

- **multiple** (kiểu: `Boolean`, mặc định: `false`): Xác định xem dropdown có hỗ trợ chọn nhiều giá trị hay không.

- **isShowInput** (kiểu: `Boolean`, mặc định: `false`) Xác định xem ô nhập liệu có được hiển thị hay không.

- **placeholder** (kiểu: `String`, mặc định: `"Select..."`): Văn bản mặc định hiển thị khi không có giá trị nào được chọn.

- **placement** (kiểu: `String`, mặc định: `"bottomLeft"`): Vị trí hiển thị dropdown, có thể là "bottomLeft", "bottomRight", "topLeft" hoặc "topRight".

- **classSelected** (kiểu: `String`, mặc định: `"flex items-center justify-between text-2xl"`): Lớp CSS cho phần hiển thị giá trị đã chọn.

- **classWrapOption** (kiểu: `String`, mặc định: `""`): Lớp CSS cho phần bao bọc các tùy chọn.

- **classOption** (kiểu: `String`, mặc định: `""`): Lớp CSS cho mỗi tùy chọn.

## Sự kiện

- **update:modelValue**: Sự kiện này được phát ra khi giá trị của trường chọn thay đổi. Bạn có thể lắng nghe sự kiện này để cập nhật giá trị của trường chọn trong component cha.

## Slots

- **icon**: Slot này cho phép bạn tùy chỉnh biểu tượng hiển thị bên trong trường chọn.

## Sử dụng

Dưới đây là một ví dụ về cách sử dụng component `Select` trong code của bạn:

```vue
<template>
  <Select
    :options="selectOptions"
    :modelValue="selectedValue"
    class-selected="custom-selected"
    class-wrap-option="custom-wrap"
    class-option="custom-option"
    placeholder="Chọn một tùy chọn"
    placement="bottomLeft"
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
  </Select>
</template>

<script setup>
import Select from "@/components/ui/Select.vue"

const selectOptions = ref([
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
])
const selectedValue = ref()
</script>
```

# Component Radio

Component Radio là một thành phần giao diện người dùng cho phép người dùng chọn một giá trị duy nhất từ một danh sách các tùy chọn. Mô-đun này được viết bằng Vue.js và sử dụng các thuộc tính và sự kiện để thực hiện các chức năng và tương tác.

## Các thuộc tính

- **update:modelValue**: Sự kiện này được phát ra khi giá trị của trường chọn thay đổi. Bạn có thể lắng nghe sự kiện này để cập nhật giá trị của trường chọn trong component cha.
- **options** (kiểu: `Array`, bắt buộc): Danh sách các tùy chọn cho Radio Group.
- **classInput** (kiểu: `String`, mặc định: `""`) : Lớp CSS cho các input radio.
- **className** (kiểu: `String`, mặc định: `""`) : Lớp CSS cho mỗi tùy chọn.
- **classActive** (kiểu: `String`, mặc định: `""`) : Lớp CSS cho tùy chọn được chọn.

## Các sự kiện

- **update:modelValue**: Sự kiện được phát ra khi giá trị được chọn trong Radio Group thay đổi.

## Cách sử dụng

Để sử dụng mô-đun Radio Group Vue, bạn cần cung cấp danh sách các tùy chọn cho Radio Group thông qua thuộc tính `options`, và giám sát giá trị được chọn thông qua thuộc tính `modelValue` hoặc bắt sự kiện `update:modelValue` để cập nhật giá trị khi người dùng thay đổi.

Dưới đây là một ví dụ về cách sử dụng mô-đun Radio Group Vue:

```vue
<template>
  <Radio
    :options="options"
    v-model="selectedValue"
    class-input="custom-input"
    class-name="custom-option"
    class-active="custom-active"
  />
</template>

<script setup>
import { ref } from "vue"
import Radio from "@/components/ui/Radio.vue"

const options = ref([
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
])
const selectedValue = ref()
</script>
```
