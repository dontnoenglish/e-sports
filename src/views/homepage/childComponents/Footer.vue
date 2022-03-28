<template>
    <div class="footer" id="footer">
        <div class="left">
            <span class="logo-riot"></span>
        </div>
        <div class="right">
            <ul class="foot_links">
                <li class="link_map">
                    <a href="">互动娱乐</a>
                    <span class="f_line">|</span>
                    <a href="">服务条款</a>
                    <span class="f_line">|</span>
                    <a href="">隐私保护指引</a>
                    <span class="f_line">|</span>
                    <a href="">儿童隐私保护指引</a>
                    <span class="f_line">|</span>
                    <a href="">招聘助手</a>
                    <span class="f_line">|</span>
                    <a href="">游戏客服</a>
                    <span class="f_line">|</span>
                    <a href="">广告服务及商务合作</a>
                </li>
                <li class="copyright_zh">
                    <a href="javascript:;">版权归网站所有</a>
                    <a href="https://game.qq.com/self-discipline_pact.shtml">网络游戏行业防沉迷自律公约</a>
                </li>
                <li class="copyright_en">
                    <p class="copyright_txt">
                        COPYRIGHT © 2022 - 2022 TENCENT. ALL RIGHTS RESERVED.
                    </p>
                    <p class="copyright_txt">
                        COPYRIGHT © 2021 Riot Games,Inc. ALL RIGHTS RESERVED.
                    </p>
                </li>
                <li class="limit_age">本网络游戏适合16+岁的用户使用；为了您的健康，请合理控制游戏时间。</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name:'',
  data(){
   return {
      
   }
  }
}
</script>

<style scoped>
.left .logo-riot {
    background-image: url(//game.gtimg.cn/images/lol/v3/logo-rigo.png);
    background-size: 98px 28px;
    background-position: 0px 0px;
    width: 98px;
    height: 28px;
    display: block;
    position:absolute;
    top: 118px;
    left: 261px;
}
.footer {
    display: flex;
    height: 250px;
    background-color: #e3e2e2;
    position: relative;
}
.footer .left {
    flex: 1;
}
.footer .right {
   flex: 2;
}
.foot_links {
    margin-top: 80px;
    margin-left: 100px;
}
.foot_links li {
    color: #9f9378;
    line-height: 20px;
    overflow: hidden;
}
.foot_links li a {
    color: #9f9378;
}
.foot_links .link_map {
    font-size: 0;
}
.foot_links .link_map span, .foot_links .link_map a {
    font-size: 12px;
}
.f_line {
    color: #9f9378;
    margin: 0 2px;
}
.copyright_zh a {
    padding-right: 10px;
    font-size: 12px;
}
.foot_links .copyright_txt {
    font-size: 10px;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin: 0;
}
.limit_age {
     font-size: 12px;
}
</style>
