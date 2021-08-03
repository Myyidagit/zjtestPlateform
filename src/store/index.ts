/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-07-27 17:22:26
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-07-28 14:28:26
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // menuList:window.localStorage.menuList?JSON.parse(window.localStorage.menuList):[]
    menuList:[
      {
        "name":"监测管理",
        "path":"/homePage",
        "icon":"el-icon-s-home",
        "children":[
          {"name":"厂商管理","path":"/classType","icon":""},
          {"name":"终端管理","path":"/classType","icon":""},
          {"name":"任务受理","path":"/classType","icon":""},
          {"name":"生成报告","path":"/classType","icon":""}
        ]},
        {"name":"日志管理",
        "path":"/goodsList",
        "icon":"el-icon-platform-eleme",
        "children":[
          {"name":"系统检测","path":"/classType","icon":""},
          {"name":"终端检测","path":"/menuList","icon":""}
        ]},
        {
          "name":"系统管理",
          "path":"/cutPhoto",
          "icon":"el-icon-video-camera-solid",
          "children":[
            {"name":"用户管理","path":"/classType","icon":""},
            {"name":"角色管理","path":"/menuList","icon":""},
            {"name":"菜单管理","path":"/menuList","icon":""}
          ]},
          {
            "name":"数据统计",
            "path":"/goodsList",
            "icon":"el-icon-platform-eleme"
          }
        ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
