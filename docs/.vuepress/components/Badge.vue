<template>
    <span :class="className">
        <slot></slot>
    </span>
</template>

<script>
export default {
    data(){
        return {
           className:''
        }
    },
    props:['type'],
    created(){
        this.className = `badge ` + (this.type || 'tip')
    }
}
</script>

<style lang="less" scoped>
.badge{
    display: inline-block;
    font-size: 14px;
    height: 18px;
    line-height: 18px;
    border-radius: 3px;
    padding: 0 6px;
    color: #fff;
    margin-right: 5px;
}
.tip{
    background-color: #42b983;
}
.warn{
    background-color:#e7c000;
}
.danger{
    background-color:#f56c6c;
}
</style>
