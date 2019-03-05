// pages/index/index.js
import util from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    cates: [],
    modal: {
      visible: false
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchData()
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

  fetchData: function () {
    util.request('/home').then(res => {
      if (res && !res.error) { // 获取数据成功
        let banners = res.data.banner ? res.data.banner.map((item, i) => { return { idx: i, url: item.img, path: item.url}}) : []
        let cates = res.data.list
        this.setData({ banners, cates })
      }
    }).catch(err => {
      console.log('获取数据失败', err)
    })
  },

  pageEntryTap: function (e) {
    let {ele} = e.currentTarget.dataset
    let unionId = util.checkUnionId()
    if (!unionId) {
      return false
    }
    if (ele === 'enroll') { // 点击了考级报名
      util.checkExaming()
    } else if (ele === 'queryscore') { // 点击了成绩查询
      wx.navigateTo({
        url: '/pages/queryscore/queryscore'
      })
    } else if (ele === 'queryhall') { // 点击了考场查询
      wx.navigateTo({
        url: '/pages/queryhall/queryhall'
      })
    }
  },

  bannerTap: function (e) {
    let {item} = e.detail
    if (item && item.path) {
      let url = encodeURIComponent(item.path)
      wx.navigateTo({
        url: '/pages/webviewpage/webviewpage?url=' + url
      })
    }
  },

  cardTap: function (e) {
    let {url} = e.currentTarget.dataset
    if (url) {
      url = encodeURIComponent(url)
      wx.navigateTo({
        url: '/pages/webviewpage/webviewpage?url=' + url
      })
    }
  },

  bookTap: function (e) {
    let {id, title} = e.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/booklist/booklist?id=' + id + '&title=' + (title || '')
    })
  },

  seeMore: function (e) {
    let { cateid, title } = e.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/dynamiclist/dynamiclist?cateid=' + cateid + '&title=' + (title || '')
    })
  },

  modalTap: function (e) {
    let {ele} = e.detail
    if (ele === 'btn_close') { // 关闭按钮
      this.setData({
        'modal.visible': false
      })
    } else if (ele === 'btn_bottom0') { // 确定按钮
      this.setData({
        'modal.visible': false
      })
      wx.navigateTo({
        url: '/pages/apply/apply'
      })
    }
  }
})