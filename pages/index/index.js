// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [
      {
        key: 1,
        title: '',
        url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3390961998,1154407883&fm=200&gp=0.jpg'
      },
      {
        key: 2,
        title: '',
        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1917712929,4122611779&fm=200&gp=0.jpg'
      },
      {
        key: 3,
        title: '',
        url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819776845,1128606894&fm=26&gp=0.jpg'
      },
      {
        key: 4,
        title: '',
        url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=877288732,706910501&fm=200&gp=0.jpg'
      }
    ],
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
    dynamicFontSize: {
      title: 30,
      content: 26,
      sign1: 24,
      sign2: 24
    },
    dynamicColor: {
      title: '#333',
      content: '#999',
      sign1: '#16689A',
      sign2: '#666'
    },
    dynamicMaxLine: {
      title: 1,
      content: 1,
      sign1: 1,
      sign2: 1
    },
    courses: [
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
    courseMaxLine: {
      title: 1,
      content: 2,
      sign1: 1,
      sign2: 1
    },
    performs: [
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
    performMaxLine: {
      title: 1,
      content: 2,
      sign1: 1,
      sign2: 1
    },
    races: [
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
    raceMaxLine: {
      title: 1,
      content: 2,
      sign1: 1,
      sign2: 1
    },
    books: [
      {
        id: 1,
        title: '民族管弦乐器',
        image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=832062413,3747718242&fm=26&gp=0.jpg'
      },
      {
        id: 2,
        title: '西洋管弦乐器',
        image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2792394468,2109792806&fm=26&gp=0.jpg'
      },
      {
        id: 3,
        title: '键盘乐器',
        image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=335696418,4043130326&fm=26&gp=0.jpg'
      },
      {
        id: 4,
        title: '声乐',
        image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=154577074,1008762718&fm=26&gp=0.jpg'
      },
      {
        id: 5,
        title: '基本乐科',
        image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4137700990,2527839804&fm=26&gp=0.jpg'
      }
    ],
    modal: {
      visible: false
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  pageEntryTap: function (e) {
    let {ele} = e.currentTarget.dataset
    if (ele === 'enroll') { // 点击了考级报名
      console.log('点击了考级报名')
      this.setData({
        'modal.visible': true
      })
    } else if (ele === 'queryscore') { // 点击了成绩查询
      console.log('点击了成绩查询')
      wx.navigateTo({
        url: '/pages/queryscore/queryscore'
      })
    } else if (ele === 'queryhall') { // 点击了考场查询
      console.log('点击了考场查询')
      wx.navigateTo({
        url: '/pages/queryhall/queryhall'
      })
    }
  },

  cardTap: function (e) {
    let {ele, id, title} = e.currentTarget.dataset
    if (ele === 'dynamic') { // 点击了考级动态项
      console.log('点击了考级动态项', id)
    } else if (ele === 'course') { // 点击了师资培训项
      console.log('点击了师资培训项', id)
    } else if (ele === 'perform') { // 点击了艺术团表演项
      console.log('点击了艺术团表演项', id)
    } else if (ele === 'race') { // 点击了大赛项
      console.log('点击了大赛项', id)
    } else if (ele === 'book') {
      console.log('点击了考级教材项', id)
    }
    if (ele === 'book') { // 点击了教材项则跳转教材
      wx.navigateTo({
        url: '/pages/booklist/booklist?id=' + id + '&title=' + (title || '')
      })
    } else { // 否则均跳转动态详情
      wx.navigateTo({
        url: '/pages/dynamicdetail/dynamicdetail?type=' + ele + '&id=' + id
      })
    }
  },

  seeMore: function (e) {
    let { ele, title } = e.currentTarget.dataset
    if (ele === 'dynamic') { // 点击了查看更多考级动态
      console.log('点击了查看更多考级动态')
    } else if (ele === 'course') { // 点击了查看更多师资培训
      console.log('点击了查看更多师资培训')
    } else if (ele === 'perform') { // 点击了查看更多艺术团表演
      console.log('点击了查看更多艺术团表演')
    } else if (ele === 'race') { // 点击了查看更多大赛
      console.log('点击了查看更多大赛')
    }
    wx.navigateTo({
      url: '/pages/dynamiclist/dynamiclist?type=' + ele + '&title=' + (title || '')
    })
  },

  modalTap: function (e) {
    let {ele} = e.detail
    if (ele === 'btn_close') { // 关闭按钮
      this.setData({
        'modal.visible': false
      })
    } else if (ele === 'btn_bottom0') { // 确定按钮
      console.log('点击了确定按钮')
      this.setData({
        'modal.visible': false
      })
      wx.navigateTo({
        url: '/pages/apply/apply'
      })
    }
  },

  regulationsEntryTap: function () {
    console.log('点击了查看简章')
  }
})