import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { $auth } from '@/firebase-config'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "login" */ '../views/SignUp.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/mail-verify',
    name: 'MailVerify',
    component: () => import(/* webpackChunkName: "login" */ '../views/MailNotVerified.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Profile.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Administration.vue'),
    meta: {
      requiresAuth: true
    },
    beforeEnter: isAdmin
  },
  {
    path: '/admin/new',
    name: 'AddImpulse',
    component: () => import(/* webpackChunkName: "admin" */ '../views/admin/AddImpulse.vue'),
    meta: {
      requiresAuth: true
    },
    beforeEnter: isAdmin
  },
  {
    path: '/highscore',
    name: 'Highscore',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Highscore.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Getting a router.beforeEach functino which handles the case if the user is logged in or not
router.beforeEach((to, from, next) => {
  const currentUser = $auth.currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser && to !== '/login') {
    next({
      path: '/login',
      params: { nextUrl: to.fullPath }
    })
  } else {
    next()
  }
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

$auth.onAuthStateChanged(user => {
  if (user) {
    if (user.emailVerified === false) {
      user.sendEmailVerification()
      router.push('/mail-verify')
    }
  }
})

async function isAdmin (to, from, next) {
  const isAdmin = store.getters['Userdata/isAdmin']
  if (isAdmin) {
    next()
  } else {
    next(false)
    Vue.notify({
      group: 'notification',
      title: 'Fehler',
      type: 'error',
      text: 'Keine Berechtigungen. Kontaktieren Sie den Systemadministrator.'
    })
  }
}

export default router
