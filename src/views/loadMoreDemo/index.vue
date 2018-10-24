<template>
  <div class="loadmore-demo" :style="{'height': allHeight + 'px'}">
    <div class="banner">
      <div class="title">banner</div>
    </div>
    <div class="data">
      <div class="list">
        <Loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
          <!-- 数据 -->
          <ul>
            <li v-for="(item,index) in 100" :key="index">{{item}} : data-line</li>
          </ul>
        </Loadmore>
      </div>
    </div>
  </div>
</template>

<script>
  import { Loadmore } from 'mint-ui'

  export default{
    data() {
      return {
        allHeight: window.innerHeight,

        allLoaded: false
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {
      loadTop() {
        console.log('loadTop');
        setTimeout(() => {
          this.$refs.loadmore.onTopLoaded();
        }, 1000);
      },
      loadBottom() {
        console.log('loadBottom');
        this.allLoaded = true;      // 若数据已全部获取完毕
        setTimeout(() => {
          this.$refs.loadmore.onBottomLoaded();
          this.allLoaded = false;
        }, 1000);
      }
    },
    components: {
      Loadmore
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "style";
</style>
