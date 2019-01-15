// pages/queryscore/queryscore.js
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
    userInfo: null,
    examInfo: null
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
    let { submitting } = this.data
    if (submitting) {
      return false
    }
    this.setData({
      submitting: true
    })
    // 模拟获取考场信息成功
    setTimeout(() => {
      const info = {
        name: '张三',
        nationality: '中国',
        volk: '汉族',
        card_number: '460027201912315566',
        institution: '中国音乐学院考级委员会',
        major: '钢琴',
        range: '1~10级',
        level: '1级',
        certificate_time: '2019年01月23日',
        certification_number: '00222256529888'
      }
      let { name, nationality, volk, card_number, institution, major, range, level, certificate_time, certification_number} = info
      let _obj = {}
      _obj.submitting = false
      _obj.userInfo = [
        { title: '姓名', content: name },
        { title: '国籍', content: nationality },
        { title: '民族', content: volk },
        { title: '证件号码', content: card_number}
      ]
      _obj.examInfo = [
        { title: '报考机构单位', content: institution },
        { title: '考级专业', content: major },
        { title: '起止级', content: range },
        { title: '等级', content: level },
        { title: '发证时间', content: certificate_time },
        { title: '证书编号', content: certification_number }
      ]
      this.setData(_obj)
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
  }
})