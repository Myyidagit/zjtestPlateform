/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-07-21 14:34:55
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-07-21 18:16:44
 */
class TreeUtils{
    constructor(list){
        this.list = list;
        this.firstId = 0;
        this.treeList = [];
    }
    /**
     * 生成树结构
     */
    listToTree(id){
        let treeArr = this.list.filter(cur =>{
            let children = this.list.filter(item => item.pid == cur.id);
            if(children.length>0){
                cur.children = children;
            }
            return cur.id == id;
        })
        this.treeList = treeArr;
        return treeArr;
    }
    //给树设置层级level
    get_sonsitem () {
        let lev= 1;
        var forFn = function (arr,lev) {
            for (var i = 0; i < arr.length; i++) {
                var item = arr[i];
                item.level = lev;
                if(item.children && item.children.length>0){
                  forFn(item.children, lev + 1);
                }
            }
        };
        forFn(this.treeList,lev);
    }
//获取树状结构中的某个节点
    get_node = (arr = [],id)=>{
        var newarr = {};
        var sons = function(arr,id_){
          for(let i=0;i<arr.length;i++){
            if(arr[i].id == id_){
              newarr = arr[i];
              break
            }else{
              if(arr[i].children){
                sons(arr[i].children,id_)
              }
            }
          }
        }
        sons(this.treeList,id)
        return newarr;
      }
}
export default TreeUtils;