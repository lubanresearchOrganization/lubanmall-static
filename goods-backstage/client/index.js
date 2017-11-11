import 'babel-polyfill'
// 引入响应式设计JS
import '@config/utils/responsiveDesign'
// 第三方库
import Vue from 'vue'
// reset样式
import '@/assets/css/common.css'
// 引入饿了么element-ui组件样式
import 'element-ui/lib/theme-default/index.css'
// 引入css字体样式
import '@/assets/font/iconfont.css'
// vue config配置文件
import './config'
// 引入router
import router from './router'
import App from './app.vue'
// 引入store
import vueStorage from './utils/storage'

// import http from '@config/utils/http/http'

/**
 * @param {Object} Vue Vue
 * @param {router} [router=undefined] VueRouter 实例化对象
 * @param [] 路由白名单
 * @param (storage) => {} 回调函数
 */
const store = vueStorage(Vue, router, [], (storage, to, from) => {
  return new Promise((resolve) => {
    const { whether } = storage.getItem('userObject', false) || JSON.parse(localStorage.getItem('userObject')) || {}
    if (!whether && to.path !== '/login') {
      global.location.href = '/login'
    } else {
      storage.setItem('userObject', JSON.parse(localStorage.getItem('userObject')), false)
      resolve(storage, to, from)
    }
  })
})
/*eslint-disable*/
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
