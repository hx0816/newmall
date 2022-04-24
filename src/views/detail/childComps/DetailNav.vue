<template>
  <nav-bar>
    <template #left>
      <div class="nav-left">
        <img src="~@/assets/img/common/back.svg" @click="backClick" />
      </div>
    </template>
    <template #center>
      <div class="nav-center">
        <span
          v-for="(item,index) in titles"
          :key="index"
          :class="{active:showIndex===index}"
          @click="itemClick(index)"
        >{{item}}</span>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";


export default {
  name: "DetailNav",
  components: {
    NavBar
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      showIndex: 0,

    };
  },
  methods: {
    itemClick(index) {
      if (this.showIndex === index) return;
      this.showIndex = index;
    },
    backClick() {
      this.$router.back();
    }
  },
};
</script>

<style lang='scss' scoped>
.nav {
  background: #fff;
  &-left {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-center {
    display: flex;
    justify-content: space-between;
    .active {
      color: #e38ea1;
    }
  }
}
</style>