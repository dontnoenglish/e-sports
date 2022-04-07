<template>
    <div class="profile-content">
        <div class="content-left">
            <ul class="left-header">
                <li>发帖</li>
                <li>回帖</li>
                <li>推荐</li>
                <li>收藏</li>
                <li>关注</li>
            </ul>
        </div>
        <div class="content-right">
            <div class="right-top">
                <a href="javascript:;">
                    <div class="hotTitle">我关注的人</div>
                    <div class="hotContent">0</div>
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
                    <li>
                        <img src="https://huyaimg.msstatic.com/cdnimage/game/1-MS.png" alt="">
                        <i>英雄联盟</i>
                    </li>
                    <li>
                        <img src="https://huyaimg.msstatic.com/cdnimage/game/2793-MS.png" alt="">
                        <i>绝地求生</i> 
                    </li>
                </ul>
            </div>
            <div class="right-footer">
                 <div class="footer-top">
                      123
                 </div>
            </div>
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
    border-bottom: 5px solid #66afe9;
    font-weight: 700;
    font-size: 20px;
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
    background-color: #fff;
    height: 384px;
    margin-top: 20px;
}
.footer-top {
    width: 400px;
    height: 96px;
    background: #f6f6f6;
    margin:20px 0;
}
</style>
