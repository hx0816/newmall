<template>
  <div class="detail-btm-info" v-if="Object.keys(detailInfo).length !== 0">
      <div class="info-desc">
          {{detailInfo.desc}}
      </div>
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <div class="info-image">
          <div v-for="(item,index) in detailInfo.detailImage[0].list" :key="index">
              <img :src="item">
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "DetailBtmInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang='scss' scoped>
    .detail-btm-info{
        margin-top: 40px;
        padding: 0 10px;
        border-bottom: 3px solid #eee;
        .info{
            &-desc{
                text-indent: 1em;
            }
            &-key{
                margin: 20px 0;
            }
            &-image{
                img{
                    width: 100%;
                }
            }
        }
    }
</style>