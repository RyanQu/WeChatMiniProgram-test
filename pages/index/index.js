//index.js
//获取应用实例
var app = getApp()
console.log(app.globalData)
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  onShareAppMessage: function () {
    console.log('onShareAppMessage')
    return {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: '/page/index/index'
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
