import Vue from 'vue'
import Router from 'vue-router'
import PageMain from '@/views/pageMain/index'
import PageDetail from '@/views/PageDetail/index'
import SliderDemo from '@/views/SliderDemo/index'
import VuexDemo from '@/views/VuexDemo/index'
import AxiosDemo from '@/views/AxiosDemo/index'

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
      path: '/SliderDemo',
      name: 'SliderDemo',
      component: SliderDemo
    }, {
      path: '/VuexDemo',
      name: 'VuexDemo',
      component: VuexDemo
    }, {
      path: '/AxiosDemo',
      name: 'AxiosDemo',
      component: AxiosDemo
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
