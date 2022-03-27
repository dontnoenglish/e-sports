<template>
   <div id="hotClass" class="mod-index-list">
       <!-- 左边的热门分类 -->
        <div class="nav_recommend">
            <div class="title">
                <span class="title_icon"></span>
                <a href="">热门分类</a>
                <a href="" class="more_info">更多<i class="index_icon"></i></a>
            </div>
            <div class="content">
                <ul class="game_list">
                    <li class="game_item" v-for="item in gameList" :key="item.id">
                        <a href="" class="game_link">
                            <img :src='item.url' alt="" class="game_img">
                            <p class="game_fullname">{{ item.fullname }}</p>
                            <p class="game_amount">{{ item.amount }}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 右边的 -->
        <div class="star_box">
            <div class="title">
                <span class="column_icon"></span>
                <a href="">明星大神</a>
            </div>
            <div class="star_content">
                <ul class="star_list">
                    <li class="star_item" v-for="item in star" :key='item.id'>
                        <a href="" class="star_link">
                            <div class="pic">
                                <img :src="item.url" alt="">
                            </div>
                            <div class="text">
                                <h3 class="star_name">{{ item.name }}</h3>
                                <div class="star_info">{{ item.introduce }}</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
   </div>
</template>

<script>
import { gameList,star } from './data'
export default {
  name:'',
  data(){
   return {
       gameList,
       star
   }
  }
}
</script>

<style scoped>
#hotClass {
    background-image: url('https://a.msstatic.com/huya/main3/assets/img/index/recomBg_2dc2e.jpg');
    /* float: left; */
    display: flex;
    justify-content: center;
}
.mod-index-list {
    margin: 40px auto;
    width: 100%;
    height: 397px;
    background: rgba(0,0,0,.8) 50% no-repeat;
    background-size: cover;
}
.nav_recommend {
    width: 674px;
    height: 388px;
    padding-top: 35px;
}
.title {
    overflow: hidden;
}
.star_box {
    width: 290px;
    height: 388px;
    margin-left: 20px;
    padding-top: 35px;
}
.title a {
    float: left;
    font-size: 26px;
    color: #fff;
    height: 33px;
    line-height: 33px;
    font-weight: 400;
    text-decoration: none;
}
.title a:hover {
    color: rgb(212, 248, 53);
}
.title .more_info {
    position: relative;
    float: right;
    height: 32px;
    padding: 10px 3px 0 4px;
    margin-left: 4px;
    line-height: 16px;
    font-size: 14px;
    color: hsla(0,0%,100%,.7);
}
.index_icon {
    background-image: url('https://a.msstatic.com/huya/main3/widget/index-recomGame/img/arrow_77dd1.png');
    background-size: cover;
    position: relative;
    top: 1px;
    width: 6px;
    height: 12px;
    margin-left: 3px;
    display: inline-block;
}
.title_icon {
    background-image: url('https://a.msstatic.com/huya/main3/widget/index-recomGame/img/column-hot-game_9a7e2.png');
    background-size: cover;
    float: left;
    margin: 1px 8px 0 0;
    width: 32px;
    height: 32px;
}
.game_list {
    width: 685px;
    height: 320px;
    overflow: hidden;
    /* list-style: none; */
}
 .game_item {
    margin: 0 12px 13px 0;
    width: 125px;
    height: 147px;
    float: left;
    background: #fff;
    border-radius: 6px;
}
.game_list .game_item .game_link {
    display: block;
    width: 100%;
    height: 100%;
    padding-top: 17px;
    box-sizing: border-box;
    text-decoration: none;
}
.game_link .game_img {
    width: 76px;
    height: 76px;
    display: block;
    margin: 0 auto;
    object-fit: cover;
}
.game_link .game_amount {
    margin-top: 3px;
    line-height: 16px;
    margin: 3px auto 0;
    text-align: center;
    color: #999;
    font-size: 12px;
}
.game_link .game_fullname {
    margin: 7px auto 0;
    max-width: 8em;
    text-align: center;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.column_icon {
    background-image: url('https://a.msstatic.com/huya/main3/widget/index-star-box/column-start_3a045.png');
    margin-top: 5px;
    background-size: cover;
    float: left;
    margin: 1px 8px 0 0;
    width: 32px;
    height: 32px;
}
.star_content {
    position: relative;
    padding: 0 11px;
    margin-right: 2px;
    border-radius: inherit;
    overflow-x: hidden;
    overflow-y: auto;
    height: 307px;
    background-color: #f4f5f8;
}
.star_list {
    width: 278px;
    position: relative;
    height: 100%;
}
.star_item {
    width: 265px;
    position: relative;
    margin-top: 7px;
    padding: 5px;
    border-radius: 6px;
    overflow: hidden;
}
.star_link {
    display: flex;
    height: 64px;
    text-decoration: none;
}
.pic {
    position: relative;
    width: 64px;
    height: 64px;
}
.pic img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}
.text {
    width: 180px;
    flex: 1;
    padding: 4px 0 0 8px;
    line-height: 14px;
}
.text .star_name {
    line-height: 20px;
    color: #333;
    font-size: 14px;
    max-width: 12em;
    word-wrap: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
}
.text .star_info {
    margin-top: 4px;
    height: 36px;
    overflow: hidden;
    color: #999;
    font-size: 12px;
    line-height: 18px;
}
</style>
