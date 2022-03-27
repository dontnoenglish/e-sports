import axios from 'axios'

export default function request(config){
   const instance = axios.create({
       baseURL:'http://127.0.0.1:1234',
       timeout:5000
   })
   instance.interceptors.request.use(config=>{
       //请求拦截
       return config
   },err=>{

   })
   instance.interceptors.response.use(res=>{
        return res.data
   },err=>{

   })
   return instance(config)
}

