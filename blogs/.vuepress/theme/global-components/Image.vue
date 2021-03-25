<!-- 图片 -->
<template>
  <div class='imageWrapper'>
    aada
     <div class="image">
       <img src="https://himg.bdimg.com/sys/portraitn/item/73d5e593ade79d80e7ac91e5988e9236" alt="">
     </div>
 </div>
</template>

<script>
const {base} = require("../../config");
export default {
  name: 'Image',
  components: {},
  data () {
    return {

    };
  },
  props:{
    src:{
       type: String,
       default:""
    },
    alt:{
       type: String
    },
    width:{
       type: String
    },
    height:{
       type: String
    },
    block:{
       type: Boolean,
       default: false
    }
  },

  created(){

  },
  methods: {
  },
}

</script>

<style scoped lang='stylus'>
</style>