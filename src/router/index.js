import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Input_Daily_Scrum from '../views/Input_Daily_Scrum.vue'
import Navbar from '../views/Navbar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    components: {default: Login}
  },
  {
    path: '/register',
    name: 'Register',
    components: {default: Register}
  },
  {
    path: '/input_daily_scrum',
    name: 'Input_Daily_Scrum',
    components: {default: Input_Daily_Scrum, header : Navbar}
  },
  {
    path: '/',
    name: 'Home',
    component: Register
  },
  // {
  //   path: '/about',
  //   name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters.isLoggedIn) {
//       next()
//       return
//     }
//     next('/login') 
//   } else {
//     next() 
//   }
// })

export default router

