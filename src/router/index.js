import { MessageBox } from 'element-ui';
import Vue from 'vue';
import Router from 'vue-router';
import echarts from 'echarts'

Vue.use(Router);

// 设置全局方法
Vue.prototype.$echarts = echarts

const routes = [
    {
        path: "",
        redirect: '/login',
    },
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

//  不检测登录状态的页面
const noCheckRoute = ['login'];

route.beforeEach((to, from, next) => {
    if (to.matched.length === 0) {
        //路由不存在
        next('/login');//否则返回根路由
    } else {
        //匹配到则判断登录状态
        if (noCheckRoute.indexOf(to.name) !== -1) {
            // 不需检测的页面直接跳转
            next()
        } else {
            const token = sessionStorage.getItem('token');
            if (!token) {
                MessageBox.alert("登录超时，请重新登录", {
                    callback: () => {
                        next('/login');
                    }
                })
            } else {
                next();
            }
        }
    }
});

export default route;