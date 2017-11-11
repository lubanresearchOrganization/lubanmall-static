<template>
  <div class="ml-side-bar">
    <div class="sidebar-nav" v-for="(item,index) in menuJson " :key="`sidebar-nav${index}`">
      <div class="sidebar-title"
           :class="{'sidebar-title-checked':item.link==$route.fullPath&&(!item.subMenu||item.subMenu.length==0)}"
           @click="openOrClose(item,index)">
        <ml-icon v-if="item.icon" :icon="item.icon"></ml-icon>
        <span class="sidebar-title-text inline-block">{{item.name}}</span>
      </div>
      <ul class="sidebar-nav-ul" :style="`max-height:${item.maxHeight}px`">
        <li class="nav-item" :class="{'nav-item-checked':childItem.link==$route.fullPath}"
            v-for="(childItem,cldIndex) in item.subMenu" @click="goToUrl(childItem,index)"
            :key="`sidebar.${index}.nav.${cldIndex}`">
          {{childItem.name}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/babel">
  import sideJson from './sidebar'

  export default {
    name: 'side-bar',
    data() {
      return {
        menuJson: [], // 菜单
        menuIndex: -1, // 当前展开菜单索引
      }
    },
    created() {
      const sideBar = sideJson['sideBar' + this.$storage.getItem('userObject', false).powerLevel]
      sideBar.forEach((one, index) => {
        if (one.link === this.$route.meta.sidebarLink) this.menuIndex = index
        one.maxHeight = 0
        if (this.menuIndex === index) {
          const hh1 = document.documentElement.clientHeight - 50 - 40 * sideBar.length
          const hh2 = one.subMenu.length * 40
          one.maxHeight = hh1 > hh2 ? hh2 : hh1
        }
      })
      this.menuJson = JSON.parse(JSON.stringify(sideBar))
    },
    methods: {
      /**
       * 展开关闭菜单
       * @param {Object} item
       * @param {Number} index
       */
      openOrClose(item, index) {
        if (item.maxHeight !== 0) {
          item.maxHeight = 0
        } else {
          if (this.menuIndex > -1) this.menuJson[this.menuIndex].maxHeight = 0
          if (item.subMenu && item.subMenu.length > 0) {
            const hh1 = document.documentElement.clientHeight - 50 - 40 * this.menuJson.length
            const hh2 = item.subMenu.length * 40
            item.maxHeight = hh1 > hh2 ? hh2 : hh1
            this.menuIndex = index
          } else {
            this.goToUrl(item, index)
          }
        }
      },
      /**
       * 路由跳转
       * @param {Object} obj
       * @param {Number} index
       */
      goToUrl(obj, index) {
        if (obj && obj.link) this.$router.push(obj.link)
        this.menuIndex = index
      }
    },
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .ml-side-bar {
    .sidebar-title {
      height: 40px;
      background-color: #42485B;
      color: #fff;
      line-height: 40px;
      padding: 0 18px;
      cursor: pointer;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      .sidebar-title-text {
        padding-left: 10px;
      }
      i {
        vertical-align: middle;
      }
    }
    .nav-item-left {
      float: left;
      width: 30px;
      text-align: center;
      height: 40px;
    }
    .nav-item {
      position: relative;
      background-color: #333745;
      height: 40px;
      color: #fff;
      line-height: 20px;
      cursor: pointer;
      padding: 10px 35px;
      box-sizing: border-box;
    }
    .nav-item:hover {
      background-color: #50576e;
    }
    .nav-item-checked, .nav-item-checked:hover, .sidebar-title-checked {
      background-color: #1ac1de;
    }
    .sidebar-nav-ul {
      width: 200px;
      margin: 0;
      padding: 0;
      overflow-y: scroll;
      overflow-x: hidden;
      transition: all 0.12s ease, 0.12s ease;
    }
    .sidebar-nav {
      overflow: hidden;
    }
  }
</style>