<!--
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-08-03 11:56:36
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-08-03 14:08:24
-->
<template>
  <div class="merchantManager">
    <page-title></page-title>
    <search class="search" @add="resetManage" @searchData="search"></search>
    <div class="typeBtn">
      <el-button type="primary" size="small" class="goodsSearchBtn" @click="addManage">新增</el-button>
      <el-button type="primary" size="small" class="goodsSearchBtn" @click="deleManage">删除</el-button>
    </div>
    <div class="tableBox">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        :highlight-current-row="true"
      >
        <el-table-column prop="name" label="序号" width="180">
        </el-table-column>
        <el-table-column prop="createTime" label="厂商名称" >
        </el-table-column>
        <el-table-column prop="name" label="联系人姓名" >
        </el-table-column>
        <el-table-column prop="phone" label="联系人电话" >
        </el-table-column>
        <el-table-column prop="address" label="厂商地址" >
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button type="text" @click="editData(scope.row)"
              >编辑</el-button
            >
            <el-button type="text" @click="deleteGoods(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="pageBox">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="pageTotal"
          background
          layout="total,prev, pager, next"
        >
        </el-pagination>
      </div>
    </div>
    <adddialog ref="addDialog"></adddialog>
  </div>
</template>

<script>
import search from "./com/search.vue";
import adddialog from "./com/addDialog";
import pageTitle from "@/components/pageTitle.vue"
export default {
  components:{
    pageTitle,
    search,
    adddialog
  },
  props:{},
  data(){
    return {
      tableData:[],
      form:{
        name:'',
      },
      currentPage: 1,
      pageSize: 10,
      pageNum: 1,
      pageTotal: 0,
    }
  },
  watch:{},
  computed:{},
  methods:{
    resetManage(){

    },
    search(){

    },
    handleCurrentChange(page) {
      this.currentPage = page;
    },
    /**新增 */
    addManage(){
      this.$refs.addDialog.showDialog();
    },
    /**删除 */
    deleManage(){

    },
    /**修改 */
    editData(row){

    },
    /**删除每行 */
    deleteGoods(row){

    },

  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.merchantManager {
  .search{
    margin-top: 20px;
  }
  .typeBtn{
    margin:20px 0;
  }
  .tableBox {
    margin-top: 20px;
    color: #000;
  }
  .pageBox {
    text-align: right;
    padding: 10px;
    background: #fff;
  }
}
</style>