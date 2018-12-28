<template>
  <div>
    <time-line :list="list"></time-line>
  </div>
</template>

<script>
import TimeLine from 'views/components/time-line/time-line'

export default {
  components: {
    TimeLine,
  },
  data() {
    return {
      list: [
        {
          name: '标题一',
          text: '副标题一',
        },
        {
          name: '标题一',
          text: '副标题一',
        },
        {
          name: '标题一',
          text: '副标题一',
        },
      ],
    }
  },
}
</script>

<style lang="stylus">

</style>

