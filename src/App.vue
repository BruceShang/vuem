<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    watch: {
      /**
      * 监听路由，动态更换topbar组件的title以及浏览器中的title
      */
      $route() {
        const { meta } = this.$route
        this.$store.dispatch('global/updateTitle', meta.title)
      },
    },
  }
</script>
