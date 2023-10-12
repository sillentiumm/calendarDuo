import { createRouter, createWebHashHistory } from "vue-router";
import { getAuth } from "firebase/auth";
import { useStore } from 'vuex';

import { auth } from '../firebase'

import Login from '../components/Login.vue'
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
  //   beforeEnter: async (to, from) => {
  //     const store = useStore();
  //     const auth = getAuth();
  //     console.log('before main')

  //     // const user = await store.test2()
  //     console.log('gg', store.state)
  //     console.log('gggg', store)


  //     if(!auth.currentUser) {
  //       return  { name: 'login' }
  //     }
  //     return true
  // },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    // path: '/details',
    path: '/details/',
    name: 'details',
    component: Details,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, from, next) => {

//   console.log('router', localStorage.auth)

// if(to.path === '/login' && localStorage.auth) {
//   console.log('redirect to main')

//   next('/')
//   return;
// }
// if (to.path === '/' && !localStorage.auth) {
//   console.log('redirect to login')
//   next('/login')
//   return
// }

//   next();
// })

export default router