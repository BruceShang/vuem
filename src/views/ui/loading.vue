<template>
<div class="ui-loading">
  <button class="we-btn we-btn--primary we-btn--block" @click="loading">trigger-loading</button>
</div>
</template>

<script>
export default {
  methods: {
    loading() {
      this.$loading()
      setTimeout(() => {
        this.$loading.end()
      }, 2000)
    },
  },
}
</script>

<style>
.ui-loading {
  padding: 60px 0px;
}
</style>

