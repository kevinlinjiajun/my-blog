<template>
  <div class="index">
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3>{{item}}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-row :gutter="20">
      <el-col :span="18">
        <div class="left_content_top">
          <el-card class="content_item">
            <el-col :span="18">
              <h4>This is my first bolg!</h4>
              <div class="content_item_tag">
                <el-tag type="info">javascript</el-tag>
                <el-tag type="info">vue</el-tag>
              </div>
              <p>This is my first bolg!This is my first bolg!
                This is my first bolg!This is my first bolg!
                This is my first bolg!This is my first bolg!</p>
            </el-col>
            <el-col :span="6">
                <img src="../../static/images/logo.png">
            </el-col>
          </el-card>
        </div>
        <div class="main_content">
          <el-card class="content_item">
            <el-col :span="18">
              <h4>This is my first bolg!</h4>
              <div class="content_item_tag">
                <el-tag type="info">javascript</el-tag>
                <el-tag type="info">vue</el-tag>
              </div>
              <p>This is my first bolg!This is my first bolg!
                This is my first bolg!This is my first bolg!
                This is my first bolg!This is my first bolg!</p>
            </el-col>
            <el-col :span="6">
                <img src="../../static/images/logo.png">
            </el-col>
          </el-card>
          <el-card class="content_item">
            <el-col :span="18">
              <h4>This is my first bolg!</h4>
              <div class="content_item_tag">
                <el-tag type="info">javascript</el-tag>
                <el-tag type="info">vue</el-tag>
              </div>
              <p>This is my first bolg!This is my first bolg!
                This is my first bolg!This is my first bolg!
                This is my first bolg!This is my first bolg!</p>
            </el-col>
            <el-col :span="6">
                <img src="../../static/images/logo.png">
            </el-col>
          </el-card>
          <el-card class="content_item">
            <el-col :span="18">
              <h4>This is my first bolg!</h4>
              <div class="content_item_tag">
                <el-tag type="info">javascript</el-tag>
                <el-tag type="info">vue</el-tag>
              </div>
              <p>This is my first bolg!This is my first bolg!
                This is my first bolg!This is my first bolg!
                This is my first bolg!This is my first bolg!</p>
            </el-col>
            <el-col :span="6">
                <img src="../../static/images/logo.png">
            </el-col>
          </el-card>
        </div>
      </el-col>
      <el-col :span="6">
        <el-card class="content_item">
          <div slot="header">
            <span>站点公告</span>
          </div>
          <div class="message">
            <p>This is my first bolg!This is my first bolg!
                This is my first bolg!This is my first bolg!
                This is my first bolg!This is my first bolg!</p>
          </div>
        </el-card>
        <el-card class="content_item">
          <div slot="header">
            <span>热门标签</span>
          </div>
          <div class="hotTag">
            <el-tag type="info">javascript</el-tag>
            <el-tag type="info">vue</el-tag>
            <el-tag type="info">javascript</el-tag>
            <el-tag type="info">vue</el-tag>
            <el-tag type="info">javascript</el-tag>
            <el-tag type="info">vue</el-tag>
            <el-tag type="info">javascript</el-tag>
            <el-tag type="info">vue</el-tag>
            <el-tag type="info">javascript</el-tag>
            <el-tag type="info">vue</el-tag>
          </div>
        </el-card>
        <el-card class="content_item">
          <div slot="header">
            <span>最新文章</span>
          </div>
          <div class="hotTag">
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { urls } from './../assets/js/urls'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-carousel{
  margin: 10px 0
}
.el-carousel__item h3{
  color: #475669;
  font-size: 14px;
  opacity: 0.7;
  line-height: 400px;
  margin: 0
}
.el-carousel__item:nth-child(2n){
  background-color: #99a9bf
}
.el-carousel__item:nth-child(2n+1){
  background-color: #d3dce6
}
.el-card{
  margin: 10px 0;
  text-align: left
}
.el-card p{
  color: #8c8c8c
}
</style>

<style>
</style>
