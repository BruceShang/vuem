import Loading from './loading.vue'

export default {
  /**
   * 安装插件
   * @param {Object} Vue - Vue类
   * @param {Object} [pluginOptions] - 插件安装配置
   */
  install(Vue, pluginOptions = {}) {
    const VueLoading = Vue.extend(Loading)
    let loading = null

    /**
     * 初始化并显示loading
     * @param {string} message - 自定义文案
     * @return {Promise} Promise实例
     */
    function $loading(message) {
      return new Promise((resolve) => {
        // 在第一次调用时初始化Loading
        if (!loading) {
          loading = new VueLoading()
          loading.$mount()
          document.querySelector(pluginOptions.container || 'body').appendChild(loading.$el)
        }

        loading.$once('shown', resolve)
        loading.show(message)
      })
    }

    $loading.end = () => {
      return new Promise((resolve) => {
        if (!loading) {
          resolve()
          return
        }

        loading.$once('hidden', resolve)
        loading.hide()
      })
    }

    Vue.prototype.$loading = $loading
  },
}
