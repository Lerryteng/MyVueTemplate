<template>
  <div class="axios-demo">
    <button @click="navToPrevPageFunc()"><-Back</button>
    <h2>result in console</h2>
    <button @click="getUserInfoFunc();">get</button>
    <button @click="getListDataFunc();">post</button>
  </div>
</template>

<script>
  import axios from '@/server/services';
  import { navigateTo } from '@/utils';

  export default{
    name: 'axiosDemo',
    data() {
      return {
        msg: 'hello vue'
      }
    },
    activated() {
      console.log('activated');
    },
    deactivated() {
      console.log('deactivated');
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
          console.log('get result：', res);
        }).catch((err) => {
          console.log(err);
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
          console.log('post result：', res);
        }).catch((err) => {
          console.log(err);
        })
      }
    },
    components: {}
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "style";
</style>
