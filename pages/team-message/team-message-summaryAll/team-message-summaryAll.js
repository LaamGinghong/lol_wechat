// pages/team-message/team-message-summaryAll/team-message-summaryAll.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    msg: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    closeSummary() {
      this.triggerEvent('closeSummary', false);
    }
  }
})
