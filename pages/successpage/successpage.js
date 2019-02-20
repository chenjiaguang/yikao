// pages/successpage/successpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTitle: '',
    successText: '',
    tip1: '',
    tip2: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let _params = options.params
    if (_params) {
      let params = JSON.parse(_params)
      let {
        navTitle = '',
        successText = '',
        tip1 = '',
        tip2 = ''
      } = params
      this.setData({
        navTitle,
        successText,
        tip1,
        tip2
      })
      this.setTitle(navTitle)
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  setTitle: function(title) {
    if (title || title === '') {
      wx.setNavigationBarTitle({
        title
      })
    }
  },

  btnTap: function() {
    console.log('点击了完成')
    let app = getApp()
    console.log('app.successCompleteFn', app.successCompleteFn)
    app.successCompleteFn && app.successCompleteFn()
  }
})