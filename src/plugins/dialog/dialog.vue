<template>
  <div class="dialog" :class="{ 'dialog--active': active, 'dialog--fade-in': fadeIn }" @transitionend="transitionend">
    <transition name="scale">
      <div class="dialog__content" v-if="active">
        <div class="dialog__header" v-if="options.title">
          <h5 class="dialog__title">{{ options.title }}</h5>
        </div>
        <div class="dialog__body" v-if="content" v-html="content" :style="options.style">
          <p></p>
        </div>
        <div class="dialog__footer">
          <button class="dialog__button dialog__button--default" data-action="default" type="button" v-if="options.default" @click="hide">{{ options.default }}</button>
          <button class="dialog__button dialog__button--primary" data-action="primary" type="button" v-if="options.primary" @click="hide">{{ options.primary || '好的' }}</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script  type="text/babel">
  const REGEXP_LINE_FEED = /\n/g

  export default {
    data() {
      return {
        /**
         * 操作类型（点击按钮类型）
         * @type {string}
         */
        action: '',

        /**
         * 是否激活（显示）
         * @type {boolean}
         */
        active: false,

        /**
         * 对话框内容
         * @type {string}
         */
        content: '',

        /**
         * 对话框参数
         * @type {Object}
         * @property {string} options.title - 对话框标题
         * @property {string} options.default - 对话框默认按钮文字
         * @property {string} options.primary - 对话框主要按钮文字
         * @property {Object} options.style - 对话框内容样式
         */
        options: {},

        /**
         * 是否正在显现
         * @type {boolean}
         */
        fadeIn: false,
      }
    },
    methods: {
      /**
       * 显示
       * @public
       * @param {string} content - 对话框内容
       * @param {Object} options - 对话框参数
       * @return {Object} this
       */
      show(content, options = {}) {
        if (this.active || !content) {
          return this
        }

        this.active = true
        this.action = ''
        this.content = String(content).replace(REGEXP_LINE_FEED, '<br>')
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
       * emits Dialog#shown
       */
      shown() {
        /**
         * 触发显示完成事件
         * @event Dialog#shown
         */
        this.$emit('shown')
      },

      /**
       * 隐藏
       * @public
       * @param {Object} e - 点击事件对象
       * @return {Object} this
       */
      hide(e) {
        this.fadeIn = false
        this.action = e && e.target ? e.target.dataset.action : ''

        return this
      },

      /**
       * 完全隐藏（渐隐动画结束）
       * @private
       * emits Dialog#hidden
       */
      hidden() {
        this.active = false
        this.content = ''
        this.options = {}

        /**
         * 触发隐藏完成事件
         * @event Dialog#hidden
         */
        this.$emit('hidden', this.action)
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

<style lang="stylus" scoped>
@import '../../assets/stylus/variables.styl'

.dialog {
  background-color: rgba(0, 0, 0, .5);
  bottom: 0;
  display: none;
  left: 0;
  opacity: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity .15s ease;
  z-index: 2010;

  &--active {
    display: block;
  }

  &--fade-in {
    opacity: 1;
  }

  &__content {
    background-color: #fff;
    border-radius: 4px;
    left: 50%;
    overflow: hidden;
    overflow-wrap: break-word;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    word-break: break-all;
  }

  &__header {
    padding: 40px 40px 20px;
  }

  &__title {
    font-size: 32px;
    margin-top: 0;
    margin-bottom: 0;
  }

  &__body {
    color: #999;
    font-size: 30px;
    padding: 0 40px 40px;
    text-align: left;
    line-height: 1.8;
    text-align center;
    &:first-child {
      color: #333;
      padding-top: 40px;
    }
  }

  &__footer {
    border-top: 1px solid #ececec;
    display: flex;
  }

  &__button {
    background-color: #fff;
    border: 0;
    cursor: pointer;
    display: block;
    flex: 1;
    font-size: 32px;
    line-height: 1.5;
    padding: 20px 40px;

    &:focus,
    &:active {
      background-color: #f4f4f4;
      outline: none;
    }

    &--disabled,
    &[disabled] {
      opacity: .5;
      cursor: not-allowed;
      pointer-events: none;
    }

    &--default {
      color: #333;
    }

    &--primary {
      color: $white;
      background-color: $dark;
    }

    & + & {
      border-left: 1px solid #ececec;
    }
  }
  .scale-enter-active{
    transform: translate(-50%, -50%) scale(0.8)
  }
  .scale-enter-to,
  .scale-leave-active  {
    transform: translate(-50%, -50%) scale(1)
    transition: transform .3s
  }
  .scale-leave-to {
    transform: translate(-50%, -50%) translateY(0.8)
  }
}
</style>
