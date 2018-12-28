<template>
<div class="load-more">
  <load-more :url="loadMore.url" :page="1" :rows="15" :options="loadMore.options" @success="success" @complete="complete">
    <div class="load-more__item" v-for="item in list" :key="item.number">
      <we-img :src="item.img" alt=""></we-img>
      <p class="ignore load-more__ellipsis">{{ item.content }}</p>
      <span class="ignore">&yen; {{ item.number }}</span>
    </div>
  </load-more>
</div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loadMore: {
        url: '/apis/loadMore',
        options: {
          method: 'post',
          data: {},
        },
      },
    }
  },
  methods: {
    success(data) {
      global.console.log(data, '----------success')
      this.list = this.list.concat(data)
    },
    complete(data) {
      global.console.log(data, '----------完成时调用')
    },
  },
}
</script>

<style lang="stylus" scpoped>
@import '../../assets/stylus/mixins.styl';

.load-more {
  &__item {
    display: inline-block;
    position: relative
    width: 50%;
    vertical-align: top;
    background: #ffffff
    border-right: 1px #dedede solid
    border-bottom: 1px #dedede solid
    margin-bottom: 1px;
    img {
      height 345px
      width: 100%
    }
    p {
      padding: 0px 0px 5px 24px;
      ellipsis2()
    }
    span {
      display: inline-block
      padding: 0px 0px 24px 24px;
      color: #ff5a5f
      font-size: 30px;
    }
  }
}
</style>

