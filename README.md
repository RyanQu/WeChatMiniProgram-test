# WeChatMiniProgram-test
Author: RyQ
Date: 2017/01/09

##Learn to Develop WeChat Mini Program

###Main Code
`app.js` 脚本代码。监听并处理小程序的生命周期函数、声明全局变量,调用框架提供的丰富的 API。

`app.json` 全局配置。配置小程序是由哪些页面组成，配置小程序的窗口背景色，配置导航条样式，配置默认标题。*注意该文件不可添加任何注释。*

`app.wxss` 公共样式表。可以在页面组件的 `class` 属性上直接使用 `app.wxss` 中声明的样式规则。

###App
####App()
函数`App()`用来注册一个小程序。接受一个 object 参数，其指定小程序的生命周期函数等。

1. `onLaunch` 生命周期函数--监听小程序初始化。当小程序初始化完成时，会触发 `onLaunch`（全局只触发一次）
2. `onShow` 生命周期函数--监听小程序显示。当小程序启动，或从后台进入前台显示，会触发 `onShow`
3. `onHide` 生命周期函数--监听小程序隐藏。当小程序从前台进入后台，会触发 `onHide`
4. `onError` 错误监听函数。当小程序发生脚本错误，或者 api 调用失败时，会触发 `onError` 并带上错误信息
5. Any 开发者可以添加任意的函数或数据到 Object 参数中，用 this 可以访问

*前台、后台定义*： 当用户点击左上角关闭，或者按了设备 Home 键离开微信，小程序并没有直接销毁，而是进入了后台；当再次进入微信或再次打开小程序，又会从后台进入前台。

只有当小程序进入后台一定时间，或者系统资源占用过高，才会被真正的销毁。

```
App({
  onLaunch: function() { 
    // Do something initial when launch.
  },
  onShow: function() {
      // Do something when show.
  },
  onHide: function() {
      // Do something when hide.
  },
  onError: function(msg) {
    console.log(msg)
  },
  globalData: 'I am global data'
})
```

####getApp()

全局的 `getApp()` 函数，可以获取到小程序实例。

```
// other.js
var appInstance = getApp()
console.log(appInstance.globalData) // I am global data
```

*注意：*

`App()` 必须在 `app.js` 中注册，且不能注册多个。

不要在定义于 `App()` 内的函数中调用 `getApp()` ，使用 `this` 就可以拿到 app 实例。

不要在 onLaunch 的时候调用 `getCurrentPage()`，此时 page 还没有生成。

通过 `getApp()` 获取实例之后，不要私自调用生命周期函数。
