<template>
  <div class="vl-side-bar">
    <div class="sidebar-nav" v-for="(item,index) in menuJson " :key="`sidebar-nav${index}`">
      <div class="sidebar-title sidebar-title-inner" :class="{'sidebar-open':item.isOpen}"
           @click="openOrClose(item,index)">
        <div class="inline-block">
          <zd-icon icon="triangle-right"></zd-icon>
        </div>
        <span class="sidebar-title-text">{{item.name}}</span>
        <zd-icon v-if="item.icon" :icon="item.icon"></zd-icon>
      </div>
      <ul class="sidebar-nav-ul" :style="`max-height:${item.maxHeight}px`">
        <li class="nav-item" v-for="(childItem,cldIndex) in item.subMenu" @click="goToUrl(childItem)"
            :key="`sidebar.${index}.nav.${cldIndex}`">
          <div class="nav-item-left">
            <zd-icon :icon="childItem.icon"></zd-icon>
          </div>
          <div class="nav-title">{{childItem.name}}</div>
          {{item.maxHeight}}
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
      sideJson.sideBar.forEach(one => {
        one.isOpen = false
        one.maxHeight = 0
      })
      this.menuJson = JSON.parse(JSON.stringify(sideJson.sideBar))
    },
    methods: {
      /**
       * 展开关闭菜单
       * @param {Object} item
       * @param {Number} index
       */
      openOrClose(item, index) {
        this.log(item)
        if (this.menuIndex === index) {
          item.isOpen = false
          item.maxHeight = 0
          this.menuIndex = -1
        } else {
          this.menuJson.forEach(v => {
            v.isOpen = 0
            v.maxHeight = 0
          })
          const hh1 = document.documentElement.clientHeight - 50 - 40 * this.menuJson.length
          const hh2 = this.menuJson[index].subMenu.length * 40
          this.menuJson[index].maxHeight = hh1 > hh2 ? hh2 : hh1
          this.menuJson[index].isOpen = true
          this.menuIndex = index
        }
      },
      /**
       * 路由跳转
       * @param obj
       */
      goToUrl(obj) {
        if (obj.link) this.router.push(obj.link)
      }
    },
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .vl-side-bar {
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
      .inline-block {
        transition: all 0.2s ease, 0.2s ease;
        vertical-align: inherit;
      }
      i {
        font-size: 12px;
      }
      .sidebar-title-text {
        padding-left: 10px;
      }
    }
    .sidebar-open {
      .inline-block {
        transform: rotate(90deg)
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
      line-height: 40px;
      cursor: pointer;
      padding: 0 10px;
    }
    .nav-item:hover {
      background-color: #50576e;
    }

    .nav-title {
      float: left;
      overflow: hidden;
      color: #fff;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 130px;
      padding-left: 5px;
    }
    .sidebar-title-text + i {
      float: right;
      font-size: 16px;
      display: none;
    }
    .sidebar-title-inner:hover {
      background-color: #1ac1de;
      .sidebar-title-text + i {
        display: inline-block;
      }
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