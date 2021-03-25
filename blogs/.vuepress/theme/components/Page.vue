<template>
  <main class="page">
    <slot name="top" />
    <div class="main">
      <div class="content">
         <Content class="theme-default-content" />
         <PageEdit />
         <PageNav v-bind="{ sidebarItems }" />
      </div>
      <div v-if="isShowFloatSilder" class="floatSilder hidden-sm-and-down">
          <FloatSilder />
      </div>
    </div>
    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import FloatSilder from '@theme/components/FloatSilder.vue'

export default {
  components: { PageEdit, PageNav, FloatSilder},
  props: ['sidebarItems'],
  data(){
    return {
      isShowFloatSilder:true,
    }
  },
  created(){
    const {floatSilder} = this.$page.frontmatter
    if(floatSilder !== undefined)
      this.isShowFloatSilder = floatSilder?true:false;
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 0
  display block
  .main
    display flex
    background #eaecef
    min-height 100vh
    .content
      flex 1
      margin 0 10px
      padding-bottom 2rem
      background #fff
    .floatSilder
      width 260px


@media (max-width: $MQMobile)
  .page
    .main
      background #fff
</style>
