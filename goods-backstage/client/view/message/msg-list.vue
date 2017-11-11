<template>
  <ml-layout title="消息中心">
    <div class="button-bar">
      <el-popover placement="top"
                  width="280"
                  ref="plOpt">
        <div class="common-pop-wrap">
          <p class="pop-content center">删除后，此消息将无法恢复。确定删除？</p>
          <div class="pop-bottom">
            <el-button type="primary" @click="doDelete()">确定</el-button>
            <el-button @click="popoverClose">取消</el-button>
          </div>
        </div>
      </el-popover>
      <el-button type="primary" @click="markRead">全部已读</el-button>
      <el-button type="danger" v-popover:plOpt>批量删除</el-button>
      <ml-label label="状态" class="mgl10">
        <el-select @change="stateChange" class="state-select" placeholder="请选择" v-model="search.state">
          <el-option label="全部" value=""></el-option>
          <el-option label="已读" :value="1"></el-option>
          <el-option label="未读" :value="0"></el-option>
        </el-select>
      </ml-label>
    </div>
    <el-table border id="table" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="title" label="标题" width="160">
        <template scope="scope">
          <a href="javascript:;" @click="toDoDetail">{{scope.row.title}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="content" label="内容">
        <template scope="scope">
          <div class="nowrap">{{scope.row.content}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="发送时间" width="170"></el-table-column>
      <el-table-column prop="state" label="状态" width="80">
        <template scope="scope">
          {{scope.row.state == 1 ? '已读' : '未读'}}
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="170">
        <template scope="scope">
          <el-popover placement="top"
                      width="280"
                      ref="delOpt">
            <div class="common-pop-wrap">
              <p class="pop-content center">删除后，此消息将无法恢复。确定删除？</p>
              <div class="pop-bottom">
                <el-button type="primary" @click="doDelete(scope.row.id)">确定</el-button>
                <el-button @click="popoverClose">取消</el-button>
              </div>
            </div>
          </el-popover>
          <el-button size="mini" @click="markRead(scope.row.id)">标记已读</el-button>
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
        searchKey: '/msg/list',
        search: {
          currentPage: 4,
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
        tableData: [
          { id: 10321, title: '系统消息', content: '67890122', createTime: '2017-10-10 19:23:23', state: 0 },
          { id: 10321, title: '系统消息', content: '67890122', createTime: '2017-10-10 19:23:23', state: 0 },
          { id: 10321, title: '系统消息', content: '67890122', createTime: '2017-10-10 19:23:23', state: 0 },
          { id: 10321, title: '系统消息', content: '67890122', createTime: '2017-10-10 19:23:23', state: 0 },
          { id: 10321, title: '系统消息', content: '67890122', createTime: '2017-10-10 19:23:23', state: 0 },
          { id: 10321, title: '系统消息', content: '67890122', createTime: '2017-10-10 19:23:23', state: 0 },
          { id: 10321, title: '系统消息', content: '67890122', createTime: '2017-10-10 19:23:23', state: 1 },
          { id: 10321, title: '系统消息', content: '67890122', createTime: '2017-10-10 19:23:23', state: 1 },
          { id: 10321, title: '系统消息', content: '67890122', createTime: '2017-10-10 19:23:23', state: 1 },
          { id: 10321, title: '系统消息', content: '67890122', createTime: '2017-10-10 19:23:23', state: 1 },
        ],
        multipleSelection: [],
        whiteList: [
          '/msg/detail/:id',
        ],
      }
    },
    created() {
      this.$storage.hyperChannel(this.whiteList, true, { key: this.searchKey, value: this.search })
    },
    methods: {
      handleCurrentChange(val) {
        this.multipleSelection = []
        this.log(`当前页: ${val}`)
      },
      handleSelectionChange(val) {
        this.multipleSelection = val
      },
      /**
       * popover 关闭
       */
      popoverClose() {
        // 关闭 popover
        global.document.getElementById('table').click()
      },
      /**
       * 删除
       */
      doDelete(id) {
        if (!id && this.multipleSelection.length === 0) {
          this.$message.info('请选择要删除的数据！')
          return
        }
        this.log(id)
        this.$message.success('删除成功')
      },
      /**
       * 去详情
       * @param {String} id
       */
      toDoDetail(id) {
        this.$router.push(`/msg/detail/${id}`)
      },
      /**
       * 状态改变事件
       * @param val
       */
      stateChange(val) {
        this.log(val)
      },
      /**
       * 标记事件
       * @param id
       */
      markRead(id) {
        this.log(id)
        this.$message.success('标记成功')
      }
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