<template>
  <div>
    <AsideComputer
      v-if="screenType === 'computer'"
      :menu-list="menuList"
      :current-menu="currentMenu"
    ></AsideComputer>
    <AsideMobile v-if="screenType === 'mobile'" :menu-list="menuList" :current-menu="currentMenu"></AsideMobile>
  </div>
</template>

<script>
import AsideComputer from "./Aside/AsideComputer";
import AsideMobile from "./Aside/AsideMobile";

export default {
  name: "Aside",
  components: { AsideComputer, AsideMobile },
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
            { title: "设备组", path: "" },
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
  watch: {},
  methods: {},
  created() {},
  mounted() {
    window.console.log("aside");
  }
};
</script>

<style lang="less" scoped>
.aside-box-computer {
  position: fixed;
  top: 80px;
  bottom: 0;
  left: 0;
}
.float-aside {
  height: 100%;
  width: 200px;
}
</style>
<style>
.aside-drawer {
  width: 200px !important;
}
</style>