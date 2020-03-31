<template>
  <div class="theme-container">
    <div class="content">
      <h1>404</h1>
      <blockquote>您访问的页面似乎消失了</blockquote>
      <router-link to="/">访问首页</router-link>
      <p>{{time}}s后自动跳转</p>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
       time:5,
       timeId:null,
    }
  },
  created(){
    this.setTime()
  },
  destroyed(){
     if(this.timeId) clearInterval(this.timeId);
  },
  methods: {
     setTime(){
        this.timeId = setInterval(()=>{
          if(this.time < 1){
             this.$router.push("/")
          }else{
             this.time -= 1
          }
        },1000)
     }
  }
}
</script>
