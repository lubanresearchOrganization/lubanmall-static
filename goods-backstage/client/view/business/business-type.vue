<template>
  <ml-layout title="分类管理">
    <div class="shop-class-tree">
      <el-tree
        node-key="id"
        :data="treeData"
        :props="defaultProps"
        :default-expand-all="true"
        :expand-on-click-node="false"
        :render-content="renderContent"></el-tree>
      <el-dialog
        :title="isEdit?'修改分类':'添加子分类'"
        :visible.sync="dialogVisible"
        size="tiny"
        :before-close="handleClose">
        <el-form :model="category" :rules="rules" ref="ruleForm" label-width="88px" onSubmit="return false"
                 label-position="left">
          <div class="category-warp">
            <el-form-item label="父级分类" required v-show="!isEdit">
              {{nowCategory.label}}
            </el-form-item>
            <el-form-item label="分类名称" prop="label">
              <el-input v-model="category.label" :maxlength="30" class="base-width"></el-input>
            </el-form-item>
          </div>
          <div class="base-button-warp">
            <el-button type="primary" @click="doSubmit">保存</el-button>
            <el-button @click="handleClose">取消</el-button>
          </div>
        </el-form>
      </el-dialog>
    </div>
  </ml-layout>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        rules: {
          label: [
            { required: true, message: '请输入分类名称', trigger: 'change' },
            { required: true, message: '请输入分类名称', trigger: 'blur' },
          ],
        },
        category: {
          label: '',
          id: '',
        },
        nowCategory: {},
        dialogVisible: false,
        isEdit: false,
        treeData: [{
          label: '根目录',
          id: 0,
          children: [
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
          ]
        }],
        defaultProps: {
          children: 'children',
          label: 'label',
        },
      }
    },
    methods: {
      handleClose() {
        this.dialogVisible = false
        this.$refs.ruleForm.resetFields()
      },
      /**
       * 添加子分类
       */
      doSubmit() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            if (this.isEdit) {
              this.nowCategory.label = this.category.label
            } else {
              if (!this.nowCategory.children) this.nowCategory.children = []
              this.category.id = Math.floor(Math.random() * 1000000)
              this.nowCategory.children.push(this.category.label)
            }
            this.dialogVisible = false
            this.$message.success(`${this.isEdit ? '修改' : '添加'}成功`)
          } else {
            this.$message.error('信息填写有误，请核查')
          }
        })
      },
      /**
       * 添加子分类
       */
      openAddDialog(store, data) {
        this.nowCategory = data
        this.category = { label: '', id: '', }
        this.isEdit = false
        this.dialogVisible = true
      },
      /**
       * 修改分类
       * @param {Object} store
       * @param {Object} data
       */
      editNode(store, data) {
        Object.assign(this.category, data)
        this.isEdit = true
        this.dialogVisible = true
      },
      /**
       * 删除tree
       * @param {Object} store
       * @param {Object} data
       */
      deleteTree(store, data) {
        this.$confirm('确定要删除该分类吗？')
          .then(() => {
            store.remove(data)
            this.$message.success('删除成功')
          })
          .catch(() => {
          })
      },
      /**
       * 自定义tree模版
       * @param h
       * @param node
       * @param data
       * @param store
       * @return {XML}
       */
      renderContent(h, { node, data, store }) {
        if (node.level > 1 && node.level < 4) {
          return (
            <span>
              <span>
                <span>{node.label}</span>
              </span>
              <span style="float: right; margin-right: 20px">
                <el-button size="mini" on-click={() => this.openAddDialog(store, data)}>添加子分类</el-button>
                <el-button size="mini" on-click={() => this.editNode(store, data)}>修改</el-button>
                <el-button type="danger" on-click={() => this.deleteTree(store, data)} size="mini">删除</el-button>
              </span>
            </span>
          )
        } else if (node.level === 4) {
          return (
            <span>
              <span>
                <span>{node.label}</span>
              </span>
              <span style="float: right; margin-right: 20px">
                <el-button size="mini" on-click={() => this.editNode(store, data)}>修改</el-button>
                <el-button type="danger" on-click={() => this.deleteTree(store, data)} size="mini">删除</el-button>
              </span>
            </span>
          )
        } else {
          return (
            <span>
            <span>
              <span>{node.label}</span>
            </span>
            <span style="float: right; margin-right: 20px">
              <el-button size="mini" on-click={() => this.openAddDialog(store, data)}>添加子分类</el-button>
            </span>
          </span>
          )
        }
      },
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .shop-class-tree {
    .tree-btn {
      float: right;
      margin-right: 20px;
    }
  }
</style>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .category-warp {
    padding: 0 20px;
  }
</style>