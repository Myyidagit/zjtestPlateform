<!--
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-03-12 11:58:47
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-07-27 19:02:42
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang='scss'>
html,body,#app{
  height: 100%;
  width: 100%;
}
.el-table td, .el-table th{
  padding: 8px 0 !important;
}
/* .fullLoading{
  font-size: 18px;
} */
.fullLoading .el-loading-spinner i{
  font-size: 26px;
}
.el-table .cell{
  color: #000 !important;
}
.m-button{
  background-color:#6ad3d6 !important;
  border-color: #6ad3d6 !important;
  &:hover{
    opacity: 0.6;
  }
}
</style>
