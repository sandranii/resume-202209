const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  //影響index.html取js的取得路徑
  publicPath: process.env.NODE_ENV === 'production'
    ? '/resumetest/'
    : '/',

  //預設為dist
  outputDir: 'resumetest'
}