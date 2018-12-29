import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import WeImg from './src/components/lazy-load'
import WeActionSheet from './src/components/action-sheet'
import NumberInput from './src/components/number-input'
import WeCheckbox from './src/components/checkbox'
import WeRadio from './src/components/radio'
import Topbar from './src/components/topbar'
import LoadMore from './src/components/load-more'
import WeAddress from './src/components/address'
import WeFooterLine from './src/components/footer-bottom-line'
import DialogBox from './src/components/dialog-box'
import WeSwitch from './src/components/switch/index'
import CountDown from './src/components/count-down'
import VueLoading from './src/plugins/loading'
import VueToast from './src/plugins/toast'
import VueDialog from './src/plugins/dialog'
// import './src/plugins';
const coms = [
  WeImg,
  WeActionSheet,
  NumberInput,
  WeCheckbox,
  Topbar,
  WeRadio,
  LoadMore,
  WeAddress,
  WeFooterLine,
  DialogBox,
  WeSwitch,
  CountDown,
]

Vue.use(VueLazyload, {
  preLoad: 2, // 图片加载的高度范围比例，默认为1.3，数字越大，预加载图片越多，数字越小，预加载图片数量越少
  error: require('./src/assets/images/empty-place/lazy-load.png'),
  loading: require('./src/assets/images/empty-place/lazy-load.png'),
  attempt: 3, // 尝试加载的次数 默认为3
})
Vue.use(VueAwesomeSwiper)

const install = (Vue) => {
  if (install.installed) return
  coms.forEach((component) => {
    global.console.log(component.name, 'name')
    Vue.component(component.name, component)
  })
}

if (typeof global !== 'undefined' && global.Vue) {
  install(global.Vue)
}
export {
  VueLoading,
  VueToast,
  VueDialog,
}
export default {
  install,
}