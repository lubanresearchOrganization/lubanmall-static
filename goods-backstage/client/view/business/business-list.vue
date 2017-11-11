<template>
  <ml-layout title="商家列表">
    <div class="button-bar">
      <el-button type="primary" @click="$router.push('/business/add')">添加商家</el-button>
      <el-input class="input-search" placeholder="商家名称" v-model="search.keyWord" @keyup.native="doSearch">
        <div class="inline-block pointer" slot="append" @click="doSearch">
          <ml-icon icon="sousuo"></ml-icon>
        </div>
      </el-input>
    </div>
    <el-table id="table" :data="tableData" style="width: 100%">
      <el-table-column type="index" label="序号" width="65"></el-table-column>
      <el-table-column prop="id" label="商家ID" width="100"></el-table-column>
      <el-table-column prop="businessName" label="商家名称" width="220">
        <template scope="scope">
          <a href="javascript:;" @click="toDoDetail(scope.row.id)" type="text">{{scope.row.businessName}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="createDate" label="创建日期" width="140"></el-table-column>
      <!--<el-table-column-->
      <!--prop="createDate"-->
      <!--label="状态"-->
      <!--width="80">-->
      <!--<template scope="scope">-->
      <!--{{scope.row.state? '启用' : '禁用'}}-->
      <!--</template>-->
      <!--</el-table-column>-->

      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column fixed="right" label="操作" width="80">
        <template scope="scope">
          <!--<el-button-->
          <!--size="mini"-->
          <!--@click="doEnableDisable(scope.row)"> {{!scope.row.state ? '启用' : '禁用'}}-->
          <!--</el-button>-->
          <el-button size="mini" @click="toDoEdit(scope.row.id)">编辑</el-button>
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
        },
        totalNumber: 100,
        inputVal: '',
        tableData: [
          {
            id: 10012321,
            businessName: 'ViVo手机卖家',
            createDate: '2016-05-02',
            address: '上海市普陀区金沙江路 1518 弄',
            state: true
          },
          {
            id: 10012322,
            businessName: 'iphone手机卖家',
            createDate: '2016-05-02',
            address: '上海市普陀区金沙江路1518 弄',
            state: false
          },
          {
            id: 10012333,
            businessName: '小米M手机卖家',
            createDate: '2016-05-02',
            address: '上海市普陀区金沙江路 1518 弄',
            state: false
          },
          { id: 10015223, businessName: '华为手机卖家', createDate: '2016-05-02', address: '上海市普陀区金沙江路 1518 弄', state: true },
          {
            id: 10012323,
            businessName: 'SNMSUNG手机卖家',
            createDate: '2016-05-02',
            address: '上海市普陀区金沙路1518 弄',
            state: false
          },
          {
            id: 10014323,
            businessName: '诺基亚手机卖家',
            createDate: '2016-05-02',
            address: '上海市普陀区金沙江路 1518 弄',
            state: true
          },
          {
            id: 10042323,
            businessName: 'SONY手机卖家',
            createDate: '2016-05-02',
            address: '上海市普陀区金沙江路 1518 弄',
            state: true
          },
          { id: 10016323, businessName: '中兴手机卖家', createDate: '2016-05-02', address: '上海市普陀区金沙江路 1518 弄', state: true },
          {
            id: 10016323,
            businessName: 'OPPON手机卖家',
            createDate: '2016-05-02',
            address: '上海市普陀区金沙江路 1518 弄',
            state: false
          },
          {
            id: 10016323,
            businessName: 'NUOIO手机卖家',
            createDate: '2016-05-02',
            address: '上海市普陀区金沙江路 1518 弄',
            state: false
          },
        ],
        multipleSelection: [],
        whiteList: [
          '/business/edit/:id',
          '/business/detail/:id',
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
       * 启用or禁用
       * @param obj
       */
      doEnableDisable(obj) {
        this.log(obj)
        obj.state = !obj.state
        this.$message.success(`${obj.state ? '启用' : '禁用'}成功`)
      },
      /**
       * 去编辑
       * @param {String} id
       */
      toDoEdit(id) {
        this.$router.push(`/business/edit/${id}`)
      },
      /**
       * 去详情
       * @param {String} id
       */
      toDoDetail(id) {
        this.$router.push(`/business/detail/${id}`)
      },
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>

  .text-right {
    color: red;
  }
</style>