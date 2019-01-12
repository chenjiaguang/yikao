// pages/applycontacts/applycontacts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loaded: false,
    loading: false,
    districts: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchContacts()
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
    if (this.data.loading) {
      return false
    }
    this.fetchContacts()
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

  fetchContacts: function () {
    this.setData({
      loading: false
    })
    setTimeout(() => {
      this.setData({
        loading: false,
        loaded: true,
        districts: [
          {
            name: '海口市',
            contacts: [
              {
                id: 1,
                address: '海口市龙昆南路海南师范大学旁边板桥路口海南雅典艺术学校',
                contact: '赵老师',
                phone: ['66713376', '13876988256', '13337536400']
              },
              {
                id: 2,
                address: '海口市大同路8号小提琴世界',
                contact: '林老师',
                phone: ['13389831167']
              },
              {
                id: 3,
                address: '海口市龙昆南路海南师范大学旁边板桥路口海南雅典艺术学校',
                contact: '赵老师',
                phone: ['66713376', '13876988256', '13337536400']
              },
              {
                id: 4,
                address: '海口市大同路8号小提琴世界',
                contact: '林老师',
                phone: ['13389831167']
              },
              {
                id: 5,
                address: '海口市龙昆南路海南师范大学旁边板桥路口海南雅典艺术学校',
                contact: '赵老师',
                phone: ['66713376', '13876988256', '13337536400']
              },
              {
                id: 6,
                address: '海口市大同路8号小提琴世界',
                contact: '林老师',
                phone: ['13389831167']
              },
              {
                id: 7,
                address: '海口市龙昆南路海南师范大学旁边板桥路口海南雅典艺术学校',
                contact: '赵老师',
                phone: ['66713376', '13876988256', '13337536400']
              },
              {
                id: 8,
                address: '海口市大同路8号小提琴世界',
                contact: '林老师',
                phone: ['13389831167']
              },
              {
                id: 9,
                address: '海口市龙昆南路海南师范大学旁边板桥路口海南雅典艺术学校',
                contact: '赵老师',
                phone: ['66713376', '13876988256', '13337536400']
              },
              {
                id: 10,
                address: '海口市大同路8号小提琴世界',
                contact: '林老师',
                phone: ['13389831167']
              }
            ]
          },
          {
            name: '其他市县',
            contacts: [
              {
                id: 1,
                address: '海口市龙昆南路海南师范大学旁边板桥路口海南雅典艺术学校',
                contact: '赵老师',
                phone: ['66713376', '13876988256', '13337536400']
              },
              {
                id: 2,
                address: '海口市大同路8号小提琴世界',
                contact: '林老师',
                phone: ['13389831167']
              },
              {
                id: 3,
                address: '海口市龙昆南路海南师范大学旁边板桥路口海南雅典艺术学校',
                contact: '赵老师',
                phone: ['66713376', '13876988256', '13337536400']
              },
              {
                id: 4,
                address: '海口市大同路8号小提琴世界',
                contact: '林老师',
                phone: ['13389831167']
              },
              {
                id: 5,
                address: '海口市龙昆南路海南师范大学旁边板桥路口海南雅典艺术学校',
                contact: '赵老师',
                phone: ['66713376', '13876988256', '13337536400']
              },
              {
                id: 6,
                address: '海口市大同路8号小提琴世界',
                contact: '林老师',
                phone: ['13389831167']
              },
              {
                id: 7,
                address: '海口市龙昆南路海南师范大学旁边板桥路口海南雅典艺术学校',
                contact: '赵老师',
                phone: ['66713376', '13876988256', '13337536400']
              },
              {
                id: 8,
                address: '海口市大同路8号小提琴世界',
                contact: '林老师',
                phone: ['13389831167']
              },
              {
                id: 9,
                address: '海口市龙昆南路海南师范大学旁边板桥路口海南雅典艺术学校',
                contact: '赵老师',
                phone: ['66713376', '13876988256', '13337536400']
              },
              {
                id: 10,
                address: '海口市大同路8号小提琴世界',
                contact: '林老师',
                phone: ['13389831167']
              }
            ]
          }
        ]
      })
    }, 1000)
  },

  makePhoneCall: function (e) {
    let {phone} = e.currentTarget.dataset
    if (phone) {
      wx.makePhoneCall({
        phoneNumber: phone
      })
    }
  }
})