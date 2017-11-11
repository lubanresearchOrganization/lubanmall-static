import statistics from './statistics.vue'

const routes = [
  {
    path: 'info',
    name: 'statisticsInfo',
    component: statistics,
    meta: {
      title: '统计',
      sidebarLink: '/statistics/info'
    },
  },
]

export default routes
