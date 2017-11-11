<template>
  <ml-layout title="订单列表">
    <div class="button-bar">
      <ml-label label="订单状态">
        <el-select @change="stateChange" class="state-select" placeholder="请选择" v-model="search.state">
          <el-option label="全部" value=""></el-option>
          <el-option label="未付款" :value="1"></el-option>
          <el-option label="待发货" :value="2"></el-option>
          <el-option label="待收获" :value="3"></el-option>
          <el-option label="交易成功" :value="4"></el-option>
        </el-select>
      </ml-label>
      <el-input class="input-search" placeholder="订单号" v-model="search.keyWord" @keyup.native="doSearch">
        <div class="inline-block pointer" slot="append" @click="doSearch">
          <ml-icon icon="sousuo"></ml-icon>
        </div>
      </el-input>
    </div>
    <el-table border id="table" :data="tableData" style="width: 100%">
      <el-table-column type="index" label="序号" width="65"></el-table-column>
      <el-table-column prop="id" label="订单号" width="130">
        <template scope="scope">
          <a href="javascript:;" @click="toOrderDetail(scope.row.id)" type="text">{{scope.row.id}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="goodName" label="商品名称" width="260">
        <template scope="scope">
          <a href="javascript:;" @click="toGoodDetail(scope.row.id)" type="text">{{scope.row.goodName}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="number" label="数量" width="100"></el-table-column>
      <el-table-column prop="price" label="价格" width="120"></el-table-column>
      <el-table-column prop="state" label="状态">
        <template scope="scope">
          <template v-if="scope.row.state==1">未付款</template>
          <template v-if="scope.row.state==2">待发货</template>
          <template v-if="scope.row.state==3">待收获</template>
          <template v-if="scope.row.state==4">交易成功</template>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="110">
        <template scope="scope">
          <el-button v-if="scope.row.state==1" size="mini" @click="doEnableDisable(scope.row)">改订单价格</el-button>
          <el-button v-if="scope.row.state==2" size="mini" @click="toDoEdit(scope.row.id)">发货</el-button>
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
          { id: 1032222221, goodName: 'ViVo手机', number: 3, classify: '分类', price: 22.02, state: 1 },
          { id: 1032222221, goodName: 'ViVo手机', number: 3, classify: '分类', price: 22.02, state: 2 },
          { id: 1032222221, goodName: 'ViVo手机', number: 3, classify: '分类', price: 22.02, state: 3 },
          { id: 1032222221, goodName: 'ViVo手机', number: 3, classify: '分类', price: 22.02, state: 4 },
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
       * 去商品详情
       * @param {String} id
       */
      toGoodDetail(id) {
        this.$router.push(`/good/detail/${id}`)
      },
      /**
       * 去订单详情
       * @param {String} id
       */
      toOrderDetail(id) {
        this.$router.push(`/order/detail/${id}`)
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
    width: 110px;
  }

  .text-right {
    color: red;
  }
</style>