// components/ftCustomModal/ftCustomModal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    visible: {
      type: Boolean,
      value: true
    },
    type: {
      type: String,
      value: '1'
    },
    title: {
      type: String,
      value: ''
    },
    titleStyle: {
      type: String,
      value: ''
    },
    clostButton: {
      type: Boolean,
      value: true
    },
    closeImage: {
      type: String,
      value: '/assets/images/icon_round_close.png'
    },
    headerLine: {
      type: Boolean,
      value: true
    },
    buttonLine: {
      type: Boolean,
      value: true
    },
    buttons: {
      type: Array,
      value: ['确定']
    },
    buttonFontSize: {
      type: Number,
      value: 30
    },
    buttonColor: {
      type: String,
      value: '#fff'
    },
    buttonBg: {
      type: String,
      value: '#108EE9'
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    stopPropagation: function () {
      
    },
    buttonTap: function (e) {
      let {ele} = e.currentTarget.dataset
      this.triggerEvent('tap', Object.assign({}, { ele }, JSON.parse(JSON.stringify(this.data.extraData))))
    }
  }
})
