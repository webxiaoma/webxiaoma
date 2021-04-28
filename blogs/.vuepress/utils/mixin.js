export default {
  data(){
     return {
       isLogin:false,
     }
  },
  watch:{
    $route(to,from){
      this.checkLogin()
    }
  },
  created(){
    this.checkLogin()
  },
  methods:{
    // 检测是否登录
    checkLogin(){
      try{
        const {password} = this.$site.themeConfig;
        const {isLogin} = this.$frontmatter;
        const session = this.getSession();
  
        // if(isLogin){
        //  const newPassword = password.replace(/\d+/g,"123");
        //  if(!newPassword === session){
        //    this.isLogin = false;
        //    this.$router.push("/");
        //  }else{
        //    this.isLogin = true;
        //  } 
        // }
      }catch(e){
        //  console.log(e)
      }
   
    },
    // 获取session
    getSession(){
      const session = localStorage.WEBXIAOMA_SESSION;
      if(session){
        return session.replace(/\d+/g,"123");;
      }else{
        return "";
      }
      
    }
  }

}