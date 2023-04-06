const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/Index.vue'),
  },
  {
    path: '/swap',
    name: 'swap',
    component: () => import('@/views/Swap.vue'),
  },
  {
    path: '/trade',
    name: 'trade',
    component: () => import('@/views/Trade.vue'),
  },
  {
    path: '/launchpad',
    name: 'launchpad',
    component: () => import('@/views/Launchpad.vue'),
  },
  {
    path: '/launchpadDet',
    name: 'launchpadDet',
    component: () => import('@/views/LaunchpadDet.vue'),
  },
  {
    path: '/pool',
    name: 'pool',
    component: () => import('@/views/Pool.vue'),
  },
  {
    path: '/doc',
    name: 'doc',
    component: () => import('@/views/Doc.vue'),
  },
  {
    path: '/liquidity',
    name: 'liquidity',
    component: () => import('@/views/Liquidity.vue'),
  },
  {
    path: '/stake',
    name: 'stake',
    component: () => import('@/views/Stake.vue'),
  },
  {
    path: '/stakeSwap',
    name: 'stakeSwap',
    component: () => import('@/views/StakeSwap.vue'),
  },
]
export default routes
