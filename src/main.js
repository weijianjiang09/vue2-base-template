import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element-ui
import ElementUI from 'element-ui'
// 引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'
// 引入自定义工具包
import Tools from './utils/tools'
// 引入全局CSS
import '@/assets/css/public.css'
// 引入lodash工具库
import _ from 'lodash'
Vue.prototype.$lodash = _
Vue.prototype.$Tools = new Tools()
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

