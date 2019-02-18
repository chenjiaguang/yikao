// pages/scoreresult/scoreresult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    examInfo: {
      userData: [],
      examData: []
    },
    pass: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getExamInfo()
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

  getExamInfo: function () {
    let scoreresult = wx.getStorageSync('scoreresult')
    let data = JSON.parse(scoreresult)
    console.log('data', data)
    let userData = []
    let examData = []
    userData.push({ title: '姓名', content: data.name })
    userData.push({ title: '国籍', content: data.nationality })
    userData.push({ title: '民族', content: data.nation })
    userData.push({ title: '证件号码', content: data.id_number})

    examData.push({ title: '报考机构单位', content: data.organ_name })
    examData.push({ title: '考级专业', content: data.domain })
    examData.push({ title: '起止级', content: data.start_stop + '级' })
    examData.push({ title: '等级', content: data.class + '级' })
    examData.push({ title: '发证时间', content: data.issue_date })
    examData.push({ title: '证书编号', content: data.certificate_number })
    this.setData({
      examInfo: {
        userData,
        examData
      },
      pass: data.certificate_number ? true : false
    })
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

  }
})