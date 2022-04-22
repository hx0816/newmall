<template>
  <div class="tab-control">
      <span v-for="(item,index) in title" :key="index" :class="{active:showIndex===index}" @click="tabClick(index)">{{item}}</span>
  </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        title:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            showIndex:0
        }
    },
    methods:{
        tabClick(index){
            this.showIndex = index
            this.$emit('tabClick',index)
        }
    }
}
</script>

<style lang="scss" scoped>
.tab-control{
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    height: 44px;
    line-height: 44px;
    span{
        padding: 5px;
    }
    .active{
        color:#EEA7AE;
        border-bottom: 3px solid #EEA7AE;
    }
}
</style>