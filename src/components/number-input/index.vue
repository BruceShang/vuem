/*
 * @Desc: number-input 
 * @Author: shangzhen 
 * @Date: 2018-09-20 16:32:48 
 * @Last Modified by: shangzhen
 * @Last Modified time: 2018-10-30 11:33:34
 */

<template>
  <div class="component-number-inputer">
    <button type="button" @click="decrease" :disabled="!decreasable"></button>
    <input type="text" :name="name" :value="number" :min="min" :max="max" @change="change" :disabled="!decreasable && !increasable">
    <button type="button" @click="increase" :disabled="!increasable"></button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        /**
         * 当前有效数值
         * @type {number}
         */
        number: 1,
      }
    },

    props: {
      /**
       * 点击增减按钮时的数字增减量
       */
      increment: {
        type: Number,
        default: 1,
      },

      /**
       * 可输入的最大值
       */
      max: {
        type: Number,
        default: Infinity,
      },

      /**
       * 可输入的最小值
       */
      min: {
        type: Number,
        default: -Infinity,
      },

      /**
       * 输入表单的name属性值
       */
      name: {
        type: String,
        default: 'number',
      },

      /**
       * 输入表单的value属性值
       */
      value: {
        type: Number,
        default: 1,
      },
    },

    computed: {
      /**
       * 是否可递减
       * @return {boolean} 是与否
       */
      decreasable() {
        return this.number > this.min
      },

      /**
       * 是否可递增
       * @return {boolean} 是与否
       */
      increasable() {
        return this.number < this.max
      },
    },

    created() {
      if (this.min <= this.max) {
        this.number = Math.min(this.max, Math.max(this.min, this.value))
      } else {
        this.number = 0
      }
    },

    methods: {
      /**
       * 数字变化处理函数
       * @param {Object} e - 事件对象
       */
      change(e) {
        const value = Math.round(e.target.value) || 0

        this.number = 0
        this.number = Math.min(this.max, Math.max(this.min, value))
        this.dispatch(value)
      },

      /**
       * 递减数字
       */
      decrease() {
        if (this.decreasable) {
          this.number -= this.increment
          this.dispatch(this.number)
        }
      },

      /**
       * 递增数字
       */
      increase() {
        if (this.increasable) {
          this.number += this.increment
          this.dispatch(this.number)
        }
      },

      /**
       * 触发组件变化事件
       * emits NumberInputer#change
       * @param {number} inputNumber - 当前输入值
       */
      dispatch(inputNumber) {
        /**
         * 组件变化事件
         * @event NumberInputer#change
         */
        this.$emit('input', this.number)
        this.$emit('change', this.number, inputNumber)
      },
    },
  }
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/variables.styl';
.component-number-inputer {
  $border-color = #EAEAEA;
  overflow: hidden;

  height: 54px;

  > button,
  > input {
    float: left;
    height: inherit;

    &:focus {
      outline: none;
    }

    &[disabled] {
      border-color: $border-color;
      background-color: transparent;
      cursor: not-allowed;

      &::before,
      &::after {
        background-color: $border-color;
      }
    }
  }

  > button {
    position: relative;

    width: 54px;

    background-color: transparent;
    // border: 1px solid $gray-lighter;
    cursor: pointer;

    // &:first-child {
    //   border-top-left-radius: $border-radius;
    //   border-bottom-left-radius: $border-radius;
    // }

    // &:last-child {
    //   border-top-right-radius: $border-radius;
    //   border-bottom-right-radius: $border-radius;
    // }

    &::before,
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;

      content: " ";

      background-color: $color-primary;
      transform: translate(-50%, -50%);
    }

    &::before {
      width: 22px;
      height: 3px;
    }

    &::after {
      width: 3px;
      height: 22px;
    }

    &:first-child {
      &::after {
        visibility: hidden;
      }
    }
  }

  > input {
    line-height: normal;

    position: relative;
    z-index: 1;

    width: 86px;
    min-width: 86px;
    margin-left: -1px;
    margin-right: -1px;
    // border: 1px solid $gray-lighter;
    border-radius: 0;
    text-align: center;
    background-color: #F5F5F5;

    // 取消iOS中输入框的默认圆角
   -webkit-appearance: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      appearance: none;
    }
  }
}
</style>
