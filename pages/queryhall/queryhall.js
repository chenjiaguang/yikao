// pages/queryhall/queryhall.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    idcard: '',
    major: [
      {
        text: '专业1',
        value: '1'
      },
      {
        text: '专业2',
        value: '2'
      },
      {
        text: '专业3',
        value: '3'
      },
      {
        text: '专业4',
        value: '4'
      },
      {
        text: '专业5',
        value: '5'
      },
      {
        text: '专业6',
        value: '6'
      },
      {
        text: '专业7',
        value: '7'
      },
      {
        text: '专业8上地理课肌肤阿了三分爱丽丝发送 ',
        value: '8'
      },
      {
        text: '专业9',
        value: '9'
      },
      {
        text: '专业10',
        value: '10'
      },
      {
        text: '专业11',
        value: '11'
      },
      {
        text: '专业12',
        value: '12'
      }
    ],
    selectedMajor: null,
    level: [
      {
        text: '等级1',
        value: '1'
      },
      {
        text: '等级2',
        value: '2'
      },
      {
        text: '等级3',
        value: '3'
      },
      {
        text: '等级4',
        value: '4'
      }
    ],
    selectedLevel: null,
    submitting: false,
    admissionCard: ''
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
    let {submitting} = this.data
    if (submitting) {
      return false
    }
    this.setData({
      submitting: true
    })
    // 模拟获取考场信息成功
    setTimeout(() => {
      this.setData({
        submitting: false,
        admissionCard: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547556521708&di=c58cebb4b0034b6118a3e5d3bfd40b4b&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20130608%2F20130608113624-555785523.jpg'
      })
    }, 500)
    // 模拟获取不到考场信息
    // setTimeout(() => {
    //   this.setData({
    //     submitting: false
    //   })
    //   wx.showToast({
    //     title: '未查询到该考生信息',
    //     icon: 'none'
    //   })
    // }, 500)
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