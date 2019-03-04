// pages/login/login.js
import util from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    logining: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  getUserInfo: function (e) {
    console.log('getUserInfo', encryptedData, iv)
    let { encryptedData, iv, signature} = e.detail
    if (encryptedData && iv) {
      this.setData({ logining: true })
      util.request('/user/savemes', { encryptedData, iv}).then(res => {
        console.log('/user/savemes', res)
        this.setData({ logining: false })
        // console.log('/user/savemes', res)
        if (res && res.error.toString() === '0') { // 授权登录成功
          wx.setStorageSync('union_id', true)
          console.log('back', wx.getStorageSync('loginBack'), res.data)
          let url = wx.getStorageSync('loginBack') || '/pages/index/index'
          wx.reLaunch({
            url
          })
        }
      }).catch(err => {
        console.log('catch', err)
        this.setData({ logining: false })
      })
    }
  }
})