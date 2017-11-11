<template>
  <div class="ml-one-line">
    <div class="ml-one-line-label">
      <slot name="label"></slot>
    </div>
    <div class="ml-one-line-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'one-line',
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .ml-one-line {
    display: flex
    justify-content: flex-start
    margin-top: 20px
    .ml-one-line-label {
      flex-shrink: 0
      width: 120px
      color: #5b6a7d
      font-size: 14px
      vertical-align: top
    }
    .ml-one-line-content {
      flex: 1
      font-size: 14px
      color: #333
    }
  }
</style>