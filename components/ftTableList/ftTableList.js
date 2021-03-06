// components/ftTableList/ftTableList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tableData: {
      type: Object,
      value: []
    },
    fontSize: {
      type: Number,
      value: 28
    },
    titleColor: {
      type: String,
      value: '#333'
    },
    contentColor: {
      type: String,
      value: '#666'
    },
    titleAlign: {
      type: String,
      value: 'justify',
    },
    spacing: {
      type: Number,
      value: 12
    },
    contentLine: {
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
    
  }
})
