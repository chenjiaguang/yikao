// pages/queryhall/queryhall.js
import util from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    idcard: '',
    majors: [],
    selectedMajor: null,
    levels: [],
    selectedLevel: null,
    submitting: false,
    admissionCard: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getOptions()
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

  getOptions: function () {
    util.request('/option').then(res => {
      console.log('getOptions', res)
      if (!res.error && res.data) { // 获取信息成功
        let {
          major
        } = res.data
        let majors = []
        for (let mj in major) {
          majors.push({
            value: mj,
            text: mj,
            levels: major[mj]
          })
        }
        this.setData({
          majors: majors
        })
      }
    }).catch(err => {

    })
  },

  inputChange: function (e) {
    let { ele } = e.currentTarget.dataset
    let { value } = e.detail
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
    let { ele } = e.currentTarget.dataset
    let { value } = e.detail
    if (ele === 'major') { // 专业
      let {majors} = this.data
      this.setData({
        selectedMajor: value,
        levels: majors[value].levels,
        selectedLevel: null
      })
    } else if (ele === 'level') { // 等级
      this.setData({
        selectedLevel: value
      })
    }
  },

  btnTap: function () {
    console.log('btnTap')
    let {submitting} = this.data
    if (submitting) {
      return false
    }
    let { majors, levels } = this.data
    let { name, idcard, selectedMajor, selectedLevel } = this.data
    let domain = (majors && majors[selectedMajor]) ? majors[selectedMajor] : ''
    let level = (levels && levels[selectedLevel]) ? levels[selectedLevel] : ''
    let rData = {
      name,
      id_card: idcard,
      domain,
      level
    }
    this.setData({
      submitting: true
    })
    util.request('/search/room', rData).then(res => {
      console.log('/search/room', res)
      let obj = {}
      obj.submitting = false
      if ((res.error === 0 || res.error === '0') && res.data) { // 获取信息成功
        let { kz_image_url} = res.data
        obj.admissionCard = kz_image_url
        if (!kz_image_url) {
          wx.showToast({
            title: '未查询到该考生信息',
            icon: 'none'
          })
        }
      }
      this.setData(obj)
    }).catch(err => {
      this.setData({
        submitting: false
      })
      wx.showToast({
        title: '未查询到该考生信息',
        icon: 'none'
      })
    })
  },

  viewAdmissionCard: function () {
    let { admissionCard} = this.data
    if (admissionCard) {
      wx.previewImage({
        urls: [admissionCard]
      })
    }
  }
})