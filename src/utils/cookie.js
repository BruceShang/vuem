export default {
  /**
   * 获取本地cookie
   * @param {string} name - cookie key的值
   * @return {string} null - value
   */
  getCookie(name) {
    const cookie = document.cookie
    const cookieObj = {}
    if (cookie) {
      cookie.split('; ').forEach(k => {
        const keys = k.split('=')[0]
        const valus = k.split('=')[1]
        cookieObj[keys] = valus
      })
    }
    return cookieObj[name]
  },
  clearCookie() {
    const keys = document.cookie.split('; ')
    if (keys) {
      for (const k of keys) {
        const key = k.split('=')[0]
        document.cookie = `${key}=0;expires=${new Date(0).toUTCString()}`
      }
    }
  },
}
