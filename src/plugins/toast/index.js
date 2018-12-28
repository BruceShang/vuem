import Toast from './toast.vue'

export default {
  /**
   * 安装插件
   * @param {Object} Vue - Vue类
   * @param {Object} [pluginOptions] - 插件安装配置
   */
  install(Vue, pluginOptions = {}) {
    const VueToast = Vue.extend(Toast)
    const queues = []
    let toast = null

    /**
     * 队列处理函数
     * @param {Object} queue - 队列
     */
    function handle({ message, options, resolve }) {
      toast.$once('hidden', resolve)
      toast.show(message, options)
    }

    Vue.prototype.$toast = (message, options = {}) => {
      return new Promise((resolve, reject) => {
        if (!message) {
          reject(new Error('消息不能为空'))
          return
        }

        const queue = {
          message,
          options,
          resolve,
        }

        // 在第一次调用时初始化Toast
        if (!toast) {
          toast = new VueToast()
          toast.$mount()
          document.querySelector(pluginOptions.container || 'body').appendChild(toast.$el)
        }
        if (toast.active) {
          queues.push(queue)
        } else {
          handle(queue)
        }
      }).then(() => {
        if (queues.length > 0) {
          handle(queues.shift())
        }
      })
    }
  },
}
