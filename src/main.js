import '@/assets/css/main.css'

import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerGlobalComponent } from "@/utils/import";
import router from './router'

const clickOutside = {
  beforeMount(el, binding) {
    el.__clickOutsideHandler = (event) => {
      if (!el.contains(event.target)) {
        binding.value()
      }
    }

    document.addEventListener('click', el.__clickOutsideHandler)
  },

  unmounted(el) {
    document.removeEventListener('click', el.__clickOutsideHandler)
  }
}

const app = createApp(App)
registerGlobalComponent(app);
app.use(createPinia())
app.use(router)
app.directive('click-outside', clickOutside)

app.mount('#app')
