<template>
  <div class="ml-area-title-bg">
    <h1 class="ml-area-title-header">
      <span>{{title}}</span>
      <span><slot name="mark"></slot></span>
    </h1>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'area-title',
    /**
     * @param {String} title
     */
    props: {
      title: {
        type: String,
        default: '',
      },
    },
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .ml-area-title-bg {
    padding: 0 0 0 20px;
    h1.ml-area-title-header {
      margin-bottom: 20px;
      line-height: 50px;
      border-bottom: 1px solid #d7dee1;
      font-size: 16px;
      color: #333
      font-weight: normal
      span {
        display: inline-block
        margin-right: 3px
      }
      i {
        color: #b8c3d4
      }
    }
  }
</style>