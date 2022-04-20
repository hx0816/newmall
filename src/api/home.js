import {request} from './request'

export const getHomeMutilData = () => {
    return request({
        url:"/home/multidata"
    })
}