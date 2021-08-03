<!--
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-04-01 17:38:03
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-04-12 19:07:00
-->
<template>
  <el-dialog
    title="新增分类"
    :close-on-click-modal="false"
    :visible.sync="centerDialogVisible"
    width="400px"
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
        <el-form-item label="分类名称" prop="name">
          <el-input maxlength="4" size="small" v-model="ruleForm.name"></el-input>
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
  },
  data() {
    return {
      centerDialogVisible: false,
      ruleForm: {
        name: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          { min: 2, max: 4, message: "长度在 2 到 4 个字符", trigger: "blur" },
        ]
      },
      goodsId:""
    };
  },
  watch: {},
  computed: {},
  methods: {
    showDialog(item){
        this.centerDialogVisible = true;
        if(item){
          this.getDetail(item);
        }else{
          this.resetForm("ruleForm")
        }
    },
    getDetail(item){
      let params = {
        id:id
      }
      
    },
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          let params = {
              label:this.ruleForm.name
            };
          this.$http.classType.creatClass(params).then(res =>{
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
        name: ""
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