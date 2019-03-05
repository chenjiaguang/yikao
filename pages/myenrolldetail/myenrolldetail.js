// pages/myenrolldetail/myenrolldetail.js
import util from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    paying: false,
    enroll: null,
    payData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id) {
      // let enroll = this.getLocalEnroll(options.id)
      // this.setData({ enroll, payData: enroll.pay })
      this.getOriginEnroll(options.id)
    }
  },

  // getLocalEnroll: function (id) {
  //   const currentPages = getCurrentPages()
  //   let listPages = currentPages.filter(item => item.route === 'pages/myenroll/myenroll')
  //   let listPage = listPages.length > 0 ? listPages[listPages.length - 1] : null
  //   if (!(listPage && id)) {
  //     return false
  //   }
  //   let enrollData = listPage.getEnrollData(id)
  //   return enrollData || null
  // },

  getOriginEnroll: function (id) {
    let rData = {
      id
    }
    util.request('/apply/detail', rData).then(res => {
      if (res && res.data && !res.error) { // 获取数据成功
        let enroll = res.data
        let payData = res.data.pay
        this.setData({ enroll, payData})
      }
    }).catch(err => {
      console.log('获取数据失败', err)
    })
  },

  viewImage: function (e) {
    let {url} = e.currentTarget.dataset
    wx.previewImage({
      urls: [url]
    })
  },

  requestPay: function () {
    if (!this.data.enroll) { // 无数据是返回
      return false
    }
    if (this.data.paying) {
      wx.showToast({
        title: '正在支付...',
        icon: 'none'
      })
      return false
    }
    let rData = {
      apply_id: this.data.enroll.id
    }
    this.setData({
      paying: true
    })
    util.request('/pay', rData).then(res => {
      if (res && res.data && !res.error) { // 获取数据成功
        let { appId, nonceStr, package: Pkg, paySign, signType, timeStamp } = res.data
        wx.requestPayment({
          timeStamp,
          nonceStr,
          package: Pkg,
          signType,
          paySign,
          success: (res) => {
            this.refreshEnrollData()
            let navData = { method: 'redirect', params: { navTitle: '缴费成功', successText: '缴费成功', tip1: '关注微信公众号“海南考级中心”及时获取考试相关信息' } }
            util.navToSuccesspage(navData)
          },
          fail(res) { },
          complete: () => {
            this.setData({
              paying: false
            })
          }
        })
      } else {
        this.setData({
          paying: false
        })
      }
    }).catch(err => {
      console.log('获取数据失败', err)
      this.setData({
        paying: false
      })
    })
  },

  refreshEnrollData: function () { // 刷新myenroll的数据
    let currentPages = getCurrentPages()
    if (currentPages && currentPages.length) {
      for (let i = 0; i < currentPages.length; i++) {
        if (currentPages[i].ftRouteName === 'myenroll' && currentPages[i].refreshPage) {
          currentPages[i].refreshPage()
        }
      }
    }
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

  }
})