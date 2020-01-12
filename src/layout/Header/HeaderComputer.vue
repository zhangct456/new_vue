<template>
  <div class="computer-header">
    <div class="logo-box">
      <img class="logo" src="@/assets/logo.jpg" />
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
      <el-select v-model="currentStyle">
        <el-option value="经典">经典</el-option>
        <el-option value="商务">商务</el-option>
        <el-option value="简约">简约</el-option>
      </el-select>
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
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    menuList: {
      default: []
    },
    activeId: {
      default: ""
    }
  },
  inject: ["screenType", "BaseLayout"],
  data() {
    return {
      openMenuFlag: false,
      currentStyle: "经典"
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
    }
  }
};
</script>

<style lang="less" scoped>
.computer-header {
  height: 80px;
  line-height: 80px;
  display: flex;
  .logo-box {
    flex: 2;
    width: 120px;
    .logo {
      height: 40px;
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
    }
  }
}
.el-icon-weixiu::after {
  content: "\e7c6";
}
</style>