// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// createApp(App).use(store).use(router).mount('#app')


// main.ts
import { createApp } from 'vue'
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
//加上 end
app.mount('#app')
