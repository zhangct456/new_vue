<template>
  <div class="mobile-header">
    <div class="logo-box">
      <img class="logo" :src="$baseConfig.style.classic.mobile_logo" />
    </div>
    <div class="aside-ctrl" @click="BaseLayout.showAside = !BaseLayout.showAside">
      <i class="el-icon-s-unfold"></i>
    </div>
    <div class="current-menu" @click="openMenuFlag=true">
      {{currentMenu}}
      <i class="el-icon-arrow-down"></i>
    </div>
    <div class="menu-box" v-show="openMenuFlag" @click="openMenuFlag=false">
      <ul class="menu-list">
        <li
          :class="{'menu-li-active': currentMenu == menu.title}"
          v-for="(menu, i) of menuList"
          :key="i"
          @click="choiceMenu(menu)"
        >
          <i class="icon" :class="menu.icon"></i>
          {{menu.title}}
        </li>
      </ul>
    </div>
    <div class="style-change">
      <img src="@/assets/close-icon-2.svg" @click="appModule.logout" />
      <select v-model="currentStyle" @change="changeStyle">
        <option label="经典" value="classic">经典</option>
        <option label="商务" value="business">商务</option>
        <option label="简约" value="simplicity">简约</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderMobile",
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
      currentStyle: "classic"
    };
  },
  computed: {
    currentMenu() {
      for (let i = 0; i < this.menuList.length; i++) {
        const item = this.menuList[i];
        if (item.id === this.activeId) {
          return item.title;
        }
      }
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    choiceMenu(menu) {
      this.$emit("change", menu);
    },

    changeStyle() {
      this.BaseLayout.changeStyle(this.currentStyle);
    }
  }
};
</script>

<style lang="less" scoped>
.mobile-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background-color: #15355b;
  height: 40px;
  line-height: 40px;
  display: flex;
  z-index: 3;
  .logo-box {
    flex: 1;
    padding: 0 12px;
    width: 200px;
    .logo {
      height: 25px;
      vertical-align: middle;
    }
  }
  .aside-ctrl {
    font-size: 20px;
    padding: 0 12px;
    color: #05c6d6;
    i {
      vertical-align: middle;
    }
  }
  .current-menu {
    flex: 3;
    padding-right: 20px;
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
  .style-change {
    width: 140px;
    padding-right: 20px;
    text-align: right;
    img {
      float: right;
      height: 40px;
      padding: 10px 0;
      margin-left: 10px;
    }
    select {
      width: 50px;
      height: 25px;
      line-height: 30px;
      background: none;
      color: white;
      option {
        color: black;
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
<style lang="less">
.mobile-header .style-change .el-input--small .el-input__inner {
  height: 25px;
}
</style>