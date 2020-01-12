<template>
  <div class="header" :class="headerClass">
    <HeaderComputer
      v-if="screenType === 'computer'"
      :menuList="menuList"
      :active-id="currentMenu"
      @change="choiceMenu"
    ></HeaderComputer>
    <HeaderMobile v-if="screenType === 'mobile'" :menuList="menuList" :active-id="currentMenu"></HeaderMobile>
  </div>
</template>

<script>
import HeaderComputer from "./Header/HeaderComputer";
import HeaderMobile from "./Header/HeaderMobile";

export default {
  name: "Header",
  components: { HeaderComputer, HeaderMobile },
  props: {},
  inject: ["screenType", "BaseLayout"],
  data() {
    return {
      openMenuFlag: false,
      currentMenu: "3",
      menuList: [
        { id: "1", title: "个人", icon: "el-icon-user" },
        { id: "2", title: "资产", icon: "el-icon-coin" },
        { id: "3", title: "运维", icon: "el-icon-monitor" },
        { id: "4", title: "日志", icon: "el-icon-notebook-1" },
        { id: "5", title: "审计", icon: "el-icon-notebook-2" },
        { id: "6", title: "报修", icon: "el-icon-weixiu" },
        { id: "7", title: "配置", icon: "el-icon-s-operation" },
        { id: "8", title: "报警", icon: "el-icon-warning-outline" },
        { id: "9", title: "产量", icon: "el-icon-s-data" },
        { id: "10", title: "可视化", icon: "el-icon-picture-outline-round" },
        { id: "11", title: "可视化", icon: "el-icon-picture-outline-round" }
      ]
    };
  },
  computed: {
    headerClass() {
      return this.screenType === "mobile" ? "mobile-header" : "computer-header";
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    choiceMenu(menu) {
      console.log(menu);
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background-color: #15355b;
}
.header.computer-header {
  height: 80px;
  line-height: 80px;
  padding: 0 40px;
}
.header.mobile-header {
  height: 40px;
  line-height: 40px;
}
</style>