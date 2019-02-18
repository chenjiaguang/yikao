// pages/queryscore/queryscore.js
import util from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    idcard: '',
    submitting: false,
    examInfo: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  inputChange: function (e) {
    let {ele} = e.currentTarget.dataset
    let {value} = e.detail
    if (ele === 'name') { // 姓名
      this.setData({
        name: value
      })
    } else if (ele === 'idcard') {
      this.setData({
        idcard: value
      })
    }
  },

  pickerChange: function (e) {
    console.log('pickerChange', e)
    let {ele} = e.currentTarget.dataset
    let {value} = e.detail
    if (ele === 'major') { // 专业
      this.setData({
        selectedMajor: value
      })
    } else if (ele === 'level') { // 等级
      this.setData({
        selectedLevel: value
      })
    }
  },

  btnTap: function () {
    console.log('btnTap')
    let { submitting, name, idcard } = this.data
    if (submitting) {
      return false
    }
    this.setData({
      submitting: true
    })
    
    util.request('/search', { name, id_card: idcard}).then(res => {
      let obj = {}
      obj.submitting = false
      if (res && res.error.toString() === '0') { // 获取数据成功
        if (res.data) {
          obj.examInfo = res.data
          if (!res.data[0]) {
            wx.showToast({
              title: '未查询到该考生成绩信息',
              icon: 'none'
            })
          }
        } else {
          wx.showToast({
            title: '未查询到该考生信息',
            icon: 'none'
          })
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
        submitting: false
      })
      console.log('获取数据失败')
    })
  },
  seeMore: function (e) {
    let {result} = e.currentTarget.dataset
    let resultJson = JSON.stringify(result)
    console.log('resultJson', resultJson, result)
    wx.setStorageSync('scoreresult', resultJson)
    wx.navigateTo({
      url: '/pages/scoreresult/scoreresult',
    })
  }
})