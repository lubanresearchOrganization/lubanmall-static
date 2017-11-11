<template>
  <ml-layout title="商家详情" :back="true">
    <ml-area-title title="基础信息">
      <ml-one-line>
        <div slot="label">商家名称</div>
        <div slot="content">{{detail.businessName}}</div>
      </ml-one-line>
      <ml-one-line>
        <div slot="label">商家LOGO</div>
        <div slot="content">
          <ml-image-view-lg v-model="detail.logoUrl"></ml-image-view-lg>
        </div>
      </ml-one-line>
      <ml-one-line>
        <div slot="label">商家地址</div>
        <div slot="content">{{detail.address}}</div>
      </ml-one-line>
      <ml-one-line class="last-ml-line">
        <div slot="label">商家描述</div>
        <div slot="content" class="middle-width">{{detail.describe}}</div>
      </ml-one-line>
    </ml-area-title>
    <ml-area-title title="用户信息" class="ml-last-area">
      <ml-one-line>
        <div slot="label">联系人姓名</div>
        <div slot="content">{{detail.contactName}}</div>
      </ml-one-line>
      <ml-one-line>
        <div slot="label">联系电话</div>
        <div slot="content">{{detail.contactPhone}}</div>
      </ml-one-line>
    </ml-area-title>
  </ml-layout>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        detail: {
          businessName: 'ViVo手机卖家', // 商家名称
          describe: 'ViVo手机卖家商家描述ViVo手机卖家商家描述ViVo手机卖家商家描述ViVo手机卖家商家描述ViVo手机卖家商家描述ViVo手机卖家商家描述', // 商家描述
          contactName: '张三分', // 联系人姓名
          contactPhone: '123123124124', // 联系人电话
          state: true, // 商家状态true启用,false禁用
          logoUrl: 'http://img-np.xkeshi.cn/test/w1/d8/bf/c74d9691afbc1bd5091881996cce.jpeg', // 商家logoURL
          address: '上海市普陀区金沙江路 1518 弄', // 商家地址
        },
      }
    },
    methods: {}
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>

</style>