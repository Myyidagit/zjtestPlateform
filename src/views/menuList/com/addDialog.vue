<!--
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-04-01 17:38:03
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-04-21 18:19:13
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
        <el-form-item label="导航名称" prop="name">
          <el-input maxlength="4" size="small" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="路由地址" prop="path">
          <el-input placeholder="例：/homepage" size="small" v-model="ruleForm.path"></el-input>
        </el-form-item>
        <el-form-item label="路由图标">
          <el-input placeholder="例：el-icon-video-camera-solid"  maxlength="4" size="small" v-model="ruleForm.icon"></el-input>
        </el-form-item>
        <el-form-item label="所属路由">
          <el-select v-model="ruleForm.pid" size="small" placeholder="不选默认一级">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
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
        name: "",
        path:"",
        pid:"",
        icon:""
      },
      rules: {
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          { min: 2, max: 4, message: "长度在 2 到 4 个字符", trigger: "blur" },
        ],
        path:[
          { required: true, message: "请输入地址", trigger: "blur" }
        ]
      },
      goodsId:"",
      options:[
        {
          value:"",
          label:"不选"
        },
        {
          value:1,
          label:"系统管理"
        }
      ]
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
              ...this.ruleForm
            };
          this.$http.menuList.creatMenu(params).then(res =>{
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