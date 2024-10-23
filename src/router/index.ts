import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: "/home",
        component: () => import("@/page/home/index.vue"),
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: "/hospital",
        component: () => import("@/page/hospital/index.vue"),
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return {top: 0, left: 0}
    },
})

export default router;
