// pages/wechatgroup/wechatgroup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loaded: false,
    loading: false,
    groups: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchGroupInfo()
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

  fetchGroupInfo: function () {
    let {loading} = this.data
    if (loading) {
      return false
    }
    this.setData({
      loading: true
    })
    // 模拟获取微信群数据
    setTimeout(() => {
      this.setData({
        loaded: true,
        loading: false,
        groups: [
          {
            id: '1',
            title: '钢琴微信一群',
            intro: '公告：在群里，请不要讨论与报考无关的话题，避免打扰别人，谢谢配合，祝大家考试顺利!!~~~~',
            number: '如果有群号的话这里是群号',
            teacher: '如果有老师微信号的话，这里是微信号',
            qrcode: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2885719353,523370343&fm=26&gp=0.jpg'
          },
          {
            id: '2',
            title: '钢琴微信二群',
            intro: '公告：在群里，请不要讨论与报考无关的话题，避免打扰别人，谢谢配合，祝大家考试顺利!!~~~~',
            number: '如果有群号的话这里是群号',
            teacher: '如果有老师微信号的话，这里是微信号',
            qrcode: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2885719353,523370343&fm=26&gp=0.jpg'
          }
        ]
      })
    }, 1000)
  },

  preview: function (e) {
    let {qrcode} = e.currentTarget.dataset
    if (qrcode) {
      wx.previewImage({
        urls: [qrcode]
      })
    }
  },
  
  copyText: function (e) {
    let {text} = e.currentTarget.dataset
    if (text) {
      wx.showActionSheet({
        itemList: ['复制到剪贴板'],
        success: res => {
          if (res.tapIndex === 0) { // 点击了“复制到剪贴板”
            wx.setClipboardData({
              data: text,
              success: res => {
                wx.showToast({
                  title: '复制成功！',
                  icon: 'none'
                })
              }
            })
          }
        }
      })
    }
  }
})