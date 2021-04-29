<!-- 英语工具 -->
<template>
  <div class='englishToolWrapper'>
    <div class="title">常规操作：</div>
     <el-checkbox-group v-model="checkboxGroup" @change="checkboxChange">
        <el-checkbox-button :label="1" :key="1">{{checkboxGroup.indexOf(1) > -1?'隐藏':'显示' }}单词</el-checkbox-button>
        <el-checkbox-button :label="2" :key="2">{{checkboxGroup.indexOf(2) > -1?'隐藏':'显示' }}读音</el-checkbox-button>
        <el-checkbox-button :label="3" :key="3">{{checkboxGroup.indexOf(3) > -1?'隐藏':'显示' }}含义</el-checkbox-button>
    </el-checkbox-group>
 </div>
</template>

<script>
export default {
  name: 'EnTool',
  components: {},

  data () {
    return {
       checkboxGroup:[1,2,3],
    };
  },

  created(){
  },
  methods: {
    checkboxChange(e){
      const obj = {
        showWord:e.indexOf(1) > -1,
        showSoundmark:e.indexOf(2) > -1,
        showMeaning:e.indexOf(3) > -1,
      }
      this.$store.dispatch("changeEnglish",obj)

    }
  },
}

</script>

<style scoped lang='stylus'>
.englishToolWrapper
  width 100%
  .title
    padding 6px 0;
    font-weight bold
</style>