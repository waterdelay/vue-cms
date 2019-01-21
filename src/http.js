import axios from "axios"
import qs from "qs"

axios.defaults.timeout=5000   //响应时间

axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8' //设置响应头

axios.defaults.baseURL="http://www.lovegf.cn:8899/"  //配置接口地址

// post 传参序列化（添加请求拦截器）
axios.interceptors.request.use((config)=>{
    //在发送请求之前做某件事
    // 这里的token必须在函数内部   不然会有缓存
    // const token=localStorage.getItem("token")
    //config 是请求的配置对象，里面有存储的当前请求方法、请求路劲、请求信息
    // console.log(config)
    // 我们可以判断token
    // if(token){
    //     config.headers.Authorization=token
    // }     两个拦截功能  任选其一

    if(config.method==='post'){
        config.data=qs.stringify(config.data)
    }
    return config
},(error)=>{
    console.log("错误的传参")
    return Promise.reject(error)
})

//返回状态判断（添加先响应拦截器）

axios.interceptors.response.use((res)=>{
    // console.log(res)
    //对响应数据操作
    // 这里看后台接口传递的状态码
    if(res.data.status!=0){
        return Promise.reject(res)
    }
    return Promise.resolve(res)
},(error)=>{
    console.log('网络异常')
    return Promise.reject(error)
})

//返回一个Promise（发送的post请求）
export function fetchPost(url,params) {
    return new Promise((resolve,reject)=>{
        axios.post(url,params)
        .then(response=>{
            resolve(response)
        },err=>{
            reject(err)
        })
        .catch((error)=>{
            reject(error)
        })
    })
}
//返回一个Promise（发送的get请求）

export function fetchGet(url,param){
    return  new Promise((resolve,reject)=>{
        axios.get(url,{params:param})
        .then(response=>{
            resolve(response)
        },err=>{
            reject(err)
        })
        .catch((error)=>{
            reject(error)
        })
    })
}

export default {
    fetchPost,
    fetchGet,
}