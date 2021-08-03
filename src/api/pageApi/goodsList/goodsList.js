/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-04-06 17:28:00
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-04-21 14:42:17
 */
import axios from "../../axios"
const obj = {
    getGoodsList:(params)=>{
        
        // return axios.get("/getGoodsList",{params});
        return axios.get("/getGoodsListnew",{params});
    },
    createGoods:(params)=>{
        return axios.post("/createGoods",params);
    },
    deleteGoods:(params)=>{
        return axios.post("/deleteGoods",params);
    },
    getDetail:(params)=>{
        return axios.get("/goodsDetail",{params});
    },
}
export default obj