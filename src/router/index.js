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
      path: '/ComponentDemo',
      name: 'ComponentDemo',
      component(resolve) {
        require(['@/views/componentDemo/index.vue'], resolve)
      },
      meta: {
        keepAlive: true
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
      },
      meta: {
        keepAlive: false
      }
    }, {
      path: '/LoadMoreDemo',
      name: 'LoadMoreDemo',
      component(resolve) {
        require(['@/views/loadMoreDemo/index.vue'], resolve)
      },
      meta: {
        keepAlive: false
      }
    }, {
      path: '*',
      redirect: '/'
    }
  ]
});

router.beforeEach((to, from, next) => {
  // console.log('from：', from);
  // console.log('to：', to);
  next();
});

export default router;
