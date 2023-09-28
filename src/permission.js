import 'nprogress/nprogress.css' // Kiểu thanh tiến trình

import { ElMessage } from 'element-plus'
import NProgress from 'nprogress' // Thanh tiến trình
import getPageTitle from '@/utils/get-page-title'
import { getToken } from '@/utils/auth' // Lấy token từ cookie
import router from './router'
import { useUserStore } from '@/stores/user'

NProgress.configure({ showSpinner: false }) // Cấu hình NProgress

const whiteList = ['/login', '/', '/404'] // Danh sách trang không chuyển hướng

router.beforeEach(async (to, from, next) => {
  // Bắt đầu thanh tiến trình
  NProgress.start()
  // Đặt tiêu đề trang
  document.title = getPageTitle(to.meta.title)
  // Xác định người dùng đã đăng nhập hay chưa
  const userStore = useUserStore()
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      // Nếu người dùng đã đăng nhập, chuyển hướng đến trang chủ
      next({ path: '/' })
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
          ElMessage.error(error || 'Has Error')
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
