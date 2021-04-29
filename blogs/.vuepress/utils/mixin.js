import  store from '../theme/store';

export default {
  store,
  data(){
     return {}
  },
  watch:{
    $route(to,from){
      this.checkLogin()
    }
  },
  created(){
    this.checkLogin()
    this.init();
  },
  methods:{
    init(){
      const englishObj = localStorage.WEBXIAOMA_ENGLISH;
      if(englishObj){
        this.$store.dispatch("changeEnglish",JSON.parse(englishObj))
      }
    },
    // 检测是否登录
    checkLogin(){
      try{
        const {password} = this.$site.themeConfig;
        const {isLogin} = this.$frontmatter;
        const session = this.getSession();
        
        const newPassword = password.replace(/\d+/g,"123");
        if(session.password && (newPassword === session.password)){
          this.$store.dispatch("isLogin",true)
        }else{
          this.$store.dispatch("isLogin",false)
          if(isLogin){
            this.$router.push("/");
          }
        } 
      }catch(e){
        //  console.log(e)
      }
    },
    // 获取session
    getSession(){
      const session = localStorage.WEBXIAOMA_SESSION;
      if(session){
        const obj = JSON.parse(unescape(session));
        obj.password = obj.password.replace(/\d+/g,"123")
        return obj;
      }else{
        return {};
      }
    },
   // 设置session
    setSession(obj){
      const objStr = JSON.stringify({
        password:obj.password,
        user:obj.user
      })
      localStorage.WEBXIAOMA_SESSION = escape(objStr)
    },
    //清除seesion
    clearSession(){
      localStorage.clear();
      this.checkLogin();
    },

    // 获取用户信息
    getUserMsg(){
      const {user,password} = this.$site.themeConfig;
      const currentDate = new Date();
      const newPassword = password.replace(/\d+/g,"") + `${currentDate.getDate()}${currentDate.getMonth()+1}${currentDate.getFullYear()}`;
      return {
        user,
        password:newPassword
      }
    },

  }

}