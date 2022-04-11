const mongoose = require('mongoose')
//连接数据库
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/admin',{
    useMongoClient:true
}).then(_=>{
    console.log('数据库连接成功');
})

const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
       type:String,
       required:true
    },
    nickname:{
        type:String,
    },
    created_time:{
        type:Date,
        default:Date.now
    },
    // 默认头像
    avatar:{
        type:String,
        default:'https://game.gtimg.cn/images/lol/v2/personal/avatar/default.png'
    },
    gender:{
        type:Number,
        enum:[0,1],
        default:0
    },
    birthday:{
        type:Date
    },
    status: {
        type: Number,
        // 0 队员
        // 1 队长
        enum: [0, 1],
        default: 0
    },
    token:{
        type:String,
        default:''
    },
    //我的关注
    attention:{
        type:Array,
        default:[]
    },
    //我发布的帖
    // post:{
    //     type:
    // }
})
module.exports = mongoose.model('User',userSchema)
