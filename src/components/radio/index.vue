<template>
    <div class="component-radio">
        <input type="radio"
               class="component-radio__input"
               :id="id"
               :name="name"
               :value="value"
               :class="className"
               :disabled="disabled"
               @change="onChange"
               :checked="state">
        <label :for="id" class="component-radio__label">
          <span class="component-radio__indicator we-icon"></span>
            <slot></slot>
        </label>
    </div>
</template>

<script>
export default {
  name: 'we-radio',
  model: {
    prop: 'modelValue', // 父组v-model="paraValues"中的paraValues值会传入modelValue的字段
    event: 'change', // 同时会触发一个input事件,并带一个新值，paraValues属性将被更新
  },
  props: {
    id: {
      type: String,
      default() {
        return `radio-id-${this._uid}`
      },
    },
    name: {
      type: String,
      default: null,
    },
    value: {
      require: true,
      default: null,
    },
    modelValue: {
      default: undefined,
    },
    className: {
      type: String,
      default: null,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    state() {
      if (this.modelValue === undefined) {
        return this.checked
      }
      return this.modelValue === this.value
    },
  },
  mounted() {
    if (this.checked && !this.state) {
      this.toggle()
    }
  },
  methods: {
    onChange() {
      this.toggle()
    },
    toggle() {
      this.$emit('change', this.state ? '' : this.value)
    },
  },
  watch: {
    checked(newValue) {
      if (newValue !== this.state) {
        this.toggle()
      }
    },
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/stylus/variables.styl';
  .component-radio {
    display: inline-block;
    padding-left: 44px;
    position: relative;
    vertical-align: middle;

    &__input {
      height: 44px;
      opacity: 0;
      z-index: 1;
    }
    &__input:checked + label > span {
      color: $color-primary;
      font-size: 45px;
    }
    &__input,
    &__indicator {
      left: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 44px;

    }
    &__indicator {
      color: #ececec;
      display: block;
      font-size: 0;
      height: 44px;
      line-height: 44px;
      text-align: center;
      width: 44px;
      border-radius: 3px;
      &::before {
        content: "\e660";
        font-weight: bolder;
      }
    }
  }
</style>
