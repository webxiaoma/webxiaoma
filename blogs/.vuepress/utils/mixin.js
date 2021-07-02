import  store from '../theme/store';

export default {
  store,
  data(){
     return {
       readApi:"http://dict.youdao.com/dictvoice", // type: 0 英音，1为美音； audio 为所读单词
       video:null,
      }
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
  mounted() {
    this.createdVideo();
  },
  methods:{
    init(){
      try{
          const englishObj = localStorage.WEBXIAOMA_ENGLISH;
          if(englishObj){
            this.$store.dispatch("changeEnglish",JSON.parse(englishObj))
          }
      }catch(e){}
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
      try{
          const session = localStorage.WEBXIAOMA_SESSION;
          if(session){
            const obj = JSON.parse(unescape(session));
            obj.password = obj.password.replace(/\d+/g,"123")
            return obj;
          }else{
            return {};
          }
      }catch(e){}
    },
   // 设置session
    setSession(obj){
      try{
        const objStr = JSON.stringify({
          password:obj.password,
          user:obj.user
        })
        localStorage.WEBXIAOMA_SESSION = escape(objStr)
      }catch(e){}
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
    // 创建Video
    createdVideo(){
      try{
        let video = document.getElementById("video_English");
        if(!video){
           video = document.createElement("video");
           video.id = "video_English";
           video.style.display = "none"
           document.body.appendChild(video)
        }
        this.video = video;
      }catch(e){

      }
    },
    // 读英语
    readWord(word,type = 1){ // 读
      const {readApi} = this;
      const readUrl = `${readApi}?type=${type}&audio=${word}`
      if(word){
        this.video.src = readUrl;
        this.video.play();
      }
    },

  }

}