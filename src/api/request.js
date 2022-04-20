import axios from 'axios'

export const request = config => {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66',
    })
    instance.interceptors.response.use(res => {
        return res.data
    }, error => {
        return Promise.reject(error).catch(error => {
            if (error.response) {
                // 请求已发出，且服务器响应状态码超出了2xx范围
                switch (error.response.status) {
                    case 400:
                        error.message = '请求错误'
                        break
                    case 401:
                        error.message = '未授权,请登录'
                        break
                    case 403:
                        error.message = '拒绝访问'
                        break
                    case 404:
                        error.message = `请求地址出错${error.response.config.baseURL}${error.response.config.url}`
                        break
                    case 408:
                        error.message = '请求超时'
                        break
                    case 500:
                        error.message = '服务器内部错误'
                        break
                }
                console.log(error.message)
            } else if (error.request) {
                // 请求已发出，但没有接收到任何响应
                // 在浏览器中，error.request 是 XMLHttpRequest 实例
                // 在 node.js 中，error.request 是 http.ClientRequest 实例
                console.log(error.request)
            }
            else {
                // 引发请求错误的错误信息
                console.log('Error ' , error.message)
            }
            console.log(error.config)
            return new Promise(() => { })
        })
    })
    return instance(config)
}

export default request