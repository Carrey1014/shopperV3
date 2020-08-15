// 该模块专门用于本项目的网络请求
import axios from 'axios';

export function request(config){
    // 1. 新建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000,
    })

    // 2. 拦截器的使用
    // 2.1 请求时拦截
    instance.interceptors.request.use(ins => {
        return ins;
    }, err => {
        console.log(err);
    })

    // 2.2 响应时拦截
    instance.interceptors.response.use(res => {
        return res.data;
    }, err => {
        console.log(err);
    })

    // 3. 正式发送网络请求
    return instance(config);
}