<template>
  <div class="vl-top-bar">
    <a class="top-bar-btn top-bar-index" href="javascript:;">
      <i class="iconfont icon-shouye"></i>
    </a>
    <a class="top-bar-btn index-word" href="javascript:;">管理后台</a>
    <div class="top-bar-right">
      <a class="top-bar-btn " href="javascript:;">
        <span v-show="unread>0" class="unread-num">{{unread}}</span>
        消息</a>
      <a class="top-bar-btn " href="javascript:;">设置</a>
      <a class="top-bar-btn " href="javascript:;">1234567890@qq.com</a>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'top-bar',
    data() {
      return {
        unread: 22,
      }
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .vl-top-bar {
    line-height: 50px;
    font-size: 0;
    .top-bar-btn {
      color: #fff;
      font-size: 14px;
      display: inline-block;
      vertical-align: middle;
      height: 50px;
      border-right: 1px solid #2a2f32;
      box-sizing: border-box;
      position: relative;
    }
    .unread-num {
      position: absolute;
      color: #fff;
      right: 6px;
      top: 6px;
      line-height: 1;
      font-size: 12px;
      background-color: red;
      border-radius: 10px;
      padding: 3px;
    }
    .top-bar-right {
      float: right;
      .top-bar-btn {
        padding: 0 16px;
      }
    }
    .top-bar-btn:hover {
      background-color: #2a2f32;
    }
    .index-word {
      width: 130px;
      text-align: center;
    }
    .top-bar-index {
      width: 50px;
      text-align: center;
      i {
        color: #fff;
        font-size: 30px;
      }
    }
  }

</style>