<template>
  <main  :class="logining?'page filter':'page'">
    <slot name="top" />
    <div class="main">
      <div class="content">
          <Content class="theme-default-content" />
          <PageEdit />
          <PageNav v-bind="{ sidebarItems }" />
      </div>
      <div v-if="isShowFloatSilder" class="floatSilder hidden-sm-and-down">
          <FloatSilder  v-show="isShowFloatSilder" />
      </div>
    </div>
    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import FloatSilder from '@theme/components/FloatSilder.vue'
import {mapState} from "vuex";

export default {
  components: { PageEdit, PageNav, FloatSilder},
  props: ['sidebarItems'],
  data(){
    return {
      isShowFloatSilder:false,
    }
  },
  computed:{
     ...mapState(["logining"])
  },
  created(){
    this.checkFolatSilder();
  },
  mounted () {
    this.$router.afterEach(() => {
       this.checkFolatSilder();
    })
  },
  methods:{
    checkFolatSilder(){
        const {floatSilder} = this.$page.frontmatter;
        if(floatSilder === undefined){
          this.isShowFloatSilder = true;
        }else{
          this.isShowFloatSilder = floatSilder?true:false;
        }
    }
  }
  
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.filter
  filter blur(10.1px)
  
.page
  padding-bottom 0
  display block
  .main
    width 100%
    display flex
    background #eaecef
    min-height 100vh
    .content
      flex 1
      width 0
      margin 0 10px
      padding-bottom 2rem
      background #fff
      position relative
    .floatSilder
      width 290px


@media (max-width: $MQMobile)
  .page
    .main
      background #fff
      .content
         width 100%
         margin 0
         padding 0 8px
</style>
