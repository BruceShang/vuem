/*
 * @Desc: 分享提醒 
 * @Author: shangzhen 
 * @Date: 2018-09-27 14:13:06 
 * @Last Modified by: shangzhen
 * @Last Modified time: 2018-10-26 15:01:49
 */
<template>
  <div class="share-tip" :class="{'share-tip__active': isShow}">
    <!-- <transition name="animation"> -->
      <div v-if="isShow" class="share-tip__wrap" :style="styles">
        <p class="share-tip__bg">
          <img src="~assets/images/share-arrow.png" alt="">
        </p>
      </div>
      <p class="share-tip__desc">
        点击右上角进行分享<br>
        <button class="we-btn we-btn--warning" @click="closeMask">我知道了</button>
      </p>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: this.value,
    }
  },
  props: {
    /**
     * 图片链接地址
     */
    value: {
      type: Boolean,
      default: false,
    },
    /**
     * 模态框的自定义样式
     */
    styles: {
      type: Object,
      default: () => {},
    },
  },
  /**
   * 实现双方绑定
   * @param {boolean} newVal - 改变后的新值
   */
  watch: {
    value(newVal) {
      this.isShow = newVal
    },
  },
  methods: {
    /**
     * 关闭遮罩
     */
    closeMask() {
      this.isShow = false
      this.$emit('input', this.isShow)
      // this.$emit('onAfterHide')
    },
  },
}
</script>

<style lang="stylus" scoped>
  .share-tip {
    position: fixed;
    z-index: 10001;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
    background: rgba(0, 0, 0, .6);  
    &__wrap {
      position: absolute;
      right: 80px;
      top: 60px;
      z-index: 2012;
      // width: 100%;
      // box-sizing: border-box;
      // background: #fff;    
      // border-radius: 4px;  
      // transform: translate(-50%, -50%);
    }
    &__bg {
      width: 300px;
      height: 300px;
      // background: url('~assets/images/share-arrow.png') no-repeat;
      // background-size: cover;
    }

    &__desc {
      position: absolute;
      width: 80%;
      left: 50%;
      top: 50%;
      text-align: center;
      color: #ffffff;
      font-size: 35px;
      font-weight: 400;
      letter-spacing: 3px;
      transform: translate(-50%, -50%);
      // span {
      //   display: inline-block;
      //   width: 60px;
      //   height: 30px;
      //   color: #000000;
      //   background-color: #fff;
      // }
      button {
        margin-top: 20px;
      }
    }
    &__close {
      width: 100%;
      text-align: right ;
      font-size: 50px;  
    }
    &__active {
      display: block;
    }
    .share-tip-btn {
      margin-top: 20px;
    }
  }
  .animation-enter-active,.animation-leave-active {
    transform: translate(-50%, -50%) scale(1)
    transition: all .3s;
  }
  .animation-enter,.animation-leave-to {
    transform: translate(-50%, -50%) scale(0.8)
  }
</style>
