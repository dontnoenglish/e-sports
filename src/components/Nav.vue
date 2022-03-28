<template>
  <div id="nav">
    <div class="nav_left">
      <img src="https://game.gtimg.cn/images/lol/v3/logo-public.png" alt="" />
    </div>
    <div class="nav_middle">
      <a href="">
        <span class="middle_title">游戏资料</span>
        <p class="middle_subtitle">GAME INFO</p>
      </a>
      <a href="/classify">
        <span class="middle_title">分类</span>
        <p class="middle_subtitle">STORE</p>
      </a>
      <a href="">
        <span class="middle_title">社区互动</span>
        <p class="middle_subtitle">COMMUNITY</p>
      </a>
      <a href="">
        <span class="middle_title">赛事官网</span>
        <p class="middle_subtitle">ESPORTS</p>
      </a>
      <a href="">
        <span class="middle_title">自助系统</span>
        <p class="middle_subtitle">SYSTEM</p>
      </a>
    </div>
    <div class="nav_right">
        <div class="right_div" v-if='!stateStatus'>
            <a href="">
                <img src="https://game.gtimg.cn/images/lol/v2/personal/avatar/default.png" alt="">
            </a>
            <span>亲爱的召唤师，欢迎<a href="/login">登录</a></span>
            <!-- <h1>{{ $store.userInfo }}</h1> -->
        </div>
        <div class="right_div" v-else>
            <a href="javascript:;">
                <img src="userInfo.avatar" alt="">
            </a>
            <span>{{ userInfo.nickname }}</span>
            <button @click="loginOut">退出登录</button>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed:{
      ...mapState({
        stateStatus:state=>state.user.stateStatus,
        userInfo:state=>state.user.userInfo
      })
    },
    mounted(){
         console.log(this.$store.state.user.userInfo);
    },
    methods:{
      loginOut(){
        this.$store.commit('LOGIN_OUT')
      }
    }

};
</script>

<style scoped>
#nav {
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 78px;
  opacity: .9;
  /** 渐变色处理 */
  background-image: linear-gradient(to bottom,#000,#999);
}
.nav_left {
    margin-top: 7px;
}
.nav_middle {
    width: 750px;
}
.nav_middle a {
    text-decoration: none;
    float: left;
    width: 135px;
    height: 78px;
    padding-top: 15px;
    text-align: center;
}
.middle_title {
    color: #fff;
    font-size: 18px;
}
.middle_subtitle {
    color: #aeaeae;
    font-size: 11px;
}
.nav_right {
    width: 244px;
    text-align: center;
}
.nav_right img {
    border-radius: 50%;
    width: 48px;
    height: 48px;
}
.right_div {
    margin-top: 10px;
}
.right_div span {
    color: #fefefe;
    font-size: 16px;
}
</style>