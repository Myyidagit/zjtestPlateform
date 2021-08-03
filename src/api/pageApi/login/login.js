/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-03-31 17:01:16
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-04-14 15:16:28
 */
import axios from "../../axios"
const obj = {
    login:(params)=>{
        return axios.post("/login",params);
    }
}
export default obj