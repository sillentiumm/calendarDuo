import { createRouter, createWebHashHistory } from "vue-router";
import { getAuth } from "firebase/auth";
import { useStore } from 'vuex';

import { auth } from '../firebase'

import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Main from '../components/Main.vue'
import Details from '../components/Details.vue'

// import { useUserStore } from '../store/userStore';


const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    meta: {
      requireAuth: true
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/details/',
    name: 'details',
    component: Details,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {

  const auth = getAuth()
  auth.onAuthStateChanged(user => {    
    if(to.path == '/register') {
      return
    }
    else if (!user && to.path !== '/login') {
      router.push('/login')
    }
    return
  })
  next();
})

export default router