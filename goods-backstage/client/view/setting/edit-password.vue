<template>
  <ml-layout title="密码修改">
    <el-form :model="detail" :rules="rules" ref="ruleForm" label-width="108px" onSubmit="return false"
             label-position="left">
      <ml-area-title title="基础信息">
        <el-form-item label="旧秘密" prop="oldPsd">
          <el-input v-model="detail.oldPsd" type="password" class="base-width" :maxlength="50">
          </el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="onePsd">
          <el-input v-model="detail.onePsd" type="password" class="base-width" :maxlength="50">
          </el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="twoPsd">
          <el-input v-model="detail.twoPsd" type="password" class="base-width" :maxlength="50"></el-input>
        </el-form-item>
      </ml-area-title>
    </el-form>
    <div class="base-button-warp pdt20">
      <el-button type="primary" @click="doSubmit">保存</el-button>
    </div>
  </ml-layout>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        rules: {
          oldPsd: [
            { required: true, message: '请输入旧密码', trigger: 'change' },
            { required: true, message: '请输入旧密码', trigger: 'blur' },
          ],
          onePsd: [
            { required: true, message: '请输入新密码', trigger: 'change' },
            { required: true, message: '请输入新密码', trigger: 'blur' },
          ],
          twoPsd: [
            { required: true, message: '请输入确认密码', trigger: 'change' },
            { required: true, message: '请输入确认密码', trigger: 'blur' },
          ],
        },
        detail: {
          oldPsd: '', // 旧密码
          onePsd: '', // 新密码
          twoPsd: '', // 确认密码
        },
      }
    },
    methods: {
      /**
       * 确定事件
       */
      doSubmit() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.$message.success('提交成功')
          } else {
            this.$message.error('信息填写有误，请核查')
          }
        })
      },
      /**
       * 取消事件
       */
      doCancel() {
        history.go(-1)
      },
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  .stress {
    margin-left: 5px;
    color: #ff6805;
  }
</style>