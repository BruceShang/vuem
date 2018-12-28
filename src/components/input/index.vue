<template lang="html">
  <div class="flex align_center" style="width: 100%;">
    <div v-if="title!=''" class="title">{{title}}</div>
    <input class="input flex1" :value="value" @input="change($event)" type="text" :placeholder="placeholder"/>
    <i class="we-icon--close we-icon" @click="close" v-if="value!=''"></i>
  </div>
</template>

<style lang="stylus" scoped>
  .title{
    font-size: 28px;
    color: #292929;
  }
  .input{
    background: transparent;
    font-size: 28px;
    color: #292929;
    text-indent: 30px;
    &::-webkit-input-placeholder{
      color: #cecece;
    }
    &::-moz-placeholder{
      color: #cecece;
    }
  }
  i{
    font-size: 40px;
    color: #D9D9D9;
  }
</style>
<script>
export default {
  // name: 'Input',
  props: {
    title: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '请输入',
    },
  },
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    change(val) {
      this.$emit('update:value', val.target.value)
    },
    close() {
      this.$emit('update:value', '')
    },
  },
}
</script>
