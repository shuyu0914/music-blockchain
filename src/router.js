import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ShoppingCart from './views/ShoppingCart.vue'
import Payments from './views/Payments.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import MusicUpload from './views/MusicUpload.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/musicupload',
      name: 'MusicUpload',
      component: MusicUpload
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: ShoppingCart
    },    
    {
      path: '/payments',
      name: 'payments',
      component: Payments
    },
    {path: '*', redirect: '/' }
  ]
})
