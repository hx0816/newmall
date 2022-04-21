import {request} from './request'

export const getHomeMutilData = () => {
    return request({
        url:"/home/multidata"
    })
}

export const getGoodsList = (type,page)=>{
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}