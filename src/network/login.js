import request from './request'

export function getSession(){
    return request({
        url:'/'
    })
}


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