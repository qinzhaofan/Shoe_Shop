// login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //wx.hideHomeButton
  /**
   * 生命周期函数--监听页面加载
   *//*
  onLoad: function (options) {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          console.log("授权过")
          wx.getUserInfo({
          success: function (res) {
            //从数据库获取用户信息
           // that.queryUsreInfo();
             // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
             // if (this.userInfoReadyCallback) {
               // this.userInfoReadyCallback(res)
              //}
            console.log("用户已经授权"),
            //用户已经授权过 跳转到首页
              wx.switchTab({
                url: '../index/index'
              })

            }
          });
        }
      }
    })
  },
*/
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //隐藏了主页返回的按钮
    wx.hideHomeButton()
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
  // 登录
  bindGetUserInfo:function(e){
  
  //用户是否按了允许授权按钮
    if (e.detail.userInfo) {
      console.log("nickName:"+e.detail.userInfo.nickName),
      console.log("avatarUrl: "+e.detail.userInfo.avatarUrl),
      console.log("province:"+e.detail.userInfo.province),
      console.log("city: "+e.detail.userInfo.city),
      console.log("gender:"+e.detail.userInfo.gender)
     
      var that = this;
    
    wx.login({
      success: function(res){
        console.log(res)
        //获取临时凭证
        var code = res.code
        console.log(getApp().globalData.localhost)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        //调用后端，获取微信的session_key,secret
        wx.request({
          url: 'http://'+getApp().globalData.localhost+':8080/wx_Login',
          method: 'POST',
          data: {
            openid: getApp().globalData.openid,
            nickName: e.detail.userInfo.nickName,
            avatarUrl: e.detail.userInfo.avatarUrl,
            province:e.detail.userInfo.province,
            city: e.detail.userInfo.city
           },
           header: {
            'content-type': 'application/json'
           },
          success: function(result) {
            console.log("JSON发送成功"+e.detail.userInfo)
            //保存用户信息到本地缓存，可以用作小程序端的拦截器
            getApp().setGlobalUserInfo(e.detail.userInfo)
            //that.queryUsreInfo();
            
            console.log("正确存入："+getApp().getGlobalUserInfo().nickName)
            //正确登录后 并且 存入后台 跳转首页
            wx.switchTab({
              url: '../index/index',
            })
          },
          fail: function(error){
            //网络失败
            wx.showModal({
              title:'警告',
              content:'网络请求失败请稍后之后再进入!!!',
              showCancel:false,
              confirmText:'返回',
              success:function(res){
              if (res.confirm) {
                console.log('因为login网络失败用户点击了“返回”')
                } 
               }
              })
          }
        });
        
      },
      complete: (res) => {console.log('执行登录完成')},
    })
  }
  else{
    //用户按了拒绝按钮
    wx.showModal({
     title:'警告',
     content:'您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
     showCancel:false,
     confirmText:'返回授权',
     success:function(res){
      if (res.confirm) {
       console.log('用户点击了“返回授权”')
      } 
     }
    })
   }
  },

 //获取用户信息接口
 queryUsreInfo: function () {
  wx.request({
   url: getApp().globalData.urlPath + 'hstc_interface/queryByOpenid',
   data: {
    openid: getApp().globalData.openid
   },
   header: {
    'content-type': 'application/json'
   },
   success: function (res) {
    console.log(res.data);
    getApp().globalData.userInfo = res.data;
   }
  })
 }




})