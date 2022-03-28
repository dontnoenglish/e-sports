<template>
     <div class="g-wrap-fanart">
        <div class="content">
            <h2 class="title">FANART创作馆</h2>
            <ul class="mid-content">
                <li class="mid-content-item" v-for="item in fanart">
                    <img :src="item.url" alt="">
                </li>
            </ul>
        </div>
     </div>
</template>

<script>
import {fanart} from './data.js'
export default {
  name:'',
  data(){
   return {
        fanart
   }
  }
}
</script>

<style scoped>
.g-wrap-fanart {
    height: 500px;
}
.g-wrap-fanart .content {
    position: relative;
    height: 200px;
    margin: 0 250px 100px;
}
.title {
    position: absolute;
    top: 5px;
    left: -6px;
    width: auto;
    height: 28px;
    box-sizing: border-box;
    color: #0b0b0b;
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
    overflow: hidden;
    border-left: 5px solid #1da6ba;
}
.mid-content {
    position: absolute;
    top: 72px;
    height: 100px;
    width: 1045px;
    display: flex;
    flex-wrap: wrap;
}
.mid-content .mid-content-item {
    list-style: none;
    float: left;
    width: 192px;
    height: 176px;
    position: relative;
    overflow: hidden;
    background-color: #e3e2e2;
    margin: 0 17px 17px 0;
}
.mid-content .mid-content-item img{
     display: block;
    -webkit-transition: transform .3s;
    transition: transform .3s;
    -webkit-transform: scale(1);
    transform: scale(1);
    width: 192px;
    height: 192px;
    position: absolute;
    left: 0;
    top: -8px;
}
.mid-content .mid-content-item img:hover{
    transform: scale(1.25);
}
</style>
