<template>
  <ml-layout title="店铺设置">
    <el-form :model="detail" :rules="rules" ref="ruleForm" label-width="108px" onSubmit="return false"
             label-position="left">
      <ml-area-title title="基础信息">
        <el-form-item label="商家名称" prop="businessName">
          <el-input v-model="detail.businessName" class="base-width" :maxlength="50" placeholder="最多支持50个字">
          </el-input>
        </el-form-item>
        <el-form-item label="商家LOGO" prop="logoUrl">
          <ml-image-uploader v-model="detail.logoUrl" max-size="1" prompt="建议图片250*250px 支持JPG、JPEG、PNG格式，大小在1M以内">
          </ml-image-uploader>
        </el-form-item>
        <el-form-item label="商家地址" prop="address">
          <el-input v-model="detail.address" resize="none" class="middle-width" type="textarea"
                    :autosize="{minRows: 2, maxRows: 2 }" :maxlength="100">
          </el-input>
        </el-form-item>
        <el-form-item label="商家描述">
          <el-input v-model="detail.describe" resize="none" class="middle-width" type="textarea"
                    :autosize="{minRows: 4, maxRows: 6 }" :maxlength="500">
          </el-input>
        </el-form-item>
      </ml-area-title>
      <ml-area-title title="用户信息" class="ml-last-area">
        <ml-one-line>
          <div slot="label">联系人姓名</div>
          <div slot="content">{{detail.contactName}}</div>
        </ml-one-line>
        <ml-one-line>
          <div slot="label">联系电话</div>
          <div slot="content">{{detail.contactPhone}}</div>
        </ml-one-line>
      </ml-area-title>
    </el-form>
    <div class="base-button-warp">
      <el-button type="primary" @click="doSubmit">保存</el-button>
      <el-button @click="doCancel">取消</el-button>
    </div>
  </ml-layout>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        rules: {
          businessName: [
            { required: true, message: '请输入名称', trigger: 'change' },
            { required: true, message: '请输入名称', trigger: 'blur' },
          ],
          logoUrl: [
            { required: true, message: '请上传图片', trigger: 'change' },
            { required: true, message: '请上传图片', trigger: 'blur' },
          ],
          address: [
            { required: true, message: '请输入地址', trigger: 'change' },
            { required: true, message: '请输入地址', trigger: 'blur' },
          ]
        },
        detail: {
          businessName: '', // 商家名称
          describe: '', // 商家描述
          contactName: '休闲鞋', // 联系人姓名
          contactPhone: '123123123123', // 联系人电话
          logoUrl: 'http://img-np.xkeshi.cn/test/w1/d8/bf/c74d9691afbc1bd5091881996cce.jpeg', // 商家logoURL
          address: '', // 商家地址
        },
        title: this.$route.query.id ? '添加商家' : '编辑商家',
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