<template>
  <el-container class="register-container">
	<div class="tab-block">

	  <div class="line20"></div>
      <div style="padding-left:10px; text-align:left;">
	    <p>请输入注册信息</p> 
      </div>

	  <div class="line20"></div>
	  <el-input class="login-el-len" v-model="username" placeholder="用户名"></el-input>
	  <p class="info-tips">用户名至少5个字符，只能包含数字、字母、下划线。</p>

	  <div class="line20"></div>
	  <el-input class="login-el-len" v-model="email" placeholder="注册邮箱"></el-input>
	  <p class="info-tips"></p>

	  <div class="line20"></div>
	  <el-input class="login-el-len" type="password" v-model="password" placeholder="登录（6-16个字符）"></el-input>
	  <p class="info-tips"></p>

	  <div class="line20"></div>
	  <el-input class="login-el-len" type="password" v-model="repassword" placeholder="确认密码"></el-input>
	  <p class="info-tips"></p>

	  <div class="line20"></div>
	  <div class="login-el-len" style="text-align: left;">
	    <el-input class="login-captcha" v-model="captcha" placeholder="验证码"></el-input>
	    <img class="login-captcha" src="static/images/captcha.jpg" style="height:40px;" />
	  </div>

	  <div class="line20"></div>
      <el-button class="login-el-len login-button" type="primary" @click="handleRegister()">注册</el-button></el-col>
	  <div class="line20"></div>

	  <el-container class="login-extend-container">
	      <div class="login-el-len" style="padding-top:5px;">
	    	<img style="margin-top:5px;height:30px;" src="static/images/login-third-party.png" />
	      </div>
	  </el-container>

  		<el-container class="login-extend-container">
  		    <div class="login-el-len" style="padding-top:10px;">
  		  	已注册，<a class="login-tips" style="font-size:1em;" href="#" @click="handleToLogin">马上登录</a>
  		    </div>
  		</el-container>

	</div>
  </el-container>
</template>

<script>
export default {
  name: 'RegisterForm',
  data () {
    return {
    	username: "",
    	email: "",
    	password: "",
    	repassword: "",
    	captcha: ""
    }
  },
  mounted() {
      console.log('handle register mounted')
  },
  methods: {
    handleRegister() {
      console.log('handle register, username: ' + this.username
    		  + ', email: ' + this.email
    		  + ', password: ' + this.password
    		  + ', repassword: ' + this.repassword
    		  + ', captcha: ' + this.captcha)
    },
	handleToLogin(){
		this.$emit('menuChange', '/login')
	}
  }
}
</script>

<style>
.register-container{
 min-height:280px;
 width:300px;
 margin-left: auto;
 margin-right: auto;
 background-color: #ffffff;
}
.info-tips{
 font-size: 0.6em;
 text-align: left;
 width: 80%;
 margin: 5px auto 10px auto;
 color: #7385e6;
}
/*
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
.tab-block{
 width:100%;
 min-height:260px;
}

.line10{
 margin-top: 10px;
}
.line20{
 margin-top: 20px;
}
*/

</style>
