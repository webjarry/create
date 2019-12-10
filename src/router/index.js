import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/sign',
    redirect: '/sign/phone',
    component: () => import( '../views/sign/Sign.vue' ),
    children: [
      {
        path: '/sign/phone',
        name: 'Phone',
        component: () => import( '../views/sign/LoginPhone.vue' ),
      },
      {
        path: '/sign/password/:phone',
        name: 'Password',
        component: () => import( '../views/sign/LoginPassword.vue' ),
      }
    ]
  },
  {
    path: '/exam',
    redirect: '/exam/topic',
    component: () => import( '../views/exam/Exam.vue' ),
    children: [
      {
        path: '/exam/topic',
        name: 'Topic',
        component: () => import( '../views/exam/Topic.vue' ),
      }
    ]
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import( '../views/Form.vue' )
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
