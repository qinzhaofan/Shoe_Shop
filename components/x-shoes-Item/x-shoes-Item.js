// components/x-shoes-Item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    shoesItem: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    isDelete:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
    _deleteItem:function(){
      console.log("长按触发")
      this.setData({
        isDelete:true
      })
    },
    _handlerDelete: function(){
      wx.showModal({
        title:'是否删除',
        content:'删除之后，会永久失去这个商品',
        success: (res) => {
          if(res.confirm){
             wx.showToast({
               title: '删除成功',
             }),
             this.setData({
              isDelete:false
           })
          }else if (res.cancel){
             this.setData({
             isDelete:false
          })
         }
      }
       

      })
    }
  }
})
