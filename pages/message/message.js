// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loaded: false,
    loading: false,
    page: {},
    messages: [],
    noMoreText: '已经没有更多了'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchlist(0)
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

  fetchlist: function (pn) {
    this.setData({
      loading: true
    })
    setTimeout(() => {
      this.setData({
        loaded: true,
        loading: false,
        messages: [
          {
            id: 1,
            title: '成绩查询通知',
            time: '昨天 13:26',
            content: '中国音乐学院全国社会艺术水平考试海南考区的考试成绩已公布，点击右下方入口马上查询成绩。',
            entry: {
              query_score: true,
              query_hall: false
            }
          },
          {
            id: 2,
            title: '准考证领取通知',
            time: '01-15 13:04',
            content: '请参加中国音乐学院社会艺术水平考级的考生，社会艺术水平考级的社会艺术水平考级的社会艺术水平考级。',
            entry: {
              query_score: false
            }
          },
          {
            id: 3,
            title: '考场查询通知',
            time: '2018-12-15 13:26',
            content: '中国音乐学院全国社会艺术水平考试海南考区的考试考场安排已公布。点击右下方入口马上查询考场。',
            entry: {
              query_score: false,
              query_hall: true
            }
          },
          {
            id: 4,
            title: '缴费成功通知',
            time: '01-15 13:04',
            content: '您已成功报名中国音乐学院社会艺术水平考级考试！ 关注微信公众号“海南考级中心”及时获取更多考试相关信息',
            entry: {
              query_score: false
            }
          },
          {
            id: 5,
            title: '缴费通知',
            time: '2018-12-15 13:26',
            content: '您提交的中国音乐学院全国社会艺术水平考级报名信息已通过审核，请在规定报名时间内完成缴费！若逾期未缴费，视为放弃报名。',
            entry: {
              query_pay: true
            }
          },
          {
            id: 6,
            title: '审核未通过',
            time: '2018-12-15 13:26',
            content: '您提交的中国音乐学院全国社会艺术水平考级报名信息未通过审核。请上传正确的相关证书，并在规定报名时间内重新进行报名。',
            entry: {
              query_enroll: true
            }
          }
        ],
        page: {
          isend: true,
          pn: 0
        }
      })
    }, 1000)
  },

  boxTap: function (e) {
    console.log('boxTap', e)
  }
})