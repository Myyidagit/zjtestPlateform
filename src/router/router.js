/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-03-31 16:01:08
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-07-28 12:22:33
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
        }
      ]
    }
  ];
export default routes