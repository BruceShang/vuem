import Vue from 'vue'
import VueAxios from './axios'
import VueLoading from './loading'
import VueToast from './toast'
import VueDialog from './dialog'

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
