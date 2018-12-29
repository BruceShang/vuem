<template>
    <div class="switch-components" :class="{'switch--bg': toggle}" @click="onHandle">
      <span class="switch__circle" :class="{'switch__active': toggle}"></span>
    </div>
</template>

<script>
export default {
  name: 'we-switch',
  props: {
    /**
     * 打开时候的值
     */
    activeValue: {
      type: [Boolean, String, Number],
      default: null,
    },
    /**
     * 关闭时候的值
     */
    inactiveValue: {
      type: [Boolean, String, Number],
      default: null,
    },
    /**
     * value
     */
    value: {
      required: true,
      type: [Boolean, String, Number],
      default: null,
    },
  },
  data() {
    return {
      toggle: false,
    }
  },
  mounted() {
    this.initState()
  },
  methods: {
    initState() {
      if (this.activeValue === this.value) {
        this.toggle = true
        return
      }
      this.toggle = false
    },
    onHandle() {
      this.toggle = !this.toggle
      const dispatchVal = this.toggle === true ? this.activeValue : this.inactiveValue
      this.$emit('input', dispatchVal)
      this.$emit('change', dispatchVal)
    },
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/stylus/variables.styl';
.switch-components {
  display: inline-block;
  position: relative;
  width: 100px;
  height: 60px;
  border-radius: 45px;
  border: 1px $gray-lighter solid;
  background-color: $white;
  transition: all 0.3s ease;
  .switch {
    &__circle {
      position: absolute;
      left: 0px;
      top: 3px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5), 0 0 0px;
      background-color: $white;
      transition: all 0.3s ease;
    }

    &__active {
      left: 44px;
    }
  }
}
.switch--bg {
  background-color: $color-success;
  border: 1px $color-success solid;
}
</style>
