<template>
    <div class="logs">
        <img :src="src" :alt="altImg" :width="width">
    </div>
</template>


<script>
export default {
    data(){
        return{
            altImg: "",
            widthImg:'',
        }
    },
    props:['src','alt','width'],
    mounted() {
        this.altImg = this.alt || "webxiaoma"
        this.widthImg = this.width || "100%"
    },
    methods:{
        
    }
}
</script>

<style lang="less" scoped>
.logs{
    width:100%;
    display: flex;
    align-items: center;
    img{
        display: block;
        height:auto;
    }
}
</style>
