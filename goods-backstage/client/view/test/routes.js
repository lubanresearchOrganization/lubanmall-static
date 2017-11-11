import tect from './tect.vue'
import add from './add.vue'

const routes = [
  {
    path: 'tect',
    name: 'tect',
    component: tect,
    meta: {
      title: '数据导出',
      sidebarLink: '/test/tect'
    },
  },
  {
    path: 'add',
    name: 'add',
    component: add,
    meta: {
      title: '数据添加',
      sidebarLink: '/test/tect'
    },
  }
]

export default routes
