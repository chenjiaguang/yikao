// components/messageBox/messageBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    message: {
      type: Object,
      value: {},
      observer: function (newVal, oldVal, changedPath) {
        this.getBtns(newVal)
      }
    },
    customEvent: {
      type: Boolean,
      value: false
    },
    extraData: {
      type: Object,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    btns: [],
    titleText: {
      1: '成绩查询通知',
      2: '准考证领取通知',
      3: '考场查询通知',
      4: '考试报名通知',
      5: '大赛通知',
      6: '系统通知',
      7: '审核未通过',
      8: '缴费通知',
      9: '缴费成功通知',
      10: '缺考顺延通知'
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getBtns: function (message) {
      let btns = []
      if (!message.inform) {
        return false
      }
      if (message.inform.type.toString() === '1') { // 成绩查询通知
        btns = ['点此查询成绩']
      } else if (message.inform.type.toString() === '3') { // 考场查询通知
        btns = ['点此查询考场']
      } else if (message.inform.type.toString() === '7') { // 审核未通过
        btns = ['点此重新报名']
      } else if (message.inform.type.toString() === '8') { // 缴费通知
        btns = ['点此进行缴费']
      } else {
        btns = []
      }
      this.setData({btns})
    },
    btnTap: function (e) {
      let {ele} = e.currentTarget.dataset
      this.triggerEvent('tap', Object.assign({}, { ele }, this.data.extraData))
      if (this.data.customEvent) { // 不执行默认行为
        return false
      }
      if (ele === '点此查询成绩') { // 成绩查询
        wx.navigateTo({
          url: '/pages/queryscore/queryscore'
        })
      } else if (ele === '点此查询考场') { // 考场查询
        wx.navigateTo({
          url: '/pages/queryhall/queryhall'
        })
      } else if (ele === '点此进行缴费') { // 缴费
        let id = this.data.message.apply_id
        wx.navigateTo({
          url: '/pages/myenrolldetail/myenrolldetail?id=' + id
        })
      } else if (ele === '点此重新报名') { // 重新报名
        wx.navigateTo({
          url: '/pages/apply/apply'
        })
      }
    },
    goDetail: function (e) {
      let {message} = this.data
      let { ele } = e.currentTarget.dataset
      this.triggerEvent('tap', Object.assign({}, { ele, message }, this.data.extraData))
    },
    stopPropagation: function () {
      return false
    }
  }
})
