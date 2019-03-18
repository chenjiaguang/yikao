// pages/login/login.js
import util from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    logining: true,
    code: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCode()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getCode: function () {
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        this.setData({
          logining: false,
          code: res.code
        })
      }
    })
  },

  getUserInfo: function (e) {
    let { encryptedData, iv, signature} = e.detail
    if (encryptedData && iv) {
      this.setData({ logining: true })
      let rData = {
        code: this.data.code,
        encryptedData,
        iv
      }
      util.request('/login', rData).then(res => {
        console.log('登录成功', res, rData)
        this.setData({ logining: false })
        if (res.data && !res.error) { // 登录成功
          let { avatar, token, union_id, username } = res.data
          let obj = { avatar, token, union_id, username }
          for (let key in obj) {
            wx.setStorageSync(key, obj[key])
          }
          let url = (wx.getStorageSync('loginBack').indexOf('pages/login/login' !== -1)) ? '/pages/index/index' : (wx.getStorageSync('loginBack') || '/pages/index/index')
          wx.reLaunch({
            url
          })
        }
      }).catch(err => {
        console.log('登录失败err', err, rData)
        this.setData({ logining: false })
      })
    } else {
      this.setData({ logining: false })
    }
  },

  getUserInfoError: function (e) {
    console.log('getUserInfoError', e)
    this.setData({ logining: false })
  }
})