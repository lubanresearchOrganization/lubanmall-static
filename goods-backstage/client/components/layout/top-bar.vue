<template>
  <div class="ml-top-bar">
    <a class="top-bar-btn top-bar-index" href="javascript:;">
      <ml-icon icon="shouye"></ml-icon>
    </a>
    <a class="top-bar-btn index-word" href="javascript:;">管理后台</a>
    <div class="top-bar-right">
      <a class="top-bar-btn " href="javascript:;" @click="loginOut()">退出</a>
      <a class="top-bar-btn " href="javascript:;" @click="$router.push('/msg/list')">
        <span>消息</span>
        <span v-show="unread>0" class="unread-num">{{unread}}</span>
      </a>
      <a class="top-bar-btn " href="javascript:;">{{loginUser.nickname}}</a>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'top-bar',
    data() {
      return {
        unread: 22,
        loginUser: this.$storage.getItem('userObject', false)
      }
    },
    methods: {
      /**
       * 退出登录
       */
      loginOut() {
        localStorage.clear()
        this.$storage.clear()
        this.$router.push('/login')
      },
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .ml-top-bar {
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
      font-size: 12px;
      color: #fff;
      background: #ff9900;
      border-radius: 5px;
      padding: 2px 5px;
      display: inline-block;
      margin-left 2px;
      margin-top: 15px;
      line-height: 16px;
      vertical-align: top;
      text-align: center;
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