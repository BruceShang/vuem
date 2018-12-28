/* eslint-disable */
/**
 * @author suanmei <mr_suanmei@163.com>
 */
import { getIOSVersion, getBrowser } from './browser';
import * as generate from './generate';
import {
  evokeByLocation,
  evokeByIFrame,
  evokeByTagA,
} from './evoke';
// debugger

class CallApp {
  /**
   *Creates an instance of CallApp.
   * @param {object=} options - 配置项
   * @memberof CallApp
   */
  constructor(options) {
    this.options = options || {};
  }

  /**
   * 注册为方法
   * generateScheme | generateIntent | generateUniversalLink | generateYingYongBao
   */
  generateScheme(config) {
    return generate.generateScheme(config, this.options);
  }

  generateIntent(config) {
    return generate.generateIntent(config, this.options);
  }

  generateUniversalLink(config) {
    return generate.generateUniversalLink(config, this.options);
  }

  generateYingYongBao(config) {
    return generate.generateYingYongBao(config, this.options);
  }

  /**
   * 检测是否唤端成功
   * @param {function} cb - 唤端失败回调函数
   */
  checkOpen(cb) {
    setTimeout(() => {
      const hidden = document.hidden || document.webkitHidden;
      if (!hidden) {
        cb();
      }
    }, 500);
  }
  /**
   * 唤端失败跳转 app store
   * @memberof CallApp
   */
  fallToAppStore() {
    this.checkOpen(() => {
      evokeByLocation(this.options.appstore);
    });
  }

  /**
   * 唤端失败跳转通用(下载)页
   * @memberof CallApp
   */
  fallToFbUrl() {
    this.checkOpen(() => {
      evokeByLocation(this.options.fallback);
    });
  }

  /**
   * 唤端失败调用自定义回调函数
   * @memberof CallApp
   */
  fallToCustomCb(callback) {
    this.checkOpen(() => {
      callback();
    });
  }

  /**
   * 唤起客户端
   * 根据不同 browser 执行不同唤端策略
   * @param {object} config - 唤端参数项
   * @memberof CallApp
   */
  open(config) {
    const browser = getBrowser();
    const { universal, appstore, logFunc } = this.options;
    const { callback } = config;
    const supportUniversal = typeof universal !== 'undefined';
    const schemeURL = this.generateScheme(config);
    const intentURL = this.generateIntent(config);
    const universalURL = this.generateUniversalLink(config);
    const yingYongBaoURL = this.generateYingYongBao(config);
    let checkOpenFall = null;

    if (typeof logFunc !== 'undefined') {
      logFunc();
    }

    if (browser.isIos) {
      if (browser.isWechat) {
        evokeByLocation(appstore);
      } else if ((getIOSVersion() < 9)) {
        evokeByIFrame(schemeURL);
        checkOpenFall = this.fallToAppStore;
      } else if (!supportUniversal) {
        evokeByLocation(schemeURL);
        checkOpenFall = this.fallToAppStore;
      } else {
        // evokeByIFrame(schemeURL);
        evokeByLocation(universalURL);
      }
    // Android
    } else if (browser.isWechat) {
      evokeByLocation(yingYongBaoURL);
    } else if (browser.isOriginalChrome) {
      // evokeByTagA(intentURL);
      // 安卓Chrome浏览器下使用frame跳转
      evokeByIFrame(schemeURL);
    } else {
      // 安卓环境
      evokeByIFrame(schemeURL);
      checkOpenFall = this.fallToFbUrl;
    }

    if (typeof callback !== 'undefined') {
      this.fallToCustomCb(callback);
      return;
    }

    if (!checkOpenFall) return;

    checkOpenFall.call(this);
  }
}
// global.console.log(CallApp, 'CallApp-----')
export default CallApp;
