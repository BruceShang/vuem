/* eslint-disable */
/**
 * 搭建基本的 url scheme
 * @param {object} config - 参数项
 * @return {string} url scheme
 * @memberof CallApp
 */
export function buildScheme(config, options) {
  const { path, param } = config;
  const query = typeof param !== 'undefined'
    ? Object.keys(param).map(key => `${key}=${param[key]}`).join('&')
    : '';

  return `${options.protocol}://${path}?${query}`;
}

/**
 * 生成业务需要的 url scheme（区分是否是外链）
 * @param {object} config - 参数项
 * @return {string} url scheme
 * @memberof CallApp
 */
export function generateScheme(config, options) {
  const { outChain } = options;
  let uri = buildScheme(config, options);

  if (typeof outChain !== 'undefined' && outChain) {
    const { protocal, path, key } = outChain;
    uri = `${protocal}://${path}?${key}=${encodeURIComponent(uri)}`;
  }

  return uri;
}

/**
 * 生成 android intent
 * @param {object} config - 唤端参数项
 * @return {string} intent
 * @memberof CallApp
 */
export function generateIntent(config, options) {
  // debugger
  const { outChain } = config;
  const { intent, fallback } = options;
  const intentParam = Object.keys(intent).map(key => `${key}=${intent[key]};`).join('');
  let urlPath = buildScheme(config, options);

  if (typeof outChain !== 'undefined' && !outChain) {
    const { path, key } = config.outChain;
    return `intent://${path}?${key}=${encodeURIComponent(urlPath)}/
      #Intent;${intentParam};S.browser_fallback_url=${fallback};end;`;
  }

  urlPath = urlPath.slice(urlPath.indexOf('//') + 2);

  return `intent://${urlPath}/#Intent;${intentParam};end;`;
}

/**
 * 生成 universalLink
 * @param {object} config - 唤端参数项
 * @return {string} universalLink
 * @memberof CallApp
 */
export function generateUniversalLink(config, options) {
  const { universal } = options;
  if (!universal) return '';

  const { host, pathKey } = universal;
  const { path, param } = config;
  const query = typeof param !== 'undefined'
    ? Object.keys(param).map(key => `${key}=${param[key]}`).join('&')
    : '';
  return `//${host}?${pathKey}=${path}${query ? '&' : ''}${query}`;
}

/**
 * 生成 universalLink
 * @param {object} config - 唤端参数项
 * @return {string} universalLink
 * @memberof CallApp
 */
export function generateYingYongBao(config, options) {
  const url = generateScheme(config, options);
  // 支持 AppLink
  // return `${options.yingyongbao}&android_schema=${encodeURIComponent(url)}`;
  return `${options.yingyongbao}&android_schema=${encodeURIComponent(url)}`;
}
