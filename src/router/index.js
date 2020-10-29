import { $auth } from '@/firebase-config'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import RequestResetPassword from '../views/RequestResetPassword.vue'

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
    component: () => import('../views/About.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/imprint',
    name: 'Imprint',
    component: () => import('../views/Imprint.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../views/Privacy.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/mail-verify',
    name: 'MailVerify',
    component: () => import('../views/MailNotVerified.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin/Administration.vue'),
    meta: {
      requiresAuth: true
    },
    beforeEnter: isAdmin
  },
  {
    path: '/admin/new',
    name: 'AddImpulse',
    component: () => import('../views/admin/AddImpulse.vue'),
    meta: {
      requiresAuth: true
    },
    beforeEnter: isAdmin
  },
  {
    path: '/karten-details',
    name: 'KartenDetail',
    component: () => import('../views/CardDetailPage.vue'),
    props: true
  },
  {
    path: '/highscore',
    name: 'Highscore',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Highscore.vue')
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: RequestResetPassword,
    meta: {
      requiresAuth: false
    }
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
