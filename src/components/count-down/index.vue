<template>
  <div class="count-down">
    <count-child :time="time" tag="div" @countdownend="countdownend">
      <p slot-scope="props" class="count-down__wrap">
        <span v-if="showDays">{{ props.days }}:</span><span v-if="showHours">{{ props.hours }}:</span><span v-if="showMinutes">{{ props.minutes }}:</span><span>{{ props.seconds }}</span>
      </p>
    </count-child>
  </div>
</template>

<script>
import countChild from './count-down.js'

export default {
  name: 'we-count-down',
  components: {
    countChild,
  },
  props: {
    time: {
      type: Number,
      default: 0,
    },
    showMinutes: {
      type: Boolean,
      default: true,
    },
    showDays: {
      type: Boolean,
      default: true,
    },
    showHours: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    countdownend() {
      this.$emit('countdownend')
    },
  },
}
</script>

<style lang="stylus" scoped>
.count-down {
  position: relative;
  display: inline-block;
  &__wrap {
    display: inline-block;
  }
}
</style>
