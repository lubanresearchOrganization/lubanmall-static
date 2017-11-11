import shopSet from './shop-set.vue'
import editPsd from './edit-password.vue'

const routes = [
  {
    path: 'shop-set',
    name: 'shopSet',
    component: shopSet,
    meta: {
      title: '店铺设置',
      sidebarLink: '/setting/shop-set'
    },
  },
  {
    path: 'edit-psd',
    name: 'editPsd',
    component: editPsd,
    meta: {
      title: '密码修改',
      sidebarLink: '/setting/edit-psd'
    }
  }
]

export default routes
