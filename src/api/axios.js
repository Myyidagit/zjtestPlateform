/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-03-24 16:33:13
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-07-28 14:38:35
 */
import axios from "axios"
import {
    Loading,
    Notification
} from 'element-ui'
// 创建axios实例
var instance = axios.create({
    // baseURL: '/api',
    // baseURL: 'http://172.16.0.207:18888',
    baseURL: 'http://172.16.0.207:8222',
    // baseURL: 'https://test.cloud.background.adasplus.com',
    
    timeout: 1000 * 12,
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: false, // 默认的
});

// 设置post请求头
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers['AuthToken'] = 'test-token';

/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */ 

let load;
function startLoad(){
    load = Loading.service({
        lock: true,
        text: '加载中，请稍候',
        customClass:"fullLoading",
        spinner: 'el-icon-loading',
        background: 'rgba(255, 255, 255, 0.7)'
    })
}
instance.interceptors.request.use(    
    config => {   
        
        // config.headers.common['X-user-userId'] = getUserID();
        // config.headers.common['X-KeyTech-Session'] = getSessionID();

        return config;    
    },
    error => Promise.error(error)
);
// 响应拦截器
instance.interceptors.response.use(    
    // 请求成功
    res => {
        load&&load.close();
        if(res.status === 200){
            return Promise.resolve(res);  
        }else{
            return Promise.reject(res);
        }
    },
    // 请求失败
    error => {
        load&&load.close();
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围 
            return Promise.reject(response);
        } 
    }
);
const AXIOS_HTTP = {
    get:(url,params,isLoading)=>{
        if(isLoading){
            startLoad();
        }
        return instance.get(url,{params});
    },
    post:(url,params,isLoading)=>{
        if(isLoading){
            startLoad();
        }
        return instance.post(url,params);
    }
}
export default AXIOS_HTTP