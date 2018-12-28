<template>
  <div class="ui-card">
    <div class="we-card">
      <div class="we-card__header">
        <h1 class="we-card__title">Card - 卡片</h1>
      </div>
    </div>
    <div class="we-card">
      <div class="we-card__header">
        <h5 class="we-card__title">标题</h5>
        <div class="we-card__menu">
          <a href="#">操作</a>
          <i class="we-icon we-icon--right-arrow"></i>
        </div>
      </div>
      <div class="we-card__body">内容</div>
      <div class="we-card__footer we-text--right">
        <a class="we-btn we-btn--secondary we-btn--round we-btn--small we-btn--limit-small we-btn--plain" href="#">操作</a>
        <a class="we-btn we-btn--primary we-btn--round we-btn--small we-btn--limit-small " href="#">操作</a>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .we-btn {
    & + & {
      margin-left: 20px;
    }
  }
</style>
