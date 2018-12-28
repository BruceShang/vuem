import Dialog from './dialog.vue'
// import { isObject } from 'utils'

export default {
  /**
   * 安装插件
   * @param {Object} Vue - Vue类
   * @param {Object} [pluginOptions] - 插件安装配置
   */
  install(Vue, pluginOptions = {}) {
    const VueDialog = Vue.extend(Dialog)
    let dialog = null

    Vue.prototype.$dialog = (content, options = {}) => {
      return new Promise((resolve, reject) => {
        // if (isObject(content)) {
        //   content = content.message
        // }

        if (!content) {
          reject(new TypeError('对话框内容不能为空'))
          return
        }

        // 在第一次调用时初始化Dialog
        if (!dialog) {
          dialog = new VueDialog()
          dialog.$mount()
          document.querySelector(pluginOptions.container || 'body').appendChild(dialog.$el)
        }
        if (dialog.active) {
          dialog.$once('hidden', () => {
            dialog.show(content, options)
            dialog.$once('hidden', resolve)
          })
          dialog.hide()
        } else {
          dialog.show(content, options)
          dialog.$once('hidden', resolve)
        }
      })
    }
  },
}
