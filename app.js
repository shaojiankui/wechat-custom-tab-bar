//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)


    if (this.globalData.userInfo) {
      //从持久化中读取之前的角色信息。。省略
      this.switchTabWithRole(this.globalData.userInfo.role)
    } else {
        wx.reLaunch({
            url: 'pages/login/login'
        })
    }
  },
  globalData: {
    userInfo: null,
    list:[]
  },
  switchTabWithRole:function(role){
    if(role == 1){
      this.globalData.list =[
        {
          "pagePath": "/pages/index/index",
          "iconPath": "/image/icon_component.png",
          "selectedIconPath": "/image/icon_component_HL.png",
          "text": "组件"
        },
        {
          "pagePath": "/pages/logs/logs",
          "iconPath": "/image/icon_API.png",
          "selectedIconPath": "/image/icon_API_HL.png",
          "text": "接口"
        },
        {
          "pagePath": "/pages/my/my",
          "iconPath": "/image/icon_API.png",
          "selectedIconPath": "/image/icon_API_HL.png",
          "text": "我的"
        }
      ]
      if (this.changeTabbarCallback) {
        this.changeTabbarCallback(this.globalData.list)
      }
      wx.switchTab({
       url: '/pages/index/index',
      })
    }

    if(role == 2){
      this.globalData.list =[
        {
          "pagePath": "/pages/my/my",
          "iconPath": "/image/icon_API.png",
          "selectedIconPath": "/image/icon_API_HL.png",
          "text": "我的"
        }
      ]
      if (this.changeTabbarCallback) {
        this.changeTabbarCallback(this.globalData.list)
      }
      wx.switchTab({
       url: '/pages/my/my',
      })

    }
  }
  
})