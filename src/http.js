import axios from "axios"
import qs from "qs"

axios.defaults.timeout=5000   //响应时间

axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8' //设置响应头

axios.defaults.baseURL=""  //配置接口地址

// post 传参序列化（添加请求拦截器）
axios.interceptors.request.use((config)=>{
    //在发送请求之前做某件事
    console.log(config)
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
    //对响应数据操作
    if(!res.data.success){
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