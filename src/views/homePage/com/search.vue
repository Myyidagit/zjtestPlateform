<!--
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-04-01 16:33:37
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-04-01 16:56:00
-->
<template>
  <div class="alarmTable_status">
    <el-form>
      <el-form-item label="报警类型：" style="margin-left: 10px">
        <el-button
          style="margin-left: 20px"
          size="medium"
          class="alarmTable_findBtn"
          type="primary"
          @click="researchData()"
          >查询</el-button
        >
        <el-button
          class="alarmTable_findBtnreset"
          size="medium"
          @click="resetInputb()"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    sf() {
      let a = function () {};
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.alarmTable_status {
  width: 100%;
  background: #fff;
  margin-bottom: 10px;
  clear: both;
  border-radius: 4px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  .el-radio-button__inner {
    border: none;
    width: 88px;
    padding: 10px 10px;
  }
}
</style>