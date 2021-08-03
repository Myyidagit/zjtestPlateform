<!--
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-04-01 17:38:03
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-04-21 15:46:12
-->
<template>
  <el-dialog
    title="新增商品"
    :close-on-click-modal="false"
    :visible.sync="centerDialogVisible"
    width="600px"
    center
  >
    <div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="商品名称" prop="name">
          <el-input size="small" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="price">
          <el-input size="small" v-model.number="ruleForm.price"></el-input>
        </el-form-item>
        <el-form-item label="所属分类" prop="classType">
          <el-select  size="small" v-model="ruleForm.classType" placeholder="请选择所属分类">
            <el-option v-for="(item,index) in classList" :key="index" :label="item.label" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="上架下架" prop="status">
          <el-switch v-model="ruleForm.status" :active-value="1"
    :inactive-value="2"></el-switch>
        </el-form-item>
        <el-form-item label="商品标签">
          <!-- <el-checkbox-group v-model="ruleForm.tag">
            <el-checkbox label="新" name="type"></el-checkbox>
            <el-checkbox label="热" name="type"></el-checkbox>
          </el-checkbox-group> -->
          <el-radio-group v-model="ruleForm.hotFlag">
            <el-radio :label="0">无</el-radio>
            <el-radio :label="1">新</el-radio>
            <el-radio :label="2">热</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="商品折扣">
          <el-input size="small" v-model.number="ruleForm.disCount"></el-input>
        </el-form-item>
        <el-form-item label="商品介绍" prop="goodsDesc">
          <el-input type="textarea" v-model="ruleForm.goodsDesc"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button
        style="width: 80px"
        size="small"
        @click="recel"
        >取 消</el-button
      >
      <el-button
        style="width: 80px"
        size="small"
        type="primary"
        @click="submitForm"
        >确 定</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
export default {
  components: {},
  props: {
    classList:{
      type:Array,
      default:()=>{
        return []
      }
    }
  },
  data() {
    return {
      centerDialogVisible: false,
      ruleForm: {
        name: "",
        classType: "",
        status: 1,
        hotFlag: 0,
        price:'',
        disCount: "",
        goodsDesc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        price: [
          { required: true, message: "请输入商品价格", trigger: "blur" },
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        classType: [
          { required: true, message: "请选择商品分类", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        tag: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        goodsDesc: [{ required: true, message: "请填写商品介绍", trigger: "blur" }],
      },
      goodsId:""
    };
  },
  watch: {},
  computed: {},
  methods: {
    showDialog(id){
        this.centerDialogVisible = true;
        if(id){
          this.getDetail(id);
        }else{
          this.resetForm("ruleForm")
        }
    },
    getDetail(id){
      let params = {
        id:id
      }
      this.$http.goods.getDetail(params).then(res =>{
        console.log(res)
        let result = res.data;
        if(result.code == 200){
          this.ruleForm = result.data;
        }else{
          this.$message.error(result.message)
        }
      })
    },
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          let params = this.ruleForm
          params.cTime = Date.now()+'';
          console.log(params)
          this.$http.goods.createGoods(params).then(res =>{
            let result = res.data;
            if(result.code == 200){
              this.$message.success("添加成功");
              this.centerDialogVisible = false
            }else{
              this.$message.error(result.message)
            }
          })
          // this.resetForm(formName);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    recel(){
        this.resetForm("ruleForm");
        this.centerDialogVisible = false;
    },
    resetForm(formName) {
      try{
        this.$refs[formName].resetFields();
      }catch(e){}
      this.ruleForm ={
        name: "",
        classType: "",
        status: 1,
        hotFlag: 0,
        price:'',
        disCount: "",
        goodsDesc: "",
      }
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.myDiv {
}
</style>