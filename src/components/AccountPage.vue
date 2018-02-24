<template>
  <div>
    <mainmenu v-bind:activeIndex="menuIndex" @menuChange="handleMenuChange"></mainmenu>
	<div class="line10"></div>
	<div class="main-body">
		<div v-if="is_home" class="tab-block">
			<h2>{{msg}}</h2>
		</div>
    	<loginform v-if="is_login" @menuChange="handleMenuChange"></loginform>
    	<registerform v-if="is_register" @menuChange="handleMenuChange"></registerform >
    	<resetform v-if="is_reset" @menuChange="handleMenuChange"></resetform>
	</div>
	<div class="line10"></div>
    <footmenu></footmenu>
  </div>
</template>

<script>
import mainmenu from './MainMenu.vue'
import footmenu from './FootMenu.vue'
import loginform from './LoginForm.vue'
import registerform from './RegisterForm.vue'
import resetform from './ResetPasswordForm.vue'

function setSubComp(obj) 
{
	obj.menuIndex = obj.$route.path

	if(obj.$route.path == '/'){
		obj.msg = '账号中心'
		obj.is_home = true
		obj.is_login = false 
		obj.is_register = false
		obj.is_reset = false
	}else if(obj.$route.path == '/login'){
		obj.is_home = false
		obj.is_login = true
		obj.is_register = false
		obj.is_reset = false
	}else if(obj.$route.path == '/register'){
		obj.is_home = false
		obj.is_login = false
		obj.is_register = true
		obj.is_reset = false
	}else if(obj.$route.path == '/reset'){
		obj.is_home = false
		obj.is_login = false
		obj.is_register = false
		obj.is_reset = true
	}else{
		console.log('route path[' + obj.$route.path + '] not found.')
		obj.msg = '页面未找到' // why not change?
		obj.is_home = false
		obj.is_login = false
		obj.is_register = false
		obj.is_reset = false
	}

}

export default {
  name: 'AccountPage',
  components: { mainmenu, footmenu, loginform, registerform, resetform },
  data () {
    console.log('data of account page')
    return {
		msg: '账号中心',
		is_home: false,
		is_login: false,
		is_register: false,
		is_reset: false,
		menuIndex: '/login'
    }
  },
  mounted () {
    window.document.title = 'Account Page'
	setSubComp(this)
    console.log('account page of route path: ' + this.$route.path + ', msg: ' + this.msg)
  },
  methods: {
	handleMenuChange(route_path)
	{
		console.log('handleMenuChange, 1 this route path: ' + this.$route.path + ', pass route path: ' + route_path)
		this.$router.push({path: route_path})
		console.log('handleMenuChange, 2 this route path: ' + this.$route.path + ', pass route path: ' + route_path)
		setSubComp(this)
	}
  }
}
</script>

<style>
.main-body{
 width: 100%;
 min-height: 500px;
}
</style>
