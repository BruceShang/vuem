/*
 * @Desc: action-sheet 自定义组件 
 * @Author: shangzhen 
 * @Date: 2018-09-20 16:28:41 
 * @Last Modified by: Yushuizeng
 * @Last Modified time: 2018-11-16 16:09:46
 */
<template>
  <div class="action-sheet" >
    <transition name="actionsheet-mask">
      <div class="action-sheet__mask" v-if="isShow" @click="closeMask" @touchmove.prevent>
      </div>
    </transition>
    <transition name="animation">
      <div v-show="isShow" class="action-sheet__wrap">
        <div class="action-sheet__content">
          <slot></slot>
        </div>
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
     * v-model值
     */
    value: {
      type: Boolean,
      default: false,
    },
  },
  /**
   * 实现双方绑定
   * @param {boolean} newVal - 改变后的新值
   */
  watch: {
    value(newVal) {
      this.isShow = newVal
      // 添加禁止底层页面滑动（自定义button，未能关闭弹窗所以要传value false）
      if (newVal) {
        document.body.style = 'position: fixed'
      } else {
        document.body.removeAttribute('style')
      }
    },
  },
  methods: {
    /**
     * 关闭遮罩
     */
    closeMask() {
      this.isShow = false
      this.$emit('input', this.isShow)
      this.$emit('change', this.isShow)
    },
    /**
     * 确认按钮后触发调用父组件中的事件
     */
    // onHandle() {
    //   this.isShow = false
    //   this.$emit('input', this.isShow)
    //   this.$emit('onAfterHide')
    // },
  },
  beforeDestroy() {
    document.body.removeAttribute('style')
  },
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/variables.styl';
  .action-sheet {
    -webkit-overflow-scrolling:touch;
    &__wrap {
      position: fixed;
      left: 0;
      bottom:0;
      z-index: 2039;
      width: 100%;
      background: #fff;
      box-sizing: border-box;
    }
    &__content {
      position: relative;  
    }
    &__mask {
      position: fixed;
      z-index: 2010;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, .3);  
    }

    &__close {
      position: absolute;
      right: 20px;
      top: 0px;
      font-size: 50px;  
      color: $gray-light;
      z-index: 99;
    }

    &__footer {
      padding: 20px;
    }
  }
  .animation-enter-active,.animation-leave-active {
    transition: all .35s;
  }
  .animation-enter,.animation-leave-to {
    transform: translate3d(0,100%,0);
  }
  .actionsheet-mask-enter-active, .actionsheet-mask-leave-active {
    transition: all .35s;  
  }
  .actionsheet-mask-enter,.actionsheet-mask-leave-to {
    opacity: 0;
  }
</style>
