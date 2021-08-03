/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-03-16 15:16:46
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-07-13 19:26:43
 */
import Vue from "vue"
Vue.directive('loadmore', {
  bind(el, binding) {
    var p = 0;
    var t = 0;
    var down = true;
    var selectWrap = el.querySelector('.el-table__body-wrapper')
    selectWrap.addEventListener('scroll', function () {
      //判断是否向下滚动
      p = this.scrollTop;
      // if ( t < p){down=true}else{down=false}
      if (t < p) {
        down = true;
      } else {
        down = false;
      }
      t = p;
      //判断是否到底
      const sign = 10;
      const scrollDistance = this.scrollHeight - this.scrollTop - this.clientHeight
      if (scrollDistance <= sign && down) {
        binding.value('down')
      }
      if(p == 0 && !down){
        binding.value('up')
      }
    })
  }
})
const arr = [1,2,3];
Vue.directive("hasAuth",{
  bind(el, binding){
   
    console.log(binding.value)
    let index = arr.findIndex((x)=> x == binding.value);
    console.log(index)
    if(index<0){
      el.style.display = "none";
    }
  },
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    console.log("插入")
  }
})