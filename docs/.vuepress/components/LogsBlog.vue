<template>
    <div class="logs">
          <div id="logsChart">
              <el-button type="success">构建工具</el-button>
          </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
           radio:'',
           data:{
               title:'构建工具',
               url:'',
               children:[
                   
               ]
           }
        }
    },
    mounted() {
    },
    methods:{
        
    }
}
</script>

<style lang="less" scoped>
.logs{
    display: flex;
    justify-content: center;
    #logsChart{
        width:100%;
        height:400px;
    }
}
</style>
