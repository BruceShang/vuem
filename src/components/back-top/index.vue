/*
 * @Desc: 回到顶部 
 * @Author: shangzhen 
 * @Date: 2018-09-12 14:52:26 
 * @Last Modified by: shangzhen
 * @Last Modified time: 2018-11-13 14:14:32
 */
<template>
  <div class="back-top" :style="{'bottom': top}" v-if="active">
    <span class="back-top__wrap" @click="backTop">
      <i class="we-icon we-icon--back-top">
      </i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      top: '2.7rem',
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.onScroll)
    })
  },
  methods: {
    /**
     * 为单个页面设置’back-top‘的高度
     */
    pagePosition() {
      const route = this.$route.name
      switch (route) {
        case 'vipRecruit':
          this.top = '1rem'
          break
        default:
          this.top = '2.7rem'
      }
    },
    /**
     * 点击 - 回到顶部
     */
    backTop() {
      $('html, body').animate({
        scrollTop: 0,
      }, 500)
    },
    /**
     * 监听滚动事件，滚动高度大于一屏视口高度时，显示顶部icon
     */
    onScroll() {
      const scrolled = window.scrollY
      const viewHeight = window.innerHeight
      if (scrolled > viewHeight) {
        this.pagePosition()
        this.active = true
        return
      }
      this.active = false
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/variables.styl';

.back-top {
  position: fixed;
  right: 20px;
  // bottom: 270px;
  z-index: $z-index-back-top;
  &__wrap {
    position: relative;
    display: inline-block;
    width: 88px;
    height: 88px;
    line-height: 88px;
    text-align: center;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.7);
    i {
      font-size: 40px;
      color: $white;
    }
  }
}
</style>
