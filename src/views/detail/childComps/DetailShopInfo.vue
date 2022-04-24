<template>
  <div class="detail-shop-info" v-if="Object.keys(shopInfo).length !== 0">
      <div class="info-image">
          <img :src="shopInfo.image">
      </div>
      <div class="info-title">{{shopInfo.title}}</div>
      <div class="info-price">
          <span class="new-price">{{shopInfo.newPrice}}</span>
          <span class="old-price">{{shopInfo.oldPrice}}</span>
          <span class="desc">{{shopInfo.desc}}</span>
      </div>
      <div class="info-columns">
          <span>{{shopInfo.columns[0]}}</span>
          <span>{{shopInfo.columns[1]}}</span>
          <span>{{shopInfo.services[shopInfo.services.length-1].name}}</span>
      </div>
      <div class="info-services">
          <div v-for="(item,index) in shopInfo.services" :key="index" class="info-services-item">
              <img :src="item.icon">
              <span>{{item.name}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'DetailShopInfo',
    props:{
        shopInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style lang='scss' scoped>
    .detail-shop-info{
        .info{
            &-image{
                height: 300px;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }
            &-title{
                padding: 10px; 
                text-indent: 1em;
                line-height: 20px;
            }
            &-price{
                .new-price{
                    font-size: 30px;
                    color: #FF7981;
                    margin-right: 5px;
                }
                .old-price{
                    font-size: 14px;
                    color: #aaa;
                    text-decoration: line-through;
                }
                .desc{
                    display: inline-block;
                    padding: 0 10px;
                    height: 24px;
                    font-size: 14px;
                    line-height: 24px;
                    background-color: #FF6983;
                    color: #fff;
                    border-radius: 24px;
                    position: relative;
                    top: -10px;
                }
            }
            &-columns{
                display: flex;
                justify-content: space-between;
                padding: 10px 5px;
                margin-top: 20px;
                font-size: 14px;
                color: #aaa;
                border-bottom: 1px solid #eeeeee;
            }
            &-services{
                margin-top: 20px;
                padding: 5px;
                border-bottom: 10px solid #eee;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                &-item{
                    height: 16px;
                    line-height: 16px;
                    margin-bottom: 20px;
                    img{
                        width: 16px;
                        height: 16px;
                    }
                }
            }
        }
    }
</style>