/*
 * @Desc: 封装localStorage 
 * @Author: shangzhen 
 * @Date: 2018-08-09 18:26:13 
 * @Last Modified by: Yushuizeng
 * @Last Modified time: 2018-11-16 13:47:27
 */

/**
 * @file 封装localStorage
 */

const localStorage = global.localStorage

export default {
  /**
   * 设置一个值
   * @param {string} key - 键名
   * @param {*} value - 键值
   * @return {Promise} Promise实例
   */
  setItem(key, value) {
    return new Promise((resolve) => {
      localStorage.setItem(key, JSON.stringify(value))
      resolve()
    })
  },

  /**
   * 获取一个值
   * @param {string} key - 键名
   * @param {string} [sync] - 同步与否
   * @return {Promise} Promise实例
   */
  getItem(key, sync = false) {
    if (sync) {
      return JSON.parse(localStorage.getItem(key))
    }

    return new Promise((resolve) => {
      resolve(JSON.parse(localStorage.getItem(key)))
    })
  },

  /**
   * 删除一个值
   * @param {string} key - 键名
   * @return {Promise} Promise实例
   */
  removeItem(key) {
    return new Promise((resolve) => {
      localStorage.removeItem(key)
      resolve()
    })
  },

  /**
   * 清空所有值
   * @return {Promise} Promise实例
   */
  clear() {
    return new Promise((resolve) => {
      localStorage.clear()
      resolve()
    })
  },
}
