<template>
    <div class="mid">
        <div class="head">
            <div class="head-content">
                <i><svg t="1649418625575" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2178" width="20" height="20"><path d="M859.995 460.963c-1.197 10.478-1.197 21.854 0 33.527v88.305c0 160.751-110.161 296.657-258.34 336.17v-52.982c0-49.693-40.112-89.805-89.505-89.805h-0.3c-49.394 0-89.805 40.112-89.805 89.805v52.982c-148.179-39.812-258.04-175.719-258.04-336.17V431.328c39.814 32.33 93.098 91.302 89.805 172.726 33.227-153.267 99.085-176.318 154.764-239.48 72.444-82.321 93.996-172.726 52.386-259.538C641.17 167.6 687.868 409.476 672.901 536.7c64.959-115.251 146.682-146.083 187.094-154.166v78.429z" fill="#FF7B15" p-id="2179"></path></svg>
                    游戏热帖</i>
                <span>英雄联盟</span>
                <span>绝地求生</span>
                <span>王者荣耀</span>
                <span>NBA2KOL2</span>
                <span>原神</span>
            </div>
        </div>
        <ul class="comment">
            <li class="comment-list">
                <span class="comment-text">理性讨论，小虎这件事会对他造成什么影响。hhhhhhhhhhhh</span>
                <span class="comment-type">英雄联盟</span>
                <!-- <span>50亮</span> -->
            </li>
            <li class="comment-list">
                <span class="comment-text">原来TES选手都知道自己的运营啊</span>
                <span class="comment-type">英雄联盟</span>
                <!-- <span>50亮</span> -->
            </li>
            <li class="comment-list">
                <span class="comment-text">小虎后援会会长猫团团脱粉销号了</span>
                <span class="comment-type">英雄联盟</span>
                <!-- <span>50亮</span> -->
            </li>
            <li class="comment-list">
                <span class="comment-text">管泽元哈哈哈哈</span>
                <span class="comment-type">英雄联盟</span>
                <!-- <span>50亮</span> -->
            </li>
            <li class="comment-list">
                <span class="comment-text">关于小虎的毒唯，我其实还有点瓜</span>
                <span class="comment-type">英雄联盟</span>
                <!-- <span>50亮</span> -->
            </li>
            <li class="comment-list">咋没人搬运小虎粉丝的逆天言论</span>
                <span class="comment-type">英雄联盟</span>
                <!-- <span>50亮</span> -->
            </li>
        </ul>
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
.mid {
    background-color: #fff;
    margin:0 20px;
}
.head {
     padding: 10px 0;
}
.head-content i {
    font-weight: 700;
     padding-left: 20px;
     border-left: 3px solid red;
}
.head-content span{
    padding-left: 20px;
}
.head-content span:hover {
    color: red;
}
.comment .comment-list {
    position: relative;
    height: 40px;
    padding: 10px 0;
    margin: 0 25px;
    border-bottom: 1px solid #e3e3e4;
}
.comment-type {
    position: absolute;
    top: 12px;
    right: 0;
    color: #7b7e86;
}
.comment-text {
    display: inline-block;
    max-width: 350px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
