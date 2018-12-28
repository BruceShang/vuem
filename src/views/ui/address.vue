<template>
  <div>
    <button @click="$refs.address.showChose=true">地址</button>
    {{add}}
    <Address ref='address' @change='addressC'></Address>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        add: {},
      }
    },
    mounted() {
      // WeixinJSBridge.invoke('shareTimeline',{
      //   'appid': 'oY1Pk1BIM4XyDvrwS7jHYmUMFfRY', // 公众号appID
      //   'title':'title', // 分享标题
      //   'desc':'desc', // 描述
      //   'link':'http://www.qq.com', // 点击后连接地址
      //   'img_width':550, // 图片宽度
      //   'img_height':370, // 图片高度
      //   'img_url': 'http://img1.gtimg.com/10/1048/104857/10485731_980x1200_0.jpg' // 分享到朋友圈的缩略图url
      // },function(res){
      //     alert(res.err_msg);
      // });
      // WeixinJSBridge.invoke('hideOptionMenu', {}, (res) => {
      //   alert(res.err_msg)
      // })
      // eslint-disable-next-line
      WeixinJSBridge.invoke('openUrlByExtBrowser', {
        appID: 'wx1d47fa894c02193e',
        // appID: 'wx9de9b7f7875cf83b',
        url: 'http://qq.com',
      }, res => {
        global.alert(res.err_msg, 'res')
      })
    },
    methods: {
      addressC(data) {
        this.add = data
      },
    },
  }
</script>