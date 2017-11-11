<template>
  <ml-layout title="商品列表">
    <div class="button-bar">
      <el-button type="primary" @click="$router.push('/good/add')">添加商品</el-button>
      <ml-label label="商品类别" class="mgl10">
        <el-cascader change-on-select @change="classFyChange" v-model="search.classify"
                     :options="options" :props="{value:'id'}"></el-cascader>
      </ml-label>
      <ml-label label="商品状态" class="mgl10">
        <el-select @change="stateChange" class="state-select" placeholder="请选择" v-model="search.state">
          <el-option label="全部" value=""></el-option>
          <el-option label="已上架" :value="1"></el-option>
          <el-option label="已下架" :value="0"></el-option>
        </el-select>
      </ml-label>
      <el-input class="input-search" placeholder="商品名称" v-model="search.keyWord" @keyup.native="doSearch">
        <div class="inline-block pointer" slot="append" @click="doSearch">
          <ml-icon icon="sousuo"></ml-icon>
        </div>
      </el-input>
    </div>
    <el-table border id="table" :data="tableData" style="width: 100%">
      <el-table-column type="index" label="序号" width="65"></el-table-column>
      <el-table-column prop="id" label="商品ID/编码" width="160">
        <template scope="scope">{{scope.row.id}}/{{scope.row.code}}</template>
      </el-table-column>
      <el-table-column prop="goodName" label="商品名称" width="260">
        <template scope="scope">
          <a href="javascript:;" @click="toDoDetail(scope.row.id)" type="text">{{scope.row.goodName}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="价格" width="120"></el-table-column>
      <el-table-column prop="classify" label="分类" width="140"></el-table-column>
      <el-table-column prop="stock" label="库存" width="120"></el-table-column>
      <el-table-column prop="createDate" label="状态">
        <template scope="scope">
          {{scope.row.state == 1 ? '已上架' : '已下架'}}
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="170">
        <template scope="scope">
          <el-popover placement="top"
                      width="280"
                      ref="delOpt">
            <div class="common-pop-wrap">
              <p class="pop-content center">删除后，此商品将无法恢复。确定删除？</p>
              <div class="pop-bottom">
                <el-button type="primary" @click="doDelete(scope.row.id)">确定</el-button>
                <el-button @click="popoverClose">取消</el-button>
              </div>
            </div>
          </el-popover>
          <el-button size="mini" @click="doEnableDisable(scope.row)"> {{!scope.row.state ? '上架' : '下架'}}
          </el-button>
          <el-button size="mini" @click="toDoEdit(scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" v-popover:delOpt>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-warp">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="search.currentPage"
        :page-size="20"
        layout="prev, pager, next, jumper"
        :total="totalNumber">
      </el-pagination>
    </div>
  </ml-layout>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        searchKey: '/business/list',
        search: {
          keyWord: '',
          currentPage: 4,
          classify: [''],
          state: '',
        },
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
        totalNumber: 100,
        inputVal: '',
        tableData: [
          { id: 10321, goodName: 'ViVo手机', code: '67890122', stock: 999, classify: '分类', price: 22.02, state: 1 },
          { id: 10324, goodName: '苹果手机', code: '67890112', stock: 999, classify: '分类', price: 22.02, state: 1 },
          { id: 10321, goodName: 'ViVo手机', code: '67890122', stock: 999, classify: '分类', price: 22.02, state: 0 },
          { id: 10324, goodName: '苹果手机', code: '67890112', stock: 999, classify: '分类', price: 22.02, state: 1 },
          { id: 10321, goodName: 'ViVo手机', code: '67890122', stock: 999, classify: '分类', price: 22.02, state: 1 },
          { id: 10324, goodName: '苹果手机', code: '67890112', stock: 999, classify: '分类', price: 22.02, state: 0 },
          { id: 10321, goodName: 'ViVo手机', code: '67890122', stock: 999, classify: '分类', price: 22.02, state: 1 },
          { id: 10324, goodName: '苹果手机', code: '67890112', stock: 999, classify: '分类', price: 22.02, state: 0 },
          { id: 10321, goodName: 'ViVo手机', code: '67890122', stock: 999, classify: '分类', price: 22.02, state: 1 },
          { id: 10324, goodName: '苹果手机', code: '67890112', stock: 999, classify: '分类', price: 22.02, state: 1 },
        ],
        multipleSelection: [],
        whiteList: [
          '/good/edit/:id',
          '/good/detail/:id',
        ],
      }
    },
    created() {
      this.$storage.hyperChannel(this.whiteList, true, { key: this.searchKey, value: this.search })
    },
    methods: {
      handleCurrentChange(val) {
        this.log(`当前页: ${val}`)
      },
      /**
       * popover 关闭
       */
      popoverClose() {
        // 关闭 popover
        global.document.getElementById('table').click()
      },
      /**
       * 搜索
       */
      doSearch() {
        this.log(this.search.keyWord)
      },
      /**
       * 上架or下架
       * @param obj
       */
      doEnableDisable(obj) {
        this.log(obj)
        obj.state = !obj.state
        this.$message.success(`${obj.state === 1 ? '上架' : '下架'}成功`)
      },
      /**
       * 删除
       */
      doDelete(id) {
        this.log(id)
        this.$message.success('删除成功')
        this.popoverClose()
      },
      /**
       * 去编辑
       * @param {String} id
       */
      toDoEdit(id) {
        this.$router.push(`/good/edit/${id}`)
      },
      /**
       * 去详情
       * @param {String} id
       */
      toDoDetail(id) {
        this.$router.push(`/good/detail/${id}`)
      },
      /**
       * 类别Change事件
       */
      stateChange() {
      },
      /**
       * 分类Change事件
       * @param {Array} val - 类别值
       */
      classFyChange(val) {
        this.search.classify = val
      },
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .state-select {
    width: 100px;
  }

  .text-right {
    color: red;
  }
</style>