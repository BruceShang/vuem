<template>
  <div class="toast" :class="{ 'toast--active': active, 'toast--fade-in': fadeIn }" @transitionend="transitionend" v-html="message"></div>
</template>

<script  type="text/babel">
  const REGEXP_LINE_FEED = /\n/g

  export default {
    data() {
      return {
        /**
         * 是否激活（显示）
         * @type {boolean}
         */
        active: false,

        /**
         * 消息内容
         * @type {string}
         */
        message: '',

        /**
         * 消息参数
         * @type {Object}
         * @property {number} options.timeout - 显示时间（毫秒）
         */
        options: {},

        /**
         * 是否正在显现
         * @type {boolean}
         */
        fadeIn: false,
      }
    },
    props: {
      /**
       * 显示时间（毫秒）
       */
      timeout: {
        type: Number,
        default: 1000,
      },
    },
    methods: {
      /**
       * 显示
       * @public
       * @param {string} message - 消息内容
       * @param {Object} options - 消息参数
       * @return {Object} this
       */
      show(message, options = {}) {
        if (this.active || !message) {
          return this
        }

        this.active = true
        this.message = String(message).replace(REGEXP_LINE_FEED, '<br>')
        this.options = options
        this.$nextTick(() => {
          // 强制重绘已使渐变动画生效
          this.$el.offsetWidth // eslint-disable-line
          this.fadeIn = true
        })

        return this
      },

      /**
       * 完全显示（渐现动画结束）
       * @private
       * emits Toast#shown
       */
      shown() {
        /**
         * 触发显示完成事件
         * @event Toast#shown
         */
        this.$emit('shown')
        setTimeout(this.hide, this.options.timeout || this.timeout)
      },

      /**
       * 隐藏
       * @public
       * @return {Object} this
       */
      hide() {
        this.fadeIn = false

        return this
      },

      /**
       * 完全隐藏（渐隐动画结束）
       * @private
       * emits Toast#hidden
       */
      hidden() {
        this.active = false
        this.message = ''
        this.options = {}

        /**
         * 触发隐藏完成事件
         * @event Toast#hidden
         */
        this.$emit('hidden')
      },

      /**
       * CSS Transition变换效果结束事件处理函数
       * @private
       */
      transitionend() {
        if (this.fadeIn) {
          this.shown()
        } else {
          this.hidden()
        }
      },
    },
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/stylus/variables.styl';

  .toast {
    position: fixed;
    display: none;
    width: 80%;
    padding: 30px;
    top: 50%;
    left: 50%;
    opacity: 0;
    background-color: rgba(0, 0, 0, .7);
    border-radius: 10px;
    color: #fff;
    text-align: center;
    transform: translate(-50%, -50%);
    z-index: $z-index-toast;
    transition: opacity .15s ease;

    &--active {
      display: block;
    }

    &--fade-in {
      opacity: 1;
    }
  }
</style>
