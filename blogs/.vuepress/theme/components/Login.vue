<!-- 登录 -->
<template>
  <div class='login'>
    <div class="loginBtn" v-if="!isLogin" @click="login">登录</div>
    <div class="logining" v-if="isLogin">
       <ClientOnly>
          <el-popover
              placement="bottom"
              width="100"
              trigger="click"
              class="popverWrapper">
              <div class="listBtn">
                <div class="btn" @click="exit">退出</div>
              </div>
              <div class="avatarWrapper"  slot="reference">
                <el-avatar :size="24" src="/docs/img/manong.jpg" ></el-avatar>
              </div>
          </el-popover>
        </ClientOnly>
    </div>
    <div class="loginModel" v-if="logining">
       <div class="loginCenter">
         <div class="close"><i class="el-icon-close" @click="close"></i></div>
          <div class="bi-login">
            <div class="bi-login-logo">
              <img src="/docs/img/manong.jpg" alt />
            </div>
            <h2 class="bi-login-text">登录</h2>
            <div class="bi-form">
              <el-form :model="loginForm"  :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item label prop="userName">
                  <el-input
                    v-model="loginForm.userName"
                    @keyup.enter.native="loginSubmit"
                    placeholder="请输入用户名"
                    :maxLeng="25"
                  >
                    <template slot="prepend">
                      <i class="el-icon-user"></i>
                    </template>
                  </el-input>
                </el-form-item>
                <el-form-item label prop="password">
                  <el-input
                    type="password"
                    v-model="loginForm.password"
                    @keyup.enter.native="loginSubmit"
                    :maxLeng="20"
                    :show-password="true"
                    placeholder="请输入密码"
                  >
                    <template slot="prepend">
                      <i class="el-icon-lock"></i>
                    </template>
                  </el-input>
                </el-form-item>
                <el-form-item size="large">
                  <el-button type="primary" @click="loginSubmit" :loading="loginLoading">{{
                    loginLoading ? '登录中,请稍等...' : '立即登录'
                  }}</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
       </div>
    </div>
 </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  components: {},

  data () {
    return {
      loginLoading: false,
      loginForm: {
        userName: '', // 
        password: '', // 
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 25, message: '长度在3到25的用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 2, max: 20, message: '请输入2到20位的密码', trigger: 'blur' },
        ],
      },
    };
  },
  
  computed:{
     ...mapState(["logining","isLogin"])
  },
  created(){
  
  },
  methods: {
    login(){
      this.$store.dispatch("changeLogin",true)
    },
    loginSubmit(){
       this.$refs.ruleForm.validate(valid => {
        if (valid) {
           const userMsg =  this.getUserMsg();
           const {loginForm} = this;
           if(
             loginForm.userName === userMsg.user
              && loginForm.password === userMsg.password
            ){
               this.loginForm = {
                userName: '', // 
                password: '', // 
               }
               this.$store.dispatch("isLogin",true)    
               this.$store.dispatch("changeLogin",false) 
               this.setSession({
                  password:loginForm.password,
                  user:loginForm.userName
               }) 
               this.$message.success('登录成功');
              
            }else{
              this.$message.error('用户名或密码错误');
              this.$store.dispatch("isLogin",false)
            }
        }
       })
    },
    close(){
      this.loginState = false;
      this.$root.loginLoading = false;
      this.$store.dispatch("changeLogin",false)
    },
    exit(){
      this.clearSession();
    }
  },
}

</script>

<style scoped lang='stylus'>
.login
  .loginBtn
    cursor pointer
  .logining
    height 26px
    .avatarWrapper
      height 26px
      margin-top 5px
  .loginModel
    width 100%
    height 100%
    position fixed
    top 0
    left 0
    background rgba(1,1,1,0.1)
    .loginCenter
      width 340px
      padding 10px 20px
      min-height 480px
      position fixed
      top 20%
      left calc(50% - 170px)
      z-index 9999
      .close
        padding 10px 0;
        text-align right
        font-size 28px
        i{
          cursor pointer
        }
      .bi-login {
        position: relative;
        z-index: 9;
        width: 100%;
        margin: 0 auto;
        margin-bottom: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .bi-login-logo {
          background: #fff;
          width: 90px;
          height: 90px;
          margin-bottom: 16px;
          border: 1px solid #eee;
          border-radius: 12px;
          box-shadow: 0 0 12px 3px #eee;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            display: inline-block;
            height: 88%;
            user-select: none;
          }
        }
        .bi-login-text {
          margin: 12px 0px 30px 0;
          color: #494949;
          opacity: 0.9;
          font-weight: bold;
          user-select: none;
        }
        .bi-form {
          width: 100%;
          user-select: none;
          .el-button--primary {
            width: 100%;
          }
        }
      }




// ------------



.listBtn 
  width 100%
  .btn
    width 100%
    padding 6px 10px
    border-top 1px  solid #eee
    border-bottom 1px  solid #eee
    &:hover
      background #eee
    &:active
      background #eee
  
.el-popover
  padding 12px 0




@media (max-width: $MQMobile)
 .login
    .loginModel
      .loginCenter
        width 340px
        padding 10px 20px
        height 400px
        position fixed
        top 20%
        left calc(50% - 170px)
        z-index 9999
  
</style>