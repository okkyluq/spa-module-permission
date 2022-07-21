import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: () => import('./pages/login/Index.vue'),
        },
        {
            path: '/',
            name: 'Dashboard',
            component: () => import('./pages/dashboard/Index.vue')
        },
        {
            path: '/datamenu',
            name: 'Data Menu',
            component: () => import('./pages/datamenu/Index.vue')
        },
        {
            path: '/otoritasmenu',
            name: 'Otoritas Menu',
            component: () => import('./pages/otoritasmenu/Index.vue')
        },
        {
            path: '/dataproduk',
            name: 'Data Produk',
            component: () => import('./pages/dataproduk/Index.vue')
        },
        {
            path: '/dataregional',
            name: 'Data Regional',
            component: () => import('./pages/dataregional/Index.vue')
        },
        {
            path: '/datamygrapari',
            name: 'Data MyGrapari',
            component: () => import('./pages/datamygrapari/Index.vue')
        },
        {
            path: '/importmygrapari',
            name: 'Import MyGrapari',
            component: () => import('./pages/importmygrapari/Index.vue')
        },
        {
            path: '/transaksifivas',
            name: 'Transaksi Fivas',
            component: () => import('./pages/transaksifivas/Index.vue')
        },
        {
            path: '/403',
            name: '403',
            component: () => import('./pages/404/403.vue'),
        },
        {
            path:'*',
            name:'404',
            component: () => import('./pages/404/Index.vue'),
        },


    ],
});




router.beforeEach((to, from, next) => {
    if(to.path !== '/login' && store.state.auth.isAuthenticated !== true) {
        next({ path: '/login' });
    } else if (to.path === '/login' && store.state.auth.isAuthenticated === true){
        next({ path: '/' })
    } else {
        next()
    }
});






export default router;
