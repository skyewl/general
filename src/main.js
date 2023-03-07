import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js' 

import './assets/css/main.css'

const vue = createApp(App)
vue.use(router)
vue.mount('#app')
