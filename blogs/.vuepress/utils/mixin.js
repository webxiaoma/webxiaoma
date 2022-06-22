import  store from '../theme/store';
import sha256 from 'crypto-js/sha256';

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
        const {isLogin} = this.$frontmatter;
        const session = this.getSession();

        const getUserMsg = this.getUserMsg();
        const token = sha256(getUserMsg.password+getUserMsg.user).toString();
      
        if(session && session === token){
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
        return session;
    },
   // 设置session
    setSession(obj){
      try{
        localStorage.WEBXIAOMA_SESSION = sha256(obj.password+obj.user).toString()
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