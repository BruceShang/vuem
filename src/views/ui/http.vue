<template>
<div class="ui-http">
  <div class="ui-card">
    <div class="we-card">
      <div class="we-card__header">
        <h1 class="we-card__title">文章数据</h1>
      </div>
      <div class="we-card__body">
        <div class="we-cell" v-for="(item, index) in list" :key="index">
          <div class="we-cell__body">
            <!-- <we-img :src="item.avatar"></we-img> -->
              {{ item.username }} -- {{ item.date }} -- {{ item.email }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <button class="we-btn we-btn--primary we-btn--block" :class="{'we-btn--secondary': list.length}" @click="fetchData">点击获取异步数据......</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    }
  },
  methods: {
    fetchData() {
      if (this.list.length) {
        return
      }
      this.$loading()
      // this.$http.post(this.$apis.fetchListTest).then((res) => {
      // mock 数据
      this.$http.post('/apis/data').then((res) => {
      // this.$http.post('/api/member/shoppingCart/queryCart', {}).then((res) => {
        this.list = res.list
        this.$loading.end()
      }).catch(err => {
        this.$toast(err)
        window.console.log(err, '捕获错误信息')
        this.$loading.end()
      })
      // 定时器，测试使用
      setTimeout(() => {
        this.list = []
      }, 10000)
    },
  },
}
</script>

<style>
.ui-loading {
  padding: 60px 0px;
}
</style>

