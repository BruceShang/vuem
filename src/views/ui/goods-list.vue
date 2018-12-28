<template>
  <div class="ui-goods-list">
      <goods-list 
        :data="data" 
        :type="type" 
        @onHandle="onHandle">
      </goods-list>
      <h5>--------------tab-swipe-goods-list-------</h5>
      <swipe-goods-list :data="data" :type="type">
      </swipe-goods-list>
  </div>
</template>

<script>
import GoodsList from 'views/components/goods/goods-list.vue'
import SwipeGoodsList from 'views/components/goods/swipe-goods-list.vue'

export default {
  components: {
    GoodsList,
    SwipeGoodsList,
  },
  data() {
    return {
      // 数据
      data: [
        {
          goodsName: '兰蔻小黑瓶精华肌底液 还原年轻...',
          subTitle: '蛋清质地 快速渗透 强韧基底 ',
          tag: ['新品', '清仓', '秒杀', '爆款', '假一罚十', '保税', '包邮'],
          appPrice: 599,
          marketPrice: 590,
          earningMoney: 6.93,
          saleAmount: 999,
          imgUrl: 'http://image.mihui365.com/boutiqueImg/29989663031227834.jpg',
        },
        {
          goodsName: '兰蔻小黑瓶精华肌底液 还原年轻...',
          subTitle: '蛋清质地 快速渗透 强韧基底 ',
          tag: ['新品', '清仓', '秒杀', '爆款', '假一罚十', '保税', '包邮'],
          appPrice: 599,
          marketPrice: 590,
          earningMoney: 6.93,
          saleAmount: 999,
          imgUrl: 'http://image.mihui365.com/boutiqueImg/29989663031227834.jpg',
        },
        {
          goodsName: '兰蔻小黑瓶精华肌底液 还原年轻...',
          subTitle: '蛋清质地 快速渗透 强韧基底 ',
          tag: ['新品', '清仓', '秒杀', '爆款', '假一罚十', '保税', '包邮'],
          appPrice: 599,
          marketPrice: 590,
          earningMoney: 6.93,
          saleAmount: 999,
          imgUrl: 'http://image.mihui365.com/boutiqueImg/29989663031227834.jpg',
        },
        {
          goodsName: '兰蔻小黑瓶精华肌底液 还原年轻...',
          subTitle: '蛋清质地 快速渗透 强韧基底 ',
          tag: ['新品', '清仓', '秒杀', '爆款', '假一罚十', '保税', '包邮'],
          appPrice: 599,
          marketPrice: 590,
          earningMoney: 6.93,
          saleAmount: 999,
          imgUrl: 'http://image.mihui365.com/boutiqueImg/29989663031227834.jpg',
        },
      ],
      type: -1, // visitors 游客身份，host 默认是玩主
    }
  },
  methods: {
    onHandle(item, param) {
      global.console.log(item, param, '-----content')
    },
  },
}
</script>

<style lang="stylus" scoped>
.ui-goods-list {
  padding: 0px 30px;
  background-color: #fff;  
}
</style>
