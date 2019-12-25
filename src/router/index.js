import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [{
    path: '/',
    name: 'base',
    component: () => import('@/layout/Base.vue'),
    children: [],
}]

const route = new Router({
    routes
})

export default route;