<template>
  <div class="count-down">
    <count-down 
      class="count-down-time"
      :time="time" 
      :show-days="false" 
      :show-hours="true" 
      @countdownend="countdownend">
    </count-down>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        time: 60 * 1000,
        // time: 3 * 1000,
      }
    },
    methods: {
      countdownend() {
        this.$toast('倒计时结束时触发')
      },
    },
  }
</script>

<style lang="stylus" scoped>
.count-down {
  width: 100%;
  padding: 60px;
  text-align: center;  
}
.count-down-time {
  color: #ff5a5f;
  font-size: 89px;
}
</style>
