<template>
  <div id="main">
         <div id='contain'class="container right-panel-active">
        <!-- 注册 -->
        <div class="container_form container--signup">
            <form action="#" class="form" id="form1">
                <h2 class="form_title">Sign Up</h2>
                <input type="text" placeholder="User" class="input" max="12" v-model="nickname"/>
                <input type="email" placeholder="Email" class="input" v-model="email"/>
                <input type="password" placeholder="Password" class="input" v-model="password"/>
                <button class="btn" @click="register">Sign Up</button>
            </form>
        </div>
    
        <!-- 登录 -->
        <div class="container_form container--signin">
            <form action="#" class="form" id="form2">
                <h2 class="form_title">Sign In</h2>
                <input type="email" placeholder="Email" class="input" v-model="email"/>
                <input type="password" placeholder="Password" class="input" v-model="password"/>
                <a href="#" class="link">Forgot your password?</a>
                <button class="btn" @click="login">Sign In</button>
            </form>
        </div>
    
        <!-- 浮层 -->
        <div class="container_overlay">
            <div class="overlay">
                <div class="overlay_panel overlay--left">
                    <button class="btn" id="signIn" @click="InRouterJump">Sign In</button>
                </div>
                <div class="overlay_panel overlay--right">
                    <button class="btn" id="signUp" @click="UpRouterJump">Sign Up</button>
                </div>
            </div>
        </div>
  </div>
</div>
  </div>
</template>

<script>
import { getLoginData, getRegisterData } from "../network/login";
import { mapMutations } from 'vuex'
export default {
  name: "",
  data() {
    return {
      nickname: "",
      email: "",
      password: "",
    };
  },
  components: {},
  computed:{

  },
  mounted() {
    /**
     *  实现页面跳转效果
     */
    //#region
    const signInBtn = document.getElementById("signIn");
    const signUpBtn = document.getElementById("signUp");
    const firstForm = document.getElementById("form1");
    const secondForm = document.getElementById("form2");
    const container = document.querySelector(".container");

    signInBtn.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });

    signUpBtn.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    firstForm.addEventListener("submit", (e) => e.preventDefault());
    secondForm.addEventListener("submit", (e) => e.preventDefault());
    //#endregion
    /**
     * 表单验证，弹出toast弹窗
     */
  },
  methods: {
    ...mapMutations(['USER_LOGIN']),
    //登录的表单验证
    login() {
      this.$router.push("/login");
      //如果邮箱正则匹配错误，弹出警示框
      if (!/^\w{3,12}@\w{1,5}\.[a-z]{2,3}$/.test(this.email)) {
        return this.errToast("失败", "邮箱格式有误");
      }
      //密码不能为空
      if (this.password.length == 0) {
        return this.errToast("失败", "密码不能为空");
      }
      getLoginData(this.email, this.password).then((res) => {
        if (!res.err_code) {
          this.successToast("成功", res.message);
          //账号密码成功，此时要生成token，这里需要判断
          this.USER_LOGIN(res.user) //将需要存储的信息用回调传过去。
          //跳转到首页
          this.$router.push("/");
        }
        if (res.err_code) {
          this.errToast("失败", res.message);
        }
      });
      // this.$router.push('/')
    },
    InRouterJump() {
      this.$router.push("/login");
    },
    //注册的表单验证
    register() {
      getRegisterData(this.nickname, this.email, this.password).then((res) => {
        if (!/^\w{3,12}@\w{1,5}\.[a-z]{2,3}$/.test(this.email)) {
          return this.errToast("失败", "邮箱格式有误");
        }
        if (this.nickname.length == 0) {
          return this.errToast("失败", "昵称不能为空");
        }
        if (this.password.length == 0) {
          return this.errToast("失败", "密码不能为空");
        }
        // err_code为0 表示注册成功，为1 表示失败
        if (!res.err_code) {
          this.successToast("成功", res.message);
          this.$router.push("/");
        }
        if (res.err_code) {
          this.errToast("失败", res.message);
        }
        //            return this.$notify.error({
        //   title: '错误',
        //   message: '密码不能为空'
        // })
      });
    },
    UpRouterJump() {
      this.$router.push("/register");
    },
    /**
     *  successToast 成功弹出的消息
     *  errToast 失败弹出消息
     */
    successToast(title, message) {
      this.$notify({
        type: "success",
        title,
        message,
      });
    },
    errToast(title, message) {
      this.$notify.error({
        title,
        message,
      });
    },
  },
};
</script>

<style coped>
@import "../assets/css/Login.css";
.container {
  width: 800px !important;
}
body {
  background-image: url(../assets/img/Login/background.jpg);
  background-repeat: no-repeat;
  	background-size: cover;
}
#main {
  opacity: 0.6;
}
#contain {
  opacity: 0.;
}
</style>
