<template>
  <div class="lazy-load">
    <img v-lazy="src" :key="src" :alt="alt" lazy="loading">
  </div>
</template>

<script>
export default {
  name: 'we-img',
  data() {
    return {
    }
  },
  props: {
    /**
     * 图片链接地址
     */
    src: {
      type: String,
      default: '',
    },
    /**
     * 图片描述
     */
    alt: {
      type: String,
      default: '',
    },
  },
  mounted() {
  },
  methods: {
  },
}
</script>

<style lang="stylus" scoped>
  .lazy-load {
    position: relative;
    display: inline-block;
    text-align center;
    width 100%;
    img {
      // display: inline-block;
      // 解决 设置inline-block 后产生的几像素留白
      vertical-align: top;
      width: 100%;
      height: auto;
      margin: 0px;
    }
    img[lazy=loading] {
      width: 72px;
      height: 60px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -36px;
      margin-top: -30px;
    }
  }
</style>
