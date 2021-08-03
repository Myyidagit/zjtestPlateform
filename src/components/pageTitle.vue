<!--
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-08-03 12:30:50
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-08-03 14:12:46
-->
<template>
  <div class="pageTitle">
      <span v-if="isCustom">
          <slot></slot>
      </span>
      <span v-else>{{title}}</span>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
      //是否自定义内容
      isCustom:{
          type:Boolean,
          default:()=>{
              return false
          }
      },
      //内容为
      content:{
          type:String,
          default:()=>{
              return "";
          }
      }
  },
  data(){
    return {
        title:""
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){
      console.log(this.$route.meta.title)
      this.title = this.$route.meta.title;
  },
  mounted(){}
}
</script>
<style lang="scss" scoped>
.pageTitle{
    font-weight: bold;
    font-size: 18px;
}
</style>