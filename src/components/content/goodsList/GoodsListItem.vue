<template>
  <div class="goods-list-item">
    <div class="item-image">
      <img :src="listItem.show.img" />
    </div>
    <div class="item-title">{{listItem.title}}</div>
    <div class="item-btm">
      <span class="price">{{listItem.price}}</span>
      <span class="iconfont icon-shoucang"></span>
      <span>{{listItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    listItem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/iconfont/iconfont.css";
.goods-list-item {
  text-align: center;
  > div {
    width: 90%;
    margin: 0 auto;
  }
  .item {
    &-image {
      img {
        width: 100%;
      }
    }
    &-title{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    &-btm{
        .price{
            color: red;
            margin-right: 10px;
            height: 30px;
            line-height: 30px;
        }
    }
  }
}
</style>