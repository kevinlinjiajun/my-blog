<template>
  <div class="register">
    <el-row align="middle">
      <el-col :span="12">
        <img alt="Vue logo" src="../assets/images/logo.png">
      </el-col>
      <el-col :span="12">
        <h1>REGISTER</h1>
        <div class="register_form">
          <el-form :model="registerForm" label-width="80px">
            <el-form-item label="账号">
              <el-input v-model="registerForm.usernumber" placeholder="Please input usernumber..."></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input type="password" v-model="registerForm.password" placeholder="Please input password..."></el-input>
            </el-form-item>
            <el-form-item label="昵称">
              <el-input v-model="registerForm.name" placeholder="Please input name..."></el-input>
            </el-form-item>
            <el-form-item label="年龄">
              <el-input-number v-model="registerForm.age" placeholder="age"></el-input-number>
            </el-form-item>
            <el-form-item label="生日">
              <el-date-picker v-model="registerForm.birthday" placeholder="birthday"></el-date-picker>
            </el-form-item>
            <el-form-item label="职业">
              <el-input v-model="registerForm.profession" placeholder="Please input profession..."></el-input>
            </el-form-item>
            <el-form-item label="地址">
              <el-input v-model="registerForm.address" placeholder="Please input address..."></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onRegister">Register</el-button>
              <el-button type="info" native-type="reset">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { urls } from './../assets/js/urls'
export default {
  name: 'register',
  data () {
    return {
      registerForm: {
        usernumber: 'F1331894',
        password: '123456',
        name: 'kevin',
        age: '22',
        birthday: new Date(),
        profession: 'fadsf',
        address: 'fasdfa'
      }
    }
  },
  methods: {
    onRegister () {
      if (typeof this.registerForm.birthday !== 'string') {
        this.registerForm.birthday = this.registerForm.birthday.toLocaleDateString()
      }
      console.log(this.registerForm)
      this.axios.post(urls.register, this.qs.stringify(this.registerForm)).then(response => {
        let data = response.data
        console.log(data)
        if (data.code === 0) {
          this.$message({
            message: '注册成功，即将跳到登录页...',
            type: 'success',
            duration: 2000,
            onClose: () => {
              this.$router.push('/')
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

<style lang="scss" scoped>
.register{
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 601px;
  width: 1000px;
}
</style>
<style lang="scss">

</style>
