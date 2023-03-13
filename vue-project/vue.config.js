// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// lazyLoad 구문 -> 적용시 위의 default 코드 삭제
module.exports = {
  chainWebpack : config => {
    config.plugins.delete('prefetch')
  }
}