// components/ftBanners/ftBanners.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number,
      value: 0
    },
    banners: {
      type: Array,
      value: []
    },
    duration: {
      type: Number,
      value: 300
    },
    autoplay: {
      type: Boolean,
      value: true
    },
    interval: {
      type: Number,
      value: 3000
    },
    circular: {
      type: Boolean,
      value: true
    },
    width: {
      type: String,
      value: '100%'
    },
    height: {
      type: String,
      value: '302rpx'
    },
    indicatorPos: {
      type: String,
      value: 'out'
    },
    indicatorColor: {
      type: String,
      value: '#333'
    },
    spacing: {
      type: Number,
      value: 16
    },
    previousMargin: {
      type: String,
      value: '0rpx'
    },
    nextMargin: {
      type: String,
      value: '0rpx'
    },
    borderRadius: {
      type: String,
      value: '16rpx'
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
    current: 0
  },

  ready: function () {
    // 设置初始位置
    let {index: current} = this.data
    this.setData({
      current
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    currentChange: function (e) {
      this.setData({
        current: e.detail.current
      })
    },
    bannerTap: function (e) {
      let {idx} = e.currentTarget.dataset
      this.triggerEvent('tap', Object.assign({}, this.data.extraData, {idx}))
    }
  }
})
