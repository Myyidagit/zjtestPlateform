/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-03-31 16:01:08
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-08-03 12:26:06
 */
const routes = [
    {
        path:"/",
        name:"Login",
        component: resolve => require(['@/views/login.vue'], resolve),
    },
    {
      path:"/login",
      name:"Login",
      component: resolve => require(['@/views/login.vue'], resolve),
  },
    {
      path: "/home",
      name: "Home",
      component: resolve => require(['@/views/Home.vue'], resolve),
      children:[
        {
            path:"/homePage",
            name:"HomePage",
            component: resolve => require(['@/views/homePage/homePage.vue'], resolve),
        },
        {
            path:"/classType",
            name:"ClassType",
            component: resolve => require(['@/views/classType/classType.vue'], resolve),
        },
        {
          path:"/goodsList",
          name:"GoodsList",
          component: resolve => require(['@/views/goods/goodsList.vue'], resolve),
        },
        {
          path:"/menuList",
          name:"MenuList",
          component: resolve => require(['@/views/menuList/menuList.vue'], resolve),
        },
        {
          path:"/merchantManager",
          name:"MerchantManager",
          component: resolve => require(['@/views/merchantManager/merchantManager.vue'], resolve),
          meta:{
            title:"监测管理/厂商管理"
          }
        },
        {
          path:"/deviceManager",
          name:"DeviceManager",
          component: resolve => require(['@/views/deviceManager/deviceManager.vue'], resolve),
          meta:{
            title:"监测管理/终端管理"
          }
        },
        {
          path:"/taskManager",
          name:"TaskManager",
          component: resolve => require(['@/views/taskManager/taskManager.vue'], resolve),
          meta:{
            title:"监测管理/任务受理"
          }
        },
        {
          path:"/reportManager",
          name:"ReportManager",
          component: resolve => require(['@/views/reportManager/reportManager.vue'], resolve),
          meta:{
            title:"监测管理/生成报告"
          }
        },
        {
          path:"/systemCheck",
          name:"SystemCheck",
          component: resolve => require(['@/views/systemCheck/systemCheck.vue'], resolve),
          meta:{
            title:"日志管理/系统检测"
          }
        },
        {
          path:"/deviceCheck",
          name:"DeviceCheck",
          component: resolve => require(['@/views/deviceCheck/deviceCheck.vue'], resolve),
          meta:{
            title:"日志管理/终端检测"
          }
        },
        
      ]
    }
  ];
export default routes