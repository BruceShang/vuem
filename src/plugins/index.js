import Vue from 'vue'
// import NisuComponents from '@position/nisu-components'
import VueAxios from './axios'
import VueLoading from './loading'
import VueToast from './toast'
import VueDialog from './dialog'

// Vue.use(NisuComponents)
Vue.use(VueAxios)
Vue.use(VueDialog, {
  container: '#app',
})
Vue.use(VueLoading, {
  container: '#app',
})
Vue.use(VueToast, {
  container: '#app',
})
