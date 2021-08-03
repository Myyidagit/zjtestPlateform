<!--
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-04-01 17:11:04
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-07-28 12:21:10
-->
<template>
  <div class="goodsList">
    <search @add="addGoods" @searchData="search"></search>
    <div class="tableBox">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        :highlight-current-row="true"
      >
        <el-table-column prop="name" label="商品名称" width="180">
        </el-table-column>
        <el-table-column prop="createTime" label="上架状态" width="180">
          <template slot-scope="scope">
            <span v-if="scope.row.status == 1">上架</span>
            <span v-else>下架</span>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="上架时间" width="180">
        </el-table-column>
        <el-table-column prop="price" label="商品价格" width="180">
        </el-table-column>
        <el-table-column prop="disCount" label="商品折扣" width="180">
        </el-table-column>
        <el-table-column prop="hotFlag" label="商品标签" width="180">
          <template slot-scope="scope">
            <span v-if="scope.row.hotFlag == 0">无</span>
            <span v-if="scope.row.hotFlag == 1">新品</span>
            <span v-if="scope.row.hotFlag == 2">热卖</span>
          </template>
        </el-table-column>
        <el-table-column prop="goodsDesc" label="商品描述"> </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button type="text" @click="checkData(scope.row)"
              >查看</el-button
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
    <adddialog
      ref="addDialog"
      @upDate="search"
      :classList="classType"
    ></adddialog>
  </div>
</template>

<script>
import search from "./com/search.vue";
import adddialog from "./com/addDialog";
import dayjs from "dayjs";
import TreeUtils from "../../utils/TreeUtils.js"
export default {
  components: { search, adddialog },
  props: {},
  data() {
    return {
      form: {
        name: "",
        status: "0",
      },
      token:"test-token",
      tableData: [],
      currentPage: 1,
      pageSize: 10,
      pageNum: 1,
      pageTotal: 0,
      classType: [],
      formData:{},
      sqlData:[
        {
          describe:"GNSS模块发生故障报警",
          father_id:900,
          id:901,
          
        }
      ],
      restaurants:[
          {
            name:'粤A05965D'
          },
          {
            name:'粤A02637D'
          },
          {
            name:'粤A02891D'
          }
        ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleCurrentChange(page) {
      this.currentPage = page;
      this.getGoodsList();
    },
    addGoods() {
      this.$refs.addDialog.showDialog();
    },
    //查看数据详情
    checkData(obj) {
      this.$refs.addDialog.showDialog(obj._id);
    },
    /**
     * 查询数据
     */
    search(form) {
      if (form) {
        this.form = form;
      }
      console.log("掉没掉");
      this.getGoodsList();
    },
    /**
     * 删除
     */
    deleteGoods(goods) {
      let params = {
        id: goods._id,
      };
      this.$http.goods.deleteGoods(params).then((res) => {
        let result = res.data;
        if (result.code == 200) {
          this.$message.success("删除成功");
          this.getGoodsList();
        } else {
          this.$message.error(result.message);
        }
      });
    },
    getGoodsList() {
      let { form } = this;
      let params = {
        name: form.name,
        status: form.status,
        stime: form.timeRage ? form.timeRage[0] : "",
        etime: form.timeRage ? form.timeRage[1] : "",
        pageSize: this.pageSize,
        pageNum: this.currentPage,
      };
      this.$http.goods.getGoodsList(params).then((res) => {
        let result = res.data;
        if (result.code == 200) {
          result.data.map((item, index) => {
            item.createTime = dayjs(+item.ctime).format("YYYY-MM-DD HH:mm:ss");
          });
          this.tableData = result.data;
          this.pageTotal = result.total;
        }
      });
    },
    getClassType() {
      this.$http.classType.getClassList().then((res) => {
        let result = res.data;
        if (result.code == 200) {
          this.classType = result.data;
        } else {
          this.classType = [];
          this.$message.error("分类获取失败");
        }
      });
    }
  },
  created() {
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.goodsList {
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