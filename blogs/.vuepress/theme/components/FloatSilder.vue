<!-- 浮动导航 -->
<template>
  <div class='floatSilderWrapper'>
    <div class="topTitle">{{title}}</div>
    <div class="contentNav">
      <ul class="nav">
        <li  v-for="(item,index) in nav" :class="item.level === 2?'title':'subTitle'" :key="index">
            <a :href="`#${item.slug}`">{{item.title}}</a>
        </li>
      </ul>
    </div>
     
 </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
       nav:[],
       title:"",
    };
  },
  created(){
    this.updataNav();
  },
  mounted () {
    this.$router.afterEach(() => {
      this.updataNav();
    })
  },
  methods: {
    updataNav(){
      this.title = this.$page.title;
      if(this.$page.headers){
           this.nav = [...this.$page.headers]
      }else{
         this.nav = []
      }
    }
  },
}

</script>

<style scoped  lang="stylus">
.floatSilderWrapper
   box-sizing border-box
   width 280px
   max-height 70%
   position fixed
   top 65px
   border-radius 0 0 4px 4px
   box-shadow 0 0  4px 2px #eee
   background #fff
   overflow-y auto 
   &::-webkit-scrollbar    //滚动条整体部分
    width: 2px;  
    height:10px;     
    background-color:#f1f1f1;
   &::-webkit-scrollbar-track       //scroll轨道背景
    -webkit-box-shadow: inset 0 0 6px rgba(234,236,239,0.3);  
    border-radius: 2px; 
    background-color:#f1f1f1;  
   &::-webkit-scrollbar-thumb  //滚动条中能上下移动的小块
    border-radius: 2px;  
    background-color:rgba(76,175,80,0.3);
   .topTitle
     background #3eaf7c
     padding 6px
     color #ffffff
     text-align center
     font-size 16px
     font-weight bold
   .contentNav
     padding 4px 10px 6px 12px
   .nav
     margin 0
     a
      display block
      &:hover
       color #3eaf7c
   .title
     font-size 14px
     margin 1px  0
     a
      color #666
      font-weight bold
   .subTitle
      font-size 13px
      margin 0 0 0 16px
      list-style-type circle
      a
        color #888

</style>