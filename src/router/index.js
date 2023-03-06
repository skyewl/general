import {createRouter, createWebHistory} from 'vue-router'
import routes from './router.js'    // 导入 router 目录下的 router.js

const router = createRouter({
	history: createWebHistory(),
	routes: routes
})
export default router