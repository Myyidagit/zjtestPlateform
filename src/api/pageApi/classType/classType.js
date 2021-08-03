/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-04-12 16:54:18
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-07-28 14:39:17
 */
import axios from "../../axios"
const obj = {
    getClassList:(params)=>{
        return axios.get("/getClassType",params,true);
    },
    creatClass:(params)=>{
        return axios.post("/createClass",params,true);
    },
}
export default obj