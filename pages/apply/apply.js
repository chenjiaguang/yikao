// pages/apply/apply.js
import util from '../../utils/util.js'
import Mtils from '../../lib/Mtils.js'
import maps from './maps.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    exam_id: '',
    nationalitys: [],
    volks: [],
    genderText: {
      1: '男',
      2: '女'
    },
    cardtypes: [],
    majors: [],
    levels: [],
    continuitys: [],
    years: maps.years,
    months: maps.months,
    editPinyin: false,
    form: {
      avatar: {
        value: '',
        required: true,
        valid: false,
        url: '',
        id: '',
        tip: '请上传头像',
        uploading: false,
        uploadingText: ''
      },
      name: {
        required: true,
        value: '',
        valid: false,
        tip: '请填写姓名'
      },
      pinyin: {
        required: true,
        value: '',
        valid: false,
        tip: '请填写拼音或英文'
      },
      gender: {
        required: true,
        value: '',
        valid: false,
        tip: '请选择性别'
      },
      birthday: {
        required: true,
        value: '',
        text: '',
        valid: false,
        tip: '请选择出生日期'
      },
      nationality: { // 国籍
        required: true,
        idx: 0,
        value: '中国',
        text: '中国',
        valid: true,
        tip: '请选择国籍'
      },
      volk: { // 民族
        required: true,
        idx: 0,
        value: '汉族',
        text: '汉族',
        valid: true,
        tip: '请选择民族'
      },
      cardtype: { // 证件类型
        required: true,
        idx: 0,
        value: '身份证',
        text: '身份证',
        valid: true,
        tip: '请选择证件类型'
      },
      cardnumber: { // 证件号码
        required: true,
        value: '',
        valid: false,
        tip: '请填写证件号码'
      },
      phone: {
        required: true,
        value: '',
        valid: false,
        tip: '请填写联系电话'
      },
      major: {
        required: true,
        idx: '',
        value: '',
        text: '',
        valid: false,
        tip: '请选择报考专业'
      },
      level: {
        required: true,
        idx: '',
        value: '',
        text: '',
        valid: false,
        tip: '请选择报考级别'
      },
      continuity: { // 是否连考
        required: false,
        idx: '',
        value: '',
        text: '',
        valid: false,
        tip: '请选择是否连考'
      },
      lastgetcertificate: {
        required: true,
        year: {
          required: true,
          idx: '',
          value: '',
          text: '',
          valid: false,
          tip: '请选择年份'
        },
        month: {
          required: true,
          idx: '',
          value: '',
          text: '',
          valid: false,
          tip: '请选择月份'
        }
      },
      majorcertificate: { // 专业证书
        value: '',
        required: false,
        valid: false,
        url: '',
        id: '',
        tip: '请上传专业证书',
        uploading: false,
        uploadingText: ''
      },
      basicmusiccertificate: { // 基本乐科证书
        value: '',
        required: false,
        valid: false,
        url: '',
        id: '',
        tip: '请上传基本乐科证书',
        uploading: false,
        uploadingText: ''
      },
      bent1: { // 曲目1
        required: true,
        value: '',
        valid: false,
        tip: '请填写考试曲目1'
      },
      bent2: {
        required: true,
        value: '',
        valid: false,
        tip: '请填写考试曲目2'
      },
      bent3: {
        required: false,
        value: '',
        valid: false,
        tip: '请填写考试曲目3'
      },
      bent4: {
        required: false,
        value: '',
        valid: false,
        tip: '请填写考试曲目4'
      },
      bent5: {
        required: false,
        value: '',
        valid: false,
        tip: '请填写考试曲目5'
      },
      // contact: { // 联系人
      //   required: true,
      //   value: '',
      //   valid: false,
      //   tip: '请填写联系人姓名'
      // },
      // contactphone: { // 联系电话
      //   required: true,
      //   value: '',
      //   valid: false,
      //   tip: '请填写联系人电话'
      // },
      fillter: { // 填表人
        required: true,
        value: '',
        valid: false,
        tip: '请填写填表人姓名'
      },
      teacher: { // 指导老师
        required: true,
        value: '',
        valid: false,
        tip: '请填写老师姓名'
      },
      teacherphone: { // 老师电话
        required: true,
        value: '',
        valid: false,
        tip: '请填写老师电话'
      }
    },
    submitting: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getForm()
    this.getOptions()
    this.setData({
      exam_id: options.examId
    })
    console.log('exam_id', options.examId)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  inputChange: function(e) {
    let {
      ele
    } = e.currentTarget.dataset
    let {
      value
    } = e.detail
    console.log(ele, value)
    if (ele === 'name') { // 姓名
      let pinyin = ''
      if (value && Mtils.validation.isChinese(value)) { // 全中文
        pinyin = Mtils.utils.makePy(e.detail.value)
        if (value && value.length) {
          let newStr = ''
          for (let i = 0; i < value.length; i++) {
            newStr += ((i === 0) ? value[i] : (' ' + value[i]))
          }
          pinyin = Mtils.utils.makePy(newStr)
        }
      } else { // 非全中文
        pinyin = this.titleCase(value)
      }
      console.log('pinyin', pinyin)
      this.setData({
        'form.name.value': value,
        'form.name.valid': value ? true : false,
        'form.pinyin.value': pinyin,
        'form.pinyin.valid': pinyin ? true : false
      })
    } else if (ele === 'pinyin' || ele === 'cardnumber' || ele === 'phone' || ele === 'bent1' || ele === 'bent2' || ele === 'bent3' || ele === 'bent4' || ele === 'bent5' || ele === 'contact' || ele === 'contactphone' || ele === 'fillter' || ele === 'teacher' || ele === 'teacherphone') { // 拼音、证件号码、手机号、考试曲目、联系人、联系人电话、填表人、指导老师、指导老师电话
      let obj = {}
      obj['form.' + ele + '.value'] = value
      obj['form.' + ele + '.valid'] = value ? true : false
      this.setData(obj)
    }
  },

  titleCase: function(str) {
    let subStrArr = str.toLowerCase().split(/\s+/)
    for (let i = 0; i < subStrArr.length; i++) {
      subStrArr[i] = subStrArr[i].slice(0, 1).toUpperCase() + subStrArr[i].slice(1)
    }
    return subStrArr.join(' ')
  },

  changeEditPinyin: function() {
    this.setData({
      editPinyin: !this.data.editPinyin
    })
  },

  genderChange: function(e) {
    console.log('genderChange', e)
    let {
      value
    } = e.detail
    this.setData({
      'form.gender.value': value,
      'form.gender.valid': value ? true : false
    })
  },

  pickerChange: function(e) {
    console.log('pickerChange', e)
    let {
      ele
    } = e.currentTarget.dataset
    let {
      value
    } = e.detail
    if (ele === 'birthday') { // 生日
      this.setData({
        'form.birthday.value': value,
        'form.birthday.text': value,
        'form.birthday.valid': value ? true : false
      })
    } else if (ele === 'nationality') { // 国籍
      let {
        nationalitys
      } = this.data
      this.setData({
        'form.nationality.idx': value,
        'form.nationality.value': nationalitys[value],
        'form.nationality.text': nationalitys[value],
        'form.nationality.valid': nationalitys[value] ? true : false
      })
    } else if (ele === 'volk') { // 民族
      let {
        volks
      } = this.data
      this.setData({
        'form.volk.idx': value,
        'form.volk.value': volks[value],
        'form.volk.text': volks[value],
        'form.volk.valid': volks[value] ? true : false
      })
    } else if (ele === 'cardtype') { // 证件类型
      let {
        cardtypes
      } = this.data
      this.setData({
        'form.cardtype.idx': value,
        'form.cardtype.value': cardtypes[value],
        'form.cardtype.text': cardtypes[value],
        'form.cardtype.valid': cardtypes[value] ? true : false
      })
    } else if (ele === 'major') { // 报考专业
      let {
        majors
      } = this.data
      let levels = majors[value].levels
      let continuitys = []
      this.setData({
        levels: levels,
        continuitys,
        'form.major.idx': value,
        'form.major.value': majors[value].value,
        'form.major.text': majors[value].text,
        'form.major.valid': majors[value].value ? true : false,
        'form.level.idx': '',
        'form.level.value': '',
        'form.level.text': '',
        'form.level.valid': false,
        'form.continuity.idx': '',
        'form.continuity.value': '',
        'form.continuity.text': '',
        'form.continuity.valid': false,
        'form.majorcertificate.required': false,
        'form.basicmusiccertificate.required': false
      })
    } else if (ele === 'level') { // 报考级别
      let {
        levels
      } = this.data
      let major = this.data.form.major
      let continuitys = []
      if (major.text === '基本乐科' && parseInt(value) !== (levels.length - 1)) { // 判断是否基本乐科、且不是最后一级
        continuitys = [{
            value: '0',
            text: '否'
          },
          {
            value: levels[parseInt(value) + 1],
            text: levels[parseInt(value) + 1]
          }
        ]
      }
      let needMajorCer = false
      let needBasicMusicCer = false
      if (major.value !== '基本乐科' && parseInt(value) > 8) { // 报考演唱演奏10级，需上传本考级机构同专业9级证书；报考表演文凭级，需上传本考级机构同专业10级证书
        needMajorCer = true
      }
      if ((major.value !== '基本乐科' && parseInt(value) > 1) || (major.value === '基本乐科' && parseInt(value) > 0)) { // 非基本乐科3级及以上、基本乐科2级及以上
        needBasicMusicCer = true
      }
      this.setData({
        continuitys,
        'form.continuity.required': (continuitys && continuitys[0]) ? true : false,
        'form.continuity.idx': '',
        'form.continuity.value': '',
        'form.continuity.text': '',
        'form.continuity.valid': false,
        'form.level.idx': value,
        'form.level.value': levels[value],
        'form.level.text': levels[value],
        'form.level.valid': levels[value] ? true : false,
        'form.majorcertificate.required': needMajorCer,
        'form.basicmusiccertificate.required': needBasicMusicCer
      })
    } else if (ele === 'continuity') {
      let {
        continuitys
      } = this.data
      this.setData({
        'form.continuity.idx': value,
        'form.continuity.value': continuitys[value].value,
        'form.continuity.text': continuitys[value].text,
        'form.continuity.valid': continuitys[value].value ? true : false
      })
    } else if (ele === 'lastgetyear') { // 最近一次获得同专业考级证书年份
      let {
        years
      } = this.data
      this.setData({
        'form.lastgetcertificate.year.idx': value,
        'form.lastgetcertificate.year.value': years[value].value,
        'form.lastgetcertificate.year.text': years[value].text,
        'form.lastgetcertificate.year.valid': years[value].value ? true : false
      })
    } else if (ele === 'lastgetmonth') { // 最近一次获得同专业考级证书月份
      let {
        months
      } = this.data
      this.setData({
        'form.lastgetcertificate.month.idx': value,
        'form.lastgetcertificate.month.value': months[value].value,
        'form.lastgetcertificate.month.text': months[value].text,
        'form.lastgetcertificate.month.valid': months[value].value ? true : false
      })
    }

  },

  scrollToBlock: function(id) {
    const query = wx.createSelectorQuery()
    let q = '#' + id
    query.select(q).boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function(res) {
      const top1 = res[0].top // q节点的上边界坐标
      const top2 = res[1].scrollTop // 显示区域的竖直滚动位置
      let scrollTop = top1 + top2
      wx.pageScrollTo({
        scrollTop
      })
    })
  },

  getFormData: function() {
    let form = JSON.parse(JSON.stringify(this.data.form))
    let valid = true
    for (let key in form) {
      console.log('key', key)
      if (key === 'lastgetcertificate') { // 最近一次获得同专业考级证书
        if (!form.lastgetcertificate.year.valid) {
          this.scrollToBlock(key)
          if (form.lastgetcertificate.year.tip) {
            wx.showToast({
              title: form.lastgetcertificate.year.tip,
              icon: 'none'
            })
          }
          valid = false
          break
        } else if (!form.lastgetcertificate.month.valid) {
          this.scrollToBlock(key)
          if (form.lastgetcertificate.month.tip) {
            wx.showToast({
              title: form.lastgetcertificate.month.tip,
              icon: 'none'
            })
          }
          valid = false
          break
        }
      } else {
        if (form[key].required && !form[key].valid) { // 必填且无效
          this.scrollToBlock(key)
          if (form[key].tip) {
            wx.showToast({
              title: form[key].tip,
              icon: 'none'
            })
          }
          valid = false
          break
        }
      }
    }
    if (valid) {
      let formData = {}
      formData.exam_id = this.data.exam_id
      formData.picture_id = this.data.form.avatar.id
      formData.name = this.data.form.name.value
      formData.pinyin = this.data.form.pinyin.value
      formData.sex = this.data.genderText[this.data.form.gender.value]
      formData.birth = this.data.form.birthday.value
      formData.nationality = this.data.form.nationality.value
      formData.nation = this.data.form.volk.value
      formData.id_type = this.data.form.cardtype.value
      formData.id_number = this.data.form.cardnumber.value
      formData.phone = this.data.form.phone.value
      formData.domain = this.data.form.major.value
      formData.level = this.data.form.level.value
      formData.continuous_level = this.data.form.continuity.text
      formData.lately_credential = this.data.form.lastgetcertificate.year.value + ',' + this.data.form.lastgetcertificate.month.value + ',' + this.data.form.major.value + this.data.form.level.value.replace('级', '')
      formData.pro_certificate_id = this.data.form.majorcertificate.id
      formData.basic_certificate_id = this.data.form.basicmusiccertificate.id
      formData.track_one = this.data.form.bent1.value
      formData.track_two = this.data.form.bent2.value
      formData.track_three = this.data.form.bent3.value
      formData.track_four = this.data.form.bent4.value
      formData.track_five = this.data.form.bent5.value
      formData.preparer = this.data.form.fillter.value
      formData.adviser = this.data.form.teacher.value
      formData.adviser_phone = this.data.form.teacherphone.value
      return formData
    } else {
      return valid
    }
  },

  submitSuccess: function (enrollid, code) {
    // if (code.toString() === '305') { // 跳转缴费页面
    //   wx.redirectTo({
    //     url: '/pages/pay/pay?id=' + enrollid,
    //   })
    // } else if (code.toString() === '306') { // 跳转提交成功页面（需审核）
    //   wx.redirectTo({
    //     url: '/pages/successpage/successpage?type=2&id=' + enrollid,
    //   })
    // }
    wx.removeStorageSync('applyForm')
    wx.removeStorageSync('applyFormOptions')
    wx.redirectTo({
      url: '/pages/successpage/successpage?type=2&id=' + enrollid,
    })
  },

  saveTap: function() {
    console.log('点击了保存')
    this.saveForm()
  },

  saveForm: function() {
    let {
      form,
      levels,
      continuitys
    } = this.data
    let _form = JSON.parse(JSON.stringify(form))
    let _levels = JSON.parse(JSON.stringify(levels))
    let _continuitys = JSON.parse(JSON.stringify(continuitys))
    let applyForm = {}
    for (let key1 in _form) {
      if (key1 === 'avatar' || key1 === 'majorcertificate' || key1 === 'basicmusiccertificate' || key1 === 'major' || key1 === 'level' || key1 === 'lastgetcertificate' || key1 === 'continuity') {
        continue
      }
      applyForm[key1] = {}
      for (let key2 in _form[key1]) {
        if (key2 === 'required' || key2 === 'valid' || key2 === 'value' || key2 === 'idx' || key2 === 'id' || key2 === 'text' || key2 === 'url' || key2 === 'month' || key2 === 'year') {
          applyForm[key1][key2] = _form[key1][key2]
        }
      }
    }
    applyForm = JSON.stringify(applyForm)
    wx.setStorageSync('applyForm', applyForm)
    wx.setStorageSync('applyFormOptions', JSON.stringify({
      levels: _levels,
      continuitys: _continuitys
    }))
    wx.showToast({
      title: '保存成功',
      icon: 'none'
    })
  },

  getForm: function() {
    let applyForm = wx.getStorageSync('applyForm') ? JSON.parse(wx.getStorageSync('applyForm')) : {}
    let applyFormOptions = wx.getStorageSync('applyFormOptions') ? JSON.parse(wx.getStorageSync('applyFormOptions')) : {}
    let {
      form
    } = this.data
    let _form = JSON.parse(JSON.stringify(form))
    let {
      levels,
      continuitys
    } = applyFormOptions
    let newForm = {}
    for (let key in _form) {
      newForm[key] = Object.assign({}, _form[key], applyForm[key])
    }
    console.log('getForm', _form, newForm)
    if (applyForm) {
      this.setData({
        form: newForm,
        levels: levels || [],
        continuitys: continuitys || []
      })
    }
  },

  submitTap: function() {
    console.log('点击了提交')
    let formData = this.getFormData()
    if (formData) {
      if (this.data.submitting) { // 正在提交表单
        return false
      }
      this.setData({
        submitting: true
      })
      util.request('/apply/add', formData).then(res => {
        this.setData({
          submitting: false
        })
        console.log('/apply/add', res)
        if (res && res.data && !res.error) { // 提交表单成功
          this.submitSuccess(formData.exam_id)
        }
      }).catch(err => {
        this.setState({
          submitting: false
        })
      })
    }
  },

  uploadTask: { // 上传图片队列
    avatar: null,
    majorcertificate: null,
    basicmusiccertificate: null
  },

  chooseImage: function(e) {
    let {
      ele
    } = e.currentTarget.dataset
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed', 'original'],
      sourceType: ['album', 'camera'],
      success: res => {
        console.log('tempFilePaths', res.tempFilePaths[0])
        if (res && res.tempFilePaths && res.tempFilePaths[0]) {
          let obj = {}
          obj['form.' + ele + '.url'] = res.tempFilePaths[0]
          obj['form.' + ele + '.uploading'] = true
          obj['form.' + ele + '.uploadingText'] = '正在上传...'
          this.setData(obj)
          const app = getApp()
          if (this.uploadTask[ele] && this.uploadTask[ele].abort) { // 如果有正在上传的队列，则取消正在上传的队列，然后开始新的队列
            this.uploadTask[ele].abort()
          }
          console.log('res.tempFilePaths[0]', res)
          this.uploadTask[ele] = wx.uploadFile({
            url: app.config.baseUrl + app.config.apiVersion + '/upload',
            filePath: res.tempFilePaths[0],
            name: 'image',
            header: {
              "content-type": 'multipart/form-data',
              "token": wx.getStorageSync('token')
            },
            formData: {
              "token": wx.getStorageSync('token'),
              "url": true
            },
            success: res => {
              let uploadRes = JSON.parse(res.data)
              let _obj = {}
              if (uploadRes && uploadRes.msg && uploadRes.error) {
                wx.showToast({
                  title: res.msg,
                  icon: 'none'
                })
              }
              if (uploadRes && uploadRes.data && !uploadRes.error) {
                let {
                  url,
                  id
                } = uploadRes.data
                _obj['form.' + ele + '.id'] = id
                _obj['form.' + ele + '.originUrl'] = url
                _obj['form.' + ele + '.valid'] = true
                _obj['form.' + ele + '.uploadingText'] = ''
              } else {
                _obj['form.' + ele + '.id'] = ''
                _obj['form.' + ele + '.originUrl'] = ''
                _obj['form.' + ele + '.valid'] = false
                _obj['form.' + ele + '.uploadingText'] = '上传失败!'
              }
              this.setData(_obj)
            },
            fail: res => {
              console.log('上传失败', res)
              let _obj = {}
              _obj['form.' + ele + '.id'] = ''
              _obj['form.' + ele + '.originUrl'] = ''
              _obj['form.' + ele + '.valid'] = false
              _obj['form.' + ele + '.uploadingText'] = '上传失败!'
              this.setData(_obj)
            },
            complete: res => {
              this.uploadTask[ele] = null
              let obj = {}
              obj['form.' + ele + '.uploading'] = false
              this.setData(obj)
            }
          })
        }
      }
    })
  },
  getOptions: function() {
    util.request('/option').then(res => {
      console.log('getOptions', res)
      if (!res.error && res.data) { // 获取信息成功
        let {
          nationality,
          nation,
          major,
          certificate
        } = res.data
        let majors = []
        for (let mj in major) {
          majors.push({
            value: mj,
            text: mj,
            levels: major[mj]
          })
        }
        let formNationality = {
          required: true,
          idx: 0,
          value: nationality[0],
          text: nationality[0],
          valid: true,
          tip: '请选择国籍'
        }
        let formVolk = {
          required: true,
          idx: 0,
          value: nation[0],
          text: nation[0],
          valid: true,
          tip: '请选择民族'
        }
        let formCardtype = { // 证件类型
          required: true,
          idx: 0,
          value: certificate[0],
          text: certificate[0],
          valid: true,
          tip: '请选择证件类型'
        }
        this.setData({
          nationalitys: nationality,
          volks: nation,
          majors: majors,
          cardtypes: certificate,
          'form.nationality': formNationality,
          'form.volk': formVolk,
          'form.cardtype': formCardtype
        })
      }
    }).catch(err => {

    })
  }
})