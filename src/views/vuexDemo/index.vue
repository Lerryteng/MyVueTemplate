<template>
  <div class="vuex-demo">
    <button @click="navToPrevPageFunc()"><-Back</button>
    <name></name>
  </div>
</template>

<script>
  import Name from '@/components/Name';
  import { navigateTo } from '@/utils';

  export default{
    data() {
      return {
        msg: 'hello vue'
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
      'name': Name
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "style";
</style>
