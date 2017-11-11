import orderList from './order-list.vue'
import orderDetail from './order-detail.vue'

const routes = [
  {
    path: 'list',
    name: 'orderList',
    component: orderList,
    meta: {
      title: '订单列表',
      sidebarLink: '/order/list'
    },
  },
  {
    path: 'detail/:id',
    name: 'orderDetail',
    component: orderDetail,
    meta: {
      title: '订单详情',
      sidebarLink: '/order/list'
    },
  },
]

export default routes
