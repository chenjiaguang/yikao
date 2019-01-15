// pages/successpage/successpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleText: { // type:1(缴费成功)
      1: '缴费成功'
    },
    successText: {
      1: '缴费成功'
    },
    tipText: {
      1: '关注微信公众号“xxx”及时获取考试相关信息'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let {
      type,
      id
    } = options
    type = type ? type.toString() : '1' // 默认是1
    this.setData({
      type,
      id
    })
    this.setTitle(type)
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

  setTitle: function(type) {
    let {
      titleText
    } = this.data
    let title = titleText[type.toString()]
    wx.setNavigationBarTitle({
      title
    })
  },

  btnTap: function() {
    console.log('点击了完成')
    let {
      type,
      id
    } = this.data
    if (type.toString() === '1') { // 缴费成功
      if (id) {
        wx.redirectTo({
          url: '/pages/myenrolldetail/myenrolldetail?id=' + id
        })
      } else {
        wx.navigateBack({
          delta: 1
        })
      }
    }
  }
})