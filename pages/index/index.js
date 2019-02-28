// pages/index/index.js
import util from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    cates: [
      {
        id: '1',
        name: '考级动态',
        list: []
      },
      {
        id: '2',
        name: '师资培训',
        list: []
      },
      {
        id: '3',
        name: '艺术团表演',
        list: []
      },
      {
        id: '4',
        name: '大赛',
        list: []
      },
      {
        id: '5',
        name: '考级教材',
        list: []
      }
    ],
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
      console.log('获取数据失败')
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
      console.log('点击了成绩查询')
      wx.navigateTo({
        url: '/pages/queryscore/queryscore'
      })
    } else if (ele === 'queryhall') { // 点击了考场查询
      console.log('点击了考场查询')
      wx.navigateTo({
        url: '/pages/queryhall/queryhall'
      })
    }
  },

  bannerTap: function (e) {
    console.log('bannerTap', e)
    let {item} = e.detail
    if (item && item.path) {
      wx.navigateTo({
        url: '/pages/webviewpage/webviewpage?url=' + item.path
      })
    }
  },

  cardTap: function (e) {
    let {cateid, id} = e.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/dynamicdetail/dynamicdetail?cateid=' + cateid + '&id=' + id
    })
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
      console.log('点击了确定按钮')
      this.setData({
        'modal.visible': false
      })
      wx.navigateTo({
        url: '/pages/apply/apply'
      })
    }
  }
})