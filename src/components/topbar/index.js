import Topbar from './index.vue'

Topbar.install = (Vue) => {
  Vue.component(Topbar.name, Topbar)
}

export default Topbar
