<template>
  <el-menu :default-active="activeIndex" class="login-menu" mode="horizontal" @select="handleSelect" @menuChange="handleMenuChange" active-text-color="#FFC107">
    <el-menu-item class="menu-brand" disabled>账号中心</el-menu-item>
    <el-menu-item index="/login">登录</el-menu-item>
    <el-menu-item index="/register">注册</el-menu-item>
  </el-menu>
</template>

<script>

import 'gconfig'
import axios from 'axios'

function setMenuItem(obj) {
	if(obj.$route.path == '/login'){
		obj.activeIndex = '1'
	}else if(obj.$route.path == '/register'){
		obj.activeIndex = '2'
	}else if(obj.$route.path == '/reset'){
		obj.activeIndex = '0'
	}else{
		obj.activeIndex = '0'
	}
}

export default {
  name: 'LoginForm',
  data () {
    return {
		activeIndex: '/login'
    }
  },
  props:[
	"activeIndex"
  ],
  mounted() {
    console.log('handle login mounted')
	this.activeIndex = this.$route.path
  },
  watch: {
	activeIndex: function(newVal, oldVal){
    	console.log('activeIndex changed, activeIndex: ' + this.acitiveIndex 
				+ ', new: ' + newVal
				+ ', old: ' + oldVal)
		this.$router.push({path: newVal})
	}
  },
  methods: {
	handleSelect(key, keyPath) {
    	console.log('main menu handleSelect of route path: ' + this.$route.path
			+ ', key: ' + key)
		this.activeIndex = key
		this.$router.push({path: key})
		this.$emit('menuChange', this.activeIndex)
		setMenuItem(this)
    },
	handleMenuChange(route_path){
		console.log('handleMenuChange in MainMenu, this route path: ' + this.$route.path + ', pass route path: ' + route_path)
		this.$router.push({path: route_path})
	}
  }
}
</script>

<style>
.menu-brand{
 font-size:1.2em;
 color: #000000 !important;
 opacity: 1 !important;
 cursor: pointer !important;
}
</style>
