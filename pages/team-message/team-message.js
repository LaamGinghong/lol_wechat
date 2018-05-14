import { url } from '../../config.js';

// pages/team-message/team-message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    team_details: {},
    show: false,
    team_members: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
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
    const vm = this;
    wx.request({
      url: url + 'teamdetails?team_id=' + vm.data.id,
      success: res => {
        res.data.data[0]['url'] = url + 'static/' + res.data.data[0]['l_shortname'] + '/' + res.data.data[0]['l_shortname'] + '.png';
        vm.setData({
          team_details: res.data.data[0]
        });
      },
      fail: err => {
        console.error(err);
      },
      complete: () => {
        console.log('数据加载成功！');
      }
    });
    wx.request({
      url: url + 'teammembers?team_id=' + vm.data.id,
      success: res => {
        res.data.data.forEach(item => {
          item.p_image = url + item.p_image
        });
        vm.setData({
          team_members: res.data.data
        })
      },
      fail: err => {
        console.error(err);
      },
      complete: () => {
        console.log('数据加载成功！');
      }
    })
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

  showSummary(e) {
    this.setData({
      show: e.detail
    })
  },

  closeSummary(e) {
    this.setData({
      show: e.detail
    })
  }
})