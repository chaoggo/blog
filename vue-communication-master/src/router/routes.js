import Vue from 'vue'
import Router from 'vue-router';
import index from '../pages/index/index.vue';
import welcome from '../pages/welcome/welcome.vue'

Vue.use(Router);

const Routes = [
    {
        path:"/",
        redirect:"/index"
    },
    {
        name:"index",
        path:"/index",
        component:index
    },
    {
        name:"welcome",
        path:"/welcome",
        component:welcome
    }
];

const router = new Router({
    routes:Routes,
    mode:'hash'
})

export default router;