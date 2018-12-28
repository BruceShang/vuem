<template>
  <div class="we-card">
    <div class="we-card__header">
      <h1>Dialog</h1>
    </div>
    <div class="we-card__body">
     <button class="we-btn we-btn--primary we-btn--block" @click="showDialog">默认对话框</button>
     <br>
     <button class="we-btn we-btn--primary we-btn--block" @click="showCompleteDialog">完整对话框</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    /**
     * 显示对话框
     */
    showDialog() {
      this.$dialog('示例对话框内容', {
        default: '我知道了',
      }).then(() => {
        this.$toast('关闭了对话框')
      })
    },

    /**
     * 显示完整对话框
     */
    showCompleteDialog() {
      const options = {
        title: '示例对话框标题',
        default: '取消',
        primary: '添加',
      }
      this.$dialog('示例对话框内容', options).then((action) => {
        this.$toast(`点击了【${options[action]}】按钮`)
      })
    },
  },
}
</script>
