import axios from 'axios';
import {ElMessage} from "element-plus";

const request = axios.create({
    //请求的基础路径的设置
    baseURL: '/api',
    //超时时间设置，超出就是失败的，单位：毫秒
    timeout: 5000
});


// 添加请求拦截器
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log("请求拦截器")
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    const {data} = response;
    return data;
}, function (error) {
    //处理 http 网络错误
    let status = error.response.status;
    switch (status) {
        case 404:
            ElMessage({
                type: 'error',
                message: error.message
            });
            break;
        case 500 | 501 | 502 | 503 | 504 | 505:
            ElMessage({
                type: 'error',
                message: '服务器挂了'
            });
            break;
        case 401:
            ElMessage({
                type: 'error',
                message: '请求参数有误'
            });
            break;
        default:
            ElMessage({
                type: 'error',
                message: error.message
            });
    }
    return Promise.reject(new Error(error.message))
});

export default request;
