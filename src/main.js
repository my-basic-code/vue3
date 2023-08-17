import '@/assets/css/main.css'

import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerGlobalComponent } from "@/utils/import";
import router from './router'

const app = createApp(App)
registerGlobalComponent(app);
app.use(createPinia())
app.use(router)

app.mount('#app')
