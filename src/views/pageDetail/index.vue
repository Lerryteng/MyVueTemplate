<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click="navToPrevPageFunc()"><-Prev</button>
  </div>
</template>

<script>
  import { navigateTo } from '@/utils';
  import axios from '@/server/services'

  export default{
    data() {
      return {
        msg: 'hello pageDetail'
      }
    },
    created() {
      this.getUserInfoFunc();
    },
    methods: {
      /**
       * 路由跳转
       */
      navToPrevPageFunc() {
        navigateTo('PageMain');
      },
      /**
       * 接口请求
       */
      getUserInfoFunc() {
        axios.getUserInfo().then((res) => {
          console.log(res);
        })
      },
      /**
       * 接口请求
       */
      getListDataFunc() {
        let param = {
          id: 111
        };
        axios.getListData(param).then((res) => {
          console.log(res);
        })
      },
    },
    components: {}
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "style";
</style>
