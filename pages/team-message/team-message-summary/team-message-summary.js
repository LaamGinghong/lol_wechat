// pages/team-message/team-message-summary/team-message-summary.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: Object,
      value: {
        l_summary: ''
      },
      observer: function (newVal, oldVal) {
        if (newVal.l_summary) {
          const text = newVal.l_summary.slice(0, 100);
          this.setData({
            summary: text
          })
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    summary: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showMore() {
      this.triggerEvent('showSummary', true);
    }
  }
})
