// pages/rank/table/table.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: Array,
      value: [],
      observer: function(newVal, oldVal) {
        newVal.forEach(item => {
          if (item.g_rank === 1) {
            item['color'] = '#cea04a';
          } else if (item.g_rank === 2) {
            item['color'] = '#cb0a38';
          } else if (item.g_rank === 3) {
            item['color'] = '#2c6db0';
          } else {
            item['color'] = '#444';
          }
        });
        this.setData({
          value: newVal
        })
      }
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
  },
})
