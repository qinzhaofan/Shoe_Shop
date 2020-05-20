let app = getApp();
Component({
  data: {
    isIpx: app.globalData.isIpx,
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/images/index/home.png",
      selectedIconPath: "/images/index/home.png",
      text: "首页"
    }, {
      pagePath: "/pages/type/type",
      iconPath: "/images/index/menu.png",
      selectedIconPath: "/images/index/menu.png",
      text: "分类"
    }, {
      pagePath: "/pages/merchants/merchants",
      iconPath: "/images/index/my.png",
      selectedIconPath: "/images/index/my.png",
      text: "商家"
    }, {
      pagePath: "/pages/logs/logs",
      iconPath: "/images/index/home.png",
      selectedIconPath: "/images/index/home.png",
      text: "日志"
    }]
  },
  attached() {
  },
  methods: {
    _switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      console.log(url+data.index)
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})