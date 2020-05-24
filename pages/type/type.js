// pages/type/type.js


//Component({
Page({ 
  /*
pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 3
        })
      }
    }
  },*/

  /**
   * 页面的初始数据
   */
  data: {
    iconSize: 20,
    iconColor: 'rgb(108,207,255)' ,
    search:'search', 
    clear :'clear',
     //数据绑定
     setItems: [
      {
        id:"0",
        IndexImg: "/images/1.jpg",
        IndexTitle: "标题测试",
        IndexTeacher:"秦测试",
        IndexCount: 1500,
        isStar: true,
      },{
        id:"1",
        IndexImg: "/images/2.jpg",
        IndexTitle: "前端测试",
        IndexTeacher:"张测试",
        IndexCount: 3200,
        isStar: false,
      }

    ]
  },
  _handlerTap:function(){
    //动态修改数据源
   // this.data.testkeyData.push("d")//尾部追加
    this.data.testkeyData.unshift("d")//前部追加
    this.setData({
      testkeyData: this.data.testkeyData
    })
  },
/**
 * bindtap 当用户点击事件 param:tapName
 */
  tapName: function(event) {
    console.log(event)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    setTimeout(() => {
      console.log("3秒计时器")
      this.data.setItems.push({
        id:"2",
        IndexImg: "/images/3.jpg",
        IndexTitle: "动态测试",
        IndexTeacher:"张测试",
        IndexCount: 11200,
        isStar: true,
      })
      //更新画面数据
      this.setData({ 
        setItems:this.data.setItems
      })
     
    }, 3000);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('没有有登录状态： 只设置tabbar'+this.getTabBar)
    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
    this.getTabBar().setData({
      selected: 1
    })
  }
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

  }
})