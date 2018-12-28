/*
 * @Desc: 注册所有组件 
 * @Author: shangzhen 
 * @Date: 2018-08-09 18:54:10 
 * @Last Modified by: shangzhen
 * @Last Modified time: 2018-11-14 14:45:49
 */
import Vue from 'vue'

import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import WeImg from './lazy-load/index.vue'
import WeActionSheet from './action-sheet/index.vue'
import NumberInput from './number-input/index.vue'
import WeCheckbox from './checkbox/index.vue'
import WeRadio from './radio/index.vue'
import Topbar from './topbar/index.vue'
import LoadMore from './load-more/index.vue'
// import WeMenus from './menus/index.vue'
// import imgCut from './imgCut/imgCut.vue'
import address from './address/address.vue'
import WeFooterLine from './footer-bottom-line/index'
import WeBackTop from './back-top/index'
import DialogBox from './dialog-box/index'
import WeSwitch from './switch/index'
import CountDown from './count-down/index.vue'
import WeInput from './input/index.vue'
// import ShareTip from './share-tip/index.vue'
import DownloadApp from './download-app/index.vue'

// component
Vue.component('WeImg', WeImg)
Vue.component('WeActionSheet', WeActionSheet)
Vue.component('NumberInput', NumberInput)
Vue.component('WeCheckbox', WeCheckbox)
Vue.component('WeRadio', WeRadio)
Vue.component('Topbar', Topbar)
Vue.component('LoadMore', LoadMore)
// Vue.component('WeMenus', WeMenus)
// Vue.component('imgCut', imgCut)
Vue.component('Address', address)
Vue.component('WeFooterLine', WeFooterLine)
Vue.component('WeBackTop', WeBackTop)
Vue.component('DialogBox', DialogBox)
Vue.component('WeSwitch', WeSwitch)
Vue.component('CountDown', CountDown)
Vue.component('WeInput', WeInput)
// Vue.component('ShareTip', ShareTip)
Vue.component('DownloadApp', DownloadApp)

Vue.use(VueLazyload, {
  preLoad: 2, // 图片加载的高度范围比例，默认为1.3，数字越大，预加载图片越多，数字越小，预加载图片数量越少
  error: require('../assets/images/empty-place/lazy-load.png'),
  loading: require('../assets/images/empty-place/lazy-load.png'),
  attempt: 3, // 尝试加载的次数 默认为3
})
Vue.use(VueAwesomeSwiper)
