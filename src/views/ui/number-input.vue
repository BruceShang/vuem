<template>
  <div class="we-card">
    <div class="we-card__header">
      <h1>Number input</h1>
    </div>
    <div class="we-card__body">
      <div style="padding: 20px;">
        <h4 style="padding-bottom: 30px;">{{ valueModel }}--最小值 1 最大值 10 默认值 2</h4>
        <number-input 
          @change="change"
          name="count" 
          v-model="valueModel" 
          :min="1" 
          :max="10">
        </number-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valueModel: 2,
    }
  },
  methods: {
    change(currentVal) {
      global.console.log(currentVal, '表单值改变时触发该事件')
    },
  },
}
</script>
