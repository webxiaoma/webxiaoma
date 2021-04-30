<!-- 英语 -->
<template>
  <div class='englishWrapper'>
     <el-popover
        placement="right"
        width="150"
        trigger="manual"
        popper-class="popoverWrapper"
        v-model="visible">
        <div class="popoverBtn">
           <el-button @click="readBtnClick(1)" type="success" size="mini">美音</el-button>
           <el-button @click="readBtnClick(0)" type="primary" size="mini">英音</el-button>
        </div>
        <div @click="wordClick"  slot="reference" :class="showWord?'wordWrapper':'wordWrapper filter'" v-html="wordObj.htmlStr"></div>
      </el-popover>
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
       type:0, //读音方式，0为美音，1 为英音 2 为选择
       readingWord:"",
       visible:false,
       currentReadApi:"", // 当前要读的方式
       popoverCanShow:false, //popover是否可以显示
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
     enType:{
       type: Number, // 英语类型：1：单词 2:句子 3：短语
       default: 1,
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
       this.setReadType();
     }
  },
  created(){
     this.init();
  },
  methods: {
    init(){
      const {englishObj} = this;
      this.createdWord();
      this.setReadType()
      
      this.showWord = englishObj.showWord;
      this.showSoundmark = englishObj.showSoundmark;
      this.showMeaning = englishObj.showMeaning;
    },
    createdWord(){
      const slotsAry = this.$slots.default;
      const {enType} = this;
      if(slotsAry){
         const text = slotsAry[0].text;
         const textStr = text.replace(/\s+/g, " ").replace(/(^\s*)|(\s*$)/g, "");
         const textAry = textStr.split(" ");
         let wordHtmlStr = "";
         let wordHtmlAryStr = [];
         let wordAry = [];

         textAry.forEach((item,index)=>{ //
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
            let className = "";
            if(enType === 1){ // 1：单词 2:句子 3：短语
              className = "word";
            }else if(enType === 2){
              className = "sentence";
            }else if(enType === 3){
              className = "phrase";
            }

            let htmStr = `<span class="english ${className}" data-id="${index}" data-text="${word}" data-type="${enType}" data-msg="${this.msg}" data-read="${this.read}">${htm}</span>`;
            wordAry.push(word);  
            wordHtmlStr += htmStr;
            wordHtmlAryStr.push(htmStr)
         })

         this.wordObj = {
            htmlStr:wordHtmlStr,
            htmlAry:wordHtmlAryStr,
            wordAry:wordAry,
         }
      }
    },
    setReadType(){ // 设置读取方式
      const {readGroup} = this.englishObj;
      if(readGroup.length < 2){
          if(readGroup.indexOf(1) > -1){ // 美音
             this.type = 1;
          }else{ // 英音
             this.type = 0;
          }
          this.popoverCanShow = false;
      }else{
         this.type = 2;
         this.popoverCanShow = true;
      }

    },
    wordClick(e){
      const {target} = e;
      const {type,popoverCanShow} = this;
      if (target.nodeName.toLowerCase() === 'span' || target.nodeName.toLowerCase() === 'i' ) {
         // 获取触发事件对象的属性
         const word = target.getAttribute("data-text")
         if(type !== 2){
           this.readWord(word,type)
         }else{
           this.readingWord = word;
           if(popoverCanShow){
            this.visible = true;
           }
         }
      }
      
      this.showClick("showWord")
    },
    readBtnClick(type){
      const {readingWord} = this;
      this.readWord(readingWord,type)
      this.visible = false;
    },
    readWord(word,type = 1){ // 读
      const {readApi} = this;
      const readUrl = `${readApi}?type=${type}&audio=${word}`
      if(word){
        this.video.src = readUrl;
        this.video.play();
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
    .english
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




.popoverWrapper
  .popoverBtn
    display flex
       
</style>