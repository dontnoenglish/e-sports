import Vue from 'vue'
import VueRouter from 'vue-router'

//#region 
/**
 * 解决重复点击路由，会报错的一个现象。
 */
const original = VueRouter.prototype.push
VueRouter.prototype.push = function push(location){
    return original.call(this,location).catch(err=>err)
}
//#endregion

Vue.use(VueRouter)

const Login = ()=>import('../views/Login.vue')
const HomePage = ()=>import('../views/homepage/HomePage.vue')
const MainBlog = ()=>import('../views/blog/MainBlog.vue')
const SetUp = ()=>import('../views/setup/SetUp.vue')

const routes = [
    {
        path:'/',
        component:HomePage
    },
    {
        path:'/homepage',
        component:HomePage
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Login
    },
    {
        path:'/mainblog',
        component:MainBlog
    },
    {
        path:'/setup',
        component:SetUp
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
 })
export default router