import request from './request'

export function getSession(){
    return request({
        url:'/'
    })
}

//登录
export function getLoginData(email,password){
    // console.log(loginEmail,loginPassword);
    return request({
        url:'/login',
        method:'POST',
        data:{
            email,
            password
        }
    })
}
//注册
export function getRegisterData(nickname,email,password){
    return request({
        url:'/register',
        method:'POST',
        data:{
            nickname,
            email,
            password
        }
    })
}

//添加关注
export function getAttention(item,email){
     return request({
         url:'/attention',
         method:'POST',
         data:{
            item,
            email

         }
     })
}