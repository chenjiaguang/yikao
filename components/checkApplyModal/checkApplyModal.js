// components/checkApplyModal/checkApplyModal.js
import util from '../../utils/util.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    visible: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    modal: {
      is_exam: false,
      exam:{},
      url: ''
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleShow: function () {
      util.request('/exam').then(res => {
        console.log('check', res)
        if (!res.error && res.data) { // 获取信息成功
          let { is_exam, exam, url} = res.data
          this.setData({
            modal: {
              is_exam: is_exam,
              exam,
              url
            }
          })
        } else {
          this.setData({
            modal: {
              is_exam: false
            }
          })
        }
        if (res.error) {
          if (res.msg) {
            wx.showToast({
              title: msg,
              icon: 'none'
            })
          }
        }
      }).catch(err => {
        this.setData({
          modal: {
            is_exam: false
          }
        })
      })
    },
    handleHide: function () {
      this.setData({
        modal: {
          is_exam: false
        }
      })
    },
    modalTap: function (e) {
      console.log('modalTap', e)
      let { ele } = e.detail
      if (ele === 'btn_close') { // 关闭按钮
        this.setData({
          'modal.is_exam': false
        })
      } else if (ele === 'btn_bottom0') { // 确定按钮
        console.log('点击了确定按钮')
        this.setData({
          'modal.is_exam': false
        })
        if (this.data.modal.exam && this.data.modal.exam.id) {
          wx.navigateTo({
            url: '/pages/apply/apply?examId=' + this.data.modal.exam.id
          })
        }
      }
    },
    regulationsEntryTap: function () {
      console.log('点击了查看简章')
      let {url} = this.data.modal
      if (url) {
        this.setData({
          'modal.is_exam': false
        })
        wx.navigateTo({
          url: '/pages/dynamicdetail/dynamicdetail?weburl=' + url
        })
      }
    }
  }
})