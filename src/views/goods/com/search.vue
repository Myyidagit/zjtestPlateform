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
      <el-form-item label="商品名称：">
        <el-input
          v-model="form.name"
          style="width: 140px"
          size="small"
          clearable
          placeholder="请输入商品名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="上架时间：">
        <el-date-picker
          v-model="form.timeRage"
          size="small"
          type="datetimerange"
          value-format="timestamp"
          :default-time="['00:00:00', '23:59:59']"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="是否上架：">
        <el-select size="small" style="width: 140px" v-model="form.status" placeholder="请选择">
          <el-option label="全部" value="0"></el-option>
          <el-option label="上架" value="1"></el-option>
          <el-option label="下架" value="2"></el-option>
        </el-select>
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
        status: "0",
        timeRage:[]
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