// pages/index/index.js
import util from '../../utils/util.js'

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
    cates: [
      {
        id: '1',
        name: '考级动态',
        list: [
          {
            id: 11,
            title: '2019年寒假考级',
            content: '最多展示一行，超出截断展示最多展示一行，超出截断展示最多展示1行',
            sign1: '2019-01-07',
            sign2: '中国音乐学院考级委员会海南考区',
            image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819776845,1128606894&fm=26&gp=0.jpg'
          },
          {
            id: 22,
            title: '2019年暑假考级',
            content: '最多展示一行，超出截断展示最多展',
            sign1: '2019-01-07',
            sign2: '中国音乐学院考级委员会海南考区',
            image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819776845,1128606894&fm=26&gp=0.jpg'
          },
          {
            id: 33,
            title: '2019年长期考级',
            content: '最多展示一行，超出截断展示最多展示一行，超出截断展示最多展示1行',
            sign1: '2019-01-07',
            sign2: '中国音乐学院考级委员会海南考区',
            image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819776845,1128606894&fm=26&gp=0.jpg'
          }
        ]
      },
      {
        id: '2',
        name: '师资培训',
        list: [
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
        ]
      },
      {
        id: '3',
        name: '艺术团表演',
        list: [
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
        ]
      },
      {
        id: '4',
        name: '大赛',
        list: [
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
        ]
      },
      {
        id: '5',
        name: '考级教材',
        list: [
          {
            id: 9,
            title: '考级教材111',
            content: '2行的内容是镂空的肌肤脸上的肌肤',
            sign1: '2019-01-07',
            image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819776845,1128606894&fm=26&gp=0.jpg'
          },
          {
            id: 99,
            title: '考级教材22222222222',
            content: '2行的内容是镂空的肌肤脸上的肌肤离开善良的风收到了饭就阿善良分家连撒娇阿了三分景拉丝分',
            sign1: '2019-01-07',
            image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=877288732,706910501&fm=200&gp=0.jpg'
          },
          {
            id: 999,
            title: '考级教材33333',
            content: '2行的内容是镂空的肌肤脸上的肌肤离开善良的风景拉丝分',
            sign1: '2019-01-07',
            image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3390961998,1154407883&fm=200&gp=0.jpg'
          }
        ]
      }
    ],
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
    this.fetchData()
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

  fetchData: function () {
    util.request('/home').then(res => {
      if (res && !res.error) { // 获取数据成功
        let banners = res.data.banner ? res.data.banner.map((item, i) => { return { idx: i, url: item.img, path: item.url}}) : []
        let cates = res.data.list
        this.setData({ banners, cates })
      }
    }).catch(err => {
      console.log('获取数据失败')
    })
  },

  pageEntryTap: function (e) {
    let {ele} = e.currentTarget.dataset
    let unionId = util.checkUnionId()
    if (!unionId) {
      return false
    }
    if (ele === 'enroll') { // 点击了考级报名
      util.checkExaming()
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

  bannerTap: function (e) {
    console.log('bannerTap', e)
    let {item} = e.detail
    if (item && item.path) {
      wx.navigateTo({
        url: '/pages/webviewpage/webviewpage?url=' + item.path
      })
    }
  },

  cardTap: function (e) {
    let {cateid, id} = e.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/dynamicdetail/dynamicdetail?cateid=' + cateid + '&id=' + id
    })
  },

  bookTap: function (e) {
    let {id, title} = e.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/booklist/booklist?id=' + id + '&title=' + (title || '')
    })
  },

  seeMore: function (e) {
    let { cateid, title } = e.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/dynamiclist/dynamiclist?cateid=' + cateid + '&title=' + (title || '')
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
  }
})