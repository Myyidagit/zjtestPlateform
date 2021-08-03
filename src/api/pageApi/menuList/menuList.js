/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-04-21 17:11:09
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-04-21 17:12:30
 */
import axios from "../../axios"
const obj = {
    creatMenu:(params)=>{
        return axios.post("/creatMenu",params);
    }
}
export default obj