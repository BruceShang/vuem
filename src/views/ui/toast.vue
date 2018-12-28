<template>
  <div class="we-card">
    <div class="we-card__header">
      <h1>Toast</h1>
    </div>
    <div class="we-card__body">
      <div class="we-btn-group">
        <button class="we-btn we-btn--default" @click="show">一次toast</button>
        <button class="we-btn we-btn--primary" @click="show22">多次toast</button>
        <!-- <button 
          class="we-btn we-btn--primary" 
          @click="callapp">
          首页
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    show() {
      this.$toast('显示-----')
    },
    show22() {
      this.$toast('显示-----11', {
        timeout: 500,
      })
      this.$toast('显示-----22', {
        timeout: 500,
      })
      this.$toast('显示-----33', {
        timeout: 500,
      })
    },
  },
}
</script>
