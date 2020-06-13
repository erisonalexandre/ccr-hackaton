const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'Maps', component: () => import('pages/Maps.vue') },
      { path: 'Emergency', component: () => import('pages/Emergency.vue') },
      { path: 'Health', component: () => import('pages/Health.vue') },
      { path: 'Profile', component: () => import('pages/Profile.vue') },
      { path: 'Rewards', component: () => import('pages/Rewards.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue')
  },
  { path: '/index', component: () => import('pages/Index.vue') }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
