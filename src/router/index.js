import Vue from 'vue';
import Router from 'vue-router';
import echarts from 'echarts'

Vue.use(Router);

// 设置全局方法
Vue.prototype.$echarts = echarts

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/Login/Login')
    }, {
        path: '/',
        name: 'base',
        redirect: '/login',
        component: () => import('@/layout/Base'),
        children: [
            {
                path: 'operation',
                name: 'operation',
                component: () => import('@/pages/Operation/Operation'),
            },
            {
                path: 'operation/host-manage',
                name: 'operation',
                component: () => import('@/pages/Operation/HostManage'),
            },
            {
                path: 'operation/host-manage/device-group',
                name: 'device-group',
                component: () => import('@/pages/Operation/HostManage/DeviceGroup')
            }
        ],
    }]

const route = new Router({
    routes
})

export default route;