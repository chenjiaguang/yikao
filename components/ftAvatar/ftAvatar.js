// components/ftAvatar/ftAvatar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    avatar: {
      type: String,
      value: ''
    },
    avatarBg: {
      type: String,
      value: 'transparent'
    },
    size: { // rpx
      type: Number,
      value: 80
    },
    message: {
      type: Number,
      value: 0
    },
    messageBg: {
      type: String,
      value: '#FF3A30'
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
    boxTap: function (e) {
      this.triggerEvent('tap', this.data.extraData)
    }
  }
})
