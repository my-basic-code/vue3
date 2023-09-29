# Project of Hoàng Hiếu

custom by Hoàng Hiếu

## Mục lục

- [Giới thiệu](#giới-thiệu)
- [Hướng dẫn cài đặt](#hướng-dẫn-cài-đặt)
- [Cấu trúc thư mục](#cấu-trúc-thư-mục)
- [Note](#note)
- [Document](#document)

## Giới thiệu

Nhớ cảm ơn Hoàng Hiếu

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
    ├── helper /* Các hàm tiện ích */
    │
    ├── hooks /* Custom hooks */
    │
    ├── locales /* lang */
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
    │
    ├── App.vue /* Gốc ứng dụng */
    │
    ├── i18n.js
    │
    └── main.js /* Entry point
    │
    ├── settings.js
    │
    └── permission.js /* Permission router

## Note

# permission.js Thanh tiến trình và Middleware xác thực

Phần mã này cung cấp tính năng thanh tiến trình sử dụng NProgress và triển khai middleware xác thực cho router trong ứng dụng Vue.js. Nó đảm bảo hiển thị thanh tiến trình trong quá trình điều hướng và xử lý xác thực người dùng.

```js
import "nprogress/nprogress.css" // Kiểu thanh tiến trình

import { ElMessage } from "element-plus"
import NProgress from "nprogress" // Thanh tiến trình
import getPageTitle from "@/utils/get-page-title"
import { getToken } from "@/utils/auth" // Lấy token từ cookie
import router from "./router"
import { useUserStore } from "@/stores/user"

NProgress.configure({ showSpinner: false }) // Cấu hình NProgress

const whiteList = ["/login", "/", "/404"] // Danh sách trang không chuyển hướng

router.beforeEach(async (to, from, next) => {
  // Bắt đầu thanh tiến trình
  NProgress.start()
  // Đặt tiêu đề trang
  document.title = getPageTitle(to.meta.title)
  // Xác định người dùng đã đăng nhập hay chưa
  const userStore = useUserStore()
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === "/login") {
      // Nếu người dùng đã đăng nhập, chuyển hướng đến trang chủ
      next({ path: "/" })
      NProgress.done()
    } else {
      const hasGetUserInfo = userStore.getterName
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          // Lấy thông tin người dùng
          await userStore.getInfo()
          next()
        } catch (error) {
          // Xóa token và chuyển hướng đến trang đăng nhập để đăng nhập lại
          userStore.resetToken()
          ElMessage.error(error || "Has Error")
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* Không có token */
    if (whiteList.indexOf(to.path) !== -1) {
      // Trong danh sách trang không yêu cầu xác thực, điều hướng trực tiếp
      next()
    } else {
      // Các trang khác không có quyền truy cập sẽ được chuyển hướng đến trang đăng nhập.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // Hoàn thành thanh tiến trình
  NProgress.done()
})
```

Setting layout và title

```sh
      meta: {
        layout: "name-layout",
        title: 'title',
      }
```

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

| Prop          | Type     | Required | Default  | Description                                             |
| ------------- | -------- | -------- | -------- | ------------------------------------------------------- |
| wrapClass     | String   | false    | ''       | Lớp CSS bổ sung cho container bao bọc                   |
| className     | String   | false    | ''       | Lớp CSS bổ sung cho phần tử input                       |
| name          | String   | true     | -        | Thuộc tính name cho phần tử input                       |
| placeholder   | String   | false    | ''       | Văn bản gợi ý trong trường nhập liệu                    |
| type          | String   | false    | 'text'   | Thuộc tính type cho phần tử input                       |
| label         | String   | false    | ''       | Văn bản nhãn cho phần tử input                          |
| maxLength     | Number   | false    | 100      | Độ dài tối đa của giá trị nhập liệu                     |
| disabled      | Boolean  | false    | false    | Xác định trạng thái bị vô hiệu hóa của trường nhập liệu |
| handlePattern | Function | false    | () => {} | Hàm xử lý giá trị nhập liệu                             |
| error         | String   | false    | ''       | Thông báo lỗi liên quan đến trường nhập liệu            |
| modelValue    | String   | false    | ''       | Giá trị hiện tại của trường nhập liệu                   |

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

| Prop           | Type               | Required | Default | Description                                           |
| -------------- | ------------------ | -------- | ------- | ----------------------------------------------------- |
| classImgReview | String             | false    | ''      | Class CSS bổ sung cho phần tử chứa hình ảnh xem trước |
| modelValue     | String &#124; null | false    | null    | Giá trị mô hình cho trường nhập file                  |

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

| Prop           | Type    | Required | Default    | Description                             |
| -------------- | ------- | -------- | ---------- | --------------------------------------- |
| className      | String  | false    | ''         | Class CSS bổ sung cho container bao bọc |
| inputClass     | String  | false    | ''         | Class CSS bổ sung cho phần tử input     |
| type           | String  | false    | 'checkbox' | Kiểu của trường checkbox                |
| name           | String  | true     | -          | Thuộc tính name cho phần tử input       |
| id             | String  | true     | -          | Thuộc tính id cho phần tử input         |
| label          | String  | false    | ''         | Văn bản nhãn cho phần tử checkbox       |
| classLabel     | String  | false    | ''         | Class CSS bổ sung cho phần tử nhãn      |
| error          | String  | false    | ''         | Thông báo lỗi cho trường nhập liệu      |
| checkmarkClass | Object  | false    | null       | Class CSS bổ sung cho phần tử checkmark |
| modelValue     | Boolean | false    | false      | Giá trị hiện tại của trường checkbox    |

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

| Prop            | Type                  | Required | Default                                      | Description                       |
| --------------- | --------------------- | -------- | -------------------------------------------- | --------------------------------- |
| options         | Array                 | true     | -                                            | Danh sách các tùy chọn            |
| modelValue      | String, Number, Array | false    | null                                         | Giá trị được chọn                 |
| disabled        | Boolean               | false    | false                                        | Xác định có bị disabled hay không |
| multiple        | Boolean               | false    | false                                        | Cho phép chọn nhiều giá trị       |
| isShowInput     | Boolean               | false    | false                                        | Hiển thị ô input                  |
| placeholder     | String                | false    | "Select..."                                  | Văn bản mặc định khi không chọn   |
| placement       | String                | false    | "bottomLeft"                                 | Vị trí hiển thị dropdown          |
| classSelected   | String                | false    | "flex items-center justify-between text-2xl" | Class CSS cho phần đã chọn        |
| classWrapOption | String                | false    | ""                                           | Class CSS bao bọc các option      |
| classOption     | String                | false    | ""                                           | Class CSS cho mỗi option          |

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

## Props

| Prop        | Type   | Required | Default | Description                      |
| ----------- | ------ | -------- | ------- | -------------------------------- |
| options     | Array  | true     | -       | Danh sách các tùy chọn           |
| classInput  | String | false    | ""      | Class CSS cho các input radio    |
| className   | String | false    | ""      | Class CSS cho mỗi tùy chọn       |
| classActive | String | false    | ""      | Class CSS cho tùy chọn được chọn |

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
