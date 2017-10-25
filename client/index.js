import 'babel-polyfill'
// 引入响应式设计JS
import '@config/utils/responsiveDesign'
// 第三方库
import Vue from 'vue'
// reset样式
import '@/assets/css/common.css'
// 引入css字体样式
import '@/assets/font/iconfont.css'
// vue config配置文件
import './config'
// 自己实现的方法
import router from './router'
import App from './app.vue'

/*eslint-disable*/
new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
