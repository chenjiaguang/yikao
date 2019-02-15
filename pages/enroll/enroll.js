// pages/enroll/enroll.js
import util from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    modal: {
      visible: false
    }
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

  tapEntry: function (e) {
    let {ele} = e.currentTarget.dataset
    console.log('tapEntry', ele)
    let unionId = util.checkUnionId()
    if (!unionId) {
      return false
    }
    if (ele === 'online') { // 点击了线上报名
      util.checkExaming()
    } else if (ele === 'offline') { // 点击了线下报名
      wx.navigateTo({
        url: '/pages/applycontacts/applycontacts'
      })
    } else if (ele === 'queryscore') { // 点击了成绩查询
      wx.navigateTo({
        url: '/pages/queryscore/queryscore'
      })
    } else if (ele === 'queryhall') { // 点击了考场查询
      wx.navigateTo({
        url: '/pages/queryhall/queryhall'
      })
    }
  }
})