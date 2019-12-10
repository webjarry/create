import Vue from 'vue'

import './rem'
import '../assets/less/Common.less'

import { post, get } from './axios'

import Vant from 'vant'
import 'vant/lib/index.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './Text'

Vue.use(Vant)

Vue.prototype.post = post()
Vue.prototype.get = get()

Vue.use(ElementUI, {
    size: 'medium'
})
