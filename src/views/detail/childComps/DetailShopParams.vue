<template>
  <div class="detail-shop-params">
    <div class="params-tables">
      <div v-for="(item,index) in shopParams.tables" :key="index" class="tables-item">
        <span>{{item[0]}}</span>
        <span>{{item[1]}}</span>
        <span>{{item[2]}}</span>
        <span>{{item[3]}}</span>
      </div>
    </div>
    <div class="params-set">
      <div class="set-item" v-for="(item,index) in shopParams.set" :key="index">
        <span class="item-key">{{item.key}}</span>
        <span class="item-value">{{item.value}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopParams",
  props: {
    shopParams: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.detail-shop-params {
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  .tables-item {
    display: flex;
    justify-content: space-between;
    height: 30px;
    line-height: 30px;

    border-bottom: 1px solid #eee;
    span {
      &:first-of-type {
        text-align: left;
      }
      text-align: center;
      flex: 1;
    }
  }
  .params-set {
    margin-top: 20px;
    .set-item {
      display: flex;
      align-items: center;
      min-height: 40px;
      border-bottom: 1px solid #eee;
      .item-key{
          width: 120px
      }
      .item-value{
          flex: 1;
          color: #F49EAE;
      }
    }
  }
}
</style>