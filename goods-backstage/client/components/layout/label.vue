<template>
  <div class="ml-label">
    <div class="inline-block mgr5" v-if="label">{{label}} :</div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'label',
    props: {
      label: {
        type: [String, Number],
        default: ''
      }
    },
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .ml-label {
    display: inline-block;
  }
</style>