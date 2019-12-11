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
    path: '/review',
    name: 'Review',
    redirect: {
      name: 'Details'
    },
    component: () => import( '../views/Review.vue' ),
    children: [
      {
        path: '/review/details',
        name: 'Details',
        component: () => import( '../views/review/detail' )
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
