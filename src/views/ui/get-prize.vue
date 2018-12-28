<template>
  <mihui-lottery 
  :beforeLottery="beforeLottery" 
  :lotteryBtn="lotteryBtn" 
  :prizesList="list1" 
  :prize="prize" 
  :afterLottery="afterLottery"></mihui-lottery>
</template>

<script>
import MihuiLottery from 'views/components/lottery/index'

export default {
  components: {
    MihuiLottery,
  },
  data() {
    return {
      lotteryBtn: 'http://www.mihui365.com/img/btn-lottery_free.jpg',
      prize: 2,
      list1: [
        'http://image.mihui365.com/test/4085295568633749.jpg',
        'http://image.mihui365.com/test/4085301460624595.jpg',
        'http://image.mihui365.com/test/4085306754999639.jpg',
        'http://image.mihui365.com/test/4085314838032077.jpg',
        'http://image.mihui365.com/test/4085334463248909.jpg',
        'http://image.mihui365.com/test/4085328916971032.jpg',
        'http://image.mihui365.com/test/4085339788660307.jpg',
        'http://image.mihui365.com/test/4085323137028637.jpg',
      ],
    }
  },
  methods: {
    afterLottery() {
      global.console.log('恭喜你中了', this.prize)
    },
    beforeLottery(resolve) {
      setTimeout(() => {
        this.prize = 1
        resolve()
      }, 10)
    },
  },
}
</script>

<style>

</style>
