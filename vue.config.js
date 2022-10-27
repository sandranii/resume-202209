const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  //影響index.html取js的取得路徑
  publicPath: process.env.NODE_ENV === 'production'
    ? '/resume-202209/'
    : '/',
  devServer:{
    proxy:{
      '/travelapi':{
        target: 'https://www.travel.taipei/open-api/',
        changeOrigin: true,
        pathRewrite:{
          '^/travelapi': ''
        }
      }
    }
  },
  //預設為dist
  outputDir: 'resume-202209'
})