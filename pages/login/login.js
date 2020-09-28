// pages/login/login.js
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

  role1Taped:function(){
    app.globalData.userInfo={"userName":"role1","role":1};
    app.switchTabWithRole(1);
  },
  role2Taped:function(){
    app.globalData.userInfo={"userName":"role2","role":2};
    app.switchTabWithRole(2);
  }
})