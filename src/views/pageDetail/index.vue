<template>
  <div class="page-detail">
    <h1>{{msg}}</h1>
    <button @click="navToPrevPageFunc()"><-Prev</button>
  </div>
</template>

<script>
  import { navigateTo } from '@/utils';

  export default{
    data() {
      return {
        msg: 'hello pageDetail'
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
    components: {}
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "style";
</style>
