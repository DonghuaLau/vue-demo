<template>
  <el-container class="reset-container">
	<div class="tab-block">

	  <div class="line20"></div>
      <div style="padding-left:10px; text-align:left;">
	    <p>您正在重置密码，请输入正确信息</p> 
      </div>

	  <div class="line20"></div>
	  <el-input class="login-el-len" v-model="email" placeholder="注册邮箱"></el-input>

	  <div class="line20"></div>
	  <div class="login-el-len" style="text-align: left;">
	    <el-input class="login-captcha" v-model="captcha" placeholder="验证码"></el-input>
	    <img class="login-captcha" src="static/images/captcha.jpg" style="height:40px;" />
	  </div>

	  <div class="line10"></div>
      <el-button class="login-el-len login-button" type="primary" @click="handleReset()">重置密码</el-button></el-col>
      <div class="login-el-len" style="padding-top:20px;text-align:right;font-size:0.8em;">
        如果没注册，<a class="login-tips" href="#" @click="handleToRegister">立即注册</a>
      </div>

	</div>
  </el-container>
</template>

<script>
export default {
  name: 'ResetPasswordForm',
  data () {
    return {
    	email: "",
    	captcha: ""
    }
  },
  mounted() {
      console.log('handle reset password mounted')
  },
  methods: {
    handleReset() {
      console.log('handle reset password, email: ' + this.email
    		  + ', captcha: ' + this.captcha)
    },
	handleToRegister(){
		this.$emit('menuChange', '/register')
	}
  }
}
</script>

<style>
.reset-container{
 min-height:280px;
 width:300px;
 margin-left: auto;
 margin-right: auto;
 background-color: #ffffff;
}
</style>
