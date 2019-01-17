// pages/apply/apply.js
import util from '../../utils/util.js'
import Mtils from '../../lib/Mtils.js'
import maps from './maps.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nationalitys: maps.nationalitys,
    volks: maps.volks,
    cardtypes: maps.cardtypes,
    majors: maps.majors,
    levels: [],
    years: maps.years,
    months: maps.months,
    editPinyin: false,
    form: {
      avatar: {
        value: '',
        require: true,
        valid: false,
        url: '',
        id: ''
      },
      name: {
        require: true,
        value: '',
        valid: false
      },
      pinyin: {
        require: true,
        value: '',
        valid: false
      },
      gender: {
        require: true,
        value: '',
        valid: false
      },
      birthday: {
        require: true,
        value: '',
        text: '',
        valid: false
      },
      nationality: { // 国籍
        require: true,
        idx: 0,
        value: '1',
        text: '中国',
        valid: true
      },
      volk: { // 民族
        require: true,
        idx: 0,
        value: '1',
        text: '汉族',
        valid: true
      },
      cardtype: { // 证件类型
        require: true,
        idx: 0,
        value: '1',
        text: '身份证',
        valid: true
      },
      cardnumber: { // 证件号码
        require: true,
        value: '',
        valid: false
      },
      phone: {
        require: true,
        value: '',
        valid: false
      },
      major: {
        require: true,
        idx: '',
        value: '',
        text: '',
        valid: false
      },
      level: {
        require: true,
        idx: '',
        value: '',
        text: '',
        valid: false
      },
      continuity: { // 是否连考
        require: false,
        value: '',
        text: '',
        valid: false
      },
      lastgetcertificate: {
        require: true,
        year: {
          require: true,
          idx: '',
          value: '',
          text: '',
          valid: false
        },
        month: {
          require: true,
          idx: '',
          value: '',
          text: '',
          valid: false
        },
        valid: false
      },
      majorCertificate: { // 专业证书
        value: '',
        require: true,
        valid: false,
        url: '',
        id: ''
      },
      basicMusicCertificate: { // 基本乐科证书
        value: '',
        require: true,
        valid: false,
        url: '',
        id: ''
      },
      bent1: { // 曲目1
        require: true,
        value: '',
        valid: false
      },
      bent2: {
        require: true,
        value: '',
        valid: false
      },
      bent3: {
        require: false,
        value: '',
        valid: false
      },
      bent4: {
        require: false,
        value: '',
        valid: false
      },
      bent5: {
        require: false,
        value: '',
        valid: false
      },
      contact: { // 联系人
        require: true,
        value: '',
        valid: false
      },
      phone: { // 联系电话
        require: true,
        value: '',
        valid: false
      },
      fillter: { // 填表人
        require: true,
        value: '',
        valid: false
      },
      teacher: { // 指导老师
        require: true,
        value: '',
        valid: false
      },
      teacherPhone: { // 老师电话
        require: true,
        value: '',
        valid: false
      }
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

  inputChange: function (e) {
    let {ele} = e.currentTarget.dataset
    let {value} = e.detail
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
    } else if (ele === 'pinyin') {
      this.setData({
        'form.pinyin.value': value,
        'form.pinyin.valid': value ? true : false
      })
    } else if (ele === 'cardnumber') {
      this.setData({
        'form.cardnumber.value': value,
        'form.cardnumber.valid': value ? true : false
      })
    } else if (ele === 'phone') {
      this.setData({
        'form.phone.value': value,
        'form.phone.valid': value ? true : false
      })
    } else if (ele === 'bent1' || ele === 'bent2' || ele === 'bent3' || ele === 'bent4' || ele === 'bent5') { // 考试曲目
      let obj = {}
      obj['form[' + ele + ']value'] = value
      obj['form[' + ele + ']valid'] = value ? true : false
      this.setData(obj)
    }
  },

  titleCase: function (str) {
    let subStrArr = str.toLowerCase().split(/\s+/)
    for (let i = 0; i < subStrArr.length; i++) {
      subStrArr[i] = subStrArr[i].slice(0, 1).toUpperCase() + subStrArr[i].slice(1)
    }
    return subStrArr.join(' ')
  },

  changeEditPinyin: function () {
    this.setData({
      editPinyin: !this.data.editPinyin
    })
  },

  genderChange: function (e) {
    console.log('genderChange', e)
    let {value} = e.detail
    this.setData({
      'form.gender.value': value,
      'form.gender.valid': value ? true : false
    })
  },

  pickerChange: function (e) {
    console.log('pickerChange', e)
    let {ele} = e.currentTarget.dataset
    let {value} = e.detail
    if (ele === 'birthday') { // 生日
      this.setData({
        'form.birthday.value': value,
        'form.birthday.text': value,
        'form.birthday.valid': value ? true : false
      })
    } else if (ele === 'nationality') { // 国籍
      let { nationalitys} = this.data
      this.setData({
        'form.nationality.idx': value,
        'form.nationality.value': nationalitys[value].value,
        'form.nationality.text': nationalitys[value].text,
        'form.nationality.valid': nationalitys[value].value ? true : false
      })
    } else if (ele === 'volk') {
      let { volks } = this.data
      this.setData({
        'form.volk.idx': value,
        'form.volk.value': volks[value].value,
        'form.volk.text': volks[value].text,
        'form.volk.valid': volks[value].value ? true : false
      })
    } else if (ele === 'cardtype') {
      let { cardtypes } = this.data
      this.setData({
        'form.cardtype.idx': value,
        'form.cardtype.value': cardtypes[value].value,
        'form.cardtype.text': cardtypes[value].text,
        'form.cardtype.valid': cardtypes[value].value ? true : false
      })
    } else if (ele === 'major') {
      let { majors } = this.data
      this.setData({
        levels: majors[value].levels,
        'form.major.idx': value,
        'form.major.value': majors[value].value,
        'form.major.text': majors[value].text,
        'form.major.valid': majors[value].value ? true : false,
        'form.level.idx': '',
        'form.level.value': '',
        'form.level.text': '',
        'form.level.valid': false
      })
    } else if (ele === 'level') {
      let { levels} = this.data
      if (!levels || !levels[0]) { // 等级信息不存在时
        return false
      }
      this.setData({
        'form.level.idx': value,
        'form.level.value': levels[value].value,
        'form.level.text': levels[value].text,
        'form.level.valid': levels[value].value ? true : false
      })
    } else if (ele === 'lastgetyear') { // 最近一次获得同专业考级证书年份
      let { years } = this.data
      this.setData({
        'form.lastgetcertificate.year.idx': value,
        'form.lastgetcertificate.year.value': years[value].value,
        'form.lastgetcertificate.year.text': years[value].text,
        'form.lastgetcertificate.year.valid': years[value].value ? true : false
      })
    } else if (ele === 'lastgetmonth') { // 最近一次获得同专业考级证书月份
      let { months } = this.data
      this.setData({
        'form.lastgetcertificate.month.idx': value,
        'form.lastgetcertificate.month.value': months[value].value,
        'form.lastgetcertificate.month.text': months[value].text,
        'form.lastgetcertificate.month.valid': months[value].value ? true : false
      })
    }
    
  },

  uploadMajorCertificate: function () {
    console.log('uploadMajorCertificate')
  },

  uploadBasicMusicCertificate: function () {
    console.log('uploadBasicMusicCertificate')
  }
})