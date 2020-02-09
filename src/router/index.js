import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from "../views/Index";
import storage from "../../lib/storage";
import {Toast} from "vant";

Vue.use(VueRouter)

const routes = [
  /**
   * 不需要底部导航条路由生命在Index 外
   * */
  {
    path: '/',
    name: 'Index',
    redirect: '/home',
    component: Index,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
          isLogin: true
        }
      },
      /**
       * 考试模拟题
       * */
      {
        path: '/exam',
        redirect: '/exam/topic',
        component: () => import( '../views/exam/Exam.vue' ),
        children: [
          {
            path: '/exam/topic',
            name: 'Topic',
            component: () => import( '../views/exam/Topic.vue' ),
            method: {
              isLogin: true
            }
          }
        ]
      },
      /**
       * 帖子详情
       * */
      {
        path: '/review',
        name: 'Review',
        redirect: {
          name: 'Details'
        },
        component: () => import( '../views/Review.vue' ),
        method: {
          isLogin: true
        },
        children: [
          {
            path: '/review/details',
            name: 'Details',
            component: () => import( '../views/review/detail' )
          }
        ]
      },
      /**
       * 提交报名
       * */
      {
        path: '/form',
        name: 'Form',
        component: () => import( '../views/Form.vue' )
      },
      /**
       * 个人中心
       * */
      {
        path: '/account',
        name: 'Account',
        component: () => import( '../views/account/Account.vue' )
      },
    ]
  },
  /**
   * Login
   * */
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  let isLogin = storage.get('accountToken') !== null;

  if (to.meta.isLogin && !isLogin)
  {
    next({
      path: '/sign'
    })

  }
  else if (isLogin && (to.path === '/sign/phone'))
  {
    Toast.fail('您已经登录');

    next({
      path: '/'
    })

  }
  else
  {
    next()
  }
})


export default router
