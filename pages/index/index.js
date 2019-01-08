//index.js
import util from '../../utils/util.js'

//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    extraData: {
      value: 222
    },
    color: 'transparent',
    banners: [
      {
        key: 1,
        url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1451698316,2699404580&fm=26&gp=0.jpg',
        title: 'title1111111'
      },
      {
        key: 2,
        url: 'https://f10.baidu.com/it/u=3087422712,1174175413&fm=72',
        title: 'title222222222三菱电机法律考试发逻辑啊师傅阿三分阿水煎服 阿善良flash阿里斯顿家阿拉斯加 奥克兰市大发牢骚阿善良分阿三阿斯顿拉风阿善良'
      },
      {
        key: 3,
        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=375591862,702210092&fm=200&gp=0.jpg',
        title: 'title3333333'
      },
      {
        key: 4,
        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2904590514,297420156&fm=26&gp=0.jpg'
      },
      {
        key: 5,
        url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819776845,1128606894&fm=26&gp=0.jpg',
        title: 'title5555'
      }
    ],
    tabs: [
      {
        title: 'tab1',
        content: '阿市领导家是阿三放大水电费家阿斯顿发阿洛杉矶发阿三阿斯顿发阿三分阿斯顿发送发烧的发烧发水电费阿斯顿发水电费了阿是的发送到发送到发送到发送短发短发阿三的发生地阿阿三发放阿市领导家是阿三放大水电费家阿斯顿发阿洛杉矶发阿三阿斯顿发阿三分阿斯顿发送发烧的发烧发水电费阿斯顿发水电费了阿是的发送到发送到发送到发送短发短发阿三的发生地阿阿三发放阿斯顿发大发阿阿斯顿放阿斯顿发阿斯顿发阿斯顿发几阿斯顿了风景阿加阿斯顿了空间发生阿市领导家是阿三放大水电费家阿斯顿发阿洛杉矶发阿三阿斯顿发阿三分阿斯顿发送发烧的发烧发水电费阿斯顿发水电费了阿是的发送到发送到发送到发送短发短发阿三的发生地阿阿三发放阿斯顿发大发阿阿斯顿放阿斯顿发阿斯顿发阿斯顿发几阿斯顿了风景阿加阿斯顿了空间发生阿市领导家是阿三放大水电费家阿斯顿发阿洛杉矶发阿三阿斯顿发阿三分阿斯顿发送发烧的发烧发水电费阿斯顿发水电费了阿是的发送到发送到发送到发送短发短发阿三的发生地阿阿三发放阿斯顿发大发阿阿斯顿放阿斯顿发阿斯顿发阿斯顿发几阿斯顿了风景阿加阿斯顿了空间发生阿市领导家是阿三放大水电费家阿斯顿发阿洛杉矶发阿三阿斯顿发阿三分阿斯顿发送发烧的发烧发水电费阿斯顿发水电费了阿是的发送到发送到发送到发送短发短发阿三的发生地阿阿三发放阿斯顿发大发阿阿斯顿放阿斯顿发阿斯顿发阿斯顿发几阿斯顿了风景阿加阿斯顿了空间发生阿市领导家是阿三放大水电费家阿斯顿发阿洛杉矶发阿三阿斯顿发阿三分阿斯顿发送发烧的发烧发水电费阿斯顿发水电费了阿是的发送到发送到发送到发送短发短发阿三的发生地阿阿三发放阿斯顿发大发阿阿斯顿放阿斯顿发阿斯顿发阿斯顿发几阿斯顿了风景阿加阿斯顿了空间发生阿市领导家是阿三放大水电费家阿斯顿发阿洛杉矶发阿三阿斯顿发阿三分阿斯顿发送发烧的发烧发水电费阿斯顿发水电费了阿是的发送到发送到发送到发送短发短发阿三的发生地阿阿三发放阿斯顿发大发阿阿斯顿放阿斯顿发阿斯顿发阿斯顿发几阿斯顿了风景阿加阿斯顿了空间发生阿市领导家是阿三放大水电费家阿斯顿发阿洛杉矶发阿三阿斯顿发阿三分阿斯顿发送发烧的发烧发水电费阿斯顿发水电费了阿是的发送到发送到发送到发送短发短发阿三的发生地阿阿三发放阿斯顿发大发阿阿斯顿放阿斯顿发阿斯顿发阿斯顿发几阿斯顿了风景阿加阿斯顿了空间发生阿市领导家是阿三放大水电费家阿斯顿发阿洛杉矶发阿三阿斯顿发阿三分阿斯顿发送发烧的发烧发水电费阿斯顿发水电费了阿是的发送到发送到发送到发送短发短发阿三的发生地阿阿三发放阿斯顿发大发阿阿斯顿放阿斯顿发阿斯顿发阿斯顿发几阿斯顿了风景阿加阿斯顿了空间发生阿市领导家是阿三放大水电费家阿斯顿发阿洛杉矶发阿三阿斯顿发阿三分阿斯顿发送发烧的发烧发水电费阿斯顿发水电费了阿是的发送到发送到发送到发送短发短发阿三的发生地阿阿三发放阿斯顿发大发阿阿斯顿放阿斯顿发阿斯顿发阿斯顿发几阿斯顿了风景阿加阿斯顿了空间发生阿斯顿发大发阿阿斯顿放阿斯顿发阿斯顿发阿斯顿发几阿斯顿了风景阿加阿斯顿了空间发生'
      },
      {
        title: 'tab2',
        content: 'content2222222'
      },
      {
        title: 'tab3',
        content: 'content333333333'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getPhone: function (e) {
    console.log('getPhone', e)
  },
  onShareAppMessage: function (e) {
    console.log('onShareAppMessage')
  },
  btnTap: function (e) {
    console.log('btnTap', e)
  },
  entranceTap: function (e) {
    console.log('entranceTap', e)
  },
  tabChange: function (e) {
    console.log('tabChange', e)
  },
  fetchLxMerchant: function (e) { // 获取乐享商家
    console.log('fetchLxMerchant')
    let { idx, pn: page } = e.detail
    let rData = {
      type: 0,
      page,
      limit: 20
    }
    let _obj = {}
    _obj['tabs[' + idx + '].loading'] = true
    this.setData(_obj)
    util.request('/shop/list', rData).then(res => {
      console.log('乐享商家', res)
      if (res && res.data && !res.error) { // 成功获取数据
        let { list: _list } = this.data.tabs[idx]
        let { list, page } = res.data
        let _obj = {}
        _obj['tabs[' + idx + '].loaded'] = true
        _obj['tabs[' + idx + '].page'] = page
        if (page && page.pn && page.pn.toString() !== '0') { // 不是第一页
          console.log('不是第一页')
          let len = (_list && _list.length) ? _list.length : 0
          if (list && list.length) {
            list.forEach((item, i) => {
              _obj['tabs[' + idx + '].list[' + (len + i) + ']'] = item
            })
          }
        } else { // 第一页
          console.log('第一页')
          _obj['tabs[' + idx + '].list'] = list
        }
        this.setData(_obj)
      }
    }).catch(err => {
      console.log('获取数据失败', err)
    }).finally(res => {
      if (!page || page === '0') { // 第一页
        wx.stopPullDownRefresh()
      }
      let _obj = {}
      _obj['tabs[' + idx + '].loading'] = false
      this.setData({
        loadingIndexMerchants: false
      })
    })
  }
})
