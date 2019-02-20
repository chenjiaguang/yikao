//app.js
const config = require('/configs/index.js')
import util from '/utils/util.js'
import expand from '/utils/expand.js'

App({
  onLaunch: function (options) {
    this.config = config
    this.globalData.launchOptions = options

    // 检查登录
    util.checkLogin(options)
  },
  config: null,
  globalData: {
    userInfo: null
  },
  successCompleteFn: () => {} // successpage页面的点击完成按钮的方法
})