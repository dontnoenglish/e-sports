const express = require('express')
const User = require('./models/user')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.get('/',(req,res)=>{
    res.send(req.session.user)
})

router.get('/login',(req,res)=>{
    res.send('这个啥也没有')
})

router.post('/login',(req,res,next)=>{
   /**
    * 1. 获取表单数据
    * 2. 查询数据库email与密码是否正确
    * 3. 发送响应数据
    */
   const {email,password} = req.body
   User.findOne({
       email,
       password
   },(err,user)=>{
       if(err){
           return next(err)
       }
       if(!user){
           return res.status(200).json({
               err_code:1,
               message:'email或密码有误!'
           })
       }
       //用户存在，登录成功。通过token记录登录状态
      const users = {email}
      const command = 'balabalabala'
      let token = jwt.sign(users,command)
      user.token = token
      
       res.status(200).json({
           err_code:0,
           message:'登陆成功',
           user
       })
   })
})

router.post('/register', function (req, res,next) {
    // 1. 获取表单提交的数据
    //    req.body
    // 2. 操作数据库
    //    判断改用户是否存在
    //    如果已存在，不允许注册
    //    如果不存在，注册新建用户
    // 3. 发送响应
    var body = req.body
    User.findOne({
      $or: [{
          email: body.email
        },
        {
          nickname: body.nickname
        }
      ]
    }, function (err, data) {
      if (err) {
        return next(err)
      }
      if (data) {
        // 邮箱或者昵称已存在
        return res.status(200).json({
          err_code: 1,
          message: '用户名或邮箱已存在!'
        })
      }
      // 对密码进行 md5 重复加密
    //   body.registerPassword = md5(md5(body.registerPassword))
  
      new User(body).save(function (err, user) {
        if (err) {
          return next(err)
        }
        // 注册成功，使用 Session 记录用户的登陆状态
        req.session.user = user
  
        // Express 提供了一个响应方法：json
        // 该方法接收一个对象作为参数，它会自动帮你把对象转为字符串再发送给浏览器
        res.status(200).json({
          err_code: 0,
          message: '注册成功'
        })
  
        // 服务端重定向只针对同步请求才有效，异步请求无效
        // res.redirect('/')
      })
    })
    // res.json(body)
  })
  

module.exports = router