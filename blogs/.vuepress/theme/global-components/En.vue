<!-- 英语 -->
<template>
  <div class='englishWrapper'>
     <div @click="wordClick"  :class="showWord?'wordWrapper':'wordWrapper filter'" v-html="wordObj.htmlStr"></div>
     <div @click="showClick('showSoundmark')" :class="showSoundmark?'readWrapper':'readWrapper filter'" v-if="read"><Badge :text="read"></Badge> </div>
     <div @click="showClick('showMeaning')" :class="showMeaning?'':'filter'" v-if="msg">{{msg}}</div>
 </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'En',
  components: {},
  data () {
    return {
       wordObj:{
         htmlStr:"",
         htmlAry:[],
         wordAry:[],
       },
       readApi:{
         youDaoUk:"http://dict.youdao.com/dictvoice?type=0&audio=",
         youDaoUs:"http://dict.youdao.com/dictvoice?type=1&audio=",
       },
       video:null,
       currentReadApi:"",
       showWord:true, // 显示单词
       showSoundmark:true, // 显示音标
       showMeaning:true, // 显示意思
    };
  },
  props:{
     read:{ 
       type: String,
       default:""
     },
     msg:{
       type:String,
       default:""
     },
     type:{ // 读音方式，1为美音，2 为英音 3 为选择
       type: Number,
       default: 1
     }
  },
  computed:{
     ...mapState(["englishObj"])
  },
  watch:{
     englishObj(newObj){
       this.showWord = newObj.showWord;
       this.showSoundmark = newObj.showSoundmark;
       this.showMeaning = newObj.showMeaning;
     }
  },
  created(){
     this.init();
  },
  mounted(){
    this.createdVideo();
  },
  methods: {
    init(){
      const {englishObj} = this;
      this.createdWord();
      this.setReadType(this.type)
      
      this.showWord = englishObj.showWord;
      this.showSoundmark = englishObj.showSoundmark;
      this.showMeaning = englishObj.showMeaning;
    },
    createdWord(){
      const slotsAry = this.$slots.default;
      if(slotsAry){
         const text = slotsAry[0].text;
         const textStr = text.replace(/\s+/g, " ").replace(/(^\s*)|(\s*$)/g, "");
         const textAry = textStr.split(" ");
         let wordHtmlStr = "";
         let wordHtmlAryStr = [];
         let wordAry = [];

         textAry.forEach((item,index)=>{ //
           console.log(item.split(""))
            let word = item.replace(/\`/g,"");
            let sum = 0;

            const letterAry = item.split("").map((item)=>{ // 遍历增加重音部分
              if(item === "`"){
                 sum++;
                 if(sum%2){
                    return `<i class="flag" data-id="${index}" data-text="${word}">`
                 }else{
                   return `</i>`
                 }
              }
              return item;
            })
            let htm = letterAry.join("");
            let htmStr = `<span class="word" data-id="${index}" data-text="${word}">${htm}</span>`;
            wordAry.push(word);  
            wordHtmlStr += htmStr;
            wordHtmlAryStr.push(htmStr)
         })

         this.wordObj = {
            htmlStr:wordHtmlStr,
            htmlAry:wordHtmlAryStr,
            wordAry:wordAry,
         }
         console.log(this.wordObj)
         
      }
    },
    setReadType(type){ // 设置读取方式
      if(type === 1){ // 美音
        this.currentReadApi = this.readApi.youDaoUs;
      }else  if(type === 2){ // 2 为英音
        this.currentReadApi = this.readApi.youDaoUk;
      }
    },
    wordClick(e){
      const {target} = e;
      if (target.nodeName.toLowerCase() === 'span' || target.nodeName.toLowerCase() === 'i' ) {
         // 获取触发事件对象的属性
         const word = target.getAttribute("data-text")
         this.readWord(word)
      }
      
      this.showClick("showWord")
    },
    readWord(word){ // 读
      if(word){
        this.video.src = `${this.currentReadApi}${word}`;
        this.video.play();
      }
    },
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
    showClick(filed){
     this[filed] = true;
    }
  },
}

</script>

<style  lang='stylus'>
.englishWrapper
  display flex
  flex-wrap wrap
  margin 8px 0;
  .wordWrapper
    background rgba(219,240,229,0.5)
    padding 0 4px
    border-radius 2px
    margin-right 4px
    .word
      color #3eaf7c
      margin 0 4px
      font-size 13px
      .flag 
        font-style normal
        color red
  .readWrapper
    margin-right 6px


  .filter
    filter blur(6.1px)
       
</style>