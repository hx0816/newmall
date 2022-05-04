<template>
    <div class="detail-tool">
        <div class="tool-left">
            <div>
                <span class="iconfont icon-kefu active"></span>
                <span>客服</span>
            </div>
            <div>
                <span class="iconfont icon-dianpu"></span>
                <span>店铺</span>
            </div>
            <div>
                <span class="iconfont icon-shoucang"></span>
                <span>收藏</span>
            </div>
        </div>
        <div class="tool-right">
            <div class="cart">加入购物车</div>
            <div class="buy">购买</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailTool'
}
</script>

<style lang="scss" scoped>
    .detail-tool{
        height: 58px;
        display: flex;
        >div{
            flex: 1;
        }
        .tool{
            &-left{
                display: flex;
                justify-content:space-evenly;
                align-items: center;
                .iconfont{
                    font-size: 26px;
                }
                .active{
                    color: #FF789A;
                }
                >div{
                    display: flex;
                    flex-flow: column;
                    align-items: center;
                }
            }
            &-right{
                display: flex;
                line-height: 58px;
                >div{
                    flex: 1;
                    text-align: center;
                }
                .cart{
                    background-color: #FFDE0F;
                }
                .buy{
                    background-color: #FF789A;
                    color: #fff;
                }
            }
        }
    }
</style>