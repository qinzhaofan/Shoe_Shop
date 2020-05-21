//app.js
App({
  onShow: function () {
   
  },
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
  }
})