/*
 * @Desc: 头部下载提示 
 * @Author: shangzhen 
 * @Date: 2018-11-02 17:25:37 
 * @Last Modified by: shangzhen
 * @Last Modified time: 2018-11-14 18:58:25
 */
<template>
  <div class="download-banner" @click="callApp">
    <img src="https://image.sudian178.com/sd/static/img/top-download.png" alt="">
    <!-- <img src="../../assets/images/top-download.png" alt=""> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    callApp() {
      this.h5CallApp({
        shareType: 'h5',
        id: this.$route.query.goodsId,
      })
    },
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/stylus/variables.styl';
.download-banner {
  width: 100%;
  height: 116px;
  img {
    display: inline-block;
    position: fixed;
    top:0px;
    width: 100%;
    height: 116px;
    z-index: 10000;
  }
}
</style>