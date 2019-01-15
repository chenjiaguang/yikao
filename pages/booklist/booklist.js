// pages/booklist/booklist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loaded: false,
    loading: false,
    page: {},
    books: [],
    noMoreText: '已经没有更多了'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {id, title} = options
    if (title) {
      wx.setNavigationBarTitle({title})
    }
    this.fetchlist(id, 0)
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

  fetchlist: function (id, pn) {
    this.setData({
      loading: true
    })
    setTimeout(() => {
      if (id.toString() === '1') { // 民族管弦乐器
        this.setData({
          loaded: true,
          loading: false,
          books: [
            {
              id: 1,
              name: '竹笛考级教材第二套（一至十级）',
              p_house: '中国青年出版社',
              image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1598207089,2153621196&fm=26&gp=0.jpg'
            },
            {
              id: 2,
              name: '竹笛考级教材第二套（一至十级）',
              p_house: '中国青年出版社',
              image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=259722020,584703296&fm=26&gp=0.jpg'
            },
            {
              id: 3,
              name: '竹笛考级教材第二套（一至十级）',
              p_house: '中国青年出版社',
              image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=991253211,1347629797&fm=26&gp=0.jpg'
            },
            {
              id: 4,
              name: '竹笛考级教材第二套（一至十级）',
              p_house: '中国青年出版社',
              image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2292207363,2248939181&fm=26&gp=0.jpg'
            },
            {
              id: 5,
              name: '竹笛考级教材第二套（一至十级）',
              p_house: '中国青年出版社',
              image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1700213250,546624161&fm=26&gp=0.jpg'
            }
          ],
          page: {
            isend: true,
            pn: 0
          }
        })
      } else if (id.toString() === '2') { // 西洋管弦乐器
        this.setData({
          loaded: true,
          loading: false,
          books: [
            {
              id: 1,
              title: '西洋管弦1111',
              p_house: '中国青年出版社',
              image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1598207089,2153621196&fm=26&gp=0.jpg'
            },
            {
              id: 2,
              title: '西洋管弦222222',
              p_house: '中国青年出版社',
              image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=259722020,584703296&fm=26&gp=0.jpg'
            },
            {
              id: 3,
              title: '西洋管弦333333333',
              p_house: '中国青年出版社',
              image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2292207363,2248939181&fm=26&gp=0.jpg'
            }
          ],
          page: {
            isend: true,
            pn: 0
          }
        })
      } else if (id.toString() === '3') { // 键盘乐器
        this.setData({
          loaded: true,
          loading: false,
          books: [
            {
              id: 6,
              title: '键盘乐器1111',
              p_house: '中国青年出版社',
              image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2292207363,2248939181&fm=26&gp=0.jpg'
            },
            {
              id: 7,
              title: '键盘乐器22222',
              p_house: '中国青年出版社',
              image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1598207089,2153621196&fm=26&gp=0.jpg'
            },
            {
              id: 8,
              title: '键盘乐器33333',
              p_house: '中国青年出版社',
              image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=259722020,584703296&fm=26&gp=0.jpg'
            }
          ],
          page: {
            isend: true,
            pn: 0
          }
        })
      } else if (id.toString() === '4') { // 声乐
        this.setData({
          loaded: true,
          loading: false,
          books: [
            {
              id: 9,
              name: '声乐声乐声乐11111声乐声乐声乐11111声乐声乐声乐11111',
              p_house: '中国青年出版社上岛咖啡阿斯顿了风景阿市中国青年出版社上岛咖啡阿斯顿了风景阿市领导发的sf领导发的sf',
              image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=259722020,584703296&fm=26&gp=0.jpg'
            },
            {
              id: 99,
              name: '声乐声乐声乐2222',
              p_house: '中国青年出版社',
              image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=259722020,584703296&fm=26&gp=0.jpg'
            },
            {
              id: 999,
              name: '声乐声乐声乐3',
              p_house: '中国青年出版社速度快结束了对方sadly阿善良f',
              image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2292207363,2248939181&fm=26&gp=0.jpg'
            }
          ],
          page: {
            isend: true,
            pn: 0
          }
        })
      } else if (id.toString() === '5') { // 基本乐科
        this.setData({
          loaded: true,
          loading: false,
          books: [
            {
              id: 9,
              title: '基本乐科11111',
              p_house: '中国青年出版社',
              image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2292207363,2248939181&fm=26&gp=0.jpg'
            },
            {
              id: 99,
              title: '基本乐科222222',
              p_house: '中国青年出版社',
              image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2292207363,2248939181&fm=26&gp=0.jpg'
            },
            {
              id: 999,
              title: '基本乐科33333',
              p_house: '中国青年出版社',
              image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2292207363,2248939181&fm=26&gp=0.jpg'
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
})