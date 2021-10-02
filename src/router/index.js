import Vue from 'vue'
import VueRouter from 'vue-router'

const AppLogin = () => import('../views/AppLogin')
const AppChoose = () => import('../views/AppChoose')
const AppJoinMeeting = () => import('../views/AppJoinMeeting')
const AppMeeting = () => import('../views/AppMeeting')
const AppGame = () => import('../views/AppGame')

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: AppLogin,
    meta: {
      token: false
    }
  },
  {
    path: '/choose',
    name: 'choose',
    component: AppChoose,
    meta: {
      token: false
    }
  },
  {
    path: '/join-meeting',
    name: 'joinMeeting',
    component: AppJoinMeeting,
    meta: {
      token: true
    }
  },
  {
    path: '/meeting/:meetingId',
    name: 'meeting',
    component: AppMeeting,
    meta: {
      token: true
    }
  },
  {
    path: '/game/:gameId',
    name: 'game',
    component: AppGame,
    meta: {
      token: true
    }
  },
  {
    path: '*',
    name: 'default',
    component: AppChoose,
    meta: {
      token: false
    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (!to.meta.token || (to.meta.token && token)) {
    next()
  } else {
    next({ name: 'login' })
  }
})

export default router
