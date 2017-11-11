<template>
  <div class="ml-image-view-lg">
    <div class="ml-image-view-lg-img" :class="{'error-img':isImgError}"
         :style="{width:`${width}px`,height:`${height}px` }" v-if="value">
      <img :src="`${value}!/both/${width}x${height}`" @error="imgError" v-if="!isImgError && value" @click="imgView"/>
      <ml-image-view v-model="previewShow" :model="currentValue"></ml-image-view>
    </div>
    <div v-else>-</div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'image-view-lg',
    props: {
      /**
       * 图片地址
       */
      value: String,
      /**
       * 图片宽度 默认90
       */
      width: {
        type: Number,
        default: 90,
      },
      /**
       * 图片高度 默认90
       */
      height: {
        type: Number,
        default: 90,
      },
    },
    watch: {
      /**
       * 监听值变化
       */
      value() {
        this.isImgError = false
      },
    },
    data() {
      return {
        currentValue: '',
        previewShow: false,
        isImgError: false,
      }
    },
    methods: {
      /**
       * 图标报错事件
       */
      imgError() {
        this.isImgError = true
      },
      /**
       * 点击预览大图才加载大图
       */
      imgView() {
        this.currentValue = this.value
        this.previewShow = true
      },
    },
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .ml-image-view-lg {
    .ml-image-view-lg-img {
      img {
        display: block;
        cursor: pointer;
        width: 100%;
        height: 100%;
      }
    }
    .error-img {
      background: #eef1f6 url("./../../assets/images/img-error.png") center no-repeat;
      background-size: contain;
    }
  }
</style>