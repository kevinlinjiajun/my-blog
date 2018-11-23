<template>
  <div class="home">
    <div class="nav">
      <div class="nav_background">
        <img src="../assets/images/bg.jpg" width="100%">
      </div>
      <div class="nav_content">
        <h1>HOME {{ $store.state.name }}</h1>
        <el-menu default-active="/home" mode="horizontal">
          <el-menu-item index="/home">首页</el-menu-item>
          <el-submenu index="1">
            <template slot="title">前端开发</template>
            <el-menu-item index="/home">JavaScript</el-menu-item>
            <el-menu-item index="/home">CSS</el-menu-item>
            <el-menu-item index="/home">Vue</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
// import { urls } from './../assets/js/urls'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.nav_background{
  height: 125px;
  overflow: hidden;
}
</style>

<style>
</style>
