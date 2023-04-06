import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import routes from './router.js'

const router = createRouter({
	// history: createWebHistory(),
	history: createWebHashHistory(),
	routes: routes
})
export default router