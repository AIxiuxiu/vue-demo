const ExampleLayout = () => import('@/layout/LayoutExample.vue');

export default {
  path: '/example',
  redirect: '/example/svgicon',
  component: ExampleLayout,
  children: [
    {
      path: 'svgicon',
      component: () => import('@/views/example/Svgicon.vue'),
      meta: {
        title: 'Svg Icon'
      }
    },
    {
      path: 'globalComponent',
      component: () => import('@/views/example/GlobalComponent.vue')
    },
    {
      path: 'axios',
      component: () => import('@/views/example/Axios.vue')
    },
    {
      path: 'vuex',
      component: () => import('@/views/example/StoreVuex.vue')
    },
    {
      path: 'component',
      component: () => import('@/views/example/Component.vue')
    },
    {
      path: 'params',
      component: () => import('@/views/example/Params.vue'),
      children: [
        {
          name: 'Params',
          path: 'param/:test',
          component: () => import('@/views/example/ExampleParams.vue')
        },
        {
          path: 'query',
          component: () => import('@/views/example/ExampleParams.vue')
        }
      ]
    },
    {
      path: 'reload',
      component: () => import('@/views/example/Reload.vue')
    },
    {
      path: 'permission/router',
      component: () => import('@/views/example/PermissionRouter.vue'),
      meta: {
        requireLogin: true // 鉴权
      }
    },
    {
      path: 'permission/js',
      component: () => import('@/views/example/Permission.js.vue')
    }
  ]
};
