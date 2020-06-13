const routes = [
  {
    path: '/tabs',
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
    component: () => import('pages/Login.vue'),
    children: [
      { path: 'Signin', component: () => import('pages/Signin.vue') },
      { path: 'Signup', component: () => import('pages/Signup.vue') }
    ]
  },
  { path: '/', component: () => import('pages/Index.vue') }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
