import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [{
    path: '/',
    name: 'base',
    children: [],
    component: () => import('@/layout/Base.vue')
}]

const route = new Router({
    routes
})

export default route;