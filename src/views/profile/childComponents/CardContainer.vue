<template>
    <div class="container">
        <!-- 左边的头像  -->
        <span class="avatar">
            <img :src="userInfo.avatar" alt="">
        </span>
        <!-- 中间的  -->
        <div class="infoContent">
            <h2>{{ userInfo.nickname }}</h2>
        </div>
        <!-- 编辑资料 -->
        <button class="ant-btn" @click="complierProfile">编辑资料</button>
        <!-- toast弹窗 -->
        <div class="ant-modal-mask" ref="maskBody">
            <!-- 主题内容 -->
            <div class="ant-modal-content">
                <!-- 头部编辑资料以及关闭 -->
                <div class="header">
                    <h2>编辑个人资料</h2>
                    <button class="right-header" @click="close">
                        <svg t="1648537997114" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1127" width="20" height="20"><path d="M621.312 493.824l253.184-252.928a67.584 67.584 0 0 0 7.168-89.088 64.512 64.512 0 0 0-95.744-4.864l-256 256a25.6 25.6 0 0 1-36.352 0l-252.672-253.44a67.584 67.584 0 0 0-89.088-7.168 64.512 64.512 0 0 0-4.864 95.744l256 256a25.6 25.6 0 0 1 0 36.352l-253.44 252.672a67.584 67.584 0 0 0-7.168 89.088 64.512 64.512 0 0 0 95.744 4.864l256-256a25.6 25.6 0 0 1 36.352 0l252.928 253.184a67.584 67.584 0 0 0 89.088 7.168 64.512 64.512 0 0 0 4.864-95.744l-256-256a25.6 25.6 0 0 1 0-35.84z" p-id="1128"></path></svg>
                    </button>
                </div>
                <div class="mask-body">
                    <form action="" class="ant-form">
                         <div class="from-first-item">
                            <i>头像:</i>
                            <div class="item-img">
                                <div class="ant-upload" @click="uploadImg">
                                    <input type="file" class="item-file" ref='file'>
                                   <svg t="1648544810239" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="880" width="38" height="38"><path d="M768 896H256c-52.94 0-96-43.06-96-96v-32c0-123.52 100.48-224 224-224h256c123.52 0 224 100.48 224 224v32c0 52.94-43.06 96-96 96zM384 608c-88.22 0-160 71.78-160 160v32c0 17.64 14.36 32 32 32h512c17.64 0 32-14.36 32-32v-32c0-88.22-71.78-160-160-160H384zM512 512c-105.88 0-192-86.13-192-192s86.13-192 192-192 192 86.13 192 192-86.12 192-192 192z m0-320c-70.58 0-128 57.42-128 128s57.42 128 128 128 128-57.42 128-128-57.42-128-128-128z" p-id="881"></path></svg>
                                </div>
                            </div>
                         </div>
                         <div class="from-first-item">
                             <i>性别:</i>
                             <div class="item-gender">
                                 <label for="male">
                                     <input type="radio" name="sex" id="male" value="1">男
                                 </label>
                                 <label for="female">
                                     <input type="radio" name="sex" id="female" value="2">女
                                 </label>
                             </div>
                         </div>
                         <div class="from-first-item">
                            <i>昵称:</i>
                            <label for="profile" class="profile">
                                <input type="text" name="" id="profile" placeholder="hhhhhhh">
                            </label>
                         </div>
                         <div class="mask-footer">
                              <div class="mask-position">
                                    <el-button type="primary">提交</el-button>
                                    <el-button @click="close">取消</el-button>
                              </div>
                         </div>
                    </form>
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

   }
  },
  methods:{
      //点击编辑资料，弹出遮罩层
      complierProfile(){
          this.$refs.maskBody.style.display = 'inline-block'
      },
      //点击头像切换至input的click事件
      uploadImg(){
          this.$refs.file.click();
      },
      //关闭遮罩层
      close(){
         this.$refs.maskBody.style.display = 'none'
      }
  },
  computed:{
      ...mapState({
          userInfo:state=>state.user.userInfo
      })
  }
}
</script>

<style scoped>
.container {
    width: 1240px;
    height: 160px;
    background-color: #fff;
    margin:20px auto;
    position: relative;
}
.avatar {
    width: 120px;
    height: 130px;
    line-height: 120px;
    display: inline-block;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    background-size: cover;
    margin-top: 10px;
}
.avatar img {
    width: 120px;
    height: 120px;
}
.infoContent {
    position: absolute;
    top: 11px;
    left: 160px;
    width: 800px;
    height: 120px;
}
.ant-btn {
    position: absolute;
    bottom: 12px;
    right: 22px;
    padding: 5px 20px;
    color: #7b7e86;
}
.ant-modal-mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    height: 100%;
    background-color: rgba(0,0,0,.45);
    display: none;
    /* display: flex;
    justify-content: center;
    align-items: center; */
}
.ant-modal-mask .ant-modal-content {
    width: 520px;
    height: 364px;
    position: relative;
    background-color: #fff;
    background-clip: padding-box;
    border: 0;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
    pointer-events: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.header {
    padding: 13px 24px;
}
.header h2 {
    margin: 0;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    word-wrap: break-word;
    margin:10px 0 0 10px;
}
.header .right-header {
    display: inline-block;
    width: 65px;
    height: 57px;
    position: absolute;
    background-color: #fff;
    top: 0;
    right: 0;
    border:0;
}
.mask-body {
    height: 256px;
    border-bottom: 1px solid rgba(0,0,0,.65);
    border-top: 1px solid rgba(0,0,0,.65);
    padding:24px;
}
.ant-form {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: "tnum";
}
.from-first-item {
    height: 56px;
    margin-bottom: 20px;
}
.from-first-item .item-img {
    display: inline-block;
    width: 50%;
    height: 56px;
    vertical-align: middle;
    margin-left: 75px;
}
.from-first-item .item-img .ant-upload {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    padding: 8px;
    background-color: rgb(233, 232, 232);
    cursor: pointer;
}
.ant-upload input[type='file'] {
    display: none;
}
.ant-upload img {
    width: 38px;
    height: 38px;
}
.item-gender {
    width: 236px;
    height: 40px;
    display: inline-block;
    margin-left: 75px;
    vertical-align: middle;
}
.item-gender label {
    margin-top: 8px;
    margin-right: 5px;
}
.profile {
    margin-left: 44px;
}
.profile input {
    border:3px solid #d9d9d9;
    outline-style: none ;
    border-radius: 4px;
    padding: 4px 10px;
}
.profile input:focus {
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    border-color: #66afe9;
    outline: 0;
}
.mask-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 520px;
    height: 53px;
}
.mask-position {
    margin-top: 7px;
    margin-left: 350px;
}
</style>
