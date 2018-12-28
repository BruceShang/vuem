const userAgent = global.navigator.userAgent
const inAndroid = /Android/i.test(userAgent)
const inIOS = /iPhone|iPad|iPod/i.test(userAgent)
const inMicroMessenger = /MicroMessenger/i.test(userAgent)

/**
 * 判断当前系统是否是Android系统
 * @return {boolean} 是与否
 */
export function isAndroid() {
  return inAndroid
}

/**
 * 判断当前系统是否是iOS系统
 * @return {boolean} 是与否
 */
export function isIOS() {
  return inIOS
}

/**
 * 判断当前浏览器环境是否是微信
 * @return {boolean} 是与否
 */
export function isWeChat() {
  return inMicroMessenger
}
