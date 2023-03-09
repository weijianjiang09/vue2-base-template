import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/Index'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/404',
        name: 'Page404',
        component: () => import('../views/error/404'),
        meta: {
            title: '页面不存在'
        }
    }

]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    console.log(to)
    if (to.matched.length === 0) { // 如果未匹配到路由
        // from.name ? next({ name: from.name }) : next('/404')
        next('/404')
    } else {
        next() // 如果匹配到正确跳转
    }
})

export default router
