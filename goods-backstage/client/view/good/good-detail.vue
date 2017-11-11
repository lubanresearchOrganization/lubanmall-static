<template>
  <ml-layout title="商品详情" :back="true">
    <ml-area-title title="基础信息">
      <ml-one-line>
        <div slot="label">商品名称</div>
        <div slot="content">{{detail.goodName}}</div>
      </ml-one-line>
      <ml-one-line>
        <div slot="label">商品编码</div>
        <div slot="content">{{detail.code}}</div>
      </ml-one-line>
      <ml-one-line>
        <div slot="label">商品价格</div>
        <div slot="content">¥{{detail.price}}</div>
      </ml-one-line>
      <ml-one-line>
        <div slot="label">商品类别</div>
        <div slot="content">{{detail.classFy}}</div>
      </ml-one-line>
      <ml-one-line>
        <div slot="label">商品图片</div>
        <div slot="content">
          <ml-image-view-lg v-model="detail.imageUrl"></ml-image-view-lg>
        </div>
      </ml-one-line>
      <ml-one-line class="last-ml-line">
        <div slot="label">商品描述</div>
        <div slot="content" class="middle-width">{{detail.describe}}</div>
      </ml-one-line>
    </ml-area-title>
  </ml-layout>
</template>
<script type="text/babel">
  export default {
    data() {
      return {

        detail: {
          goodName: 'ViVo手机', // 商家名称
          code: '546789212', // 商家描述
          price: '1231.22', // 联系人姓名
          describe: '米纳斯', // 联系人电话
          state: 1, // 商家状态 1上架 0 下架
          imageUrl: 'http://img-np.xkeshi.cn/test/w1/d8/bf/c74d9691afbc1bd5091881996cce.jpeg', // 商家logoURL
          classFy: '电子产品', // 商家地址
        },
      }
    },
    methods: {}
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>

</style>