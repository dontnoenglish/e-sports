<template>
    <div class="mod-actlist">
        <div class="mod-actlist__inner">
            <div class="mod-actlist__main">
                <div class="mod-actlist__hd clearfix">
                     <h3 class="title">
                         <i></i>官方活动
                     </h3>
                     <a target="_blank" href="javascript:;" class="more-list clickstat">
                         更多 <i class="index-more-icon"></i>
                     </a>
                </div>
                <div class="mod-actlist__bd">
                    <ul class="clearfix">
                        <li v-for="item in official" :key="item.id">
                            <a class='clickstat J_g_resource j_actItem' href="javascript:;">
                                <img :src='item.url' alt="">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { official } from './data'
export default {
  name:'',
  data(){
   return {
       official
   }
  }
}
</script>

<style scoped>

.mod-actlist * {
    box-sizing: border-box;
}
.mod-actlist {
    padding: 15px 0 30px;
}
.mod-actlist .mod-actlist__inner {
    width: 980px;
    max-height: 140px;
    overflow: hidden;
    margin: 0 auto
}
.clearfix:before {
    content: " ";
    display: table;
}
.mod-actlist .mod-actlist__main .mod-actlist__hd {
    line-height: 32px;
    margin-bottom: 10px;
}
.mod-actlist .mod-actlist__main .mod-actlist__hd .title {
    float: left;
    color: #555;
    font-size: 26px;
}
.mod-actlist .mod-actlist__main .mod-actlist__hd .title i {
    float: left;
    width: 32px;
    height: 32px;
    background: url(https://a.msstatic.com/huya/main3/widget/index-actlist/img/icon-act_11ea9.png);
    margin-right: 10px;
    border-radius: 5px;
    background-size: cover;
}
.mod-actlist .mod-actlist__main .mod-actlist__hd .more-list {
    float: right;
    margin-top: 8px;
    height: 14px;
    line-height: 14px;
    color: #3a3a3a;
    font-size: 14px;
}
.mod-actlist a {
    transition: color .2s ease-out;
}
.index-more-icon {
    position: relative;
    top: 1px;
    width: 6px;
    height: 12px;
    margin-left: 3px;
    background: url(https://a.msstatic.com/huya/main3/assets/img/index/more-icon_8e480.png);
    display: inline-block;
}
.mod-actlist__main .mod-actlist__bd ul {
    height: 87px;
}
.mod-actlist .mod-actlist__main .mod-actlist__bd ul {
    margin-right: -35px;
    height: 100px;
}
.w-980 .mod-actlist__main .mod-actlist__bd li {
    margin-right: 16px;
}
.mod-actlist .mod-actlist__main .mod-actlist__bd li {
    float: left;
    margin-right: 20px;
    margin-bottom: 20px;
    overflow: hidden;
}
.mod-actlist__main .mod-actlist__bd li a {
    width: 233px;
    height: 100px;
}
.mod-actlist .mod-actlist__main .mod-actlist__bd li a {
    width: 233px;
    height: 100px;
    display: block;
    overflow: hidden;
}
.mod-actlist a {
    transition: color .2s ease-out;
}

.mod-actlist__main .mod-actlist__bd li img {
    height: 73px;
}
.mod-actlist .mod-actlist__main .mod-actlist__bd li img {
    width: 100%;
    overflow: hidden;
    display: block;
    /* height: 100px; */
    /* vertical-align: middle; */
    border: 0;
}
</style>
