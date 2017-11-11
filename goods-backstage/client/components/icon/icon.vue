<template>
  <i :class="`iconfont icon-${icon}`"></i>
</template>
<script type="text/babel">
  export default {
    name: 'icon',
    props: {
      icon: {
        type: String,
        default: '',
      }
    }
  }
</script>