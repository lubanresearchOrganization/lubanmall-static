import layout from './layout.vue'
import empty from './empty.vue'
import login from './view/login/login.vue'
import index from './view/index.vue'
import error404 from './view/error-404.vue'
import business from './view/business/routes'
import statistics from './view/statistics/routes'
import good from './view/good/routes'
import order from './view/order/routes'
import setting from './view/setting/routes'
import message from './view/message/routes'

const routes = [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/index',
        component: index,
      },
      {
        path: '/business',
        component: empty,
        children: business,
      },
      {
        path: '/good',
        component: empty,
        children: good,
      },
      {
        path: '/order',
        component: empty,
        children: order,
      },
      {
        path: '/setting',
        component: empty,
        children: setting,
      },
      {
        path: '/msg',
        component: empty,
        children: message,
      },
      {
        path: '/statistics',
        component: empty,
        children: statistics,
      },
    ],
  },
  {
    path: '/login',
    component: login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '*',
    component: error404,
    meta: {
      title: '出错了！！！'
    }
  },
]

export default routes
