
/**
 * 判断是否为空对象
 * @param {Object} val - 对象值
 * @return {boolean} 是与否
 */
export function isNullObject(val) {
  if (val === null || val === undefined) {
    return true
  }
  return Object.keys(val).length === 0
}
