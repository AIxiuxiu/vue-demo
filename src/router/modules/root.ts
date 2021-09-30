export default [
  {
    path: '/',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: '登录'
    }
  }
];
