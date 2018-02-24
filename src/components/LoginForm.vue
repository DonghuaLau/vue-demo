<template>
  <el-container class="login-container">
	  <el-tabs class="login-tabs">
        <el-tab-pane label="账号登录">

		  <div class="tab-block">

			<div class="line20"></div>
			<el-input class="login-el-len" v-model="username" placeholder="用户名或邮箱"></el-input>

			<div class="line20"></div>
			<el-input class="login-el-len" type="password" v-model="password" placeholder="密码"></el-input>

			<div class="line20"></div>
			<div class="login-el-len" style="text-align: left;">
			  <el-input class="login-captcha" v-model="captcha" placeholder="验证码"></el-input>
			  <img class="login-captcha" src="static/images/captcha.jpg" style="height:40px;" />
			</div>

			<div class="line10"></div>
			<div class="login-el-len" style="text-align: right;"><a class="login-tips" href="#" @click="handleForgotPasswd">忘记密码？</a></div>

			<div class="line10"></div>
            <el-button class="login-el-len login-button" type="primary" @click="handleLogin()">登录</el-button></el-col>
		  </div>

		</el-tab-pane>

        <el-tab-pane label="扫码登录">
			<div class="line20"></div>
			<div class="tab-block">
				<img src="static/images/qrcode.png" style="width:160px;" />
			</div>
		</el-tab-pane>

  		<el-container class="login-extend-container">
  		    <div class="login-el-len" style="padding-top:5px;">
  		  	<img style="margin-top:5px;height:30px;" src="static/images/login-third-party.png" />
  		    </div>
  		</el-container>
		
  		<el-container class="login-extend-container">
  		    <div class="login-el-len" style="padding-top:10px;">
  		  	<a class="login-tips" style="font-size:1em;" href="#" @click="handleToRegister">立即注册</a>
  		    </div>
  		</el-container>

      </el-tabs>
  </el-container>
</template>

<script>

import 'gconfig'
import axios from 'axios'

export default {
  name: 'LoginForm',
  data () {
    return {
		username: "",
		password: "",
		captcha: ""
    }
  },
  mounted() {
      console.log('handle login mounted')
  },
  methods: {
    handleLogin() {
      console.log('handle login, username: ' + this.username 
			  + ', password: ' + this.password 
			  + ', captcha: ' + this.captcha)
	   axios.get(gconfig.json_demo_url)
	     .then(function (response) {
		   console.dir(response.data)
	     })
	     .catch(function (error) {
	       vm.answer = 'Error! Could not reach the API. ' + error
	     })
    },
	handleForgotPasswd(){
		this.$emit('menuChange', '/reset')
	},
	handleToRegister(){
		this.$emit('menuChange', '/register')
	}
  }
}
</script>

<style>
body{
 background-color: #f5f5f5;
}
#app{
 text-align: center;
}
.login-container{
 min-height:310px;
 width:300px;
 margin-left: auto;
 margin-right: auto;
 background-color: #ffffff;
}
.login-extend-container{
 min-height:48px;
 width:300px;
 margin-left: auto;
 margin-right: auto;
 background-color: #fbf6cd;
}
.login-tabs{
 width:100%;
 height: 450px;
}
.tab-block{
 width:100%;
 min-height:260px;
}

.el-tabs__nav {
 width:100% !important;
 height: 60px !important;
}
.el-tabs__item{
 width:50% !important;
 height: 100% !important;
 line-height: 60px !important;
}
.el-tabs__item:hover, .el-tabs__item.is-active {	
 color: #FFC107 !important;
}
.el-tabs__active-bar{
 background-color: #FFC107 !important;
}
.el-tabs_item:foucs.is-active:is-foucs:not(:active){
 -webkit-box-shadow: 0 0 2px 2px #FFC107 insert !important;
 box-shadow: 0 0 2px 2px #FFC107 insert !important;
}

.login-button{
 background-color: #ff9800 !important;
 border-color: #ff9800 !important;
}
.login-button:hover{
 background-color: #ffa555 !important;
 border-color: #ffa555 !important;
}
.login-el-len{
 width: 80% !important;
 margin-left: auto;
 margin-right: auto;
}
.login-captcha{
 width: 40% !important;
 vertical-align:middle
}
.login-tips{
 font-size: 0.8em;
 text-decoration:none;
 }
.line10{
 margin-top: 10px;
}
.line20{
 margin-top: 20px;
}
</style>
