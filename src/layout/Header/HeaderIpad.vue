<template>
  <div class="ipad-header">
    <div class="menu-header">
      <img class="logo" :src="$baseConfig.style.classic.logo" />
      <div class="right">
        <div class="time">2018/8/8 20:00:00</div>
        <img src="@/assets/close-icon-3.svg" @click="appModule.logout" />
      </div>
    </div>
    <div class="menu-box" v-show="openMenuFlag">
      <div class="swiper-container">
        <ul class="menu-list swiper-wrapper">
          <li
            class="swiper-slide"
            :class="{'menu-li-active': activeId == menu.id}"
            v-for="(menu, i) of menuList"
            :key="i"
          >
            <div
              class="menu-item"
              :style="{'backgroundColor': colorList[i % colorList.length]}"
              @click="choiceMenu(menu)"
            >
              <i class="icon" :class="menu.icon"></i>
              <p>{{menu.title}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="menu-second-box" :class="{'open': openSecondMenuFlag}">
      <div v-for="(item, i) of secondSubMenu" :key="i">
        <div
          class="second-menu"
          :style="{'backgroundColor': colorList[i % colorList.length]}"
          @click="openSecondSubMenu(i)"
          v-show="openSecondMenuFlag"
        >{{item.title}}</div>
      </div>
      <div class="menu-open-btn" v-show="openSecondMenuFlag" @click="openMenu">
        <i class="el-icon-s-home"></i>
      </div>
      <div class="menu-button" v-show="!openMenuFlag" @click="openSecondMenu">
        <i class="el-icon-menu"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  name: "HeaderIpad",
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
      openSecondMenuFlag: false,
      secondSubMenuFlag: false,
      thirdSubMenuFlag: false,
      currentStyle: "classic",
      firstMenuSelected: -1,
      secondMenuSelected: -1,
      thirdMenuSelected: -1,
      colorList: [
        "#d37069",
        "#41aa80",
        "#f18350",
        "#44cfdb",
        "#a08bff",
        "#5998e3"
      ]
    };
  },
  computed: {
    secondSubMenu() {
      const path = this.$router.history.current.path;
      let secondSubMenu = [];
      this.menuList.forEach((item, i) => {
        if (item.path && path.indexOf(item.path) != -1) {
          this.firstMenuSelected = i;
          secondSubMenu = item.children;
        }
      });
      return secondSubMenu;
    }
  },
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
      this.openMenuFlag = false;
    },

    changeStyle() {
      this.BaseLayout.styleType = this.currentStyle;
    },

    openMenu() {
      this.openMenuFlag = true;
    },

    openSecondMenu() {
      this.openSecondMenuFlag = !this.openSecondMenuFlag;
    },

    openSecondSubMenu(index) {
      if (this.secondSubMenu[index]) {
        this.$router.push(this.secondSubMenu[index].path);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.ipad-header {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: #15355b;
  .menu-header {
    background-color: #eee;
    height: 60px;
    .logo {
      height: 40px;
      margin: 10px 20px;
    }
    .right {
      width: 240px;
      float: right;
      .time {
        float: left;
        color: #666;
        line-height: 60px;
      }
      img {
        float: right;
        height: 30px;
        margin: 15px 20px;
      }
    }
  }
  .menu-box {
    position: fixed;
    z-index: 11;
    top: 60px;
    bottom: 0;
    left: 0;
    right: 0;
    // background: linear-gradient(to bottom, #366c9b 0%, #5ebcc4 100%);
    background-color: #eee;
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
          padding: 130px 20px;
          .menu-item {
            position: relative;
            height: 200px;
            background-color: rgba(255, 255, 255, 0.2);
            padding-top: 50px;
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
              margin-top: 30px;
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
  .menu-second-box {
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 50px;
    max-height: calc(100% - 50px);
    .second-menu {
      width: 50px;
      height: 50px;
      margin-bottom: 20px;
      border-radius: 5px;
      padding: 5px 7px;
      font-size: 14px;
      text-align: center;
      cursor: pointer;
      z-index: 22;
    }
    .menu-open-btn {
      margin-bottom: 20px;
      width: 50px;
      text-align: center;
      height: 50px;
      line-height: 50px;
      border-radius: 50%;
      font-size: 30px;
      background-color: rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  }
  .menu-second-box.open {
    background-color: rgba(255, 255, 255, 0.2);
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }
  .menu-button {
    width: 50px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 10;
    font-size: 30px;
    cursor: pointer;
  }
}
.el-icon-weixiu::after {
  content: "\e7c6";
}
</style>