/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-03-31 17:01:16
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-06-11 12:07:22
 */
import axios from "../../axios"
const obj = {
    getFenceList:(params)=>{
        return axios.get("/manager/getFenceList",{params});
    },
    del:(params)=>{
        return axios.get("/manager/deleteFence",{params});
    },
    creFence:(params)=>{
        return axios.post("/manager/createFence",params);
    },
    upFence:(params)=>{
        return axios.post("/manager/upDateFence",params);
    },
    getFenceDetail:(params)=>{
        return axios.get("/manager/getFenceDetail",{params});
    },
    createRule:(params)=>{
        return axios.post("/manager/createRule",params);
    },
    updateRule:(params)=>{
        return axios.post("/manager/updateRule",params);
    },
    delRule:(params)=>{
        return axios.get("/manager/delRule",{params});
    },
    getRule:(params)=>{
        return axios.get("/manager/geofence/getRule",{params});
    },
    ruleBindCar:(params)=>{
        return axios.post("/manager/ruleBindCar",params);
    },
    ruleUnbindCar:(params)=>{
        return axios.post("/manager/ruleUnbindCar",params);
    },
    getRuleBindCar:(params)=>{
        return axios.get("/manager/getRuleBindCar",{params});
    },
    getCarBindRule:(params)=>{
        return axios.get("/manager/getCarBindRule",{params});
    },
    getUnbindCar:(params)=>{
        return axios.get("/manager/getUnbindCar",{params});
    },
    delRuleBindCarAll:(params)=>{
        return axios.post("/manager/delRuleBindCarAll",params);
    },
    getAreadybindCar:(params)=>{
        return axios.get("/manager/geofence/getAreadybindCar",{params});
    },
    fuzzySearch:(params)=>{
        return axios.get("/manager/fuzzySearch",{params});
    },
    cardDetail:(params)=>{
        return axios.get("/manager/position/getcardDetail",{params});
    },
    
    
    
}
export default obj