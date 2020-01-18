<template>
  <div>
    <AsideComputer
      v-if="screenType === 'computer' && BaseLayout.styleType === 'classic'"
      :menu-list="menuList"
      :current-menu="currentMenu"
      @choiceMenu="choiceMenu"
    ></AsideComputer>
    <AsideComputerBusiness
      v-if="screenType === 'computer' && BaseLayout.styleType === 'business'"
      :menu-list="menuList"
      :current-menu="currentMenu"
      @choiceMenu="choiceMenu"
    ></AsideComputerBusiness>
    <AsideMobile
      v-if="screenType === 'mobile' && BaseLayout.styleType === 'classic'"
      :menu-list="menuList"
      :current-menu="currentMenu"
      @choiceMenu="choiceMenu"
    ></AsideMobile>
    <AsideMobileBusiness
      v-if="screenType === 'mobile' && BaseLayout.styleType === 'business'"
      :menu-list="menuList"
      :current-menu="currentMenu"
      @choiceMenu="choiceMenu"
    ></AsideMobileBusiness>
  </div>
</template>

<script>
import AsideComputer from "./Aside/AsideComputer";
import AsideComputerBusiness from "./Aside/AsideComputerBusiness";
import AsideMobile from "./Aside/AsideMobile";
import AsideMobileBusiness from "./Aside/AsideMobileBusiness";

export default {
  name: "Aside",
  components: {
    AsideComputer,
    AsideComputerBusiness,
    AsideMobile,
    AsideMobileBusiness
  },
  props: {},
  inject: ["screenType", "BaseLayout"],
  data() {
    return {
      currentMenu: [-1, -1],
      menuList: [
        {
          title: "主机管理",
          path: "",
          children: [
            { title: "设备组", path: "/operation/host-manage/device-group" },
            { title: "设备", path: "" },
            { title: "授权", path: "" }
          ]
        },
        {
          title: "拓扑管理",
          path: "",
          children: [
            { title: "网络拓扑", path: "" },
            { title: "服务器拓扑", path: "" },
            { title: "应用拓扑", path: "" }
          ]
        }
      ]
    };
  },
  computed: {
    isMobile() {
      return this.screenType === "mobile";
    }
  },
  created() {},
  mounted() {},
  methods: {
    choiceMenu(data) {
      this.currentMenu = data;
    }
  }
};
</script>

<style lang="less" scoped>
</style>