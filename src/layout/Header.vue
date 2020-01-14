<template>
  <div class="header">
    <HeaderComputer
      v-if="screenType === 'computer' && BaseLayout.styleType === 'classic'"
      :menuList="menuList"
      :active-id="currentMenu"
      @change="choiceMenu"
    ></HeaderComputer>
    <HeaderComputerBusiness
      v-if="screenType === 'computer' && BaseLayout.styleType === 'business'"
      :menuList="menuList"
      :active-id="currentMenu"
      @change="choiceMenu"
    ></HeaderComputerBusiness>
    <HeaderMobile
      v-if="screenType === 'mobile' && BaseLayout.styleType === 'classic'"
      :menuList="menuList"
      :active-id="currentMenu"
      @change="choiceMenu"
    ></HeaderMobile>
    <HeaderMobileBusiness
      v-if="screenType === 'mobile' && BaseLayout.styleType === 'business'"
      :menuList="menuList"
      :active-id="currentMenu"
      @change="choiceMenu"
    ></HeaderMobileBusiness>
  </div>
</template>

<script>
import HeaderComputer from "./Header/HeaderComputer";
import HeaderComputerBusiness from "./Header/HeaderComputerBusiness";
import HeaderMobile from "./Header/HeaderMobile";
import HeaderMobileBusiness from "./Header/HeaderMobileBusiness";

export default {
  name: "Header",
  components: {
    HeaderComputer,
    HeaderComputerBusiness,
    HeaderMobile,
    HeaderMobileBusiness
  },
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
  computed: {},
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
</style>