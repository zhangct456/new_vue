<template>
  <div class="aside-box-computer" :class="{'display-aside': BaseLayout.showAside}">
    <AsideMenu :menu-list="menuList" :current-menu="currentMenu" @choiceMenu="choiceMenu"></AsideMenu>
  </div>
</template>

<script>
import AsideMenu from "./AsideMenu";

export default {
  name: "AsideComputerSimplicity",
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
.aside-box-computer {
  position: fixed;
  top: 40px;
  bottom: 0;
  left: 0;
  width: 0px;
  transition: 0.5s all ease;
}
.display-aside {
  width: 200px;
  background-color: #345876;
}
</style>