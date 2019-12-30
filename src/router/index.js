import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// 引入首页
import Todaylist from "../pages/Todaylist";

// 懒加载引入其他路由
const Tommorowlist = () => import('../pages/Tommorowlist');
const Todolist = () => import('../pages/Todolist');

let router = new Router({
    routes: [
        {path: '/', redirect: '/Todolist'},
        {path: '/Todolist', component: Todolist, meta: {title: "个人简历"}},
        {path: '/Todaylist', component: Todaylist, meta: {"title": "今日日程"}},
        {path: '/Tommorowlist', component: Tommorowlist, meta: {title: "个人中心"}},
    ]
});
export default router;
router.beforeEach((to,from,next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
        next();
    }
});




