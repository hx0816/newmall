<template>
  <div class="goods-list-item" @click="itemClick">
    <div class="item-image">
      <img :src="showImg" />
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
  },
  inject:{
    isClick:{
      type:Boolean,
      default:true
    }
  },
  methods: {
    itemClick() {
      this.isClick && this.$router.push("/detail/" + this.listItem.iid);
    }
  },
  computed: {
    showImg() {
      return this.listItem.show ? this.listItem.show.img : this.listItem.image;
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
    &-title {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    &-btm {
      .price {
        color: red;
        margin-right: 10px;
        height: 30px;
        line-height: 30px;
      }
    }
  }
}
</style>