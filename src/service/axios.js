import axios from 'axios'

export default function request(option) {
    return new Promise((resolve, reject) => {

        //1.创建axios实例
        const instance = axios.create({
            baseURL: 'http://123.207.32.32:9001/'
        })

        //2.配置请求拦截和响应拦截
        instance.interceptors.request.use(config => {
            return config
        }, err => {
            return err
        })

        instance.interceptors.response.use(res => {
            return res.data
        }, err => {
            return err
        })

        //3.传入对象进行网络请求
        instance(option).then(res => {
            resolve(res)
        }).catch(e => {
            reject(e)
        })
    })
}