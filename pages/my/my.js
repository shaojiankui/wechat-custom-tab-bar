// pages/my/my.js
const app  = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
        var selected = 2;
        if(app.globalData.userInfo.role ==2){
          selected = 0;
        }
        this.getTabBar().setData({
          selected: selected
        })
    }
  },
  logout:function(){
    app.globalData.userInfo=null;
    wx.reLaunch({
      url: '/pages/login/login',
    })

  }
})