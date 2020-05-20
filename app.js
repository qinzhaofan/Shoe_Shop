//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log("用户登录信息："+res.authSetting['scope.userInfo'])
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

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
          console.log("tiaozhuan")
          wx.redirectTo({//可以返回但在login画面隐藏了主页返回的按钮
          url: '/pages/login/login'
          
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    localhost: '127.0.0.1',
    openid: 'wx31e8e29ab6c28f30'
  },
  //设置用户userInfo信息
    setGlobalUserInfo:function(user){
     console.log("进入：setGlobalUserInfo"+user)
    return wx.setStorageSync('userInfo',user)
  },
  //获取用户userInfo信息
    getGlobalUserInfo:function(){
    return wx.getStorageSync('userInfo')
  },onShow: function () {
    wx.hideHomeButton
  }
})