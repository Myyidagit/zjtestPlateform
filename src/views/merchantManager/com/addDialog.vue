<template>
  <div class="myDiv">
      <el-dialog
        title="新增商品"
        :close-on-click-modal="false"
        :visible.sync="centerDialogVisible"
        width="600px"
        center>
        <div>
        <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm">
            <el-form-item label="厂商名称" prop="name">
                <el-input size="small" v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="联系人姓名" prop="name">
                <el-input size="small" v-model.number="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="联系人电话" >
                <el-input size="small" v-model.number="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="厂商地址" >
                <el-input size="small" v-model.number="ruleForm.address"></el-input>
            </el-form-item>
            <el-form-item label="备注">
                <el-input size="small" v-model.number="ruleForm.price"></el-input>
            </el-form-item>
        </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
        <el-button
            style="width: 80px"
            size="small"
            @click="cancel"
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
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
        centerDialogVisible:false,
        ruleForm:{

        },
        rules:{
            name:[{required: true, message: "请输入厂商名称", trigger: "blur"}],
        }
    }
  },
  watch:{},
  computed:{},
  methods:{
    showDialog(){
        this.centerDialogVisible = true
    },
    cancel(){
        this.centerDialogVisible = false
    },
    submitForm(){

    },
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.myDiv{}
</style>