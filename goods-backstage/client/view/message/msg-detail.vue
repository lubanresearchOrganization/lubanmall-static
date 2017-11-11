<template>
  <ml-layout title="消息详情" :back="true">
    <ml-area-title title="基础信息">
      <ml-one-line>
        <div slot="label">标题</div>
        <div slot="content">{{detail.title}}</div>
      </ml-one-line>
      <ml-one-line class="last-ml-line">
        <div slot="label">内容</div>
        <div slot="content" class="middle-width">{{detail.content}}</div>
      </ml-one-line>
    </ml-area-title>
  </ml-layout>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        detail: {
          title: '系统消息', //
          content: '11月9日，湖南平江石牛寨透明玻璃桥举办“单身狗”相亲会，主人们带着自己家的宠物狗登上玻璃桥，为狗狗配对。', //
        },
      }
    },
    methods: {}
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>

</style>