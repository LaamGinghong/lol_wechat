import { url } from '../../config.js';

// pages/team/team.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: [],
    url: url
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const vm = this;
    wx.request({
      url: url + 'team',
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        vm.setData({
          msg: res.data.data
        })
      },
      fail: err => {
        console.error(err);
      },
      complete: () => {
        console.log('数据加载完成！');
      }
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

  }
})