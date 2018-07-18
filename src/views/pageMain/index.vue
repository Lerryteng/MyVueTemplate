<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click="navToNextPageFunc()">Next-></button>
    <name></name>
  </div>
</template>

<script>
  import Name from '@/components/Name';
  import { navigateTo } from '@/utils';

  export default{
    data() {
      return {
        msg: 'hello pageMain',
      }
    },
    methods: {
      /**
       * 路由跳转
       */
      navToNextPageFunc() {
        navigateTo('PageDetail');
      }
    },
    components: {
      'name': Name
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "style";
</style>
