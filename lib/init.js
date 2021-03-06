import '../src/assets/less/Common.less'

import Vue from 'vue'

import { post, get } from '../src/service/axios'

import Vant from 'vant'
import 'vant/lib/index.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Closs from '@closs/closs-ui';
import '@closs/closs-ui/src/assets/less/Common.less'

Vue.use(Vant);
Vue.use(Closs);

Vue.prototype.post = post()
Vue.prototype.get = get()

Vue.use(ElementUI, {
    size: 'medium'
})
