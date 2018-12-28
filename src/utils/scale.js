/*
 * @Desc: 处理不同终端下视口的缩放 
 * @Author: shangzhen 
 * @Date: 2018-08-09 18:24:27 
 * @Last Modified by: shangzhen
 * @Last Modified time: 2018-08-09 18:25:13
 */

function flex() {
  // const nav = navigator.userAgent
  // const iphoneIpad = navigator.appVersion.match(/(iphone|ipad|ipod)/gi)
  const doc = window.document
  const { devicePixelRatio } = window
  const dpr = devicePixelRatio || 1
  const u = parseFloat(1 / dpr).toFixed(2)
  const meta = doc.querySelector('meta[name="viewport"]') || doc.createElement('meta')
  doc.head.appendChild(meta)
  meta.setAttribute('name', 'viewport')
  meta.setAttribute('content',
    `width=device-width,
    user-scalable=no,
    initial-scale=${u}, minimun-scale=${u},maximum-scale=${u}`)
}
flex()
