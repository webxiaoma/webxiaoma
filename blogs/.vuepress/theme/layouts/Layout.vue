<template>
   <div :class="$root.$ele?'layout-wrapper ele-class':'layout-wrapper'">
      <div class="electron-wrapper" v-if="$ele && isLogin">
         <div class="ele-center">
            <ul class="ele-setting">
              <li @click="openConsole">
                 <i class="el-icon-monitor"></i>
              </li>
              <li @click="screenChange">
                 <i class="el-icon-full-screen"></i>
              </li>
              <li @click="hiddenScreen">
                 <i class="el-icon-minus"></i>
              </li>
              <li @click="exit">
                 <i class="el-icon-close"></i>
              </li>
            </ul>
         </div>
      </div>
      <div
        class="theme-container"
        :class="pageClasses"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
      >
        <Navbar
          class="ele-navbar"
          v-if="shouldShowNavbar"
          @toggle-sidebar="toggleSidebar"
        />

        <div
          class="sidebar-mask"
          @click="toggleSidebar(false)"
        />

        <Sidebar
          :items="sidebarItems"
          @toggle-sidebar="toggleSidebar"
        >
          <template #top>
            <slot name="sidebar-top" />
          </template>
          <template #bottom>
            <slot name="sidebar-bottom" />
          </template>
        </Sidebar>

        <Home v-if="$page.frontmatter.home" />
      <Page
          v-else
          :sidebar-items="sidebarItems"
        >
          <template #top>
            <slot name="page-top" />
          </template>
          <template #bottom>
            <slot name="page-bottom" />
          </template>
      </Page>

      </div>
   </div>
</template>

<script>
import {mapState} from "vuex";
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import { resolveSidebarItems } from '../util'
import {openConsole,hiddenScreen,screenChange,exit,urlJump} from '@theme/util/electron';


export default {
  name: 'Layout',
  components: {
    Home,
    Page,
    Sidebar,
    Navbar
  },

  data () {
    return {
      isSidebarOpen: false,
      isFullscreen:false,
    }
  },
  created(){
     this.checkLogin()
  },
  computed: {
    ...mapState(["isLogin"]),
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })

    this.aLinkJump();
  },

  methods: {
   
    // electron 控制
    openConsole(){
      openConsole()
    },
    hiddenScreen(){
      hiddenScreen();
    },
    screenChange(){
       if(this.isFullscreen){
           screenChange(false);
           this.isFullscreen = false;
       }else{
          screenChange(true);
          this.isFullscreen = true;
       }
       
    },
    exit(){
      exit()
    },
    aLinkJump(){

       if(this.$root.$ele){
           ///
       }
        // const reg = /^(http|https):\/\/webxiaoma/;
        // const reg = /^(http|https):\/\/localhost/;
      
        // document.body.addEventListener("click",(ev)=>{
           
        //    const aHtml = document.querySelectorAll("a");

        //    console.log(aHtml)
            
        //    const target =  ev.target || ev.srcElement;
        //    if(target.nodeName.toLowerCase() === "a"){
        //      console.log(href)
        //      console.log(reg.test(href))
        //        const href = target.href || "";
        //        if(!reg.test(href)){
        //          ev.preventDefault();
        //          urlJump(href)
        //        }
        //     }

        // })
    },
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>

<style lang="stylus">
  
.ele-class
  .electron-wrapper
    
    height 24px
    width 100%
    position fixed
    top 0
    z-index 999
    background #fff
    -webkit-app-region drag
    .ele-center{
      width 100%
      height 100%
      padding 0 10px
      display flex
      justify-content flex-end
    }
    .ele-setting
      margin 0
      padding 0
      list-style none
      height 100%
      display flex
      li
        width 24px
        height 100%
        display flex
        justify-content center  
        align-items center
        cursor pointer
        -webkit-app-region no-drag
  .ele-navbar
    top 24px
  .sidebar 
    top: 3.9rem;
  .page
    padding-top 24px
    .floatSilderWrapper
      top 90px



@media (min-width: 719px)
  .theme-container
    .sidebar 
      width 16rem
    .page
      padding-left 16rem
      .pageCenter
        padding: 2rem 2.5rem;
      

 
    

</style>