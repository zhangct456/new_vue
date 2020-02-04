<template>
  <div class="computer-header">
    <div class="logo-box">
      <img class="logo" :src="$baseConfig.style.business.logo" />
    </div>
    <div class="aside-ctrl-box">
      <i class="aside-ctrl el-icon-s-unfold" @click="BaseLayout.showAside = !BaseLayout.showAside"></i>
    </div>
    <div class="menu-box">
      <ul class="menu-list">
        <li
          :class="{'menu-li-active': activeId == menu.id}"
          v-for="(menu, i) of menuList"
          :key="i"
          @click="choiceMenu(menu)"
        >
          <i class="icon" :class="menu.icon"></i>
          <p>{{menu.title}}</p>
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
      <!-- <li>
        <i class="icon el-icon-more"></i>
      </li>
      <li>
        <i class="icon el-icon-question"></i>
      </li>-->
      <li>
        <i class="icon el-icon-info"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderComputerBusiness",
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
      currentStyle: "business"
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    choiceMenu(menu) {
      this.$emit("change", menu);
    },

    changeStyle() {
      this.BaseLayout.styleType = this.currentStyle;
    }
  }
};
</script>

<style lang="less" scoped>
.computer-header {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 60px;
  z-index: 2;
  background-color: #354050;
  overflow: hidden;
  .logo-box {
    height: 80px;
    padding: 20px 10px;
    .logo {
      width: 40px;
      height: 40px;
      vertical-align: middle;
    }
  }
  .aside-ctrl-box {
    height: 40px;
    text-align: center;
    .aside-ctrl {
      font-size: 30px;
      cursor: pointer;
      color: white;
    }
  }
  .menu-box {
    width: 70px;
    height: calc(100% - 240px);
    overflow-x: hidden;
    overflow-y: scroll;
    .menu-list {
      width: 70px;
      list-style: none;
      color: #05c6d6;
      font-size: 18px;
      li {
        color: white;
        width: 60px;
        padding: 10px 0;
        font-size: 16px;
        text-align: center;
        cursor: pointer;
        white-space: nowrap;
        .icon {
          font-size: 24px;
        }
      }
      li:hover {
        color: white;
        background-color: #2c333f;
      }
    }
  }
  .style-change {
    line-height: 50px;
    width: 80px;
    padding-left: 5px;
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
    color: white;
    font-size: 20px;
    list-style: none;
    li {
      line-height: 60px;
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