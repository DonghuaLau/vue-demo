import Vue from 'vue'
import Router from 'vue-router'
import MultiComp from '@/components/MultiComp'
import HelloWorld from '@/components/HelloWorld'
import HomeDemo from '@/components/HomeDemo'
//import LoginForm from '@/components/LoginForm'
//import RegisterForm from '@/components/RegisterForm'
//import ResetPasswordForm from '@/components/ResetPasswordForm'
//import MainMenu from '@/components/MainMenu'
import AccountPage from '@/components/AccountPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AccountPage',
      component: AccountPage
    },
    {
      path: '/demo',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/multi',
      name: 'MultiComp',
      component: MultiComp
    },
    {
      path: '/login',
      name: 'AccountPage',
      component: AccountPage
    },
    {
      path: '/register',
      name: 'AccountPage',
      component: AccountPage
    },
    {
      path: '/reset',
      name: 'AccountPage',
      component: AccountPage
    },
    {
      path: '/notfound',
      name: 'AccountPage',
      component: AccountPage
    },
	{
      path: '*',
      name: 'AccountPage',
      component: AccountPage
    }
  ]
})

