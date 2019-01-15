// components/messageBox/messageBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    message: {
      type: Object,
      value: {},
      observer(newVal, oldVal, changedPath) {
        this.getBtn()
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
    buttonText: {
      query_score: '点此查询成绩',
      query_hall: '点此查询考场',
      query_pay: '点此进行缴费',
      query_enroll: '点此重新报名'
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getBtn: function () {
      let {message} = this.data
      if (message.entry) {
        let len = Object.keys(message.entry).length
        let btnArr = []
        for (let i = 0; i < len; i++) {
          let { buttonText} = this.data
          if (message.entry[Object.keys(message.entry)[i]]) {
            btnArr.push({ ele: Object.keys(message.entry)[i], text: buttonText[Object.keys(message.entry)[i]]})
          }
        }
        this.setData({btns: btnArr})
      }
    },
    btnTap: function (e) {
      let {ele} = e.currentTarget.dataset
      this.triggerEvent('tap', Object.assign({}, { ele }, this.data.extraData))
      if (this.data.customEvent) { // 不执行默认行为
        return false
      }
      if (ele === 'query_score') { // 成绩查询
        console.log('点击了查询成绩')
        wx.navigateTo({
          url: '/pages/queryscore/queryscore'
        })
      } else if (ele === 'query_hall') { // 考场查询
        console.log('点击了查询考场')
        wx.navigateTo({
          url: '/pages/queryhall/queryhall'
        })
      } else if (ele === 'query_pay') { // 缴费
        console.log('点击了进行缴费')
        wx.navigateTo({
          url: '/pages/pay/pay'
        })
      } else if (ele === 'query_enroll') { // 重新报名
        console.log('点击了重新报名')
        wx.navigateTo({
          url: '/pages/apply/apply'
        })
      }
    }
  }
})
