<!-- 图片 -->
<template>
  <div :class="block?'imageWrapper block':'imageWrapper'">
     <div class="image" @click="showImgModel(true)">
       <img :src="imgUrl" alt="" :width="width">
     </div>

     <div class="imgModel" v-show="showMdel" @click="showImgModel(false)">
         <img :src="imgUrl" class="scaleImg">
     </div>
 </div>
</template>

<script>
const {base} = require("../../config");
export default {
  name: 'Images',
  components: {},
  data () {
    return {
      imgUrl:"",
      baseImgUrl:`${base}img`,
      scaleImgUrl:"",
      showMdel:false,
    };
  },
  props:{
    src:{
       type: String,
       default:""
    },
    alt:{
       type: String
    },
    width:{
       type: String | Number,
       default: 500
    },
    height:{
       type: String | Number,
       default: "auto"
    },
    block:{
       type: Boolean,
       default: false
    }
  },

  created(){
    const reg = /^(http|https):/;
    if(reg.test(this.src)){
       this.imgUrl = this.src;
    }else{
       this.imgUrl = `${this.baseImgUrl}${this.src}`;
    }    
  },
  methods: {
    showImgModel(bol){
       this.showMdel = bol;
    }
  },
}

</script>

<style scoped lang='stylus'>
.imageWrapper
  display inline-block
  border 1px solid #eee
  border-radius 6px
  padding 4px
  margin 4px
  overflow-x auto
  .imgModel
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    z-index 9999
    background rgba(1,1,1,0.7)
    text-align center 
    padding-top 30px
    overflow auto
    .scaleImg 
      width 70%


.block
  display block

@media (max-width: $MQMobile)
  .imageWrapper
    width 100%
    .image
       width 100%
       text-align center 
    .imgModel
      .scaleImg 
        width 90%
</style>