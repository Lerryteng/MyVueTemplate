import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import PageMain from '@/views/pageMain/index'
import PageDetail from '@/views/PageDetail/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageMain',
      component: PageMain
    }, {
      path: '/PageDetail',
      name: 'PageDetail',
      component: PageDetail
    }
  ]
})
