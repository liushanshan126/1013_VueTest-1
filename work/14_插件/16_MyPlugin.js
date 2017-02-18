
(function (window) {
  //创建插件对象
  const MyPlugin = {}
  //添加install方法
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue myGlobalMethod()')
    }
    // 2. 添加全局资源: v-my-directive='xxx'
    Vue.directive('my-directive', function (value) {
      this.el.innerHTML = value.toUpperCase()
    })
    // 3. 添加实例方法
    Vue.prototype.$myMethod = function () {
      console.log('vue对象$myMethod()')
    }
  }
  //暴露插件对象
  window.MyPlugin = MyPlugin
})(window)