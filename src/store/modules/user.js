import { INIT_USER, USER_LOGIN,LOGIN_OUT } from './mutation_type'
export default {
    state:{
        stateStatus:false, //用户登录状态
        token:null,  //token
        userInfo:{}//存储用户信息
    },
    mutations:{
        //保存用户信息
        [USER_LOGIN](state,payload){
            state.stateStatus = true
            state.token = payload.status
            state.userInfo = payload
            //用localStorage做持久化存储
            localStorage.setItem('UserInfo',JSON.stringify(payload))
        },
        //读取本地存储
        [INIT_USER](state){
            let userInfo = JSON.parse(localStorage.getItem('UserInfo'))
            if(userInfo){
                state.stateStatus = true
                state.token = userInfo.status
                state.userInfo = userInfo
            }
        },
        //退出登录
        [LOGIN_OUT](state){
            state.stateStatus=false, 
            state.token=null,  
            state.userInfo={}
            localStorage.removeItem('UserInfo')
        }
    },
    getters:{},
    actions:{}
}