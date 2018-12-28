<template>
  <div class="tab">
   <h2>tab-1</h2>
   <tab-filter 
      :titleData="tabFilter" 
      defaultid="b" 
      @onHandle="onFilterHandle">
    </tab-filter>

    <h2>tab-2</h2>
     <tab-swiper-filter :data="data" :filterData="tabFilter"></tab-swiper-filter>
  </div>
</template>

<script>
import TabFilter from 'views/components/tab-filter/index.vue'
import TabSwiperFilter from 'views/components/tab-swiper-filter/index.vue'

export default {
  components: {
    TabFilter,
    TabSwiperFilter,
  },
  data() {
    return {
      tabFilter: [
        {
          name: '热销',
          id: 'a',
          type: '',
        },
        {
          name: '利润',
          id: 'b',
          type: 'filter',
        },
        {
          name: '上新',
          id: 'c',
          type: '',
        },
        {
          name: '价格',
          id: 'd',
          type: 'filter',
        },
      ],
      data: [
        '今日秒杀',
        '每日上新',
        '美妆个护',
        '食品饮料',
        '服饰箱包',
        '母婴玩具',
        '家居生活',
        '家用电器',
        '全部类目',
      ],
    }
  },
  methods: {
    onFilterHandle(param) {
      global.console.log(param, '-------------object')
    },
  },
}
</script>
