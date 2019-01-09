// components/ftVisitingCard/ftVisitingCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    width: {
      type: String,
      value: '100%'
    },
    height: {
      type: String,
      value: 'auto'
    },
    title: {
      type: String,
      value: ''
    },
    content: {
      type: String,
      value: ''
    },
    state: {
      type: String,
      value: ''
    },
    fontSize: {
      type: Object,
      value: {
        title: 32,
        content: 28,
        state: 28
      }
    },
    color: {
      type: Object,
      value: {
        title: '#333',
        content: '#666',
        state: '#419DF0'
      }
    },
    maxLine: {
      type: Object,
      value: {
        title: 1,
        content: 2,
        state: 1
      }
    },
    image: {
      type: String,
      value: ''
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    eleTap: function (e) {
      let {ele} = e.currentTarget.dataset
      let {title, content, state, image} = this.data
      this.triggerEvent('tap', Object.assign({}, { ele, title, content, state, image }, this.data.extraData))
    }
  }
})
