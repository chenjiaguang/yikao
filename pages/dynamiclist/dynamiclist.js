// pages/dynamiclist/dynamiclist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateid: '',
    loaded: false,
    loading: false,
    page: {},
    dynamics: [],
    noMoreText: '已经没有更多了',
    maxLine: {
      dynamic: {
        title: 1,
        content: 1,
        sign1: 1,
        sign2: 1
      },
      course: {
        title: 1,
        content: 2,
        sign1: 1,
        sign2: 1
      },
      perform: {
        title: 1,
        content: 2,
        sign1: 1,
        sign2: 1
      },
      race: {
        title: 1,
        content: 2,
        sign1: 1,
        sign2: 1
      }
    },
    navTitleText: {
      dynamic: '考级动态',
      course: '师资培训',
      perform: '艺术团表演',
      race: '大赛'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {cateid, title} = options
    console.log(cateid, title)
    if (title) {
      wx.setNavigationBarTitle({ title})
    }
    this.setData({cateid})
    this.fetchlist(cateid, 0)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  fetchlist: function (cateid, pn) {
    this.setData({
      loading: true
    })
    setTimeout(() => {
      if (cateid.toString() === '1') { // 考级动态
        this.setData({
          loaded: true,
          loading: false,
          dynamics: [
            {
              id: 11,
              title: '2019年寒假考级',
              content: '最多展示一行，超出截断展示最多展示一行，超出截断展示最多展示1行',
              sign1: '2019-01-07',
              sign2: '中国音乐学院考级委员会海南考区'
            },
            {
              id: 22,
              title: '2019年暑假考级',
              content: '最多展示一行，超出截断展示最多展',
              sign1: '2019-01-07',
              sign2: '中国音乐学院考级委员会海南考区'
            },
            {
              id: 33,
              title: '2019年长期考级',
              content: '最多展示一行，超出截断展示最多展示一行，超出截断展示最多展示1行',
              sign1: '2019-01-07',
              sign2: '中国音乐学院考级委员会海南考区'
            }
          ],
          page: {
            isend: true,
            pn: 0
          }
        })
      } else if (cateid.toString() === '2') { // 师资培训
        this.setData({
          loaded: true,
          loading: false,
          dynamics: [
            {
              id: 1,
              title: '师资培训11111',
              content: '2行的内容是镂空的肌肤脸上的肌肤',
              sign1: '2019-01-07',
              image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819776845,1128606894&fm=26&gp=0.jpg'
            },
            {
              id: 2,
              title: '师资培训222222',
              content: '2行的内容是镂空的肌肤脸上的肌肤离开善良的风收到了饭就阿善良分家连撒娇阿了三分景拉丝分',
              sign1: '2019-01-07',
              image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=877288732,706910501&fm=200&gp=0.jpg'
            },
            {
              id: 3,
              title: '师资培训33333',
              content: '2行的内容是镂空的肌肤脸上的肌肤离开善良的风景拉丝分',
              sign1: '2019-01-07',
              image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3390961998,1154407883&fm=200&gp=0.jpg'
            }
          ],
          page: {
            isend: true,
            pn: 0
          }
        })
      } else if (cateid.toString() === '3') { // 艺术团表演
        this.setData({
          loaded: true,
          loading: false,
          dynamics: [
            {
              id: 6,
              title: '艺术团表演11111',
              content: '2行的内容是镂空的肌肤脸上的肌肤',
              sign1: '2019-01-07',
              image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819776845,1128606894&fm=26&gp=0.jpg'
            },
            {
              id: 7,
              title: '艺术团表演222222',
              content: '2行的内容是镂空的肌肤脸上的肌肤离开善良的风收到了饭就阿善良分家连撒娇阿了三分景拉丝分',
              sign1: '2019-01-07',
              image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=877288732,706910501&fm=200&gp=0.jpg'
            },
            {
              id: 8,
              title: '艺术团表演33333',
              content: '2行的内容是镂空的肌肤脸上的肌肤离开善良的风景拉丝分',
              sign1: '2019-01-07',
              image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3390961998,1154407883&fm=200&gp=0.jpg'
            }
          ],
          page: {
            isend: true,
            pn: 0
          }
        })
      } else if (cateid.toString() === '4') { // 大赛
        this.setData({
          loaded: true,
          loading: false,
          dynamics: [
            {
              id: 9,
              title: '大赛大赛11111',
              content: '2行的内容是镂空的肌肤脸上的肌肤',
              sign1: '2019-01-07',
              image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819776845,1128606894&fm=26&gp=0.jpg'
            },
            {
              id: 99,
              title: '大赛大赛222222',
              content: '2行的内容是镂空的肌肤脸上的肌肤离开善良的风收到了饭就阿善良分家连撒娇阿了三分景拉丝分',
              sign1: '2019-01-07',
              image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=877288732,706910501&fm=200&gp=0.jpg'
            },
            {
              id: 999,
              title: '大赛大赛33333',
              content: '2行的内容是镂空的肌肤脸上的肌肤离开善良的风景拉丝分',
              sign1: '2019-01-07',
              image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3390961998,1154407883&fm=200&gp=0.jpg'
            }
          ],
          page: {
            isend: true,
            pn: 0
          }
        })
      }
    }, 1000)
  },

  cardTap: function (e) {
    let { id} = e.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/dynamicdetail/dynamicdetail?id=' + id
    })
  }
})