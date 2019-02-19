// pages/pay/pay.js
import util from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    enrollid: '', // 报名订单的id
    formImage: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=259722020,584703296&fm=26&gp=0.jpg',
    payFee:[
      {
        id: '1',
        name: '基本乐科二级',
        price: 240.00
      },
      {
        id: '2',
        name: '基本乐科三级',
        price: 280.00
      }
    ],
    totalFee: 520.00
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('缴费页面', options.id)
    if (options.id) {
      this.setData({
        enrollid: options.id
      })
    }
    this.fetchPayData(options.id)
  },

  fetchPayData: function (id) {
    let rData = {
      apply_id:id
    }
    util.request('/pay', rData).then(res => {
      if (res && res.data && !res.error) { // 获取数据成功
        console.log('/pay', res)
        let { appId, nonceStr, package: Pkg, paySign, signType, timeStamp} = res.data
        wx.requestPayment({
          timeStamp,
          nonceStr,
          package: Pkg,
          signType,
          paySign,
          success: (res) => {
            console.log('res', res)
          },
          fail(res) { }
        })
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

  refreshEnrollData: function () { // 刷新myenroll的数据
    let currentPages = getCurrentPages()
    if (currentPages && currentPages.length) {
      for (let i = 0; i < currentPages.length; i++) {
        console.log('currentPages', currentPages[i])
        if (currentPages[i].ftRouteName === 'myenroll' && currentPages[i].refreshPage) {
          currentPages[i].refreshPage()
        }
      }
    }
  },

  payTap: function () {
    console.log('点击了确认支付')
    // 模拟支付成功
    setTimeout(() => {
      this.refreshEnrollData()
      let {enrollid} = this.data
      wx.redirectTo({
        url: '/pages/successpage/successpage?type=1&id=' + enrollid
      })
    }, 500)
  }
})