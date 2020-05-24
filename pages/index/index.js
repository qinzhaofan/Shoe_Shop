//index.js
//获取应用实例
const app = getApp()
const windowWidth = wx.getSystemInfoSync().windowWidth//img

//Component
Page({
  /*pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  },*/
 

  attached() {    
  },
  data: {
    motto: '欢迎光临',
    userInfo: {},

    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
    ,
    //start
    imgUrls: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg'
    ],
    imgSize: [{
      height: 150
    }, {
      height: 150
    }, {
      height: 150
    }, {
      height: 150
    }],
    indicatorDots: true,
    autoplay: false,
    interval: 3000,
    duration: 500,
    left: 0,
    windowWidth: windowWidth,

    testkeyData: [
        "a","b","c"
    ]
   
    
  },
  //事件处理函数  
  bindViewTap: function() {
    wx.switchTab({
      url: '../logs/logs'
    })
  },
 
  /*
  onPullDownRefresh: function () {
    console.log("进入下拉")
    wx.showNavigationBarLoading() 
    this.onLoad()
    setTimeout(() => {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    }, 2000);
  },*/

  /**
   * 生命周期函数--监听页面加载
   *//*
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    
    wx.getSystemInfo({
      success (res) {
        console.log(res.model)
        console.log(res.language)
        console.log(res.version)
        console.log(res.SDKVersion)
      }
    })
  },*/
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
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
  onShow: function() {
      if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
     // 获取用户信息
     wx.getSetting({
      success: res => {
        console.log("用户登录信息："+res.authSetting['scope.userInfo'])
        if (res.authSetting['scope.userInfo']) {
          console.log("授权了")
          // 已经授权
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              //this.globalData.userInfo = res.userInfo
              console.log( getApp().getGlobalUserInfo())
              //直接调用 getUserInfo 获取头像昵称，不会弹框
              this.setData({
                userInfo: getApp().getGlobalUserInfo(),
                
                hasUserInfo: true
              })
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
               //用户已经授权过 跳转到首页
            wx.switchTab({
              url: '../index/index'
            })
            },function(res){
              console.log("网络请求失败！")
            }
          })
        } else if (!res.authSetting['scope.userInfo']) {
          console.log("未授权")
          wx.redirectTo({//可以返回但在login画面隐藏了主页返回的按钮
          url: '/pages/login/login',
          success:function (res) {
            console.log(res)
          },
          fail:function (res) {
            console.log(res)
          },
          })
          console.log("跳转后")
        }
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
  
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  swiperTransition1(e) {
    console.log('e.transition', e)
    this.setData({
      left: (e.detail.x) / 4
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
})
