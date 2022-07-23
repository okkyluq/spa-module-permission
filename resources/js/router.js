import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './modules/index'
import store from './store'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

router.beforeEach((to, from, next) => {
    if(to.path !== '/login' && store.state.AUTH.isAuthenticated !== true) {
        next({ path: '/login' });
    } else if (to.path === '/login' && store.state.AUTH.isAuthenticated === true){
        next({ path: '/' })
    } else {
        next()
    }
});

export default router;
