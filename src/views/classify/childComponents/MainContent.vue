<template>
    <div class="box" id="box">
        <div class="box-hd clearfix">
            <h2 class="title">全部分类</h2>
            <div class="filter">
                <dl>
                    <dd class="active" v-for="item in titleMessage">
                        <a href="" class="clickstat">
                            <span class="tag-layer">{{ item }}</span>
                        </a>
                    </dd>
                </dl>
            </div>
        </div>
        <div class="box-bd">
            <ul class="game-list clearfix" id="js-game-list" style="visibility: visible;">
                <li class="g-gameCard-item" :title="item.title" v-for="item in contentData" :key="item.id">
                    <a href="" class="g-gameCard-link">
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
export default {
  name:'',
  data(){
   return {
       titleMessage:['全部','网游竞技','单机热游','娱乐天地','手游悠闲'],
       contentData
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
