<template>
  <div class="detail-goods-info" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="info-top">
      <img :src="goodsInfo.logo" />
      <span>{{goodsInfo.name}}</span>
    </div>
    <div class="info-btm">
      <div class="info-market">
        <div>
          <span>{{goodsInfo.sell}}</span>
          <span>总销量</span>
        </div>
        <div>
          <span>{{goodsInfo.goods}}</span>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="info-score">
        <div v-for="(item,index) in goodsInfo.score" :key="index" class="info-score-item">
          <span>{{item.name}}</span>
          <span :style="activeColor(item.isBetter)">{{item.score}}</span>
          <span class="evaluate" :style="activeBgColor(item.isBetter)">{{item.isBetter ? '高' :'低'}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    activeColor(isBetter) {
      return { color: isBetter ? "red" : "green" };
    },
    activeBgColor(isBetter) {
      return { background: isBetter ? "red" : "green" };
    }
  }
};
</script>

<style lang="scss" scoped>
.detail-goods-info {
    padding-bottom: 30px;
    border-bottom: 5px solid #eee;
  .info {
    &-top {
      padding: 40px 10px;
      img {
        width: 50px;
        height: 50px;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
    &-btm {
      display: flex;
      padding: 0 30px;
      height: 100px;
      align-items: center;
      > div {
        flex: 1;
      }
      .info-market {
        display: flex;
        border-right: 1px solid #ddd;
        height: 80px;
        justify-content: space-evenly;
        align-items: center;
        > div {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
        }
      }
      .info-score {
          margin-top: 10px;
        margin-left: 40px;
        font-size: 14px;
        &-item {
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
          .evaluate {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>