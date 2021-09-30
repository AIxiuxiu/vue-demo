import store from '@/store/index';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // progress bar style
import { createRouter, createWebHashHistory, Router } from 'vue-router';

const routes = [];
const routesContext = import.meta.globEager('./modules/*.ts');
Object.keys(routesContext).forEach((v) => {
  routes.push(routesContext[v].default);
});

routes.push({
  path: '/:pathMatch(.*)*',
  component: () => import('@/views/404.vue'),
  meta: {
    title: '找不到页面'
  }
});

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: routes.flat()
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.meta.requireLogin) {
    if (store.getters['token/isLogin']) {
      next();
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
