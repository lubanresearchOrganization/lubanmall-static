<template>
  <div class="view-layout">
    <div class="view-layout-topbar">
      <zd-top-bar></zd-top-bar>
    </div>
    <div class="view-layout-sidebar">
      <zd-side-bar></zd-side-bar>
    </div>
    <div class="view-layout-warp">
      <!--vl-warp-nav暂且用不到隐藏-->
      <!--<div class="vl-warp-nav"></div>-->
      <div class="vl-warp-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" ref="stylesheet/stylus">
  html, body {
    position: relative;
    height: 100%;
  }

</style>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .view-layout {
    position: relative;
    height: 100%;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding-top: 50px;
    padding-left: 180px;
    overflow: hidden;
    min-width: 1024px;
    .view-layout-topbar {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 2;
      height 50px;
      background-color: #373d41;
    }
    .view-layout-sidebar {
      position: absolute;
      height: 100%;
      width: 180px;
      top: 0;
      left 0;
      z-index: 1;
      background-color: #293038;
      box-sizing: border-box;
      padding-top: 50px;
    }
  }

</style>