// pages/usercenter/usercenter.js
import util from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: '',
    name: '',
    message: 100,
    aboutUsUrl: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    util.request('/user').then(res => {
      if (res && res.data && !res.error) { // 获取数据成功
        console.log('/user', res)
        let { avatar, nick_name: name, unread_num: message, about_us_url: aboutUsUrl} = res.data
        this.setData({ avatar, name, message, aboutUsUrl })
      }
    }).catch(err => {
      console.log('获取数据失败', err)
    })
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

  fetchUserInfo: function () {

  },

  messageTap: function () {
    console.log('点击了消息icon')
    let unionId = util.checkUnionId()
    if (!unionId) {
      return false
    }
    wx.navigateTo({
      url: '/pages/message/message'
    })
  },

  entryTap: function (e) {
    let {ele} = e.currentTarget.dataset
    let unionId = util.checkUnionId()
    if (!unionId) {
      return false
    }
    if (ele === 'enroll') { // 点击了我的报名
      console.log('点击了我的报名')
      wx.navigateTo({
        url: '/pages/myenroll/myenroll'
      })
    } else if (ele === 'wechat') { // 点击了加入微信群
      console.log('点击了加入微信群')
      wx.navigateTo({
        url: '/pages/wechatgroup/wechatgroup'
      })
    } else if (ele === 'about') { // 点击了关于我们
      console.log('点击了关于我们')
      if (this.data.aboutUsUrl) {
        wx.navigateTo({
          url: '/pages/webviewpage/webviewpage?url=' + this.data.aboutUsUrl
        })
      }
    }
  }
})