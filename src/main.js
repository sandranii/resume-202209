// main.ts
import { createApp } from 'vue'
import axios from 'axios'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
//加上 start
import router from './router'
import store from './store'
//加上 end
const app = createApp(App)

app.use(ElementPlus)
//加上 加start
app.use(store)
app.use(router)
app.config.globalProperties.axios = axios
//加上 end
app.mount('#app')
