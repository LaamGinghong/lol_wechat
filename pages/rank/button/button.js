// pages/rank/button/button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isClicked: {
      west: false,
      east: true
    },
    left: 'none'
  },
  /**
   * 组件的方法列表
   */
  methods: {
    clickBtn(e) {
      if (e.target.dataset.area == 'east') {
        this.setData({
          isClicked: {
            west: false,
            east: true
          },
          left: 'lineEast .5s'
        })
        this.triggerEvent('changeArea', 'east');
      } else {
        this.setData({
          isClicked: {
            west: true,
            east: false
          },
          left: 'lineWest .5s;'
        })
        this.triggerEvent('changeArea', 'west');
      }
    }
  }
})
