// pages/dynamiclist/dynamiclist.js
import util from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateid: '',
    loaded: false,
    loading: false,
    page: {},
    dynamics: [],
    noMoreText: '已经没有更多了',
    maxLine: {
      dynamic: {
        title: 1,
        content: 1,
        sign1: 1,
        sign2: 1
      },
      course: {
        title: 1,
        content: 2,
        sign1: 1,
        sign2: 1
      },
      perform: {
        title: 1,
        content: 2,
        sign1: 1,
        sign2: 1
      },
      race: {
        title: 1,
        content: 2,
        sign1: 1,
        sign2: 1
      }
    },
    navTitleText: {
      dynamic: '考级动态',
      course: '师资培训',
      perform: '艺术团表演',
      race: '大赛'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {cateid, title} = options
    console.log(cateid, title)
    if (title) {
      wx.setNavigationBarTitle({ title})
    }
    this.setData({cateid})
    this.fetchlist(cateid, 1)
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
    if (this.data.loading) {
      return false
    }
    this.fetchlist(this.data.cateid, 1)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.loading) {
      return false
    }
    let pn = parseInt(this.data.page.pn) + 1
    this.fetchlist(this.data.cateid, pn)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  fetchlist: function (cateid, pn) {
    if (this.data.loading) { // 正在请求则终止
      if (pn.toString() === '1') {
        wx.stopPullDownRefresh()
      }
      return false
    }
    this.setData({
      loading: true
    })
    util.request('/msg/list',{cid: cateid, pn: pn}).then(res => {
      if (pn.toString() === '1') {
        wx.stopPullDownRefresh()
      }
      let obj = {}
      if (res && !res.error) { // 获取数据成功
        obj.loaded = true
        if (pn.toString() === '1') {
          obj.dynamics = res.data.list
        } else {
          let len = this.data.dynamics.length
          let resLen = res.data.list.length
          if (resLen) {
            for (let i = 0; i < resLen; i++) {
              obj['dynamics[' + (len + i) + ']'] = res.data.list[i]
            }
          }
        }
        obj.page = res.data.page
      }
      obj.loading = false
      this.setData(obj)
    }).catch(err => {
      if (pn.toString() === '1') {
        wx.stopPullDownRefresh()
      }
      this.setData({
        loading: false
      })
    })
  },

  cardTap: function (e) {
    let { id} = e.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/dynamicdetail/dynamicdetail?id=' + id
    })
  }
})