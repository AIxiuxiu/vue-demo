const DemoLayout = () => import('@/layout/LayoutDemo.vue');

export default {
  path: '/demo',
  redirect: '/demo/1',
  component: DemoLayout,
  children: [
    {
      path: '1',
      component: () => import('@/views/demo/Demo1.vue'),
      meta: {
        title: '示例1'
      }
    },
    {
      path: '2',
      component: () => import('@/views/demo/Demo2.vue'),
      meta: {
        title: '示例2'
      }
    },
    {
      path: '3',
      component: () => import('@/views/demo/Demo3.vue'),
      meta: {
        title: '示例3'
      }
    },
    {
      path: '4',
      component: () => import('@/views/demo/Demo4.vue'),
      meta: {
        title: '示例4'
      }
    },
    {
      path: '5',
      component: () => import('@/views/demo/Demo5.vue'),
      meta: {
        title: '示例5'
      }
    },
    {
      path: '6',
      component: () => import('@/views/demo/Demo6.vue'),
      meta: {
        title: '示例6'
      }
    },
    {
      path: '7',
      component: () => import('@/views/demo/Demo7.vue'),
      meta: {
        title: '综合使用案例'
      }
    },
    {
      path: '8',
      component: () => import('@/views/demo/Demo8.vue'),
      meta: {
        title: '自定义指令'
      }
    }
  ]
};
