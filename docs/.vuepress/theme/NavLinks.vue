<template>
  <nav
    class="nav-links"
    v-if="userLinks.length || repoLink"
  >
    <el-menu 
      :default-active="activeIndex" 
      :router="true" 
      class="el-menu-demo" 
      :mode="menuType" >
      <el-submenu v-for="item in userLinks" :key="item.text"  :index="''" v-if="item.items&&item.items.length">
        <template slot="title">
          {{item.text}}
        </template>
        
        <el-submenu v-for="list in item.items"  index="''"  v-if="list.items&&list.items.length">
          <template slot="title">
            {{list.text}}
          </template>
          <el-menu-item  v-for="child in list.items" :index="child.blank?'':child.link" :key="child.link">
            {{child.blank?"":child.text}}
             <a v-if="child.blank" :href="child.link" style="padding-bottom:5px;" target="_blank">{{child.text}}</a>
          </el-menu-item>
        </el-submenu>
        <el-menu-item  :index="list.blank?'':list.link" :key="list.link" v-else>
          {{list.blank?"":list.text}}
           <a v-if="list.blank" :href="list.link" style="padding-bottom:5px;" target="_blank">{{list.text}}</a>
        </el-menu-item>

      </el-submenu>
      <el-menu-item :index="item.blank?'':item.link" :key="item.link" v-else>
          {{item.blank?"":item.text}}
          <a v-if="item.blank" :href="item.link" style="padding-bottom:5px;" target="_blank">{{item.text}}</a>
      </el-menu-item>
    </el-menu>

  </nav>
</template>

<script>
import { resolveNavLinkItem } from './util'

export default {
  data(){
     return {
        activeIndex: '1',
        menuType:'horizontal',
     }
  },
  mounted(){
    // 控制导航显示隐藏与下划线
    let wWdith = window.innerWidth
    this.menuType = wWdith < 720?"vertical":"horizontal"
    window.onresize = ()=>{
      let wWdith = window.innerWidth
      this.menuType = wWdith < 720?"vertical":"horizontal"
    }

    this.activeIndex = this.$route.path

  },
  watch:{
    '$route'(to){
       this.activeIndex = to.path
    }
  },
  computed: {
    userNav () {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
    },
   
    nav () {
      const { locales } = this.$site
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path
        const routes = this.$router.options.routes
        const themeLocales = this.$site.themeConfig.locales || {}
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || 'Languages',
          items: Object.keys(locales).map(path => {
            const locale = locales[path]
            const text = themeLocales[path] && themeLocales[path].label || locale.lang
            let link
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path)
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path
              }
            }
            return { text, link }
          })
        }
        return [...this.userNav, languageDropdown]
      }
      return this.userNav
    },

    userLinks () {
      return (this.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        })
      })
    },

    repoLink () {
      const { repo } = this.$site.themeConfig
      if (repo) {
        return /^https?:/.test(repo)
          ? repo
          : `https://github.com/${repo}`
      }
    },

    repoLabel () {
      if (!this.repoLink) return
      if (this.$site.themeConfig.repoLabel) {
        return this.$site.themeConfig.repoLabel
      }

      const repoHost = this.repoLink.match(/^https?:\/\/[^/]+/)[0]
      const platforms = ['GitHub', 'GitLab', 'Bitbucket']
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i]
        if (new RegExp(platform, 'i').test(repoHost)) {
          return platform
        }
      }

      return 'Source'
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'
@import './styles/config.less'

.nav-links
  display inline-block
  a
    line-height 1.4rem
    color inherit
    &:hover, &.router-link-active
      color $accentColor
  .nav-item
    position relative
    display inline-block
    margin-left 1.5rem
    line-height 2rem
    &:first-child
      margin-left 0
  .repo-link
    margin-left 1.5rem

@media (max-width: $MQMobile)
  .nav-links
    .nav-item, .repo-link
      margin-left 0

@media (min-width: $MQMobile)
  .nav-links a
    &:hover, &.router-link-active
      color $textColor
  .nav-item > a:not(.external)
    &:hover, &.router-link-active
      margin-bottom -2px
      border-bottom 2px solid lighten($accentColor, 8%)
</style>


<style lang="less" scoped>
// element style
.nav-links{
  .el-menu--horizontal>.el-menu-item{
    height:45px;
    line-height:35px;
    font-size: 16px;
  
  }
  a{
     display: inline-block;
      width:100%;
     
      
  }
  /deep/.el-menu--horizontal>.el-submenu .el-submenu__title{
     height:45px;
     line-height:35px; 
     font-size: 16px;
  }
  .el-submenu{
    outline: none;
  }
  .el-menu--horizontal>.el-menu-item.is-active{
     color: #409eff;
  }
  /deep/.el-submenu:hover .el-submenu__title{
      color: #409eff;
  }
  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
     color: #409eff;
  }
} 

</style>
