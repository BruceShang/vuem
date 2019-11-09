# vuem

## 项目在线预览
[项目在线预览地址](http://129.211.42.7:8080/ui)

## 组件文档
[ui组件文档地址](http://129.211.42.7:8081)

## 安装使用
```
npm install @position/vuem --save-dev
```
## 全局配置

```js
import Vuem, { VueDialog, VueLoading, VueToast} from '@position/vuem';

Vue.use(Vuem);

Vue.use(VueDialog, {
  container: '#app',
});

Vue.use(VueLoading, {
  container: '#app',
});

Vue.use(VueToast, {
  container: '#app',
});
```

## 安装相关依赖包

```js
npm i --save-dev stylus stylus-loader postcss-pxtorem vue-lazyload vue-awesome-swiper
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```