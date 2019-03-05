// pages/message/message.js
import util from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loaded: false,
    loading: false,
    page: {},
    messages: [],
    noMoreText: '已经没有更多了'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchlist(1)
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
    this.fetchlist(1)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let {page} = this.data
    let pn = (page && page.pn) ? (parseInt(page.pn) + 1) : 1
    this.fetchlist(pn)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  fetchlist: function (pn) {
    let {loading, page} = this.data
    if (loading || (page && page.is_end && pn.toString() !== '1')) { // 正在加载数据 或 最后一页且不是获取第一页的数据时
      if (pn.toString() === '1') { // 停止下拉刷新动画
        wx.stopPullDownRefresh()
      }
      return false
    }
    let rData = {
      pn
    }
    util.request('/inform/list', rData).then(res => {
      let obj = {}
      obj.loading = false
      if (pn.toString() === '1') {
        wx.stopPullDownRefresh()
      }
      if (res && res.data && !res.error) { // 获取数据成功
        obj.loaded = true
        obj.page = res.data.page
        if (pn.toString() === '1') { // 第一页
          obj.messages = res.data.list
        } else {
          let len = res.data.list.length
          let dataLen = this.data.messages.length
          if (len) {
            for (let i = 0; i < len; i++) {
              obj['messages[' + (dataLen + i) + ']'] = res.data.list[i]
            }
          }
        }
      }
      this.setData(obj)
    }).catch(err => {
      let obj = {}
      obj.loading = false
      this.setData(obj)
      console.log('获取数据失败', err)
    })
  },

  boxTap: function (e) {
    let {message, ele} = e.detail
    if (ele === 'box' && message.inform && message.inform.detail) {
      let url = encodeURIComponent(message.inform.detail)
      wx.navigateTo({
        url: '/pages/webviewpage/webviewpage?url=' + url
      })
    }
  }
})