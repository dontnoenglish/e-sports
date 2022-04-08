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

const ClassifyPage = ()=>import('../views/classify/ClassifyPage.vue')

const Profile = ()=>import('../views/profile/Profile.vue')
//#region 
const FPost = ()=>import('../views/profile/childComponents/FPost.vue')
const HPost = ()=>import('../views/profile/childComponents/HPost.vue')
const TPost = ()=>import('../views/profile/childComponents/TPost.vue')
const SPost = ()=>import('../views/profile/childComponents/SPost.vue')
const GPost = ()=>import('../views/profile/childComponents/GPost.vue')
//#endregion
const Community = ()=>import('../views/community/Community.vue')
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
        path:'/classify',
        component:ClassifyPage
    },
    {
        path:'/profile',
        component:Profile,
        children:[
            {
                path:'fPost',
                component:FPost
            },
            {
                path:'hPost',
                component:HPost
            },
            {
                path:'tPost',
                component:TPost
            },
            {
                path:'sPost',
                component:SPost
            },
            {
                path:'gPost',
                component:GPost
            }
        ]
    },
    {
        path:'/community',
        component:Community
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
 })
export default router