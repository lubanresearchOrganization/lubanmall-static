<template>
  <div class="login-warp">
    <div class="login-layout">
      <div class="login-title">用户登录 | User Login</div>
      <el-popover v-model="popoverState" ref="popover" placement="top" width="300" trigger="click" title="点击切换用户">
        <ul class="user-list">
          <li v-for="uu in userList" @click="switchUser(uu)">用户名：{{uu.name}}  密码 {{uu.psd}}</li>
        </ul>
      </el-popover>
      <a class="switch-user" href="javascript:;" v-popover:popover>切换用户</a>
      <el-input placeholder="用户名" class="login-input" v-model="userName">
        <ml-icon class="login-icon" slot="prepend" icon="user"></ml-icon>
      </el-input>
      <el-input placeholder="密码" type="password" class="login-input" v-model="passWord">
        <ml-icon class="login-icon" slot="prepend" icon="password"></ml-icon>
      </el-input>
      <el-button class="login-button" @click="doLogin" type="primary">登录</el-button>

    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        userList: [
          {
            name: 'admin',
            psd: '654321',
            powerLevel: 1,
            nickname: '超级管理员',
          },
          {
            name: 'shop',
            psd: '654321',
            powerLevel: 2,
            nickname: 'ViVo手机商家',
          }
        ],
        powerLevel: 1,
        popoverState: false,
        userName: 'admin',
        passWord: '654321',
        nickname: '超级管理员'
      }
    },
    methods: {
      /**
       * 登录
       */
      doLogin() {
        const user = {
          userName: this.userName,
          powerLevel: this.powerLevel,
          nickname: this.nickname,
          whether: true, // 是否登录
        }
        this.$storage.setItem('userObject', user, false)
        localStorage.setItem('userObject', JSON.stringify(user), false)
        this.$router.push('/index')
      },
      /**
       * 切换用户
       */
      switchUser(uu) {
        this.userName = uu.name
        this.passWord = uu.psd
        this.popoverState = false
        this.powerLevel = uu.powerLevel
        this.nickname = uu.nickname
      },
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus">
  .login-warp {
    .login-input {
      input, .el-input-group__prepend {
        border: 0;
      }
      .el-input__inner {
        padding-left: 0;
      }
    }
  }
</style>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .user-list {
    li {
      padding: 5px 0;
    }
    li:hover {
      background-color: #ccc;
      cursor: pointer;
    }
  }

  .login-warp {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    background: url("./login-bg.jpg") no-repeat;
    background-size: cover;
    min-height: 380px;
    min-width: 960px;
    .switch-user {
      color: #fff;
      position: absolute;
      top: 42px;
      right: 21px;
    }
    .login-button {
      width: 100%;
      letter-spacing: 3px;
      margin-bottom: 10px;
    }
    .login-icon {
      color: #0f272d;
    }
    .login-layout {
      position: absolute;
      box-sizing: border-box;
      padding: 20px;
      border-radius: 6px;
      overflow: hidden;
      width: 300px;
      height: 280px;
      top: 50%;
      left: 50%;
      margin-top: -150px;
      margin-left: 150px;
      background-color: rgba(15, 39, 45, 0.50);
    }
    .login-title {
      padding-bottom: 30px;
      font-size: 16px;
      color: #000;
    }
    .login-input {
      margin-bottom: 30px;
    }
  }

</style>
