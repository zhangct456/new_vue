<template>
  <div :class="{'aside-box-mobile': isMobile, 'aside-box-computer': !isMobile}">
    <AsideMenu v-if="!isMobile"></AsideMenu>
    <el-drawer
      v-if="isMobile"
      title="标题"
      :visible.sync="BaseLayout.showAside"
      :with-header="false"
      custom-class="aside-drawer"
      direction="ltr"
    >
      <div class="float-aside">
        <AsideMenu></AsideMenu>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import AsideMenu from "./AsideMenu";

export default {
  name: "Aside",
  components: { AsideMenu },
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
  width: 200px;
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