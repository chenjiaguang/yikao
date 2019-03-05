// pages/myenroll/myenroll.js
import util from '../../utils/util.js'

Page({

  ftRouteName: 'myenroll',
  /**
   * 页面的初始数据
   */
  data: {
    indexTab: 0,
    planType: {
      0: '',
      1: '2',
      2: '1'
    },
    statusText: {
      1: '审核中',
      2: '待缴费',
      3: '已失效',
      4: '已缴费'
    },
    statusColor: {
      1: '#FF3B30',
      2: '#108EE9',
      3: '#999',
      4: '#333'
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
        list: [],
        page: {},
        loaded: false,
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
      id: '',
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
    let default_tab = options.default_tab ? parseInt(options.default_tab) : 0
    this.setData({
      indexTab: default_tab
    })
    // this.fetchMyEnrolls({
    //   detail: {
    //     idx: default_tab,
    //     pn: 1,
    //     isRefresh: true
    //   }
    // })
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

  refreshPage: function () {
    let { indexTab} = this.data
    this.fetchMyEnrolls({
      detail: {
        idx: indexTab,
        pn: 1,
        isRefresh: true
      }
    })
  },

  tabChange: function (e) {
    
  },

  fetchMyEnrolls: function (e) {
    let { planType } = this.data
    let { idx, pn, isRefresh } = e.detail
    let plan = planType[idx.toString()]

    if (this.data.tabs[idx].loading) { // 正在加载数据时return
      if (pn.toString() === '1') { // 停止下拉刷新动画
        wx.stopPullDownRefresh()
      }
      return false
    }
    let rData = {
      plan,
      pn
    }
    util.request('/apply/list', rData).then(res => {
      let obj = {}
      obj['tabs[' + idx + ']loading'] = false
      if (res && res.data && !res.error) { // 获取数据成功
        obj['tabs[' + idx + ']loaded'] = true
        obj['tabs[' + idx + ']page'] = res.data.page
        res.data.list.forEach(item => {
          item.year = item.create_at.substr(0, 4) + '年'
        })
        if (pn.toString() === '1') { // 第一页
          obj['tabs[' + idx + ']list'] = res.data.list
        } else {
          let len = res.data.list.length
          let dataLen = this.data.tabs[idx].list.length
          if (len) {
            for (let i = 0; i < len; i++) {
              obj['tabs[' + idx + '].list[' + (dataLen + i) + ']'] = res.data.list[i]
            }
          }
        }
      }
      this.setData(obj)
    }).catch(err => {
      let obj = {}
      obj['tabs[' + idx + ']loading'] = false
      this.setData(obj)
      console.log('获取数据失败', err)
    })
  },

  viewDetail: function (e) {
    let { id, year, creat_at, plan, apply_no, exam, name, id_number, sex, domain, level, pay, cause } = e.currentTarget.dataset.enroll
    let { modal, statusText, modalStatusColor} = this.data
    let _obj = {}
    _obj.id = id
    _obj.plan = plan
    _obj.title = year + domain + level
    let content = []
    content.push({ title: '报名单号', content: apply_no })
    content.push({ title: '负责机构', content: '中国音乐学院海南考区承办-雅典艺术团' })
    content.push({ title: '考试编号', content: exam.number })
    content.push({ title: '报名时间', content: creat_at })
    content.push({ title: '考生姓名', content: name })
    content.push({ title: '身份证号', content: id_number })
    content.push({ title: '性别', content: sex })
    content.push({ title: '报考专业', content: domain })
    content.push({ title: '报考等级', content: level })
    content.push({ title: '当前进度', content: statusText[plan.toString()], c_color: modalStatusColor[plan.toString()] })
    if (plan.toString() === '4' && pay && pay.pay_time) { // 已缴费
      content.push({ title: '缴费时间', content: pay.pay_time }) // 已缴费才显示
    }
    if (cause) {
      content.push({ title: '失效原因', content: cause })
    }
    _obj.visible = true
    if (plan.toString() === '2') { // 待缴费
      _obj.buttons = ['立即缴费']
      _obj.buttonColor = '#108EE9'
    } else if (plan.toString() === '1' || plan.toString() === '3') { // 审核中、已失效
      _obj.buttons = []
    } else if (plan.toString() === '4') { // 已缴费
      _obj.buttons = ['查看详情']
      _obj.buttonColor = '#108EE9'
    }
    let obj = Object.assign({}, modal, _obj, {modalContent: content})
    this.setData({
      modal: obj
    })
  },

  modalTap: function (e) {
    let {plan, id} = e.currentTarget.dataset
    let {ele} = e.detail
    if (ele === 'btn_close') { // 点击的是关闭按钮
      this.closeModal()
    } else if (ele === 'btn_bottom0' && (plan.toString() === '2' || plan.toString() === '4')) { // 待缴费、已缴费
      this.closeModal()
      wx.navigateTo({
        url: '/pages/myenrolldetail/myenrolldetail?id=' + id
      })
    }
  },

  getEnrollData: function (id) {
    let list = []
    this.data.tabs.forEach(item => {
      list = list.concat(item.list)
    })
    let enroll = list.filter(item => item.id.toString() === id.toString())[0] || null
    return enroll ? JSON.parse(JSON.stringify(enroll)) : null
  },

  closeModal: function () {
    this.setData({
      'modal.visible': false
    })
  }
})