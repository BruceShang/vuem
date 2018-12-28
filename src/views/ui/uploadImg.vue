<template>
  <div class="message">
      <img-cut :item='imgData' style='width: 100%;' ref="child" @change='imgcut'>
        <!--插槽自定义布局-->
        <div class="message-headImg" @touchend.stop="$refs.child.imgClick">
            <!-- <img src="~assets/images/man.png" v-if="headImg===''"/> -->
            <img :src="headImg" v-else  />
            <p >点击上传头像</p>
        </div>
      </img-cut>
  </div>
</template>
<style scoped lang="stylus">
    
</style>
<script>
  export default {
    data() {
      return {
        headImg: '',
        imgData: {
          info: true,
          name: '',
          size: 1,
          outputType: 'png',
          // 图片缩放
          canScale: true,
          // 图片自动视频裁剪
          autoCrop: true,
          // 只有自动截图开启 宽度高度才生效
          autoCropWidth: 100,
          autoCropHeight: 100,
          // 开启宽度和高度比例
          fixed: true,
          fixedNumber: [3, 3],
        },
      }
    },
    created() {
    },
    methods: {
      // 图片上传获取裁剪后base64
      imgcut() {
        this.$refs.child.$refs.cropper.getCropData((data) => {
          this.$loading()
          this.uploadByBase64(data)
        })
      },
      // base64上传接口根据业务自定义
      uploadByBase64(picdata) {
        this.$http.post(this.$apis.user.uploadByBase64, {
          picdata,
          type: 1,
        }).then((res) => {
          if (res.success) {
            this.headImg = res.result
            this.$refs.child.imgShow = false
            this.$loading.end()
          } else {
            this.$toast(res.message)
            this.$loading.end()
          }
        }).catch((err) => {
          this.$toast(err)
          this.$loading.end()
        })
      },
    },
  }
</script>
