<template>
  <div class="recommend" v-show="list.length!==0">
    <div class="recommend-item" v-for="(item,index) in list" :key="index">
      <img :src="item.image" />
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang='scss' scoped>
    .recommend{
        margin-top: 15px;
        padding-bottom: 20px;
        border-bottom: 10px solid #eee;
        display: flex;
        &-item{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                width: 80%;
            }
            span{
                margin-top: 5px;
                color: #aaaaaa;
            }
        }
    }
</style>