const routes = [
  {
    path: '/tabs',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'Maps', path: 'Maps', component: () => import('pages/Maps.vue') },
      { name: 'Emergency', path: 'Emergency', component: () => import('pages/Emergency.vue') },
      { name: 'Health', path: 'Health', component: () => import('pages/Health.vue') },
      { name: 'Profile', path: 'Profile', component: () => import('pages/Profile.vue') },
      { name: 'Rewards', path: 'Rewards', component: () => import('pages/Rewards.vue') },
      { path: '', redirect: 'Maps' }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { name: 'Signin', path: 'Signin', component: () => import('pages/Signin.vue') },
      { name: 'Signup', path: 'Signup', component: () => import('pages/Signup.vue') },
      { name: 'Verification', path: 'Verification', component: () => import('pages/Verification.vue') },
      { name: 'BeginSession', path: 'BeginSession', component: () => import('pages/BeginSession.vue') }
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
