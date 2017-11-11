<template>
  <ml-layout title="订单详情" :back="true">
    <ml-area-title title="基础信息">
      <ml-one-line>
        <div slot="label">订单号</div>
        <div slot="content">{{detail.goodName}}</div>
      </ml-one-line>
      <ml-one-line>
        <div slot="label">订单价格</div>
        <div slot="content">¥{{detail.price}}</div>
      </ml-one-line>
      <ml-one-line>
        <div slot="label">商品名称</div>
        <div slot="content">{{detail.goodName}}</div>
      </ml-one-line>
      <ml-one-line>
        <div slot="label">商品编码</div>
        <div slot="content">{{detail.code}}</div>
      </ml-one-line>
      <ml-one-line>
        <div slot="label">商品图片</div>
        <div slot="content">
          <ml-image-view-lg v-model="detail.imageUrl"></ml-image-view-lg>
        </div>
      </ml-one-line>
      <ml-one-line class="last-ml-line">
        <div slot="label">订单状态</div>
        <div slot="content">
          <template v-if="detail.state==1">未付款</template>
          <template v-if="detail.state==2">待发货</template>
          <template v-if="detail.state==3">待收获</template>
          <template v-if="detail.state==4">交易成功</template>
        </div>
      </ml-one-line>
      <ml-one-line class="last-ml-line">
        <div slot="label">备注</div>
        <div slot="content">{{detail.remarks}}</div>
      </ml-one-line>
    </ml-area-title>
  </ml-layout>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        detail: {
          id: 56789088, // 订单编号
          goodName: 'ViVo手机', // 商品名称
          code: '546789212', // 商品编码
          price: '1231.22', // 订单总价
          remarks: '米纳斯', // 备注
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