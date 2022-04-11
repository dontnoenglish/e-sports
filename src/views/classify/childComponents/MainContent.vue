<template>
    <div class="box" id="box">
        <div class="box-hd clearfix">
            <h2 class="title">全部分类</h2>
            <div class="filter">
                <dl>
                    <dd class="active" v-for="(item,index) in titleMessage" @click="titleClick(index)">
                        <a href="javascript:;" class="clickstat">
                            <span class="tag-layer">{{ item }}</span>
                        </a>
                    </dd>
                </dl>
            </div>
        </div>
        <div class="box-bd">
            <ul class="game-list clearfix" id="js-game-list" style="visibility: visible;">
                <li class="g-gameCard-item" :title="item.title" v-for="item in contentData" :key="item.id" @click="attention(item)">
                    <a href="javascript:;" class="g-gameCard-link">
                        <img src="" alt="" class="g-gameCard-img" v-lazy='item.url'>
                        <p class="g-gameCard-fullName">{{ item.title }}</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { contentData } from '../data'
import { getAttention } from '@/network/login.js'
import { mapMutations  } from 'vuex'
export default {
  name:'',
  data(){
   return {
       titleMessage:['全部','网游竞技','单机热游','手游悠闲'],
       contentData,
       initContentData:[]
   }
  },
  mounted(){
       this.initContentData = this.contentData
  },
  methods:{
      ...mapMutations(['USER_LOGIN']),
      titleClick(i){
        if(i){
            this.contentData = this.initContentData
            this.contentData = this.contentData.filter((item)=>{
                return item.belongTo == i
            })
        }
        if(i == 0){
            this.contentData = this.initContentData
        }
      },
      attention(item){
        this.$confirm('此操作将关注该项目, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            const {email}  = this.$store.state.user.userInfo
            getAttention(item,email).then(res=>{
                //将本地存储的数据更新
                this.USER_LOGIN(res.user)
            });
          this.$message({
            type: 'success',
            message: '关注成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消关注'
          });          
        });
      }
  }
}
</script>

<style scoped>
.box {
    margin: 25px 115px;
}
.box-hd {
    position: relative;
    line-height: 40px;
    margin-bottom: 20px;
}
.clearfix:after, .clearfix:before {
    content: " ";
    display: table;
    line-height: 0;
}
.title {
    float: left;
    padding-right: 10px;
    font-size: 26px;
    color: #333;
    font-weight: 500;
}
.filter {
    position: relative;
    color: #333;
    font-size: 12px;
    float: left;
}
.box-hd .filter dd {
    position: relative;
    float: left;
    cursor: pointer;
    z-index: 2;
}
.box-hd .filter dd:hover a {
    color: #f80;
}
.box-hd .filter dd a {
    display: block;
    color: #666;
}
.box-hd .filter dd .tag-layer {
    position: relative;
    display: block;
    margin: 20px 5px 0 0;
    padding: 0 15px;
    border: 1px solid #e2e2e2;
    border-radius: 15px;
    background: #fff;
    height: 26px;
    line-height: 26px;
    z-index: 2;
}
.game-list .g-gameCard-item {
    width: 154px!important;
}
.g-gameCard-item {
    float: left;
    margin: 0 30px 40px 0;
    width: 152px;
    height: 172px;
    background: #fff;
    border-radius: 6px;
}
a:link, a:visited {
    text-decoration: none;
}
.g-gameCard-link {
    display: block;
    width: 100%;
    height: 100%;
    padding-top: 17px;
    box-sizing: border-box;
}
body a {
    color: #999;
}
.g-gameCard-img {
    display: block;
    margin: 0 auto;
    width: 110px;
    height: 110px;
    object-fit: cover;
}
img {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    vertical-align: middle;
    border: 0;
}
.g-gameCard-fullName {
    margin: 1px auto 0;
    max-width: 8em;
    text-align: center;
    color: #333;
    font-size: 15px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
