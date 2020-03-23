<template>
  <div class="computer-header">
    <div class="logo-box">
      <img class="logo" :src="$baseConfig.style.classic.logo" />
    </div>
    <div class="aside-ctrl-box">
      <i class="aside-ctrl el-icon-s-unfold" @click="BaseLayout.showAside = !BaseLayout.showAside"></i>
    </div>
    <div class="menu-box">
      <ul class="menu-list">
        <li
          :class="{'menu-li-active': activeId == menu.id}"
          v-for="(menu, i) of menuListView"
          :key="i"
          @click="choiceMenu(menu)"
        >
          <i class="icon" :class="menu.icon"></i>
          {{menu.title}}
        </li>
        <li class="menu-li-more" v-show="menuList.length > 10">
          更多
          <i class="icon el-icon-caret-bottom"></i>
          <ul class="menu-li-more-list">
            <li
              :class="{'menu-li-active': activeId == menu.id}"
              v-for="(menu, i) of menuListMore"
              :key="i"
              @click="choiceMenu(menu)"
            >
              <i class="icon" :class="menu.icon"></i>
              {{menu.title}}
            </li>
          </ul>
        </li>
      </ul>
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
        <img src="@/assets/close-icon-1.svg" @click="appModule.logout" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderComputer",
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
    menuListView() {
      return this.menuList.length > 8
        ? this.menuList.slice(0, 7)
        : this.menuList;
    },
    menuListMore() {
      return this.menuList.slice(7);
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
.computer-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background-color: #15355b;
  height: 80px;
  line-height: 80px;
  padding: 0 40px;
  display: flex;
  .logo-box {
    flex: 2;
    width: 120px;
    .logo {
      // height: 40px;
      width: 100%;
      vertical-align: middle;
    }
  }
  .aside-ctrl-box {
    padding: 0 20px;
    .aside-ctrl {
      font-size: 20px;
      cursor: pointer;
      color: #05c6d6;
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
        white-space: nowrap;
        .icon {
          font-size: 20px;
        }
      }
      li:hover {
        color: white;
        background-color: #337db4;
      }
      .menu-li-active {
        color: white;
        background-color: #337db4;
      }
      .menu-li-more {
        position: relative;
        .menu-li-more-list {
          position: absolute;
          background-color: #15355b;
          list-style: none;
          padding-bottom: 12px;
          display: none;
          li {
            height: auto;
            line-height: 20px;
            padding: 10px 24px;
            text-align: left;
          }
        }
      }
      .menu-li-more:hover {
        color: #05c6d6;
        background-color: #15355b;
        .menu-li-more-list {
          display: block;
        }
      }
    }
  }
  .style-change {
    width: 100px;
    padding-right: 20px;
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
    display: flex;
    color: #05c6d6;
    font-size: 20px;
    list-style: none;
    li {
      float: 1;
      text-align: center;
      cursor: pointer;
      padding: 0 6px;
      img {
        height: 80px;
        padding: 30px 0;
      }
    }
  }
}
.el-icon-weixiu::after {
  content: "\e7c6";
}
</style>