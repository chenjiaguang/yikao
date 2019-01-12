// pages/myenroll/myenroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusText: {
      1: '待缴费',
      2: '审核中',
      3: '已缴费',
      4: '已失效'
    },
    statusColor: {
      1: '#108EE9',
      2: '#FF3B30',
      3: '#333',
      4: '#999'
    },
    modalStatusColor: {
      1: '#FF3B30',
      2: '#FF3B30',
      3: '#333',
      4: '#333'
    },
    tabs: [
      {
        title: '全部',
        list: [
          {
            id: 1,
            title: '中国音乐学院社会艺术水平考级',
            status: '1',
            enroll_no: '103845763',
            institution: '中国音乐学院本院',
            examination_no: '20190119001',
            enroll_time: '2019.01.04 10:39'
          },
          {
            id: 2,
            title: '中国音乐学院社会艺术水平考级',
            status: '2',
            enroll_no: '103845763',
            institution: '中国音乐学院本院',
            examination_no: '20190119001',
            enroll_time: '2019.01.04 10:39'
          },
          {
            id: 3,
            title: '中国音乐学院社会艺术水平考级',
            status: '3',
            enroll_no: '103845763',
            institution: '中国音乐学院本院',
            examination_no: '20190119001',
            enroll_time: '2019.01.04 10:39'
          },
          {
            id: 4,
            title: '中国音乐学院社会艺术水平考级',
            status: '4',
            enroll_no: '103845763',
            institution: '中国音乐学院本院',
            examination_no: '20190119001',
            enroll_time: '2019.01.04 10:39'
          }
        ],
        page: {},
        loaded: true,
        loading: false
      },
      {
        title: '待缴费',
        list: [],
        page: {},
        loaded: false,
        loading: false
      },
      {
        title: '审核中',
        list: [],
        page: {},
        loaded: false,
        loading: false
      }
    ],
    tabIndicatorSize: {
      width: 96,
      height: 6
    },
    modal: {
      visible: false,
      title: '',
      buttons: [],
      buttonBg: 'transparent',
      buttonFontSize: 36,
      modalContent: []
    }
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

  tabChange: function (e) {
    console.log('tabChange', e)
  },

  fetchMyEnrolls: function (e) {
    console.log('fetchMyEnrolls', e)
  },

  viewDetail: function (e) {
    let { id, title, status, enroll_no, institution, examination_no, enroll_time, name, idcard, gender, profession, level, pay_time, expired_reson } = e.currentTarget.dataset.enroll
    let { modal, statusText, modalStatusColor} = this.data
    let _obj = {}
    _obj.id = id
    _obj.title = title
    let content = []
    content[0] = { title: '报名单号', content: enroll_no }
    content[1] = { title: '负责机构', content: institution }
    content[2] = { title: '考试代码', content: examination_no }
    content[3] = { title: '申请时间', content: enroll_time }
    content[4] = { title: '考生姓名', content: name }
    content[5] = { title: '身份证号', content: idcard }
    content[6] = { title: '性别', content: gender }
    content[7] = { title: '报考专业', content: profession }
    content[8] = { title: '报考等级', content: level }
    content[9] = { title: '当前进度', content: statusText[status.toString()], c_color: modalStatusColor[status.toString()] }
    content[10] = { title: '缴费时间', content: pay_time }
    content[11] = { title: '失效原因', content: expired_reson }
    _obj.visible = true
    if (status.toString() === '1') { // 待缴费
      _obj.buttons = ['立即缴费']
      _obj.buttonColor = '#108EE9'
    } else if (status.toString() === '2') { // 审核中
      _obj.buttons = []
    } else if (status.toString() === '3') { // 已缴费
      _obj.buttons = ['查看详情']
      _obj.buttonColor = '#108EE9'
    } else if (status.toString() === '4') { // 已失效
      _obj.buttons = []
    }
    let obj = Object.assign({}, modal, _obj, {modalContent: content})
    console.log('obj', obj)
    this.setData({
      modal: obj
    })
  },

  modalTap: function (e) {
    let {status} = e.currentTarget.dataset
    let {ele} = e.detail
    if (ele === 'btn_close') { // 点击的是关闭按钮
      this.closeModal()
    } else if (ele === 'btn_bottom0' && status.toString() === '1') { // 待缴费
      console.log('点击了立即缴费，跳转待缴费详情')
    } else if (ele === 'btn_bottom0' && status.toString() === '3') { // 已缴费
      console.log('点击了查看详情，跳转已缴费详情')
    }
  },

  closeModal: function () {
    this.setData({
      'modal.visible': false
    })
  }
})