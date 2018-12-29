import CountDown from './index.vue'

CountDown.install = (Vue) => {
  Vue.component(CountDown.name, CountDown)
}

export default CountDown
