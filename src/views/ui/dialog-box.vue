<template>
  <div class="we-card">
    <div class="we-card__header">
      <h1>dialog-box-弹框里的内容全部可以自定义</h1>
    </div>
    <div class="we-card__body">
    <dialog-box 
      @onAfterHide="onAfterHide"
      :styles="styles"
      v-model="show">
       <p class="dialog-box__close" @click="closeBox" style="font-size: 32px;">
        <i class="we-icon we-icon--close"></i>
      </p>
      <ul>
        <li v-for="item in 4" :key="item">
          测试内容，自定义------------------ {{item}}
        </li>
      </ul>
    </dialog-box>
    <button class="we-btn we-btn--primary we-btn--block" @click="showHandle">click me show dialog-box</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      // 自定义弹框的样式
      styles: {
        width: '80%',
        'border-radius': '4px',
      },
    }
  },
  methods: {
    showHandle() {
      this.show = true
    },
    closeBox() {
      this.show = false
    },
    onAfterHide() {
      this.show = false
      global.console.log('确定关闭之后可以回调该事件')
    },
  },
}
</script>
