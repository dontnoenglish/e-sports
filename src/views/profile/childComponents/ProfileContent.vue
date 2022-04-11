<template>
    <div class="profile-content">
        <div class="content-left">
            <ul class="left-header">
                <li v-for="(item,index) in PostRelevant" @click="Post(item,index)" :class="{active:index === current}">{{item.item}}</li>
            </ul>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <div class="content-right">
            <div class="right-top">
                <a href="javascript:;">
                    <div class="hotTitle">我关注的人</div>
                    <div class="hotContent">{{ attention.length }}</div>
                </a>
                <a href="javascript:;">
                    <div class="hotTitle">关注我的人</div>
                    <div class="hotContent">0</div>
                </a>
            </div>
            <div class="right-top">
                <a href="javascript:;">
                    <div class="hotTitle">被点亮</div>
                    <div class="hotContent">0</div>
                </a>
                <a href="javascript:;">
                    <div class="hotTitle">被推荐</div>
                    <div class="hotContent">0</div>
                </a>
            </div>
            <div class="right-mid">
                <div class="mid-top">
                    <div>我关注的社区</div>
                </div>
                <ul class="mid-item">
                    <li v-for="item in attention">
                        <img :src="item.url" alt="">
                        <i>{{ item.title }}</i>
                    </li>
                </ul>
            </div>
            <div class="right-footer">
                 <div class="footer-top">
                      <p>
                          <span>
                              <img src="https://gw.alicdn.com/tfs/TB1jwakrbH1gK0jSZFwXXc7aXXa-20-20.png" alt="">
                              <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010902002561">公网安备 31010902002561号</a>
                              <a href="http://www.zx110.org/" style="color: rgb(123, 126, 134); display: block; line-height: 18px; padding: 0px; margin: 0px;">网络社会征信网</a>
                              <a href="http://www.shjbzx.cn/" style="color: rgb(123, 126, 134); display: block; line-height: 18px; padding: 0px; margin: 0px;">互联网违法和不良信息举报中心</a>
                              <a href="https://www.12377.cn/" style="color: rgb(123, 126, 134); display: block; line-height: 18px; padding: 0px; margin: 0px;">中国互联网违法和不良信息举报中心</a>
                              举报电话：021-66695603 021-61431529
                          </span>
                      </p>
                      <div style="color: rgb(123, 126, 134);">网警提示:</div>
                      <p style="width: 384px; margin-top: 0px;">
                        网络刷单是违法，切莫轻信有返利，网上交友套路多，卖惨要钱需当心，电子红包莫轻点，个人信息勿填写，仿冒客服来行骗，官方核实最重要，招工诈骗有套路，预交费用需谨慎，低价充值莫轻信，莫因游戏陷套路，连接WIFI要规范，确认安全再连接，抢购车票有章法，确认订单再付款，白条赊购慎使用，提升额度莫轻信，网购预付有风险，正规渠道很重要！
                      </p>
                 </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name:'',
  data(){
   return {
       current:0,
       PostRelevant:[{item:'发帖',target:'/profile/fPost'},{item:'回帖',target:'/profile/hPost'},{item:'推荐',target:'/profile/TPost'},{item:'收藏',target:'/profile/SPost'},{item:'关注',target:'/profile/GPost'}]
   }
  },
  methods:{
      Post(item,index){
          this.current = index
          this.$router.push(item.target)
      }
  },
  computed:{
      ...mapState({
          attention:state=>state.user.userInfo.attention
      })
  }
}
</script>

<style scoped>
.active {
    border-bottom:2px solid #111;
}
.profile-content {
    width: 1240px;
    height: 760px;
    margin: 0 auto;
    display: flex;
}
.content-left {
    height: 100%;
    flex: 2;
    padding: 8px 20px;
    background: #fff;
    margin-right: 20px;
}
.left-header {
    /* background-color: pink; */
    height: 32px;
}
.left-header li {
    float: left;
    padding: 7px 25px;
    /* margin-right: 25px;
    padding-left: 25px; */
}
.left-header li:hover {
    color: red;
    cursor: pointer;
}
.content-right {
    height: 100%;
    flex: 1;
}
.right-top {
    height: 98px;
    background-color: #fff;
    margin-bottom: 20px;
    display: flex;
}
.right-top a {
    flex: 1;
    text-align: center;
    color: #111;
}
.right-top a:hover {
    color: red;
} 
.hotTitle {
    margin-top: 30px;
}
.hotContent {
    margin-top: 5px;
    font-size: 20px;
    font-weight: 700;
}
.right-mid {
    background-color: #fff;
}

.mid-top {
    padding: 10px 0;
    line-height: 20px;
}
.mid-top div {
    border-left: 3px solid #c60100;
    padding-left: 20px;
    font-size: 16px;
    font-weight: 600;
    color: #2d3137;
}
.mid-item {
    padding-left: 20px;
}
.mid-item li {
    height: 40px;
    line-height: 40px;
    cursor: pointer;
}
.mid-item img {
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-bottom: 0;
    margin-right: 6px;
}
.mid-item i {
    color: #4e5158;
}
.right-footer {
    height: 384px;
    margin-top: 20px;
    color: rgb(123, 126, 134);
}
.footer-top {
    width: 400px;
    height: 96px;
    background: #f6f6f6;
    margin:20px 0;
    font-size: 10px;
}
.footer-top p {
    padding: 2px 0;
    margin: 8px 0;
}
.footer-top a {
    color: rgb(123, 126, 134);
    line-height: 20px;
}
</style>
