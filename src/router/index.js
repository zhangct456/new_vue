import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

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