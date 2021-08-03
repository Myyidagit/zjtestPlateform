<!--
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-04-01 16:33:37
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-04-12 17:42:38
-->
<template>
  <div class="goodsSearch">
    <el-button
          size="small"
          class="goodsSearchBtn"
          type="primary"
          @click="researchData()"
          >查询</el-button>
          <el-button
          size="small"
          class="goodsSearchBtn"
          type="primary"
          @click="addGood()"
          >新增</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      form:{
        name:"",
        status: "0"
      }
      
    };
  },
  watch: {},
  computed: {},
  methods: {
    researchData() {
      this.$emit("searchData",this.form)
    },
    addGood(){
      this.$emit("add")
    }
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.goodsSearch ::v-deep {
  background: #fff;
  clear: both;
  border-radius: 4px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  padding: 10px 0px;
  .el-radio-button__inner {
    border: none;
    width: 88px;
    padding: 10px 10px;
  }
  .el-form-item {
    display: inline-block;
    margin: 0;
    margin-left: 20px;
    .el-form-item__content{
      display: inline-block;
    }
  }
  .goodsSearchBtn{
    width: 80px;
    margin-left: 20px;
  }
}
</style>