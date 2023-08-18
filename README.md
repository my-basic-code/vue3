# Project of Hoang Hiéu
custom by Hoang Hiéu

## Mục lục

- [Giới thiệu](#giới-thiệu)
- [Hướng dẫn cài đặt](#hướng-dẫn-cài-đặt)
- [Cấu trúc thư mục](#cấu-trúc-thư-mục)

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
    │
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

    ├── constants /* Các hằng số */
    │
    ├── helper /* Các hàm tiện ích */
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
    │   └── customClass.js /* custom classes dùng chung */
    │
    ├── App.vue /* Gốc ứng dụng */
    │
    └── main.js /* Entry point 

