module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      files: [''],
      rootValue: 100,
      unitPrecision: 5, // 转换成rem后保留的小数点位数
      propWhiteList: [],
      mediaQuery: false,
      replace: true,
      // 对2px及以上的样式值进行转换
      minPixelValue: 2,
      // 要忽略的选择器并保留为px
    }
  }
}
