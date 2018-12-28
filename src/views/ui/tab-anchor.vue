<template>
  <div class="tab-anchor">
    <we-tab-anchor 
      :tabsData="tabsData"
      :fixedHeight="fixedHeight"
      :triggerArea="triggerArea"
      @tabHandle="tabHandle">
      <!-- tab-body 可以循环 1.添加class，但class不允许使用tabs-->
      <we-tab-body class="testclass">
        <h3>tab1</h3>
          <div v-for="(item, index) in list" :key="index">
            <!-- 图片img不建议使用懒加载 -->
            <img :src="item">
          </div>
      </we-tab-body>
      <we-tab-body>
        <h3>tab2</h3>
          <div v-for="(item, index) in list" :key="index">
            <img :src="item">
          </div>
      </we-tab-body>
      <we-tab-body>
        <h3>tab3</h3>
          <div v-for="(item, index) in list" :key="index">
            <img :src="item">
          </div>
      </we-tab-body>
    </we-tab-anchor>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fixedHeight: 88,
      triggerArea: 90,
      tabsData: [
        {
          id: 123,
          name: '总榜',
        },
        {
          id: 123,
          name: '护肤',
        },
        {
          id: 123,
          name: '彩妆',
        },
        {
          id: 123,
          name: '总榜',
        },
        {
          id: 123,
          name: '护肤',
        },
        {
          id: 123,
          name: '彩妆',
        },
        {
          id: 123,
          name: '总榜',
        },
        {
          id: 123,
          name: '护肤',
        },
        {
          id: 123,
          name: '彩妆123',
        },
      ],
      list: [
        'https://o5omsejde.qnssl.com/demo/test1.jpg',
        'https://o5omsejde.qnssl.com/demo/test2.jpg',
        // 'https://o5omsejde.qnssl.com/demo/test3.jpg',
        // 'https://o5omsejde.qnssl.com/demo/test4.jpg',
        // 'https://o5omsejde.qnssl.com/demo/test5.jpg',
        // 'https://o5omsejde.qnssl.com/demo/test6.jpg',
        // 'https://o5omsejde.qnssl.com/demo/test7.jpg',
        // 'https://o5omsejde.qnssl.com/demo/test8.jpg',
      ],
    }
  },
  methods: {
    tabHandle(params) {
      global.console.log(params, 'params')
    },
  },
}
</script>
