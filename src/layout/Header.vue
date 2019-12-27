<template>
  <div class="header" :class="headerClass">
    <div @click="BaseLayout.showAside = !BaseLayout.showAside">
      <i class="aside-ctrl el-icon-s-unfold"></i>
    </div>
    <div class="logo-box">
      <!-- <img class="logo" src="@/assets/logo.jpg" /> -->
    </div>
    <div class="current-menu" v-show="isMobile" @click="openMenuFlag=true">
      {{currentMenu}}
      <i class="el-icon-arrow-down"></i>
    </div>
    <div class="menu-box" v-show="!isMobile || openMenuFlag" @click="openMenuFlag=false">
      <ul class="menu-list">
        <li v-for="menu of menuList" :key="menu.title" @click="choiceMenu(menu)">
          <i class="icon" :class="menu.icon"></i>
          {{menu.title}}
        </li>
      </ul>
    </div>
    <ul class="right-ctrl">
      <li>
        <i class="icon el-icon-more" v-show="!isMobile"></i>
      </li>
      <li>
        <i class="icon el-icon-question" v-show="!isMobile"></i>
      </li>
      <li>
        <i class="icon el-icon-info"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  props: {},
  inject: ["screenType", "BaseLayout"],
  data() {
    return {
      openMenuFlag: false,
      currentMenu: "运维",
      menuList: [
        { title: "个人", icon: "el-icon-user" },
        { title: "资产", icon: "el-icon-coin" },
        { title: "运维", icon: "el-icon-monitor" },
        { title: "日志", icon: "el-icon-notebook-1" },
        { title: "审计", icon: "el-icon-notebook-2" },
        { title: "报修", icon: "el-icon-weixiu" },
        { title: "配置", icon: "el-icon-s-operation" },
        { title: "报警", icon: "el-icon-warning-outline" },
        { title: "产量", icon: "el-icon-s-data" },
        { title: "可视化", icon: "el-icon-picture-outline-round" }
      ]
    };
  },
  computed: {
    headerClass() {
      return this.screenType === "mobile" ? "mobile-header" : "computer-header";
    },
    isMobile() {
      return this.screenType === "mobile";
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    choiceMenu(menu) {
      this.currentMenu = menu.title;
      this.openMenuFlag = false;
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  background-color: #15355b;
}
.computer-header {
  height: 80px;
  line-height: 80px;
  padding: 0 48px;
  .aside-ctrl {
    font-size: 20px;
    padding-right: 24px;
    cursor: pointer;
    color: #05c6d6;
  }
  .logo-box {
    flex: 2;
    .logo {
      height: 40px;
      vertical-align: middle;
    }
  }
  .menu-box {
    flex: 20;
    padding: 0 48px;
    .menu-list {
      list-style: none;
      display: flex;
      color: #05c6d6;
      font-size: 18px;
      li {
        flex: 1;
        text-align: center;
        cursor: pointer;
        .icon {
          font-size: 20px;
        }
      }
      li:hover {
        color: white;
        background-color: #337db4;
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
      padding: 0 12px;
    }
  }
}
.mobile-header {
  height: 40px;
  line-height: 40px;
  .aside-ctrl {
    font-size: 20px;
    padding: 0 12px;
    color: #05c6d6;
  }
  .logo-box {
    flex: 1;
    .logo {
      height: 25px;
      vertical-align: middle;
    }
  }
  .current-menu {
    flex: 1;
    padding-left: 10px;
    color: #05c6d6;
    text-align: center;
  }
  .menu-box {
    position: fixed;
    top: 0px;
    bottom: 0;
    width: 100%;
    padding-top: 40px;
    .menu-list {
      list-style: none;
      line-height: 40px;
      width: 100%;
      max-height: 300px;
      overflow-y: auto;
      background-color: #15355b;
      border-top: 1px solid #064ea4;
      li {
        padding: 0 24px;
        color: #05c6d6;
        border-top: 1px solid #064ea4;
      }
    }
  }
  .right-ctrl {
    flex: 1;
    padding: 0 12px;
    color: #05c6d6;
    font-size: 20px;
    list-style: none;
    li {
      float: right;
      text-align: center;
      cursor: pointer;
      padding: 0 6px;
    }
  }
}
.el-icon-weixiu::after {
  content: "\e7c6";
}
</style>