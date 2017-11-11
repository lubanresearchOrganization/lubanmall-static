import msgList from './msg-list.vue'
import msgDetail from './msg-detail.vue'

const routes = [
  {
    path: 'list',
    name: 'msgList',
    component: msgList,
    meta: {
      title: '消息列表',
      sidebarLink: '/msg/list'
    },
  },
  {
    path: 'detail/:id',
    name: 'msgDetail',
    component: msgDetail,
    meta: {
      title: '消息详情',
      sidebarLink: '/msg/list'
    },
  },
]

export default routes
