<template>
  <div class="slider-demo">
    <button @click="navToPrevPageFunc()"><-Back</button>
    <div class="slide-wrapper">
      <div class="slide-content">
        <slider ref="slide" :autoPlay="isAutoPlay" :loop="isLoop" :showDot="isShowDot" :interval="interval" :threshold="threshold" :speed="speed">
          <div v-for="item in slider">
            <a :href="item.linkUrl">
              <img :src="item.picUrl">
            </a>
          </div>
        </slider>
      </div>
    </div>
  </div>
</template>

<script>
  import Slide from '@/components/Slider';
  import { navigateTo } from '@/utils';

  export default{
    data() {
      return {
        isAutoPlay: false,
        isLoop: true,
        isShowDot: true,
        speed: 400,
        threshold: 0.3,
        interval: 4000,
        slider: [
          {
            linkUrl: 'http://y.qq.com/w/album.html?albummid=001tftZs2RX1Qz',
            picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg',
            id: 11378
          },
          {
            linkUrl: 'https://y.qq.com/msa/218/0_4085.html',
            picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg',
            id: 11375
          },
          {
            linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2195876&g_f=shoujijiaodian',
            picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg',
            id: 11287
          }
        ]
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
      'slider': Slide
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "style.less";
</style>
