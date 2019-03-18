// components/ftButton/ftButton.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    borderColor: {
      type: String,
      value: 'transparent'
    },
    borderRadius: {
      type: String,
      value: '8rpx'
    },
    width: {
      type: String,
      value: '100%'
    },
    height: {
      type: String,
      value: '100%'
    },
    fontSize: {
      type: Number,
      value: 36
    },
    color: {
      type: String,
      value: '#fff'
    },
    disabledColor: {
      type: String,
      value: '#666'
    },
    bg: {
      type: String,
      value: '#419DF0'
    },
    disabledBg: {
      type: String,
      value: '#EFEFEF'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    },
    text: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      value: ''
    },
    openType: {
      type: String,
      value: ''
    },
    appParameter: {
      type: String,
      value: ''
    },
    extraData: {
      type: Object,
      value: null
    },
    formType: {
      type: String,
      value: ''
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
    buttonTap: function () {
      if (this.data.loading || this.data.disabled) {
        return false
      }
      this.triggerEvent('tap', this.data.extraData)
    },
    otError: function (e) { // open-type能力发生错误的回调
      this.triggerEvent('error', e.detail)
    },
    otContact: function (e) { // 将客服消息回调传到组件外
      this.triggerEvent('contact', e.detail)
    },
    otGetPhoneNumber: function (e) { // 将获取电话号码的回调传到组件外
      this.triggerEvent('getphonenumber', e.detail)
    },
    otGetUserInfo: function (e) { // 将获取用户信息的回调传到组件外
      this.triggerEvent('getuserinfo', e.detail)
    },
    otOpenSetting: function (e) { // 将打开设置页面的回调传到组件外
      this.triggerEvent('opensetting', e.detail)
    }
  }
})
