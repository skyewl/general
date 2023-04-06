import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index.js' 

import './assets/css/main.css'

const vue = createApp(App)
vue.use(ElementPlus)
vue.use(router)

vue.mount('#app')


