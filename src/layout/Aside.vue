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
    <AsideComputerSimplicity
      v-if="screenType === 'computer' && BaseLayout.styleType === 'simplicity'"
      :menu-list="menuList"
      :current-menu="currentMenu"
      @choiceMenu="choiceMenu"
    ></AsideComputerSimplicity>
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
    <AsideMobileSimplicity
      v-if="screenType === 'mobile' && BaseLayout.styleType === 'simplicity'"
      :menu-list="menuList"
      :current-menu="currentMenu"
      @choiceMenu="choiceMenu"
    ></AsideMobileSimplicity>
  </div>
</template>

<script>
import AsideComputer from "./Aside/AsideComputer";
import AsideComputerBusiness from "./Aside/AsideComputerBusiness";
import AsideComputerSimplicity from "./Aside/AsideComputerSimplicity";
import AsideMobile from "./Aside/AsideMobile";
import AsideMobileBusiness from "./Aside/AsideMobileBusiness";
import AsideMobileSimplicity from "./Aside/AsideMobileSimplicity";

export default {
  name: "Aside",
  components: {
    AsideComputer,
    AsideComputerBusiness,
    AsideComputerSimplicity,
    AsideMobile,
    AsideMobileBusiness,
    AsideMobileSimplicity
  },
  props: {
    menuList: {
      default: []
    }
  },
  inject: ["screenType", "BaseLayout"],
  data() {
    return {
      currentMenu: [-1, -1]
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