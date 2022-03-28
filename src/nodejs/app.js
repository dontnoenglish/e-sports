const express = require('express')
const path = require('path')
const router = require('./router')
const bodyParser = require('body-parser')
const session = require('express-session')

const app = express()

//配置静态资源，可以随意访问其中的文件
app.use('/public/',express.static(path.join(__dirname,'public')))
app.use('/node_modules/',express.static(path.join(__dirname, './node_modules/')))
//#region 
//配置响应头信息，允许跨域请求
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','http://localhost:8080')
    res.header('Access-Control-Allow-Credentials',true)
    res.header('Access-Control-Allow-Headers','Content-Type,Content-Length,Authorization,Accept,X-Requested-With')
    res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,HEAD,OPTIONS')
    if(req.method === 'OPTIONS'){
        res.send('ok!')
        return 
    }
    next()
})
// 配置解析表单 POST 请求体插件（注意：一定要在 app.use(router) 之前 ）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//#endregion

app.use(session({
// 配置加密字符串，它会在原有加密基础之上和这个字符串拼起来去加密
// 目的是为了增加安全性，防止客户端恶意伪造
    secret: 'itcast',
    resave: false,
    saveUninitialized: false
}))

app.use(router)

app.listen(1234,()=>{
    console.log('通过 127.0.0.1:1234 访问服务器');
})