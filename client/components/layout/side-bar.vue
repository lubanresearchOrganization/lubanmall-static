<template>
  <div class="vl-side-bar">
    <div class="sidebar-nav">
      <div class="sidebar-title sidebar-title-inner sidebar-open">
        <div class="inline-block">
          <zd-icon icon="triangle-right"></zd-icon>
        </div>
        <span class="sidebar-title-text">商户管理</span>
      </div>
      <ul class="sidebar-nav-ul">
        <li class="nav-item">
          <div class="nav-item-left">
            <zd-icon icon="shanghu"></zd-icon>
          </div>
          <div class="nav-title">商户列表</div>
        </li>
        <li class="nav-item">
          <div class="nav-item-left">
            <zd-icon icon="hy"></zd-icon>
          </div>
          <div class="nav-title">会员</div>
        </li>
        <li class="nav-item">
          <div class="nav-item-left">
            <zd-icon icon="order"></zd-icon>
          </div>
          <div class="nav-title">订单</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'side-bar',
    data() {
      return {}
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .vl-side-bar {
    .sidebar-title {
      height: 40px;
      background-color: #42485B;
      color: #fff;
      line-height: 40px;
      padding: 0 20px;
      cursor: pointer;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
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
      float: right;
      overflow: hidden;
      color: #fff;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 130px;
      padding-left: 5px;
    }
    .sidebar-title-inner:hover {
      background-color: #1ac1de;
    }
  }
</style>