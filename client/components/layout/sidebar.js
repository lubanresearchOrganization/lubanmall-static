export default {
  sideBar: [
    {
      name: '商家管理', // 菜单名称
      icon: 'shezhi', // 菜单图标
      level: 1, // 菜单级别
      subMenu: [// 子级菜单
        {
          name: '商户列表',
          icon: 'shanghu',
          link: '', // 菜单路由
          level: 2,
          operate: ['add', 'edit', 'delete'] // 页面具体操作权限
        },
        {
          name: '会员',
          icon: 'hy',
          link: '',
          level: 2,
          operate: ['add', 'edit', 'delete'] // 页面具体操作权限
        },
        {
          name: '订单',
          icon: 'order',
          link: '',
          level: 2,
          operate: ['add', 'edit', 'delete'] // 页面具体操作权限

        }
      ]
    },
    {
      name: '商家管理', // 菜单名称
      icon: 'shezhi', // 菜单图标
      level: 1, // 菜单级别
      subMenu: [// 子级菜单
        {
          name: '商户列表',
          icon: 'shanghu',
          link: '', // 菜单路由
          level: 2,
          operate: ['add', 'edit', 'delete'] // 页面具体操作权限
        },
        {
          name: '会员',
          icon: 'hy',
          link: '',
          level: 2,
          operate: ['add', 'edit', 'delete'] // 页面具体操作权限
        },
        {
          name: '订单',
          icon: 'order',
          link: '',
          level: 2,
          operate: ['add', 'edit', 'delete'] // 页面具体操作权限

        }
      ]
    }
  ]
}