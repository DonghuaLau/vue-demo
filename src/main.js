// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import './assets/libs/element-ui/theme-chalk-2.2.0-index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

/*
router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
  	next('/notFound');
  } else {
  	next();
  }
})
*/
