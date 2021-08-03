<!--
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-03-31 16:57:29
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-04-12 18:40:03
-->
<template>
  <div class="classType">
    <search @add="addGoods" @searchData="search"></search>
    <div class="tableBox">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        :highlight-current-row="true"
      >
        <el-table-column prop="label" label="分类名称">
        </el-table-column>
        <el-table-column prop="id" label="分类id">
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button type="text" @click="checkData(scope.row)">查看</el-button>
            <el-button type="text" @click="deleteGoods(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pageBox">
        <!-- <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="pageTotal"
          background
          layout="total,prev, pager, next"
        >
        </el-pagination> -->
      </div>
    </div>
    <adddialog ref="addDialog" @upDate="search" :classList="classType"></adddialog>
  </div>
</template>

<script>
import search from "./com/search.vue";
import adddialog from "./com/addDialog"
import dayjs from "dayjs"
export default {
  components: { search,adddialog },
  props: {},
  data() {
    return {
      form:{
        name:"",
        status: "0"
      },
      tableData: [],
      currentPage: 1,
      pageSize: 10,
      pageNum:1,
      pageTotal: 0,
      classType:[]
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleCurrentChange(page) {
      this.currentPage = page;
      this.getGoodsList();
    },
    addGoods(){
        this.$refs.addDialog.showDialog();
    },
    //查看数据详情
    checkData(obj){
      this.$refs.addDialog.showDialog(obj._id);
    },
    /**
     * 查询数据
     */
    search(form){
      if(form){
        this.form = form;
      }
      console.log("掉没掉")
      this.getGoodsList()
    },
    /**
     * 删除
     */
    deleteGoods(goods){
      let params = {
        id:goods._id
      }
      this.$http.classType.deleteGoods(params).then(res =>{
        let result = res.data;
        if(result.code == 200){
          this.$message.success('删除成功');
          this.getGoodsList();
        }else{
          this.$message.error(result.message)
        }
      })
    },
    getGoodsList(){
      let { form } = this;
      let params = {
      }
      this.$http.classType.getClassList(params).then(res=>{
        let result = res.data;
        if(result.code == 200){
          this.tableData = result.data;
        }
      });
    },
    getClassType(){
      this.$http.classType.getClassList().then(res=>{
        let result = res.data;
        if(result.code == 200){
          this.classType = result.data;
        }else{
          this.classType = [];
          this.$message.error("分类获取失败")
        }
      })
    }
  },
  created() {
    this.getGoodsList();
    this.getClassType();
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.classType {
  .tableBox {
    margin-top: 20px;
    color: #000;
  }
  .pageBox{
      text-align: right;
      padding: 10px;
      background: #fff;
  }
}
</style>