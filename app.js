//app.js
const config = require('/configs/index.js')
import util from '/utils/util.js'
import expand from '/utils/expand.js'

App({
  onLaunch: function (options) {
    this.config = config
    this.globalData.launchOptions = options

    // 检查登录
    wx.checkSession({
      success() {
        // session_key 未过期，并且在本生命周期一直有效
        util.checkLogin(options)
      },
      fail() {
        // session_key 已经失效，需要重新执行登录流程
        wx.setStorageSync('token', '')
        util.checkLogin(options)
      }
    })
    util.checkLogin(options)
  },
  config: null,
  globalData: {
    userInfo: null
  },
  successCompleteFn: () => {} // successpage页面的点击完成按钮的方法
})