// components/starBox/starBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score: {
      type: Number,
      value: 0
    },
    size: {
      type: Number,
      value: 24
    },
    showScoreText: {
      type: Boolean,
      value: true
    },
    color: { // 星星及字体颜色
      type: String,
      value: '#FFC700'
    },
    startColor: { // 星星渐变（自上而下）初始颜色
      type: String,
      value: ''
    },
    endColor: { // 星星渐变（自上而下）结束颜色
      type: String,
      value: ''
    },
    emptyColor: {
      type: String,
      value: '#D7D7D7'
    },
    maxScore: {
      type: Number,
      value: 5
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    stars: [],
    scoreText: ''
  },

  ready: function () {
    const { maxScore, score} = this.data
    let stars = []
    const scoreText = score.toFixed(1)
    let fullLen = parseInt(score)
    let decimal = score - fullLen
    for (let i = 0; i < maxScore; i++) {
      if (i < fullLen) {
        stars.push({key: i, rate: 1})
      } else if (i === fullLen) {
        stars.push({ key: i, rate: decimal })
      } else {
        stars.push({ key: i, rate: 0 })
      }
    }
    this.setData({
      stars,
      scoreText
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
