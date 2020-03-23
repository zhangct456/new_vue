<template>
  <div class="computer-header">
    <div class="logo-box">
      <!-- <img class="logo" :src="$baseConfig.logoPath" /> -->
      <i class="el-icon-back" @click="menuBoxDisplay=true"></i>
    </div>
    <div class="aside-ctrl-box">
      <i class="aside-ctrl el-icon-s-unfold" @click="BaseLayout.showAside = !BaseLayout.showAside"></i>
    </div>
    <div class="style-change">
      <select v-model="currentStyle" @change="changeStyle">
        <option label="经典" value="classic">经典</option>
        <option label="商务" value="business">商务</option>
        <option label="简约" value="simplicity">简约</option>
      </select>
    </div>
    <ul class="right-ctrl">
      <li>
        <i class="icon el-icon-more"></i>
      </li>
      <li>
        <i class="icon el-icon-question"></i>
      </li>
      <li>
        <i class="icon el-icon-info"></i>
      </li>
      <li>
        <img src="@/assets/close-icon-2.svg" @click="appModule.logout" />
      </li>
    </ul>
    <div class="menu-box" v-show="menuBoxDisplay">
      <div class="bg-color"></div>
      <div class="menu-header">
        <img class="logo" :src="$baseConfig.style.simplicity.logo" />
        <img class="close-icon" src="@/assets/close-icon-2.svg" @click="appModule.logout" />
        <i class="icon el-icon-warning-outline"></i>
      </div>
      <div class="swiper-container">
        <ul class="menu-list swiper-wrapper">
          <li
            class="swiper-slide"
            :class="{'menu-li-active': activeId == menu.id}"
            v-for="(menu, i) of menuList"
            :key="i"
            @click="choiceMenu(menu)"
          >
            <div class="menu-item">
              <i class="icon" :class="menu.icon"></i>
              <p>{{menu.title}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  name: "HeaderComputerSimplicity",
  components: {},
  props: {
    menuList: {
      default: []
    },
    activeId: {
      default: ""
    }
  },
  inject: ["appModule", "screenType", "BaseLayout"],
  data() {
    return {
      openMenuFlag: false,
      currentStyle: "simplicity",
      menuBoxDisplay: false
    };
  },
  computed: {},
  created() {},
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: false,
      loop: false,
      mousewheel: true,
      speed: 1000
    });
  },
  watch: {},
  methods: {
    choiceMenu(menu) {
      this.$emit("change", menu);
      this.menuBoxDisplay = false;
    },

    changeStyle() {
      this.BaseLayout.changeStyle(this.currentStyle);
    }
  }
};
</script>

<style lang="less" scoped>
.computer-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: #5f9ec9;
  height: 40px;
  line-height: 40px;
  padding: 0 40px;
  padding-left: 0px;
  display: flex;
  .logo-box {
    width: 120px;
    padding-left: 10px;
    background-color: #345676;
    i {
      font-size: 20px;
      cursor: pointer;
      color: white;
    }
  }
  .aside-ctrl-box {
    padding: 0 20px;
    padding-left: 40px;
    background-color: #345676;
    .aside-ctrl {
      font-size: 20px;
      cursor: pointer;
      color: white;
    }
  }
  .style-change {
    flex: 10;
    text-align: right;
    padding-right: 20px;
    select {
      width: 50px;
      height: 25px;
      line-height: 30px;
      background: none;
      color: white;
      border: 1px solid white;
      option {
        color: black;
      }
    }
  }
  .right-ctrl {
    flex: 1;
    display: flex;
    color: #05c6d6;
    font-size: 20px;
    list-style: none;
    li {
      float: 1;
      text-align: center;
      cursor: pointer;
      padding: 0 6px;
      color: white;
      img {
        height: 40px;
        padding: 10px 0;
      }
    }
  }
  .menu-box {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #5ebcc4;
    overflow: hidden;
    .bg-color {
      position: absolute;
      top: -100%;
      bottom: -100%;
      left: -100%;
      right: -100%;
      transform: rotate(-45deg);
      background: linear-gradient(to bottom, #366c9b 0%, #5ebcc4 100%);
    }
    .menu-header {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 60px;
      line-height: 60px;
      background-color: rgba(0, 0, 0, 0.3);
      img {
        height: 40px;
        vertical-align: middle;
        margin-left: 40px;
      }
      i {
        float: right;
        margin-right: 20px;
        font-size: 20px;
        color: white;
        line-height: 60px;
      }
      .close-icon {
        float: right;
        height: 60px;
        padding: 20px 0;
        margin: 0 40px 0 0;
      }
    }
    .swiper-container {
      position: absolute;
      top: 60px;
      bottom: 0;
      left: 0;
      // right: 0;
      width: 240px !important;
      overflow: visible !important;
      .swiper-wrapper {
        overflow: visible;
        .swiper-slide {
          width: 240px !important;
          list-style: none;
          padding: 100px 20px;
          .menu-item {
            position: relative;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.2);
            padding-top: 100px;
            box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.3);
            cursor: pointer;
            transition: bottom 0.5s ease;
            i {
              display: block;
              text-align: center;
              font-size: 50px;
              color: white;
            }
            p {
              margin-top: 50px;
              text-align: center;
              font-size: 24px;
              color: white;
            }
          }
          .menu-item:hover {
            bottom: 20px;
          }
        }
        .menu-li-active {
          .menu-item {
            bottom: 20px;
          }
        }
      }
    }
  }
}
.el-icon-weixiu::after {
  content: "\e7c6";
}
</style>