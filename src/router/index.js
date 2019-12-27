import Vue from 'vue';
import Router from 'vue-router';
import echarts from 'echarts'

Vue.use(Router);

// 设置全局方法
Vue.prototype.$echarts = echarts

const routes = [{
    path: '/',
    name: 'base',
    redirect: '/base/operation',
    component: () => import('@/layout/Base.vue'),
    children: [
        {
            path: '/base/operation',
            name: 'operation',
            component: () => import('@/pages/Operation/Operation')
        }
    ],
}]

const route = new Router({
    routes
})

export default route;