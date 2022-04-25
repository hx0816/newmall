import { request } from './request'

export const getDetailData = (iid) => {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export class ShopInfo {
    constructor(itemInfo, columns, services) {
        this.image = itemInfo.topImages[0]
        this.title = itemInfo.title
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.desc = itemInfo.discountDesc
        this.columns = columns
        this.services = services
    }
}

export class GoodsInfo {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.score = shopInfo.score
        this.goods = shopInfo.cGoods
        this.sell = shopInfo.cSells
    }
}

export class ShopParams{
    constructor(info,rule){
        this.set = info.set
        this.tables = rule.tables[0]
    }
}
