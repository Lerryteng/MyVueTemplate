// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import * as filters from './filter';
import 'mint-ui/lib/style.css'

// register global utility filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

// 关闭生产模式下的提示
Vue.config.productionTip = false;

Vue.config.errorHandler = (err, vm, info) => {
  console.error('errorHandler：', err);
};

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
