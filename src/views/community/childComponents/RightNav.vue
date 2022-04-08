<template>
     <div class="right">
         <div class="search">
             <!-- 热门搜索 -->
            <div class="head">
                <p>热门搜索
                    <svg t="1649390670832" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="843" width="25" height="25"><path d="M814.1312 790.0672l-138.1376-138.1376c43.4176-49.1776 67.2-111.6928 67.2-177.8944 0-71.9104-28.0064-139.52-78.848-190.3872C613.504 232.8064 545.8944 204.8 473.984 204.8s-139.52 28.0064-190.3872 78.848c-104.9856 104.9856-104.9856 275.7888 0 380.7488 50.8416 50.8416 118.4512 78.848 190.3872 78.848 66.2016 0 128.7168-23.7824 177.8944-67.2l138.1376 138.1376c3.328 3.328 7.7056 4.992 12.0576 4.992s8.7296-1.664 12.0576-4.992a17.0112 17.0112 0 0 0 0-24.1152z m-506.3936-149.7856c-91.648-91.6736-91.648-240.8192 0-332.4928 44.416-44.416 103.4496-68.864 166.2464-68.864s121.8304 24.448 166.2464 68.864c44.416 44.416 68.864 103.4496 68.864 166.2464s-24.448 121.8304-68.864 166.2464-103.4496 68.864-166.2464 68.864-121.856-24.448-166.2464-68.864z" fill="#231815" p-id="844"></path></svg>
                </p>
            </div>
            <!-- 搜素列表项 -->
            <ul class="search-list">
                <li v-for="item in searchList" :key="item.id">
                    <i>{{ item.id }}</i>
                    <i class="text">{{ item.content }}</i>
                </li>
            </ul>
            <!-- 其他人看 -->
            <div class="head">
                <p>其他人正在看</p>
            </div>
         </div>
     </div>
</template>

<script>
import { searchList } from '../data'
export default {
  name:'',
  data(){
   return {
        searchList
   }
  }
}
</script>

<style scoped>
.right {
    background-color: #fff;
}
.head {
    position: relative;
    padding: 8px 0;
}
.head .icon {
    position: absolute;

}
.head p {
    margin: 0;
    padding-left: 20px;
    border-left: 3px solid red;
    font-weight: 700;
    font-size: 16px;
}
.search-list {
    border-bottom: 1px solid #9C9FA4;
    height: 420px;
}
.search-list li{
    height: 36px;
    margin: 10px 0;
    padding-left: 30px;
}
.search-list li i:nth-child(1) {
    color: #9C9FA4;
    font-size: 16px;
}
.search-list li:nth-child(1) i:nth-child(1),.search-list li:nth-child(2) i:nth-child(1),.search-list li:nth-child(3) i:nth-child(1){
    color: red;
    font-size: 16px;
}

.search-list .text {
    margin-left: 10px;
}
</style>
