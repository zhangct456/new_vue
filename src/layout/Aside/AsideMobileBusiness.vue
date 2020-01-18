<template>
  <div class="aside-box-mobile">
    <el-drawer
      v-if="isMobile"
      title="标题"
      :visible.sync="BaseLayout.showAside"
      :with-header="false"
      custom-class="aside-drawer"
      direction="ltr"
    >
      <div class="float-aside">
        <AsideMenu :menu-list="menuList" :current-menu="currentMenu" @choiceMenu="choiceMenu"></AsideMenu>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import AsideMenu from "./AsideMenu";

export default {
  name: "AsideMobile",
  components: { AsideMenu },
  props: {
    menuList: {
      default: []
    },
    currentMenu: {
      default: [-1, -1]
    }
  },
  inject: ["screenType", "BaseLayout"],
  data() {
    return {};
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
      this.$emit("choiceMenu", data);
    }
  }
};
</script>

<style lang="less" scoped>
.float-aside {
  height: 100%;
  width: 200px;
  background-color: #354050;
}
</style>
<style>
.aside-drawer {
  width: 200px !important;
}
</style>