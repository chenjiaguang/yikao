// components/ftEntrance/ftEntrance.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    required: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    loading: { // 正在请求数据
      type: Boolean,
      value: false
    },
    image: {
      type: String,
      value: ''
    },
    subImage: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    subTitle: {
      type: String,
      value: ''
    },
    extraData: {
      type: Object,
      value: null
    },
    topBorder: {
      type: Boolean,
      value: false
    },
    bottomBorder: {
      type: Boolean,
      value: false
    },
    subMask: {
      type: Boolean,
      value: false
    },
    nextIcon: {
      type: Boolean,
      value: true
    },
    spacing: {
      type: String,
      value: '30rpx'
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
    boxTap: function (e) {
      if (this.data.disabled || this.data.loading) {
        return false
      }
      this.triggerEvent('tap', this.data.extraData)
    }
  }
})

