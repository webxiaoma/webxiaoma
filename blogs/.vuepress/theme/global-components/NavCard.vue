<!--  -->
<template>
  <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4">
      <div class='cardWrapper'>
        <a :href="jumpUrl" target="_blank" class="aFlag">
          <div class="card" :title="des">
              <div class="cardTop">
                <div class="cardLogo">
                  <img :src="logoUrl" class="img">
                </div>
                <div class="cardTitle">{{title}}</div>
              </div>
              <div class="cardDescription">{{des}}</div>
          </div>
        </a>
      </div>
  </el-col>
</template>

<script>
const {base} = require("../../config");
export default {
  name: 'NavCard',
  components: {},

  props:{
    title:{
      type: String,
      default: "未知"
    },
    logo:{
      type: String,
      default: "web.png"
    },
    des:{
      type: String,
      default: "暂无描述"
    },
    jumpUrl:{
      require: true,
      type: String,
    },
  },

  data () {
    return {
       logoUrl:"",
       baseImgUrl:`${base}img/website/`,
    };
  },

  created(){
    const reg = /^(http|https):/;
    if(reg.test(this.logo)){
       this.logoUrl = this.logo;
    }else{
       this.logoUrl = `${this.baseImgUrl}${this.logo}`;
    }    

  },
  methods: {
    
  },
}

</script>

<style scoped lang='stylus'>
.cardWrapper
  width 100%
  margin 10px 0
  .aFlag
    display block
    width 100%
    height 100%
    &:hover
      text-decoration none
  .card
    cursor pointer
    width 100%
    height 106px
    padding 6px
    border-radius 6px
    box-shadow 0 2px 10px 0 rgba(0,0,0,.1)
    border 1px solid #eee
    transition all .2s linear
    &:hover
      box-shadow 0 2px 10px 0 rgba(0,0,0,.3)
    .cardTop
      display flex
      justify-content space-between
      align-items center
      height 44px
      padding 0 8px
      .cardLogo
        height 100%
        .img 
          height 44px
          width auto
      .cardTitle
        color #3eaf7c
        font-size 20px
        font-weight bolder
    .cardDescription
      margin 5px
      display -webkit-box
      -webkit-box-orient vertical
      -webkit-line-clamp 2
      overflow hidden
      color #999
      text-align justify
      font-size 14px
      line-height 22px


@media (max-width: $MQMobile)
  .cardWrapper
    .card
      .cardTop
        .cardLogo
          .img 
            height 42px
        .cardTitle
          font-size 16px
</style>