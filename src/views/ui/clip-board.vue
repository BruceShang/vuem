<template>
  <div class="we-card">
    <div class="we-card__header">
      <h1>clip-board or footer-line</h1>
    </div>
    <div class="we-card__body">
     <button class="we-btn we-btn--primary we-btn--block clipbtn" @click="copy('这是复制的第一段内容')">复制剪切</button>
     <br>
     <button class="we-btn we-btn--primary we-btn--block clipbtn" @click="clipBoard('这是复制的第二段内容')">复制剪切</button>
    </div>
    <we-footer-line></we-footer-line>
  </div>
</template>

<script>
import clipBoard from 'mixins/clipboard'

export default {
  mixins: [clipBoard],
  data() {
    return {
      // clipBoard 方法使用时，需要在触发按钮上添加一个类名 clipbtn
    }
  },
  methods: {
    copy(param) {
      this.clipBoard(param)
    },
  },
}
</script>
