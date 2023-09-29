import '@/assets/css/main.css'
import '@/permission' // permission control
import 'element-plus/dist/index.css'

import App from './App.vue'
import ElementPlus from 'element-plus'
import { clickOutsideDirective } from "@/hooks/clickOutsideDirective";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from "./i18n"
import { registerGlobalComponent } from "@/utils/import";
import router from './router'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)
registerGlobalComponent(app);
app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(ElementPlus, {
  locale: zhCn,
})
app.directive('click-outside', clickOutsideDirective)
app.config.productionTip = false

app.mount('#app')
