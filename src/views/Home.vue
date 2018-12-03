<template>
  <div class="home">
    <div class="nav">
      <!-- <div class="nav_background">
        <img src="../assets/images/bg.jpg" width="100%">
      </div> -->
      <div class="nav_content">
        <el-menu mode="horizontal" default-active="/index"
         :router="true" background-color="#545c64" text-color="#fff" active-text-color="#19aa8d">
          <el-menu-item index="/index">首页</el-menu-item>
          <el-submenu index="1">
            <template slot="title">开发</template>
            <el-menu-item index="/js">JavaScript</el-menu-item>
            <el-menu-item index="/css">CSS</el-menu-item>
            <el-menu-item index="/vue">Vue</el-menu-item>
          </el-submenu>
          <el-menu-item index="/login">后台管理</el-menu-item>
          <el-menu-item index="/message">留言板</el-menu-item>
          <el-menu-item index="/about">关于</el-menu-item>
        </el-menu>
      </div>
    </div>
    <router-view></router-view>
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
  },
  created () {
    this.$router.push('/index')
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.nav_background{
  height: 125px;
  overflow: hidden;
}
.nav_content{
  margin: 0 auto;
  background-color: rgb(84,92,100)
}
.el-menu.el-menu--horizontal{
  margin: 0 auto;
  max-width: 1200px;
}
.nav~div{
  margin: 0 auto;
  max-width: 1200px;
}
</style>

<style>
</style>
