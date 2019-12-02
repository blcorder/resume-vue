import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// 引入首页
import Todaylist from "../pages/Todaylist";

// 懒加载引入其他路由
const Tommorowlist = () => import('../pages/Tommorowlist');

let router = new Router({
    routes: [
        {path: '/', redirect: '/Todaylist'},
        {path: '/Todaylist', component: Todaylist, meta: {"title": "今日要做"}},
        {path: '/Tommorowlist', component: Tommorowlist, meta: {title: "明日要做"}}
    ]
});
export default router;
router.beforeEach((to,from,next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
        next();
    }
});




