import Vue from 'vue'
import Router from 'vue-router'
import PageMain from '@/views/pageMain/index'
import PageDetail from '@/views/PageDetail/index'

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'PageMain',
      component: PageMain
    }, {
      path: '/PageDetail',
      name: 'PageDetail',
      component: PageDetail
    }, {
      path: '*',
      redirect: '/'
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log('from：', from);
  console.log('to：', to);
  next();
});

export default router;
