/*
 * @Desc: dialog-box 
 * @Author: shangzhen 
 * @Date: 2018-09-20 16:52:13 
 * @Last Modified by: yushuizeng
 * @Last Modified time: 2018-09-28 11:01:05
 */

<template>
  <div class="dialog-box" :class="{'dialog-box__active': isShow}">
    <transition name="animation">
      <div v-if="isShow" class="dialog-box__wrap" :style="styles">
        <slot></slot>
      </div>
    </transition>
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
    // closeMask() {
    //   this.isShow = false
    //   this.$emit('input', this.isShow)
    //   this.$emit('onAfterHide')
    // },
  },
}
</script>

<style lang="stylus" scoped>
  .dialog-box {
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
    background: rgba(0, 0, 0, .3);  
    &__wrap {
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 2012;
      width: 100%;
      box-sizing: border-box;
      background: #fff;    
      border-radius: 4px;  
      transform: translate(-50%, -50%);
    }

    &__close {
      width: 100%;
      text-align: right ;
      font-size: 50px;  
    }
    &__active {
      display: block;
    }
    .dialog-box-btn {
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
