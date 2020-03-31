<template>
  <div class="home">
    <div class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        alt="hero"
      >
      <h1>马新想个人网站</h1>
      <h2 class="description">
        webxiaoma
      </h2>
      <h3 class="description">
          其他相关账户
      </h3>
       <a class="linkBtn" href="https://webxiaoma.github.io/java-demos/docs/blogs/" target="_banlk">
          <el-button type="primary">
              Java学习
          </el-button>
       </a>
       <a class="linkBtn" href="https://webxiaoma.github.io/project-cli/docs/blogs/" target="_banlk">
        <el-button type="primary">
            Project-Cli 项目工具 →
        </el-button>
       </a>
       <a class="linkBtn" href="https://webxiaoma.github.io/web-plugins/docs/blogs/" target="_banlk">
        <el-button type="primary">
            前端库插件 →
        </el-button>
       </a>
       <a class="linkBtn" href="https://webwangjia.github.io/wechat-demo/docs/blogs/" target="_banlk">
          <el-button type="primary">
              WeChat微信 →
          </el-button>
       </a>
        <a class="linkBtn" href="https://webxiaoma.github.io/tools-docs/docs/blogs/index.html" target="_banlk">
          <el-button type="primary">
              常用工具 →
          </el-button>
       </a>
       <!-- <a href="/knowledge/" target="_banlk">
        <el-button type="primary">
          <i class="el-icon-search el-icon--right"></i>
          知识
        </el-button>
       </a> -->
    </div>

    <div  class="features">
      <div class="feature">
        <h2>关于网站</h2>
        <p>目前本网站以个人博客，文档分享为主，主要是用于记录学习与分享使用。</p>
      </div>
       <div class="feature">
        <h2>本站声明</h2>
        <p>本站的文章部分参考网上的博文内容，并加入个人理解，如若侵权请联系本人。</p>
      </div>
      <div class="feature">
        <h2>联系方式</h2>
        <p>邮箱：webxiaoma@qq.com。</p>
      </div>
    </div>

    <Content custom/>

    <div class="footer" >
      Copyright © 2018 webxiaoma
    </div>
  </div>
</template>


<script>

export default {

  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
      }
    },
    
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.home
  padding $navbarHeight 2rem 0
  max-width 1200px
  margin 0px auto
  .hero
    text-align center
    img
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .linkBtn
      display: inline-block;
      margin 5px 0
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 1.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1rem
    padding-right 1rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
