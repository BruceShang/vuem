<template>
  <div class="we-card">
    <div class="we-card__header">
      <h1>Call-app</h1>
    </div>
    <div class="we-card__body">
      <div class="we-btn-group">
        <button 
          class="we-btn we-btn--primary" 
          @click="callapp">
          开始唤醒
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CallApp from 'utils/call-app'

export default {
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    // appstore: 'https://itunes.apple.com/cn/app/id1383186862',
    // appstore: 'https://itunes.apple.com/cn/app/%E6%B7%98%E5%AE%9D-%E7%A7%BB%E5%8A%A8%E8%B4%AD%E7%89%A9-%E7%94%9F%E6%B4%BB%E7%A4%BE%E5%8C%BA/id387682726?mt=8',
    /**
     * protocol 协议-由App定义 (URL Scheme 的 scheme 字段)
     * appstore ios下载地址
     * fallback 失败后跳转地址
     * yingyongbao Android的应用宝
     * intent 安卓原生谷歌浏览器必须传递 Intent 协议地址，才能唤起 APP。
     */
    callapp() {
      const options = {
        protocol: 'pcautobrowser',
        appstore: 'http://www1.pcauto.com.cn/zt/gz20151008/jump/jump-wap.html',
        fallback: 'http://baidu.com',
        yingyongbao: 'https://a.app.qq.com/o/simple.jsp?pkgname=cn.com.pcauto.android.browser&channel=0002160650432d595942&fromcase=60001',
        intent: {
          package: 'package',
          scheme: 'scheme',
          action: 'action',
          category: 'category',
          component: 'component',
        },
      }
      const callLib = new CallApp(options)
      // global.console.log(callLib, 'CallApp')
      // scheme://[path][?query]
      // param 打开 APP 某个页面，它需要接收的参数。
      callLib.open({
        path: 'pcauto.main',
        param: {
          bottom: 0,
          top: 0,
        },
      })
    },
  },
}
</script>
