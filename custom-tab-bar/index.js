const app  = getApp();


Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: app.globalData.list
  },
  attached() {
    var that = this;
    console.log(app.globalData.list)
    this.setData({
      list:app.globalData.list
    })
    app.changeTabbarCallback = res => {
      that.setData({
        list:res
      })
    }
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      console.log(data);
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})