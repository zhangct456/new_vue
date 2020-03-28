<template>
  <div class="ipad-header">
    <div class="menu-header">
      <img class="logo" :src="$baseConfig.style.classic.logo" />
      <div class="right">
        <div class="time">2018/8/8 20:00:00</div>
        <img src="@/assets/close-icon-2.svg" @click="appModule.logout" />
      </div>
    </div>
    <div class="menu-button" v-show="!openMenuFlag" @click="openMenu">
      <i class="el-icon-menu"></i>
    </div>
    <div class="menu-box" v-show="openMenuFlag">
      <ul class="menu-list">
        <li
          :class="{'menu-li-active': firstMenuSelected == i}"
          v-for="(menu, i) of menuList"
          :key="i"
          @click="choiceMenu(menu)"
        >
          <i class="icon" :class="menu.icon"></i>
          <p>{{menu.title}}</p>
        </li>
      </ul>
    </div>
    <div class="menu-box-second" v-show="openMenuFlag && secondSubMenuFlag">
      <ul>
        <li
          :class="{'active': secondMenuSelected == i}"
          v-for="(item, i) of secondSubMenu"
          :key="i"
          @click="handleSecondSubMenu(i)"
        >
          <i class="icon" :class="item.icon"></i>
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>
    <el-dialog :visible="thirdSubMenuFlag" width="620px" :before-close="handleClose">
      <ul class="menu-box-third">
        <li
          :class="{'active': thirdMenuSelected == i}"
          v-for="(item, i) of thirdSubMenu"
          :key="i"
          @click="handleThirdSubMenu(i)"
        >
          <i class="icon" :class="item.icon"></i>
          <p>{{item.title}}</p>
        </li>
      </ul>
    </el-dialog>
  </div>
</template>

<script>
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
      secondSubMenuFlag: false,
      thirdSubMenuFlag: false,
      currentStyle: "classic",
      secondSubMenu: [],
      thirdSubMenu: [],
      firstMenuSelected: -1,
      secondMenuSelected: -1,
      thirdMenuSelected: -1
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.openSecondSubMenu();
    this.decideOpenedSecondSubMenu();
    this.decideOpenedThirdSubMenu();
  },
  watch: {},
  methods: {
    choiceMenu(menu) {
      this.$emit("change", menu);
      this.openSecondSubMenu();
      this.openMenuFlag = false;
    },

    changeStyle() {
      this.BaseLayout.styleType = this.currentStyle;
    },

    openMenu() {
      this.openMenuFlag = true;
    },

    openSecondSubMenu() {
      if (this.menuList.length) {
        this.menuList.forEach((item, i) => {
          if (this.activeId == item.id) {
            this.secondSubMenu = item.children;
            this.firstMenuSelected = i;
            this.secondSubMenuFlag = true;
          }
        });
      }
    },

    handleSecondSubMenu(i) {
      if (this.secondSubMenu[i]) {
        this.thirdSubMenu = this.secondSubMenu[i].children || [];
        this.secondMenuSelected = i;
        this.openThirdSubMenu();
        if (this.secondSubMenu[i].path) {
          this.$router.push(this.secondSubMenu[i].path);
        }
        setTimeout(() => {
          this.thirdSubMenuFlag = false;
          this.openMenuFlag = false;
        }, 3000);
      }
    },

    decideOpenedSecondSubMenu() {
      const path = this.$router.history.current.path;
      this.secondSubMenu.forEach((item, i) => {
        if (item.path && path.indexOf(item.path) != -1) {
          this.secondMenuSelected = i;
          this.thirdSubMenu = item.children || [];
        }
      });
    },

    openThirdSubMenu() {
      if (this.thirdSubMenu.length) {
        this.thirdSubMenuFlag = true;
      }
    },

    handleThirdSubMenu(i) {
      if (this.thirdSubMenu[i].path) {
        this.$router.push(this.thirdSubMenu[i].path);
        this.thirdMenuSelected = i;
        this.thirdSubMenuFlag = false;
        this.openMenuFlag = false;
      }
    },

    decideOpenedThirdSubMenu() {
      const path = this.$router.history.current.path;
      this.thirdSubMenu.forEach((item, i) => {
        if (item.path && path.indexOf(item.path) != -1) {
          this.secondMenuSelected = i;
        }
      });
    },

    // 三级菜单弹框
    handleClose() {
      this.thirdSubMenuFlag = false;
    }
  }
};
</script>

<style lang="less" scoped>
.ipad-header {
  z-index: 10;
  background-color: #15355b;
  .menu-header {
    background-color: #999;
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
        color: white;
        line-height: 60px;
      }
      img {
        float: right;
        height: 30px;
        margin: 15px 20px;
      }
    }
  }
  .menu-button {
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 50px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    color: white;
    background-color: rgba(0, 0, 0, 1);
    z-index: 10;
    font-size: 30px;
    opacity: 0.3;
    cursor: pointer;
  }
  .menu-box {
    position: fixed;
    z-index: 11;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom, #366c9b 0%, #5ebcc4 100%);
    .menu-list {
      list-style: none;
      width: 1020px;
      height: calc(100% - 200px);
      margin: 0 auto;
      padding-top: 30px;
      overflow-y: auto;
      li {
        float: left;
        height: 120px;
        width: 120px;
        margin: 20px 40px;
        padding: 10px;
        i {
          display: block;
          margin: 0 auto;
          width: 60px;
          text-align: center;
          height: 60px;
          line-height: 60px;
          color: white;
          font-size: 30px;
          border-radius: 10px;
          background-color: rgb(111, 172, 230);
        }
        p {
          text-align: center;
          height: 40px;
          line-height: 40px;
          color: white;
        }
        cursor: pointer;
      }
      .menu-li-active {
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
    .menu-list:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .menu-box-second {
    position: absolute;
    bottom: 50px;
    left: calc(50% - 410px);
    width: 820px;
    height: 130px;
    overflow-y: auto;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 12;
    ul {
      list-style: none;
      li {
        float: left;
        height: 80px;
        width: 80px;
        margin: 10px;
        padding-top: 10px;
        border-radius: 5px;
        cursor: pointer;
        i {
          display: block;
          margin: 0 auto;
          font-size: 24px;
          width: 40px;
          text-align: center;
          height: 40px;
          line-height: 40px;
          border-radius: 5px;
          background-color: #6face6;
        }
        p {
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          text-align: center;
        }
      }
      li.active {
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
    ul:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .menu-box-third {
    padding-left: 10px;
    list-style: none;
    color: #6face6;
    li {
      float: left;
      height: 80px;
      width: 80px;
      margin: 10px;
      padding-top: 10px;
      border-radius: 5px;
      cursor: pointer;
      i {
        display: block;
        margin: 0 auto;
        font-size: 24px;
        width: 40px;
        text-align: center;
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        border: 1px solid #6face6;
      }
      p {
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        text-align: center;
      }
    }
    li.active {
      i {
        color: white;
        background-color: #6face6;
      }
    }
  }
  .menu-box-third:after {
    content: "";
    display: block;
    clear: both;
  }
}
.el-icon-weixiu::after {
  content: "\e7c6";
}
</style>