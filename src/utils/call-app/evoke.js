/* eslint-disable */
let iframe = null;

/**
 * 创建 event 对象
 * @returns {object} event 对象
 */
export function createEvent() {
  let event;

  if (window.CustomEvent) {
    event = new window.CustomEvent('click', {
      canBubble: true,
      cancelable: true,
    });
  } else {
    event = document.createEvent('HTMLEvents');
    event.initEvent('click', false, false);
  }

  return event;
}

/**
 * 通过 A 标签唤起
 * @param {string}} [uri] - 需要打开的地址
 */
export function evokeByTagA(uri) {
  const tagA = document.createElement('a');
  const event = createEvent();

  tagA.setAttribute('href', uri);
  tagA.style.display = 'none';
  document.body.appendChild(tagA);

  tagA.dispatchEvent(event);
}

/**
 * 通过 top.location.href 跳转
 * 使用 top 是因为在 qq 中打开的页面不属于顶级页面(iframe级别)
 * 自身 url 变更无法触动唤端操作
 * @param {string}} [uri] - 需要打开的地址
 */
export function evokeByLocation(uri) {
  window.top.location.href = uri;
}

/**
 * 通过 iframe 唤起
 * @param {string}} [uri] - 需要打开的地址
 */
export function evokeByIFrame(uri) {
  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.frameborder = '0';
    iframe.style.cssText = 'display:none;border:0;width:0;height:0;';
    document.body.appendChild(iframe);
  }

  iframe.src = uri;
}
