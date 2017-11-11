import goodList from './good-list.vue'
import goodDetail from './good-detail.vue'
import goodAddEdit from './good-add-edit.vue'

const routes = [
  {
    path: 'list',
    name: 'goodList',
    component: goodList,
    meta: {
      title: '商品列表',
      sidebarLink: '/good/list'
    },
  },
  {
    path: 'add',
    name: 'goodAdd',
    component: goodAddEdit,
    meta: {
      title: '添加商品',
      sidebarLink: '/good/list'
    },
  },
  {
    path: 'edit/:id',
    name: 'goodEdit',
    component: goodAddEdit,
    meta: {
      title: '修改商品',
      sidebarLink: '/good/list'
    },
  },
  {
    path: 'detail/:id',
    name: 'goodDetail',
    component: goodDetail,
    meta: {
      title: '商品详情',
      sidebarLink: '/good/list'
    },
  },
]

export default routes
