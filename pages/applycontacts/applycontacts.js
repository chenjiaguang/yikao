// pages/applycontacts/applycontacts.js
import util from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loaded: false,
    loading: false,
    districts: [],
    isEmpty: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchContacts()
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
    this.fetchContacts()
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

  fetchContacts: function () {
    console.log('btnTap')
    let { loading } = this.data
    if (loading) {
      return false
    }
    this.setData({
      loading: true
    })

    util.request('/apply/offline').then(res => {
      wx.stopPullDownRefresh()
      let obj = {}
      obj.loading = false
      if (res && res.error.toString() === '0') { // 获取数据成功
        obj.loaded = true
        if (res.data) {
          let isEmpty = true
          if (res.data && res.data.length > 0) {
            res.data.forEach(item => {
              if (item.contacts && item.contacts.length > 0) {
                isEmpty = false
              }
            })
          }
          obj.districts = res.data
          obj.isEmpty = isEmpty
        }
      }
      if (res && res.error && res.error.toString() !== '0') {
        if (res.msg) {
          wx.showToast({
            title: res.msg,
            icon: 'none'
          })
        }
      }
      this.setData(obj)
    }).catch(err => {
      this.setData({
        loading: false
      })
      console.log('获取数据失败')
    })
  },

  makePhoneCall: function (e) {
    let {phone} = e.currentTarget.dataset
    if (phone) {
      wx.makePhoneCall({
        phoneNumber: phone
      })
    }
  }
})