// components/ftTabs/ftTabs.js
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
    headerSeparator: {
      type: Boolean,
      value: true
    },
    tabs: { // tabs格式:[{title: xxx, list: [], page: {}, loaded: false, loading: false}, {title: xxx, list: [], page: {}, loaded: false, loading: false}]
      type: Array,
      value: []
    },
    color: {
      type: String,
      value: '#333'
    },
    currentColor: {
      type: String,
      value: '#FF9500'
    },
    indicatorSize: {
      type: Object,
      value: {
        width: ''
      }
    },
    contentStyle: {
      type: String,
      value: ''
    },
    type: { // type:1（tab按钮左对齐），type:2（tab按钮居中对齐）
      type: String,
      value: '1'
    },
    noMoreText: {
      type: String,
      value: '没有更多了~'
    },
    firstPage: { // 第一页从0算起
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current: 0
  },

  ready: function () {
    let idx = this.data.index
    this.setData({
      current: idx
    })
    let { firstPage } = this.data
    let { page } = this.data.tabs[idx]
    let pn = (page && page.pn) ? page.pn : firstPage
    this.fetchList(idx, pn)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabTap: function (e) {
      let { idx } = e.currentTarget.dataset
      this.currentChange({
        detail: {
          current: idx,
          source: 'touch'
        }
      })
      // this.triggerEvent('tap', { idx })
    },
    currentChange: function (e) {
      const { current, source } = e.detail
      if (source === 'touch') {
        let idx = e.detail.current
        this.setData({
          current: idx
        })
        // 触发tabchange事件
        let { firstPage } = this.data
        let { page } = this.data.tabs[idx]
        let pn = (page && page.pn) ? page.pn : firstPage
        this.fetchList(idx, pn)
        this.triggerEvent('tabchange', e.detail)
      }
    },
    scrollToEnd: function (e) {
      let {idx} = e.currentTarget.dataset
      let { firstPage } = this.data
      let { page } = this.data.tabs[idx]
      let pn = ((page && page.pn) ? page.pn : firstPage) + 1
      this.fetchList(idx, pn)
    },
    fetchList: function (idx, pn, isRefresh) {
      let {firstPage} = this.data
      let {list, page, loading, loaded} = this.data.tabs[idx]
      if (loading) { // 正在加载
        return false
      }
      if (list && list[0] && pn.toString() === firstPage.toString() && !isRefresh) { // 已有数据 且 是请求第一页数据 且 不是刷新
        return false
      }
      if (page && page.isend && !isRefresh) { // 最后一页 且 不是刷新
        return false
      } // 触发加载fatchlist事件
      this.triggerEvent('fetchlist', { idx, pn, isRefresh})
    }
  }
})
