<template>
  <div class="login">
    <h1>LOGIN</h1>
    <img alt="Vue logo" src="../assets/images/logo.png">
    <div class="login_form">
      <el-form :model="loginForm" label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="loginForm.usernumber" placeholder="Please input usernumber..."></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="loginForm.password" placeholder="Please input password..."></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button>
            <router-link to="/register">注册</router-link>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { urls } from './../assets/js/urls'
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        usernumber: 'F1331894',
        password: '123456'
      }
    }
  },
  methods: {
    onSubmit () {
      this.$store.commit('set_name', this.loginForm.usernumber)
      this.axios.post(urls.login, this.qs.stringify(this.loginForm)).then(response => {
        let data = response.data
        console.log(data)
        if (data.code === 0) {
          window.localStorage.setItem('token', data.payload.token)
          this.$message({
            message: '登录成功，即将跳至首页...',
            type: 'success',
            duration: 2000,
            onClose: () => {
              this.$router.push('/home')
            }
          })
        }
      }).catch(response => {
        console.log(response)
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .login_form {
    width: 400px;
    margin: auto;
  }
</style>

<style>
.el-form-item__label{
  font-weight: bold
}
</style>
