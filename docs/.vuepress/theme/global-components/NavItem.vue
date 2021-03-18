<!-- navcard 外套 -->
<template>
  <div class="navItem">
    <el-row :gutter="30">
      <slot></slot>
    </el-row>
 </div>
</template>

<script>
export default {
  name: 'NavItem',
  components: {},
  data () {
    return {

    };
  },

  created(){
  },
  methods: {
  },
}

</script>

<style scoped lang='stylus'>
.navItem
  margin 20px 0
</style>