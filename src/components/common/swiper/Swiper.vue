<template>
  <div class="swiper" v-if="imgL !== 0">
    <div class="container" ref="container">
      <div class="content" ref="content">
        <img
          :src="item.image"
          v-for="(item,index) in imgList"
          :key="index"
          ref="imgs"
        />
      </div>
    </div>
    <ol v-if="isShowPage">
      <li
        v-for="(item,index) in imgL"
        :key="index"
        :style="{color:activeColor}"
        :class="{active:index===showIndex}"
      >
        <span v-if="pageNumber">{{index+1}}</span>
      </li>
    </ol>
    <span
      class="prev"
      v-if="isShowControl"
      :style="{backgroundColor:controlBgColor,color:controlColor}"
      @click="prevClick"
    >&lt;</span>
    <span
      class="next"
      v-if="isShowControl"
      :style="{backgroundColor:controlBgColor,color:controlColor}"
      @click="nextClick"
    >&gt;</span>
  </div>
</template>

<script>
import { animate } from "@/common/utils";

export default {
  name: "Swiper",
  data() {
    return {
      showIndex: 0,
      imgIndex: 0,
      timer: null
    };
  },
  props: {
    imgList: {
      type: Array,
      default() {
        return [];
      }
    },
    // 是否显示prev,next
    isShowControl: {
      type: Boolean,
      default: false
    },
    // prev,next颜色
    controlColor: {
      type: String,
      default: "#666"
    },
    // prev,next背景颜色
    controlBgColor: {
      type: String,
      default: "pink"
    },
    // 是否显示分页器
    isShowPage: {
      type: Boolean,
      default: false
    },
    // 是否显示分页器数字
    pageNumber: {
      type: Boolean,
      default: false
    },
    // 当前分页的颜色
    activeColor: {
      type: String,
      default: "#666"
    },
    // 轮播图滚动时间间隔
    time: {
      type: Number,
      default: 2000
    }
  },
  computed: {
    imgL() {
      return this.imgList.length;
    },
    firstImg() {
      return this.$refs.imgs[0];
    },
    imgW() {
      return this.firstImg.width;
    },
    container() {
      return this.$refs.container;
    }
  },
  methods: {
    //初始化
    init() {
      this.timer = setInterval(() => {
        this.moveNext();
      }, this.time);
    },
    // 播放下一张
    moveNext() {
      this.showIndex++;
      this.imgIndex++;
      if (this.showIndex >= this.imgL) {
        this.showIndex = 0;
      }
      if (this.imgIndex >= this.imgL + 1) {
        this.imgIndex = 1;
        this.container.scrollLeft = 0;
      }
      animate(this.container, {
        scrollLeft: this.imgW * this.imgIndex
      });
    },
    // 点击next
    nextClick() {
      clearInterval(this.timer);
      this.moveNext();
      this.init();
    },
    // 点击prev
    prevClick() {
      clearInterval(this.timer);
      this.imgIndex--;
      this.showIndex--;
      if (this.showIndex < 0) {
        this.showIndex = this.imgL - 1;
      }
      if (this.imgIndex < 0) {
        this.imgIndex = this.imgL - 1;
        this.container.scrollLeft = (this.imgIndex + 1) * this.imgW;
      }
      animate(this.container, {
        scrollLeft: this.imgIndex * this.imgW
      });
      this.init();
    },
  },
  created() {
    this.init();
  },
  updated() {
    this.$refs.content.appendChild(this.firstImg.cloneNode(true));
  },
  beforeDestroy(){
    clearInterval(this.timer)
  }
};
</script>

<style lang='scss' scoped>
.swiper {
  position: relative;
  .container {
    width: 100%;
    overflow: auto;
  }
  .content {
    display: flex;
    img {
      width: 100%;
      height: 200px;
    }
  }
  ol {
    position: absolute;
    padding: 0;
    margin: 0;
    bottom: 10px;
    left: 30px;
    list-style: none;
    li {
      width: 16px;
      height: 16px;
      line-height: 16px;
      text-align: center;
      border-radius: 50%;
      background-color: #ffffff;
      display: inline-block;
      margin-right: 5px;
      font-size: 12px;
      &.active {
        background-color: pink;
      }
    }
  }
  .prev,
  .next {
    position: absolute;
    width: 30px;
    height: 30px;
    line-height: 30px;
    top: 50%;
    margin-top: -15px;
    text-align: center;
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }
}
</style>