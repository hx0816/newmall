<template>
  <div class="goods-list">
      <goods-list-item v-for="(item,index) in goodsList" :key="index" :listItem="item" class="goods-list-item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
    name:'GoodsList',
    components:{
        GoodsListItem
    },
    props:{
        goodsList:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style lang='scss' scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        &-item{
            width: 50%;
        }
    }
</style>