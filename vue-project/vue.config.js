const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})

// 요청 보낼 주소
const target = 'http://127.0.0.1:3000'

// lazyLoad 구문 -> 적용시 위의 default 코드 삭제
module.exports = {
  chainWebpack : config => {
    config.plugins.delete('prefetch')
  },

  devServer: {
    // port: 8080,
    proxy: {
      '/oauth2.0': {
        target: "https://nid.naver.com",
        // changeOrigin: true,
      }
    }
  }
}
