//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
  
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
    this.getTabBar().setData({
          selected: 0
        })
    }
  },

  
})
