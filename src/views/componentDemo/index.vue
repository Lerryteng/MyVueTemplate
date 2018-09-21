<template>
  <div class="slider-demo">
    <h2 v-dirTest>{{message}}</h2>
    <button @click="navToPrevPageFunc()"><-Back</button>
  </div>
</template>

<script>
  import { navigateTo } from '@/utils';

  export default{
    data() {
      return {
        message: 'Component Demo'
      }
    },
//    beforeCreate() {
//      console.log('beforeCreate');
//      console.log('el:', this.$el);
//      console.log('data:', this.$data);
//      console.log('message:', this.message);
//    },
//    created() {
//      console.log('created');
//      console.log('el:', this.$el);
//      console.log('data:', this.$data);
//      console.log('message:', this.message);
//    },
    beforeMount() {
      console.log('beforeMount');
      console.log('el:', this.$el);
      console.log('data:', this.$data);
      console.log('message:', this.message);
      console.log('vm.el:', vm.$el);
    },
    mounted() {
      console.log('mounted');
      console.log('el:', this.$el);
      console.log('data:', this.$data);
      console.log('message:', this.message);
      console.log('vm.el:', vm.$el);
    },
//    beforeUpdate() {
//      console.log('beforeUpdate');
//      console.log('el:', this.$el);
//      console.log('data:', this.$data);
//      console.log('message:', this.message);
//    },
//    updated() {
//      console.log('updated');
//      console.log('el:', this.$el);
//      console.log('data:', this.$data);
//      console.log('message:', this.message);
//    },
//    activated() {
//      console.log('activated');
//    },
//    deactivated() {
//      console.log('deactivated');
//    },
//    beforeDestroy() {
//      console.log('beforeDestroy');
//      console.log('el:', this.$el);
//      console.log('data:', this.$data);
//      console.log('message:', this.message);
//    },
//    destroyed() {
//      console.log('destroyed');
//      console.log('el:', this.$el);
//      console.log('data:', this.$data);
//      console.log('message:', this.message);
//    },
    directives: {
      dirTest: {
//        bind(el, binding, vnode, oldVnode) {
//          console.log('bind:', el, binding, vnode, oldVnode)
//        },
//        inserted(el, binding, vnode, oldVnode) {
//          console.log('inserted:', el, binding, vnode, oldVnode)
//        },
//        update(el, binding, vnode, oldVnode) {
//          console.log('update:', el, binding, vnode, oldVnode)
//        },
//        componentUpdated(el, binding, vnode, oldVnode) {
//          console.log('componentUpdated:', el, binding, vnode, oldVnode)
//        },
//        unbind(el, binding, vnode, oldVnode) {
//          console.log('unbind:', el, binding, vnode, oldVnode)
//        }
      }
    },
    methods: {
      /**
       * 路由跳转
       */
      navToPrevPageFunc() {
        navigateTo('PageMain');
      }
    },
    components: {
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "style.less";
</style>
