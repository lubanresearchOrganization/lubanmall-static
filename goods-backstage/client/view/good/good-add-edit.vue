<template>
  <ml-layout :title="title" :back="true">
    <el-form :model="detail" :rules="rules" ref="ruleForm" label-width="108px" onSubmit="return false"
             label-position="left">
      <ml-area-title title="基础信息">
        <el-form-item label="商品名称" prop="goodName">
          <el-input v-model="detail.goodName" class="base-width" :maxlength="50" placeholder="最多支持50个字">
          </el-input>
        </el-form-item>
        <el-form-item label="商品编码" prop="code">
          <el-input v-model="detail.code" class="base-width" :maxlength="50" placeholder="最多支持50个字">
          </el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="price">
          <el-input v-model="detail.price" class="base-width" :maxlength="50">
            <template slot="prepend">¥</template>
          </el-input>
        </el-form-item>

        <el-form-item label="商品类别" required>
          <el-cascader change-on-select class="base-width" placeholder="请选择类别"
                       :options="options" :props="{value:'id'}"></el-cascader>
        </el-form-item>
        <el-form-item label="商品图片" prop="imageUrl">
          <ml-image-uploader v-model="detail.imageUrl" max-size="1" prompt="建议图片250*250px 支持JPG、JPEG、PNG格式，大小在1M以内">
          </ml-image-uploader>
        </el-form-item>
        <el-form-item label="商品描述">
          <el-input v-model="detail.describe" resize="none" class="middle-width" type="textarea"
                    :autosize="{minRows: 4, maxRows: 6 }" :maxlength="500">
          </el-input>
        </el-form-item>
      </ml-area-title>
    </el-form>
    <div class="base-button-warp">
      <el-tooltip content="保存并返回列表" placement="top">
        <el-button type="primary" @click="doSubmit">保存</el-button>
      </el-tooltip>
      <el-button @click="doCancel">取消</el-button>
    </div>
  </ml-layout>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        rules: {
          goodName: [
            { required: true, message: '请输入商品名称', trigger: 'change' },
            { required: true, message: '请输入商品名称', trigger: 'blur' },
          ],
          code: [
            { required: true, message: '请输入商品编码', trigger: 'change' },
            { required: true, message: '请输入商品编码', trigger: 'blur' },
          ],
          price: [
            { required: true, message: '请输入商品价格', trigger: 'change' },
            { required: true, message: '请输入商品价格', trigger: 'blur' },
          ],
          imageUrl: [
            { required: true, message: '请上传商品图片', trigger: 'change' },
            { required: true, message: '请上传商品图片', trigger: 'blur' },
          ],
        },
        detail: {
          goodName: '', // 商品名称
          code: '', // 商品编码
          price: '', // 商品价格
          describe: '', // 商品描述
          state: 1, // 商品状态 默认1已上架
          imageUrl: 'http://img-np.xkeshi.cn/test/w1/d8/bf/c74d9691afbc1bd5091881996cce.jpeg', // 商品图片
          classFy: [], // 商品分类
        },
        title: this.$route.query.id ? '添加商品' : '编辑商品',
        options: [
          {
            id: '',
            label: '全部',
          },
          {
            id: 11,
            label: '一级 1',
            children: [
              {
                id: 111,
                label: '二级 1-1',
              },
              {
                id: 112,
                label: '二级 1-2'
              },
              {
                id: 113,
                label: '二级 1-3'
              }
            ],
          },
          {
            id: 22,
            label: '一级 2',
            children: [
              {
                id: 221,
                label: '二级 2-1'
              },
              {
                id: 223,
                label: '二级 2-2'
              },
              {
                id: 224,
                label: '二级 2-3'
              }
            ],
          },
        ],
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