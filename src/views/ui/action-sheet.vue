<template>
  <div class="we-card">
    <div class="we-card__header">
      <h1>action sheet</h1>
    </div>
    <div class="we-card__body">
    <we-action-sheet 
      v-model="show">
      <p style="text-align: right; font-size: 35px;" @click="onHandle">
        <i class="we-icon we-icon--close"></i>
      </p>
      <ul>
        <li v-for="item in 4" :key="item">
          弹框内的内容和样式可以完全自定义---- {{item}}
        </li>
      </ul>
      <button class="we-btn we-btn--primary we-btn--block" @click.stop.prevent="onHandle">确定</button>
    </we-action-sheet>
    <button class="we-btn we-btn--primary we-btn--block" @click="showHandle">click me show action-sheet</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    /**
     * 显示对话框
     */
    showHandle() {
      this.show = true
    },
    onHandle() {
      this.show = false
    },
  },
}
</script>
