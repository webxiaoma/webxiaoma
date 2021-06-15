<!-- 英语工具 -->
<template>
  <div class='englishToolWrapper'>
     <div class="title" v-if="isReciteTool">背诵模式：</div>
     <el-checkbox-group v-if="isReciteTool" v-model="checkboxGroup" @change="checkboxChange" fillr="#3eaf7c" size="small">
        <el-checkbox-button :label="1" :key="1">{{checkboxGroup.indexOf(1) > -1?'隐藏':'显示' }}单词</el-checkbox-button>
        <el-checkbox-button :label="2" :key="2">{{checkboxGroup.indexOf(2) > -1?'隐藏':'显示' }}读音</el-checkbox-button>
        <el-checkbox-button :label="3" :key="3">{{checkboxGroup.indexOf(3) > -1?'隐藏':'显示' }}含义</el-checkbox-button>
     </el-checkbox-group>
     <div class="title">读音操作：</div>
     <div class="readWrapper">
       <div class="btnWrapper"  v-if="isSoundmarkTool">
         <el-checkbox-group v-model="readGroup" @change="readChange" fillr="#3eaf7c" size="small">
              <el-checkbox-button :label="1" :key="1">美音</el-checkbox-button>
              <el-checkbox-button :label="2" :key="2">英音</el-checkbox-button>
          </el-checkbox-group>
        </div>
        <div class="btnWrapper"  v-if="isReadTool">
            <el-button v-show="!reading" @click="readStart" type="success" size="small" icon="el-icon-video-play">朗读</el-button>
            <el-button v-show="reading" @click="readStop" type="danger" size="small" icon="el-icon-video-pause">停止</el-button>
            <el-button type="primary" @click="resetClick" size="small" icon="el-icon-refresh-right">重置</el-button>
            <el-checkbox v-model="loop" border size="small" >循环</el-checkbox>
            <el-checkbox v-model="showMsg" border size="small" >含义</el-checkbox>
        </div>
        <div  v-if="isReadTool">
            <span class="span" v-show="allWords.length">共:<b>{{allWords.length}}</b>个单词</span>
            <span class="span" v-show="allWords.length">已读个数:<b>{{readingWordObj.index + 1}} </b></span>
            <p class="wordP" v-show="readingWordObj.word">正在读：<span><b>{{readingWordObj.word}}</b> <code v-show="readingWordObj.read">{{readingWordObj.read}}</code></span></p>
            <p class="wordP" v-show="readingWordObj.msg&&showMsg">意思：<span><b>{{readingWordObj.msg}}</b></span></p>
        </div>
     </div>
 </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'EnTool',
  components: {},

  data () {
    return {
      checkboxGroup:[1,2,3],
      readGroup:[1],
      loop:false,
      showMsg:true,
      allWords:[],
      readingIndex:0, // 读取到的位置
      timer:null,
      readingWordObj:{
        word:"",
        index:0,
        msg:"",
        read:"",
      },
    };
  },
  props:{
    isReciteTool:{ //是否显示背诵工具
      type:Boolean,
      default: true
    },
    isSoundmarkTool:{ //是否显示音标工具
      type:Boolean,
      default: true
    },
    isReadTool:{ //是否显示朗读工具
      type:Boolean,
      default: true
    },
  },
  computed:{
     ...mapState(["englishObj","reading"])
  },
  watch:{
    $route(to,from){
      console.log(to)
    }
  },
  created(){
    this.init();
  },
  beforeDestroy(){
    this.readStop()
  },
  methods: {
    init(){
      try{
        const enObjStr = localStorage.WEBXIAOMA_ENGLISH;
        if(enObjStr){
           const enObj = JSON.parse(enObjStr)
           this.checkboxGroup = [...enObj.checkboxGroup];
           this.readGroup = [...enObj.readGroup];
        }
      }catch(e){}
    },
    
    checkboxChange(e){
      const {readGroup} = this;
      const obj = {
        showWord:e.indexOf(1) > -1,
        showSoundmark:e.indexOf(2) > -1,
        showMeaning:e.indexOf(3) > -1,
        checkboxGroup:e,
        readGroup,
      }
      this.$store.dispatch("changeEnglish",obj)
    },
    readChange(e){
      const {checkboxGroup} = this;
      const obj = {
        showWord:checkboxGroup.indexOf(1) > -1,
        showSoundmark:checkboxGroup.indexOf(2) > -1,
        showMeaning:checkboxGroup.indexOf(3) > -1,
        checkboxGroup,
        readGroup:e,
      }
       this.$store.dispatch("changeEnglish",obj)
    },
    readStart(){ // 开始朗读
     this.getAllWords();
       const {allWords} = this;
       if(!this.reading){
          this.video.addEventListener("ended",this.addEventFun)
          const wordObj = allWords[this.readingIndex];
          this.readingWordObj = wordObj
          this.readWord(wordObj.word,1)
          this.$store.dispatch("readChange",true);
       }
    },
    readStop(){ // 停止朗读
       this.video.removeEventListener("ended",this.addEventFun);
       this.$store.dispatch("readChange",false);
    },
    resetClick(){
       this.readingIndex = 0;
       this.readStop();
       this.readStart();
    },
    addEventFun(){
        const {allWords} = this;
        const length = allWords.length;
        this.readingIndex = this.readingIndex + 1;
        if(this.readingIndex >= length){ // 阅读完
          if(this.loop){ // 循环
            this.readingIndex = 0;
            const wordObj = allWords[this.readingIndex];
            this.readingWordObj = wordObj
            this.readWord(wordObj.word,1)
          }else{
              this.readingIndex = 0;
              this.readingWordObj = Object.assign({},this.readingWordObj,{
                word:"",
                index:0,
                msg:"",
                read:"",
              })
              this.readStop();
          }
        }else{
          const wordObj = allWords[this.readingIndex];
          this.readingWordObj = wordObj
          this.readWord(wordObj.word,1)
        }
    },
    getAllWords(){ // 获取所有英语单词
      const {allWords} =  this;
      if(allWords.length === 0){
        const wordSpanList = document.querySelectorAll("span.word");
        const wordAry = [];
        Array.prototype.slice.call(wordSpanList).forEach((item,index)=>{
           wordAry.push({
              word:item.getAttribute("data-text"),
              index,
              msg:item.getAttribute("data-msg"),
              read:item.getAttribute("data-read") || ""
           })
        })
        this.allWords = [...wordAry];
      }
    },
  },
}

</script>

<style scoped lang='stylus'>
.englishToolWrapper
  width 100%
  .title
    padding 6px 0
    font-weight bold
  .readWrapper
    .btnWrapper
      display flex
      margin 10px 0
    .span
       margin-right 10px
    .wordP
       span  
         color:#3eaf7c;
      

// -------------------------------------
/deep/.el-button{
  margin-right 10px
  margin-left 0px
}
/deep/.el-checkbox{
  margin-right 2px
}  

/deep/.el-checkbox-button.is-checked .el-checkbox-button__inner{
  background-color: #3eaf7c;
  border-color: #3eaf7c;
  box-shadow:-1px 0 0 0 #bdf3a3;
}
/deep/.el-checkbox-button.is-foucs .el-checkbox-button__inner{
  border-color: #3eaf7c;
}
</style>