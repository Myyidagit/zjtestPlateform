<!--
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-07-27 18:51:47
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-07-27 18:53:53
-->
<template>
  <el-button type="primary" @click="bitEvent()">
      <slot></slot>
  </el-button>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{
      bitEvent(){
          this.$emit("click");
      }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.myDiv{}
</style>