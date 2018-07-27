<template>
  <div class="page-main">
    <h1>{{msg}}</h1>
    <button @click="navToNextPageFunc('PageDetail')">Next-></button>
    <div class="demo-list">
      <h2>Demo List</h2>
      <button @click="navToNextPageFunc(item.path)"
              v-for="(item,index) in demoList"
              :key="index">{{item.name}}</button>
    </div>
  </div>
</template>

<script>

  import { navigateTo } from '@/utils';

  export default{
    data() {
      return {
        msg: 'hello pageMain',
        demoList: [
          {name: 'sliderDemo', path: 'SliderDemo'},
          {name: 'vuexDemo', path: 'VuexDemo'},
          {name: 'axiosDemo', path: 'AxiosDemo'},
        ]
      }
    },
    methods: {
      /**
       * 路由跳转
       */
      navToNextPageFunc(path) {
        navigateTo(path);
      }
    },
    components: {}
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "style";
</style>
