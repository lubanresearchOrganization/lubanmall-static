<template>
  <ml-layout title="测试页面">
    <div slot="right" class="text-right">
      123123
    </div>
    <ml-list-button>
      <div class="inline-block input-search" slot="search">
        <el-input placeholder="请输入内容" v-model="inputVal">
          <div class="inline-block" slot="append" style="cursor: pointer">
            <ml-icon icon="sousuo"></ml-icon>
          </div>
        </el-input>
      </div>
    </ml-list-button>
    <el-table
      :data="tableData"
      border
      tooltip-effect="dark"
      @selection-change="handleSelectionChange"
      style="width: 100%">
      <el-table-column
        type="index"
        width="55">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-warp">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </ml-layout>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        inputVal: '',
        currentPage: 4,
        tableData: [
          { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
          { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄' },
          { date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1519 弄' },
          { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
          { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
          { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄' },
          { date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1519 弄' },
          { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' },
          { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
          { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄' },
        ],
        multipleSelection: [],
      }
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleEdit(index, row) {
        this.log(index, row);
      },
      handleDelete(index, row) {
        this.log(index, row);
      },
      handleSizeChange(val) {
        this.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.log(`当前页: ${val}`);
      },
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
</style>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .input-search {
    margin-left: 10px;
  }

  .text-right {
    color: red;
  }
</style>