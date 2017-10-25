import layout from './layout.vue'
import empty from './empty.vue'

const routes = [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/test',
        component: empty,
        // children: ,
      },
    ],
  },
]

export default routes
