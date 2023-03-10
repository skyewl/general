const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/Index.vue'),
  },
  {
    path: '/trade',
    name: 'trade',
    component: () => import('@/views/Trade.vue'),
  },
]
export default routes
