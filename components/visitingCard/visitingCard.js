// components/visitingCard/visitingCard.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cardData: {
      type: Object,
      value: {
        title: '',
        intro: '',
        sign1: '',
        sign2: '',
        cover_url: ''
      }
    },
    width: {
      type: String,
      value: '100%'
    },
    height: {
      type: String,
      value: 'auto'
    },
    fontSize: {
      type: Object,
      value: {
        title: 30,
        content: 26,
        sign1: 24,
        sign2: 24
      }
    },
    color: {
      type: Object,
      value: {
        title: '#333',
        content: '#666',
        sign1: '#999',
        sign2: '#999'
      }
    },
    maxLine: {
      type: Object,
      value: {
        title: 1,
        content: 1,
        sign1: 1,
        sign2: 1
      }
    },
    imagePosition: {
      type: String,
      value: 'right'
    },
    textAlign: {
      type: String,
      value: 'left'
    },
    containerStyle: {
      type: String,
      value: ''
    },
    imageStyle: {
      type: String,
      value: ''
    },
    topSeparator: {
      type: Boolean,
      value: false
    },
    bottomSeparator: {
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
    defaultCover: '../../assets/images/default_img.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    eleTap: function (e) {
      let { ele } = e.currentTarget.dataset
      let { title, intro, create_at, cover_url } = this.data.cardData
      // if (ele === 'image' && cover_url) {
      //   wx.previewImage({
      //     urls: [cover_url]
      //   })
      //   return false
      // }
      this.triggerEvent('tap', Object.assign({}, { ele, title, intro, create_at, cover_url }, this.data.extraData))
    }
  }
})
