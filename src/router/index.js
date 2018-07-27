import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'PageMain',
      component(resolve) {
        require(['@/views/pageMain/index.vue'], resolve)
      }
    }, {
      path: '/PageDetail',
      name: 'PageDetail',
      component(resolve) {
        require(['@/views/pageDetail/index.vue'], resolve)
      }
    }, {
      path: '/SliderDemo',
      name: 'SliderDemo',
      component(resolve) {
        require(['@/views/sliderDemo/index.vue'], resolve)
      }
    }, {
      path: '/VuexDemo',
      name: 'VuexDemo',
      component(resolve) {
        require(['@/views/vuexDemo/index.vue'], resolve)
      }
    }, {
      path: '/AxiosDemo',
      name: 'AxiosDemo',
      component(resolve) {
        require(['@/views/axiosDemo/index.vue'], resolve)
      }
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
