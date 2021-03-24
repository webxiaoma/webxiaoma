<!-- navcard 外套 -->
<template>
  <div class="navItem">
    <div class="navLine" v-show="title">
      <p class='line'></p>
      <p class="text">{{title}}</p>
      <p class='line'></p>
    </div>
    <el-row :gutter="30">
      <slot></slot>
    </el-row>
 </div>
</template>

<script>
export default {
  name: 'NavItem',
  components: {},
  data () {
    return {

    };
  },
  props:{
    title:{
      type: String,
      default:"",
    }
  },

  created(){
  },
  methods: {
  },
}

</script>

<style scoped lang='stylus'>
.navItem
  margin 20px 0
  .navLine
    width 100%
    padding 0 20px
    display flex 
    align-items center 
    p
     flex:1
    .line 
      flex:2
      height 1px
      background #eee
    .text
      font-size 18px
      font-weight bold
      text-align center
      color #777
</style>