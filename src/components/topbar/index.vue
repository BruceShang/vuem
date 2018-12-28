<template>
  <div class="header" style="min-height: 0.88rem" v-if="$route.query.topbar!=='none'">
    <div class="components-topbar components-topbar__fixed">
      <div class="topbar__header">
        <span>
          <a href="javascript:;" @click="gotoBack" v-if="lfType === ''">
            <i class="we-icon we-icon--left-arrow topbar__primary"></i>
          </a>
        </span>
      </div>
      <div class="topbar__body">
        {{ title ? title : $store.state.global.title }}
      </div>
      <div class="topbar__footer">
        <slot name="footer">
        </slot>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'topbar',
  props: {
    /**
     * 顶部title
     * 1.默认不写显示路由配置的标题
     * 2.填写时显示自定义文案
    */
    title: {
      type: String,
      default: '',
    },
    /**
     * 左侧类型 1.Black 为空不显示；2.默认为空‘’显示返回按钮；3.值为App显示去下载App图标
    */
    lfType: {
      type: String,
      default: '',
    },
    /**
     * 1.Black 为空不显示；2.默认为空‘’显示title内容；3.值为indexInput显示首页表单样式
     * 4. 值为searchInput显示可操作的搜索表单。备注：3和4设计样式不同
    */
    mdType: {
      type: String,
      default: '',
    },
    /**
     * placeholder
     */
    placeholder: {
      type: String,
      default: '客官买点啥',
    },
    backUrl: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      searchKey: '',
      isShow: false,
    }
  },
  methods: {
    /**
     * 返回上一页
    */
    gotoBack() {
      if (this.backUrl) {
        this.$router.push(this.backUrl)
        return
      }
      if (global.history.length > 1) {
        global.history.back(-1)
      }
    },
    onKeyUp() {
      this.iconsHandle(4)
    },
  },
}
</script>

