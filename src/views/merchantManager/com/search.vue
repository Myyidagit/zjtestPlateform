<!--
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-04-01 16:33:37
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-04-20 19:07:33
-->
<template>
  <div class="goodsSearch">
    <el-form>
      <el-form-item label="厂商名称：">
        <el-input
          v-model="form.name"
          style="width: 140px"
          size="small"
          clearable
          placeholder="厂商名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button
          size="small"
          class="goodsSearchBtn"
          type="primary"
          @click="researchData()"
          >搜索</el-button>
          <el-button
          size="small"
          class="goodsSearchBtn"
          type="primary"
          @click="resetManage()"
          >重置</el-button>
      </el-form-item>
    </el-form>
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
      }
      
    };
  },
  watch: {},
  computed: {},
  methods: {
    researchData() {
      this.$emit("searchData",this.form)
    },
    resetManage(){
      this.$emit("resetManage")
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