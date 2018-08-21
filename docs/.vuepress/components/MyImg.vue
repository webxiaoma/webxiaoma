<template>
    <div class="logs">
        <img :src="src" :alt="altImg">
    </div>
</template>


<script>
export default {
    data(){
        return{
            altImg: ""
        }
    },
    props:['src','alt'],
    mounted() {
        this.altImg = this.alt || "webxiaoma"
    },
    methods:{
        
    }
}
</script>

<style lang="less" scoped>
.logs{
    width:100%;
    img{
        width:100%;
        height:auto;
    }
}
</style>
